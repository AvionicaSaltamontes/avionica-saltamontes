# Frontend - Avionica Saltamontes

Aplicacion web estatica construida con Next.js.

## Requisitos

- Node.js 20 o superior.
- npm.

## Instalacion

```bash
npm install
```

## Configuracion local

Crear un archivo `.env.local` a partir de `.env.example`:

```bash
cp .env.example .env.local
```

Actualizar los valores antes de ejecutar o compilar:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com/services/transactional/mailing/
NEXT_PUBLIC_RECAPTCHA_KEY=replace-with-google-recaptcha-site-key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_MAP_API_KEY=replace-with-google-maps-api-key
NEXT_PUBLIC_SITE_URL=https://www.example.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
NEXT_PUBLIC_CONTACT_PHONE_LABEL=+00 (000) 000 0000
NEXT_PUBLIC_CONTACT_PHONE_TEL=+000000000000
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/0000000000
```

Notas:

- `NEXT_PUBLIC_API_BASE_URL` debe apuntar al backend PHP y terminar en `/services/transactional/mailing/`.
- `NEXT_PUBLIC_RECAPTCHA_KEY` es la site key publica de Google reCAPTCHA v3.
- `NEXT_PUBLIC_GA_ID` es opcional si no se usara Google Analytics.
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE_LABEL` y `NEXT_PUBLIC_CONTACT_PHONE_TEL` se usan en footer y textos legales.
- `NEXT_PUBLIC_WHATSAPP_URL` debe reemplazarse por el enlace oficial del cliente.
- Todas las variables `NEXT_PUBLIC_*` se incorporan durante el build. Si cambian, hay que compilar nuevamente.

## Desarrollo local

```bash
npm run dev
```

## Build de produccion

```bash
npm run build
```

El proyecto esta configurado con `output: "export"`, por lo que la salida estatica se genera en:

```text
out/
```

Ese directorio es el que debe publicarse en el hosting estatico.

## Build en GitHub

Este entregable no incluye workflow de GitHub Actions. Si el nuevo propietario decide compilar en GitHub, debe registrar estas variables en el repositorio antes de ejecutar el build:

- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_RECAPTCHA_KEY`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_MAP_API_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE_LABEL`
- `NEXT_PUBLIC_CONTACT_PHONE_TEL`
- `NEXT_PUBLIC_WHATSAPP_URL`

La compilacion esperada es:

```bash
npm install
npm run build
```

Despues del build se debe publicar el contenido de `out/` en el proveedor de hosting elegido.
