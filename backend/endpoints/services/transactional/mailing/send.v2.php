<?php

require_once dirname(__DIR__, 4) . '/config/bootstrap.php';
require_once 'libs/PHPMailer/src/Exception.php';
require_once 'libs/PHPMailer/src/PHPMailer.php';
require_once 'libs/PHPMailer/src/SMTP.php';

$subject = 'Aviónica Saltamontes - Notificación';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    return [
        "status"  => "fail",
        "message" => "Bad request"
    ];
}

function notify_service(string $source): array
{
    if (!NOTIFY_SERVICE_ENABLED) {
        return ['ok' => true, 'skipped' => true];
    }

    if (NOTIFY_SERVICE_URL === '' || NOTIFY_SERVICE_TOKEN === '') {
        error_log('Notification service is enabled but not fully configured.');
        return ['ok' => false, 'http' => 0, 'error' => 'Notification service configuration error.'];
    }

    $post = [
        'task'   => 'notify',
        'source' => $source,
    ];

    $ch = curl_init(NOTIFY_SERVICE_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);

    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));

    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . NOTIFY_SERVICE_TOKEN,
        'Content-Type: application/x-www-form-urlencoded',
    ]);

    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);

    $resp = curl_exec($ch);
    if ($resp === false) {
        $err = curl_error($ch);
        curl_close($ch);
        return ['ok' => false, 'http' => 0, 'error' => $err];
    }

    $http = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $json = json_decode($resp, true);
    return ['ok' => ($http >= 200 && $http < 300), 'http' => $http, 'response' => $json ?? $resp];
}


/**
 * Reads JSON from form-data or the raw request body.
 */
function get_vars_from_request(): array
{
    if (isset($_POST['data'])) {
        $json = (string)$_POST['data'];
    } else {
        $json = file_get_contents('php://input');
        if ($json === false) {
            $json = '';
        }
    }
    
    if ($json === '') {
        return [];
    }

    $data = json_decode($json, true);
    if (json_last_error() > 0) {
        error_log('Invalid request JSON: ' . json_last_error_msg());
        return [];
    }

    if (!is_array($data)) {
        return [];
    }
    
    return $data;
}

/**
 * Processes conditional template blocks.
 */
function process_conditionals(string $html, array $vars): string
{
    return preg_replace_callback(
        '/\{\{#if\s+([a-zA-Z0-9_]+)\}\}(.*?)\{\{\/if\}\}/s',
        function ($m) use ($vars) {
            $name  = $m[1];
            $inner = $m[2];

            if (!empty($vars[$name])) {
                return $inner;
            }

            return '';
        },
        $html
    );
}

/**
 * Processes repeated template blocks.
 */
function process_each_blocks(string $html, array $vars): string
{
    return preg_replace_callback(
        '/\{\{#each\s+([a-zA-Z0-9_]+)\}\}(.*?)\{\{\/each\}\}/s',
        function ($m) use ($vars) {
            $name  = $m[1];
            $inner = $m[2];

            if (empty($vars[$name]) || !is_array($vars[$name])) {
                return '';
            }

            $result = '';

            foreach ($vars[$name] as $row) {
                $rowHtml = $inner;

                if (is_array($row)) {
                    foreach ($row as $key => $value) {
                        $safeValue  = htmlspecialchars(
                            (string)$value,
                            ENT_QUOTES | ENT_SUBSTITUTE,
                            'UTF-8'
                        );
                        $placeholder = '{{' . $key . '}}';
                        $rowHtml     = str_replace($placeholder, $safeValue, $rowHtml);
                    }
                }

                $result .= $rowHtml;
            }

            return $result;
        },
        $html
    );
}

/**
 * Renders an HTML template with escaped values.
 */
function render_template(string $templatePath, array $vars): string
{
    if (!is_file($templatePath)) {
        return '';
    }

    ob_start();
    include $templatePath;
    $html = ob_get_clean();
    if ($html === false) {
        $html = '';
    }

    if ($html === '') {
        return '';
    }

    $html = process_each_blocks($html, $vars);

    $html = process_conditionals($html, $vars);

    foreach ($vars as $key => $value) {
        if (is_array($value)) {
            continue;
        }

        $safeValue = htmlspecialchars(
            (string)$value,
            ENT_QUOTES | ENT_SUBSTITUTE,
            'UTF-8'
        );
        $placeholder = '{{' . $key . '}}';
        $html        = str_replace($placeholder, $safeValue, $html);
    }

    return $html;
}

/**
 * Sends an HTML email using the configured SMTP provider.
 */
function send_html_mail(string $to, string $subject, string $html): bool
{
    if ($html === '') {
        return false;
    }

    $mail = new PHPMailer\PHPMailer\PHPMailer(false);
    $mail->CharSet = 'UTF-8';

    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->Port       = SMTP_PORT;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE === 'ssl'
        ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;

    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress($to);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $html;
    $mail->AltBody = strip_tags($html);

    if (!$mail->send()) {
        error_log('PHPMailer error: ' . $mail->ErrorInfo);
        return false;
    }

    return true;
}


$tpl = isset($_GET['tpl']) ? (string)$_GET['tpl'] : '';

if ($tpl !== 'contact' && $tpl !== 'quote') {
    return [
        'success' => false,
        'message' => 'Plantilla inválida.'
    ];
}

if ($tpl === 'quote') {
    $subject = 'Aviónica Saltamontes - Confirmación de solicitud de cotización de vuelo';
} elseif ($tpl === 'contact') {
    $subject = 'Aviónica Saltamontes - Confirmación de contacto';
}
$vars = get_vars_from_request();
$vars['mail_banner_primary_url'] = app_env('MAIL_BANNER_PRIMARY_URL', '');
$vars['mail_banner_secondary_url'] = app_env('MAIL_BANNER_SECONDARY_URL', '');

$recaptchaError = app_validate_request_recaptcha($vars);
if ($recaptchaError !== null) {
    return $recaptchaError;
}

if (isset($vars['type'])) {
    $type               = (string)$vars['type'];
    $vars['trip_type']  = $type;
    $lower              = strtolower($type);
    $vars['is_sencillo']     = ($lower === 'sencillo');
    $vars['is_redondo']      = ($lower === 'redondo');
    $vars['is_multidestino'] = ($lower === 'multidestino');
    $vars['is_experiencia']  = ($lower === 'experiencia');
}

if (!isset($vars['trip']) || !is_array($vars['trip'])) {
    $vars['trip'] = [];
}

if (isset($vars['trip_type'])) {
    $tripType = strtolower((string)$vars['trip_type']);

    if ($tripType === 'multidestino' && !empty($vars['trip'])) {
        foreach ($vars['trip'] as $idx => $item) {
            if (!is_array($item)) {
                continue;
            }

            $origen       = isset($item['origen']) ? (string)$item['origen'] : '';
            $destino      = isset($item['destino']) ? (string)$item['destino'] : '';
            $fechaPartida = isset($item['fecha_partida']) ? (string)$item['fecha_partida'] : '';

            if ($origen === '' && $destino === '' && $fechaPartida === '') {
                continue;
            }

            $location = $origen;
            if ($destino !== '') {
                if ($location !== '') {
                    $location .= ' - ';
                }
                $location .= $destino;
            }

            $vars['trip'][$idx]['location'] = $location;
            $vars['trip'][$idx]['date']     = $fechaPartida;
        }
    }

    if (empty($vars['trip']) && ($tripType === 'sencillo' || $tripType === 'redondo' || $tripType === 'experiencia')) {
        $origen       = isset($vars['origen']) ? (string)$vars['origen'] : '';
        $destino      = isset($vars['destino']) ? (string)$vars['destino'] : '';
        $fechaPartida = isset($vars['fecha_partida']) ? (string)$vars['fecha_partida'] : '';
        $fechaRegreso = isset($vars['fecha_regreso']) ? (string)$vars['fecha_regreso'] : '';

        if ($tripType === 'sencillo' || $tripType === 'experiencia') {
            if ($origen !== '' || $destino !== '' || $fechaPartida !== '') {
                $location = $origen;
                if ($destino !== '') {
                    if ($location !== '') {
                        $location .= ' - ';
                    }
                    $location .= $destino;
                }

                $vars['trip'][] = [
                    'location' => $location,
                    'date'     => $fechaPartida
                ];
            }
        }

        if ($tripType === 'redondo') {
            if ($origen !== '' || $destino !== '' || $fechaPartida !== '') {
                $location = $origen;
                if ($destino !== '') {
                    if ($location !== '') {
                        $location .= ' - ';
                    }
                    $location .= $destino;
                }

                $vars['trip'][] = [
                    'location' => $location,
                    'date'     => $fechaPartida
                ];
            }

            if ($destino !== '' || $origen !== '' || $fechaRegreso !== '') {
                $location = $destino;
                if ($origen !== '') {
                    if ($location !== '') {
                        $location .= ' - ';
                    }
                    $location .= $origen;
                }

                $vars['trip'][] = [
                    'location' => $location,
                    'date'     => $fechaRegreso
                ];
            }
        }
    }
}

if(!isset($vars['lang']) || ($vars['lang'] != 'es' && $vars['lang'] != 'en'))
{
    http_response_code(400);
    return [
        'success'       => false,
        'admin_success' => false,
        'message'       => 'Idioma no admitido.'
    ];
}
$lan = '';
if($vars['lang'] == 'es')$lan= 'es';
if($vars['lang'] == 'en')$lan= 'en';
$templatePath = TEMPLATE_DIR . '/' . $tpl . '-' . $lan . '.html';

$to = '';
if (isset($vars['email'])) {
    $to = (string)$vars['email'];
}

if ($to === '') {
    http_response_code(400);
    return [
        'success'       => false,
        'admin_success' => false,
        'message'       => 'Correo de destinatario vacío.'
    ];
}

$html = render_template($templatePath, $vars);

$ok = send_html_mail($to, $subject, $html);

$adminOk = false;
if ($ok && strcasecmp($to, ADMIN_EMAIL) !== 0) {
    $adminPrefix = '<p style="font-size:13px;color:#666;margin:0 0 10px 0;">Esta es una copia del correo electrónico enviado al cliente.</p>';
    $adminHtml   = $adminPrefix . $html;

    $adminSubject = $subject . ' (copia para administrador)';
    
    $adminOk = send_html_mail(ADMIN_EMAIL, $adminSubject, $adminHtml);
    if (ADMIN_EMAIL_EXTRA !== '') {
        send_html_mail(ADMIN_EMAIL_EXTRA, $adminSubject, $adminHtml);
    }
}

if ($ok) {
    $notify = notify_service($tpl);
}

http_response_code($ok ? 200 : 400);
return [
    'success'       => $ok,
    'admin_success' => $adminOk
];
