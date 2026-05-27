<?php

declare(strict_types=1);

function app_load_env(string $path): void
{
    if (!is_file($path) || !is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        $separator = strpos($line, '=');
        if ($separator === false) {
            continue;
        }

        $key = trim(substr($line, 0, $separator));
        $value = trim(substr($line, $separator + 1));

        if ($key === '') {
            continue;
        }

        if (
            (str_starts_with($value, '"') && str_ends_with($value, '"')) ||
            (str_starts_with($value, "'") && str_ends_with($value, "'"))
        ) {
            $value = substr($value, 1, -1);
        }

        $_ENV[$key] = $value;
        putenv($key . '=' . $value);
    }
}

function app_env(string $key, ?string $default = null): ?string
{
    $value = $_ENV[$key] ?? getenv($key);
    if ($value === false || $value === '') {
        return $default;
    }

    return (string)$value;
}

function app_env_bool(string $key, bool $default = false): bool
{
    $value = app_env($key);
    if ($value === null) {
        return $default;
    }

    return in_array(strtolower($value), ['1', 'true', 'yes', 'on'], true);
}

function app_env_float(string $key, float $default): float
{
    $value = app_env($key);
    if ($value === null || !is_numeric($value)) {
        return $default;
    }

    return (float)$value;
}

function app_env_int(string $key, int $default): int
{
    $value = app_env($key);
    if ($value === null || !is_numeric($value)) {
        return $default;
    }

    return (int)$value;
}

function app_required_env(string $key): string
{
    $value = app_env($key);
    if ($value === null) {
        throw new RuntimeException('Missing required environment variable: ' . $key);
    }

    return $value;
}

function app_config_error_response(string $message = 'Service configuration error.'): array
{
    error_log($message);
    http_response_code(500);

    return [
        'success' => false,
        'message' => 'Service unavailable.'
    ];
}

function app_public_error_response(string $message, int $statusCode = 400): array
{
    http_response_code($statusCode);

    return [
        'success' => false,
        'admin_success' => false,
        'message' => $message
    ];
}

function app_allowed_origins(): array
{
    $origins = app_env('CORS_ALLOWED_ORIGINS', '');
    if ($origins === '') {
        return [];
    }

    return array_values(array_filter(array_map('trim', explode(',', $origins))));
}

function app_origin_is_allowed(string $origin): bool
{
    if ($origin === '') {
        return false;
    }

    foreach (app_allowed_origins() as $allowedOrigin) {
        if ($origin === $allowedOrigin) {
            return true;
        }

        if (str_ends_with($allowedOrigin, '*') && str_starts_with($origin, rtrim($allowedOrigin, '*'))) {
            return true;
        }
    }

    return false;
}

function app_verify_recaptcha(?string $token, string $remoteIp = ''): array
{
    if (!app_env_bool('RECAPTCHA_ENABLED', true)) {
        return ['success' => true, 'score' => null, 'action' => null];
    }

    if ($token === null || trim($token) === '') {
        return ['success' => false, 'message' => 'No se pudo validar la solicitud.'];
    }

    $secret = app_required_env('RECAPTCHA_SECRET_KEY');
    $postFields = [
        'secret' => $secret,
        'response' => $token,
    ];

    if ($remoteIp !== '') {
        $postFields['remoteip'] = $remoteIp;
    }

    $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $response = curl_exec($ch);
    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        error_log('reCAPTCHA request failed: ' . $error);

        return ['success' => false, 'message' => 'No se pudo validar la solicitud.'];
    }

    $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $payload = json_decode($response, true);
    if ($httpCode < 200 || $httpCode >= 300 || !is_array($payload)) {
        error_log('reCAPTCHA invalid response: HTTP ' . $httpCode);

        return ['success' => false, 'message' => 'No se pudo validar la solicitud.'];
    }

    $score = isset($payload['score']) && is_numeric($payload['score']) ? (float)$payload['score'] : 0.0;
    $action = isset($payload['action']) ? (string)$payload['action'] : '';
    $expectedAction = app_env('RECAPTCHA_EXPECTED_ACTION', '');
    $minScore = app_env_float('RECAPTCHA_MIN_SCORE', 0.5);

    if (empty($payload['success']) || $score < $minScore) {
        return ['success' => false, 'message' => 'No se pudo validar la solicitud.'];
    }

    if ($expectedAction !== '' && $action !== $expectedAction) {
        error_log('reCAPTCHA action mismatch. Expected ' . $expectedAction . ', received ' . $action);

        return ['success' => false, 'message' => 'No se pudo validar la solicitud.'];
    }

    return ['success' => true, 'score' => $score, 'action' => $action];
}

function app_validate_request_recaptcha(array $vars): ?array
{
    $token = isset($vars['captcha']) ? (string)$vars['captcha'] : null;
    $remoteIp = isset($_SERVER['REMOTE_ADDR']) ? (string)$_SERVER['REMOTE_ADDR'] : '';

    try {
        $result = app_verify_recaptcha($token, $remoteIp);
    } catch (Throwable $exception) {
        return app_config_error_response($exception->getMessage());
    }

    if (empty($result['success'])) {
        return app_public_error_response($result['message'] ?? 'No se pudo validar la solicitud.', 400);
    }

    return null;
}

$appRoot = dirname(__DIR__);
app_load_env($appRoot . '/.env');

error_reporting(E_ALL);

define('APP_ENV', app_env('APP_ENV', 'production'));
define('MAIL_TEMPLATE_DIR', app_env('MAIL_TEMPLATE_DIR', 'templates/mailing'));
define('TEMPLATE_DIR', MAIL_TEMPLATE_DIR);
define('ADMIN_EMAIL', app_required_env('ADMIN_EMAIL'));
define('ADMIN_EMAIL_EXTRA', app_env('ADMIN_EMAIL_EXTRA', ''));
define('SMTP_HOST', app_required_env('SMTP_HOST'));
define('SMTP_PORT', app_env_int('SMTP_PORT', 587));
define('SMTP_USER', app_required_env('SMTP_USER'));
define('SMTP_PASS', app_required_env('SMTP_PASS'));
define('SMTP_SECURE', app_env('SMTP_SECURE', 'tls'));
define('MAIL_FROM', app_required_env('MAIL_FROM'));
define('MAIL_FROM_NAME', app_env('MAIL_FROM_NAME', 'Avionica Saltamontes'));
define('NOTIFY_SERVICE_ENABLED', app_env_bool('NOTIFY_SERVICE_ENABLED', false));
define('NOTIFY_SERVICE_URL', app_env('NOTIFY_SERVICE_URL', ''));
define('NOTIFY_SERVICE_TOKEN', app_env('NOTIFY_SERVICE_TOKEN', ''));
