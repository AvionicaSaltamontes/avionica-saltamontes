# Backend - Avionica Saltamontes

Backend PHP para envio de correos transaccionales desde los formularios del sitio.

## Requisitos

- PHP 8.0 o superior.
- Apache con `mod_rewrite`.
- Extensiones PHP:
  - `curl`
  - `json`
  - `openssl`

## Instalacion

Copiar el contenido de `backend/` al servidor web y configurar Apache para que el document root apunte a este directorio o a un virtual host equivalente.

El archivo `.htaccess` redirige las solicitudes a `app.php`.

## Configuracion

Crear o actualizar `.env` a partir de `.env.example`:

```bash
cp .env.example .env
```

Variables requeridas:

```env
APP_ENV=production
APP_DEBUG=false
CORS_ALLOWED_ORIGINS=https://www.example.com,https://example.com
MAIL_TEMPLATE_DIR=templates/mailing
MAIL_BANNER_PRIMARY_URL=https://assets.example.com/mail/banner-primary.jpg
MAIL_BANNER_SECONDARY_URL=https://assets.example.com/mail/banner-secondary.jpg
ADMIN_EMAIL=admin@example.com
ADMIN_EMAIL_EXTRA=operations@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=smtp-user@example.com
SMTP_PASS=replace-with-smtp-password-or-api-key
SMTP_SECURE=tls
MAIL_FROM=no-reply@example.com
MAIL_FROM_NAME=Avionica Saltamontes
RECAPTCHA_ENABLED=true
RECAPTCHA_SECRET_KEY=replace-with-google-recaptcha-secret-key
RECAPTCHA_MIN_SCORE=0.5
RECAPTCHA_EXPECTED_ACTION=contact_form
NOTIFY_SERVICE_ENABLED=false
NOTIFY_SERVICE_URL=https://notify.example.com/customers/example
NOTIFY_SERVICE_TOKEN=replace-with-notification-provider-token
```

No usar credenciales de desarrollo en produccion. Las credenciales SMTP y tokens de proveedores deben ser generados por el nuevo propietario del proyecto.

`MAIL_BANNER_PRIMARY_URL` y `MAIL_BANNER_SECONDARY_URL` deben apuntar a imagenes publicas del cliente para las plantillas de correo.

## Endpoints

- `POST /services/transactional/mailing/send?tpl=contact`
- `POST /services/transactional/mailing/v2/send?tpl=contact`
- `POST /services/transactional/mailing/v3/send?tpl=quote`

Los endpoints reciben JSON en el cuerpo de la solicitud. El frontend actual usa `v2` para contacto y `v3` para cotizaciones.

## reCAPTCHA

El frontend envia el token en el campo `captcha`. El backend valida ese token contra Google usando:

- `RECAPTCHA_SECRET_KEY`
- `RECAPTCHA_MIN_SCORE`
- `RECAPTCHA_EXPECTED_ACTION`

La accion esperada actualmente es `contact_form`, usada tanto en contacto como en cotizacion. Esta implementacion usa reCAPTCHA v3 con el endpoint `siteverify` de Google.

## Correo SMTP

El envio de notificaciones por correo se realiza con PHPMailer sobre SMTP.

El nuevo propietario debe configurar su propio proveedor SMTP. Opciones comunes:

- SendGrid
- Mailgun
- Amazon SES
- SMTP del proveedor de hosting

Para una entrega productiva tambien se recomienda configurar SPF, DKIM y DMARC en el dominio del remitente.

## WhatsApp y notificaciones

Durante el desarrollo se utilizo un servicio operativo de Acinsoft para notificaciones. Ese servicio no debe considerarse parte permanente de la operacion del nuevo propietario.

Para operar WhatsApp o notificaciones equivalentes, el nuevo propietario debe:

- Conectarse directamente a Meta WhatsApp Cloud API.
- O contratar un partner como 360dialog.
- Configurar `NOTIFY_SERVICE_ENABLED=true` solo cuando tenga un proveedor propio listo.
- Reemplazar `NOTIFY_SERVICE_URL` y `NOTIFY_SERVICE_TOKEN` con los datos del proveedor elegido.

Si no se usara un proveedor de notificaciones, mantener `NOTIFY_SERVICE_ENABLED=false`.

## Produccion

- Mantener `APP_DEBUG=false`.
- Configurar `CORS_ALLOWED_ORIGINS` solo con dominios autorizados.
- No publicar `.env` en repositorios.
- Rotar cualquier credencial que haya sido usada durante desarrollo.
- Servir el backend exclusivamente por HTTPS.
