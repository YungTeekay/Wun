# Wun Digital — The Full Diary System

Lead-capture landing page for Wun Digital. Next.js (App Router, TypeScript),
plain CSS design system ("Modernist" — flat, Swiss-grid, zero radius), Archivo
via `next/font/google`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — the single landing page (server component).
- `app/LeadForm.tsx` — client form component (fetch → `/api/lead`).
- `app/api/lead/route.ts` — validates with zod, forwards to a webhook, sends a
  Resend notification email. Fails gracefully when env vars are absent.
- `app/globals.css` — the full design system and layout.
- `app/privacy`, `app/terms` — minimal stub pages.

## Environment

Copy `.env.example` to `.env.local`. All values are optional in development —
missing config is logged and the form still returns success so you can test the
UI. See `.env.example` for each variable.

## TODOs

- **Hero photo** — add a real black-and-white photo at `public/hero.jpg` and
  swap the placeholder block in `app/page.tsx` (a `next/image`, aspect 4/3,
  grayscale). Currently a striped placeholder is shown.
- **Webhook / CRM** — set `LEAD_WEBHOOK_URL` to your Zapier / Make / CRM
  endpoint.
- **Notification email** — set `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`, and a
  verified `LEAD_FROM_EMAIL`.
- **WhatsApp number** — replace `https://wa.me/44` in the footer with the real
  number.
- **Legal pages** — replace the placeholder copy in `app/privacy` and
  `app/terms` with real policies.
- **OG image** — add `public/og.jpg` and reference it in `app/layout.tsx`
  metadata.

## Notes

- Stats row is toggleable via the `SHOW_STATS` constant in `app/page.tsx`.
- `prefers-reduced-motion` is respected; smooth scroll and transitions are
  disabled for those users.
- FAQ includes `FAQPage` JSON-LD.
