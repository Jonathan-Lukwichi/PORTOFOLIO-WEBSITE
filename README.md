# JLW Analytics — Portfolio + Company Website

A single [Astro](https://astro.build) static site that serves **two experiences** from one shared design system:

| Area | Route | Audience |
|------|-------|----------|
| **Personal portfolio** — Jonathan Lukwichi | `/` · `/about` · `/skills` · `/projects` · `/contact` | Recruiters & academia |
| **Company website** — JLW Analytics | `/company` · `/company/services` · `/process` · `/work` · `/contact` | Business clients |

They cross-link both ways (portfolio nav → "JLW Analytics ↗", company footer → "Founder ↗").

> **JLW Analytics** builds *decision twins* — a living model of an operation with a
> machine-learning layer inside it — to prove the value of a change before the money is spent.

---

## ✨ Design & features

- **Theme:** near-black `#060606` + cyan→blue gradient (`#0891B2 → #1E5AA8`), **Sora** type.
- **Premium effects** (`public/fx.js`, no heavy deps): magnetic custom cursor,
  word-by-word headline reveal on scroll, animated stat counters, HUD-framed panels,
  animated grid backdrop and scan lines.
- **Company site:** services, process, 15 case studies (filterable), and a contact page
  with a **Quote / Free-consultation** form.
- **SEO:** per-page Open Graph + Twitter cards, canonical URLs, and an auto-generated
  sitemap (`@astrojs/sitemap`).

## 🚀 Run locally

```bash
cd site
npm install
npm run dev        # http://localhost:4321
```

| Command | Does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static production build → `site/dist/` |
| `npm run preview` | Serve the built site |

## 📁 Structure

```
site/
├── src/
│   ├── pages/        portfolio (/) + company (/company/*)
│   ├── layouts/      BaseLayout (portfolio) · CompanyLayout (company)
│   ├── components/   SiteNav/Footer · CompanyNav/Footer
│   ├── data/         projects.ts (15 case studies)
│   └── styles/       global.css (shared design system)
├── public/           assets · cv.pdf · fx.js · reveal.js · robots.txt
└── astro.config.mjs  set `site` to the live URL before deploying
```

## 📦 Deploy

Static site — any host works. Config included for **Netlify** (`netlify.toml`) and
**Vercel** (`vercel.json`). Full guide, including the **Formspree** form setup, in
[`DEPLOY.md`](./DEPLOY.md).

Before go-live: set the real domain in [`site/astro.config.mjs`](./site/astro.config.mjs)
and paste your Formspree form ID in `site/src/pages/company/contact.astro`.
