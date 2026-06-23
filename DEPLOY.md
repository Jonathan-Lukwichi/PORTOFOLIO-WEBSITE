# 🚀 Deploy — JLW Analytics

One Astro project in [`site/`](./site) builds **both** sites:
- **Portfolio** → `/` (`/about`, `/skills`, `/projects`, `/contact`)
- **Company** → `/company` (`/company/services`, `/process`, `/work`, `/contact`)

Build output: `site/dist/` (static — host anywhere).

---

## 1. Turn on the contact form (Formspree — free, 2 min)

The quote / free-consultation form works today by opening a pre-filled email.
To receive submissions **directly in your inbox** without that:

1. Go to **https://formspree.io** → sign up (use `jonathanlukwichi29@gmail.com`).
2. **New form** → copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Open [`site/src/pages/company/contact.astro`](./site/src/pages/company/contact.astro),
   find `FORM_ENDPOINT` and replace `YOUR_FORM_ID`:
   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
   ```
4. Done. The form now submits via AJAX, shows an inline ✓ success, and emails you.
   (If the request ever fails, it tells the visitor to email you directly.)

---

## 2. Deploy

### Netlify (recommended — config already in `netlify.toml`)
1. Push this repo to GitHub.
2. Netlify → **Add new site → Import from Git** → pick the repo.
3. It reads `netlify.toml` automatically (base `site`, build `npm run build`, publish `dist`).
4. Deploy. You get a `*.netlify.app` URL; add your custom domain in **Domain settings**.

### Vercel (config in `vercel.json`)
1. Vercel → **New Project** → import the repo.
2. It uses `vercel.json` (build `cd site && npm install && npm run build`, output `site/dist`).
3. Deploy, then add your domain.

### Manual / any static host
```bash
cd site && npm install && npm run build   # → site/dist/
# upload the contents of site/dist/
```

---

## 3. Before go-live

- [ ] Set the real domain in [`site/astro.config.mjs`](./site/astro.config.mjs) → `site:`.
- [ ] Paste the Formspree ID (step 1).
- [ ] (Optional) Repoint the portfolio contact QR (`qrUrl` in
      [`site/src/pages/contact.astro`](./site/src/pages/contact.astro)) to the live URL.
- [ ] Activate Windows (removes the desktop watermark from screenshots — not a site issue).

---

## Two domains later (optional)

Today both sites ship in one deploy (`jlwanalytics.com` + `jlwanalytics.com/company`).
To split onto two domains (e.g. company on `jlwanalytics.com`, portfolio on
`jonathanlukwichi.com`):

- **Easiest:** keep one build; point the second domain at the same deploy and use the
  host's redirect rules so each domain lands on its area.
- **Cleanest:** split into two Astro builds sharing the `src/styles` + `public/fx.js`
  design system. Ask and I'll set this up when you're ready.
