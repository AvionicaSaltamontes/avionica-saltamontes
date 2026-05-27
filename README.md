# Avionica Saltamontes

Proyecto web compuesto por un frontend estatico en Next.js y un backend PHP para recepcion de formularios, envio de correos transaccionales y notificaciones operativas.

## Estructura

```text
frontend/  Aplicacion web publica.
backend/   API PHP para formularios, correo SMTP, reCAPTCHA y notificaciones.
```

Cada carpeta incluye su propio `README.md` con instrucciones especificas de instalacion, configuracion y despliegue.

## Tecnologias

Frontend:

- Next.js
- React
- next-intl
- Tailwind CSS
- GSAP
- Lenis
- Google reCAPTCHA v3
- Google Analytics opcional

Backend:

- PHP
- Apache con `.htaccess` y `mod_rewrite`
- PHPMailer
- SMTP externo
- Google reCAPTCHA v3 `siteverify`
- Servicio externo opcional para notificaciones

## Requisitos Generales

Frontend:

- Node.js 20 o superior.
- npm.

Backend:

- PHP 8.0 o superior.
- Apache con `mod_rewrite`.
- Extensiones PHP: `curl`, `json`, `openssl`.
- Acceso HTTPS en produccion.
- Cuenta SMTP del cliente o proveedor externo.
- Llaves de Google reCAPTCHA v3.

## Configuracion

El proyecto no debe depender de credenciales hardcodeadas.

Frontend:

- Usar `frontend/.env.example` como referencia.
- Crear `frontend/.env.local` para desarrollo local.
- Las variables `NEXT_PUBLIC_*` se inyectan durante el build.
- Si se compila en GitHub u otro CI, registrar las variables antes de ejecutar `npm run build`.

Backend:

- Usar `backend/.env.example` como referencia.
- Crear `backend/.env` en el servidor.
- No publicar credenciales reales en repositorios.
- Mantener `APP_DEBUG=false` en produccion.

## Build y Despliegue

Frontend:

```bash
cd frontend
npm install
npm run build
```

La salida estatica se genera en:

```text
frontend/out/
```

Ese directorio debe publicarse en el hosting estatico elegido.

Backend:

Publicar el contenido de `backend/` en un servidor Apache/PHP. El archivo `.htaccess` redirige las solicitudes a `app.php`.

Endpoints principales:

- `POST /services/transactional/mailing/v2/send?tpl=contact`
- `POST /services/transactional/mailing/v3/send?tpl=quote`

## Servicios Externos

Correo:

- El backend envia correos con PHPMailer mediante SMTP.
- El cliente debe configurar su propio proveedor SMTP.
- Proveedores sugeridos: SendGrid, Mailgun, Amazon SES o SMTP del hosting.
- Se recomienda configurar SPF, DKIM y DMARC.

WhatsApp y notificaciones:

- Durante desarrollo se uso un servicio operativo de Acinsoft para notificaciones.
- Para produccion, el nuevo propietario debe reemplazarlo por su propio proveedor.
- Opciones recomendadas: Meta WhatsApp Cloud API o un partner como 360dialog.
- Si no se usara este servicio, mantener `NOTIFY_SERVICE_ENABLED=false`.

reCAPTCHA:

- El frontend obtiene el token con Google reCAPTCHA v3.
- El backend valida el token con Google antes de procesar el formulario.
- La accion esperada actual es `contact_form`.

## Consideraciones de Entrega

- No incluir archivos `.env` con credenciales reales en el repositorio.
- Rotar cualquier credencial usada durante desarrollo.
- Revisar y actualizar los textos legales antes de publicar.
- Actualizar datos de contacto del cliente mediante variables de entorno del frontend.
- Actualizar imagenes de correo con `MAIL_BANNER_PRIMARY_URL` y `MAIL_BANNER_SECONDARY_URL`.
- Configurar CORS solo con los dominios autorizados.
- Servir frontend y backend por HTTPS.
- Mantener los README de `frontend/` y `backend/` como referencia operativa principal.

