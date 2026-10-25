# RGR Graffix website rebuild

A Next.js starter for the RGR Graffix website redesign.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Import this repository into Vercel and use the default Next.js build settings.

## Important before launch

- The first draft references existing public WordPress image URLs so we can establish the layout quickly. Move selected, approved assets into `public/images` when ready.
- The contact form is currently a visual prototype and does not send enquiries. Connect it to a server route or Supabase before launch.
- Do not commit WordPress database dumps, `wp-config.php`, passwords, API keys, or customer/private records.
- Confirm the phone number, social profile URLs, and all copy before production.
- Supabase environment variables belong in Vercel Project Settings, not in source files.
