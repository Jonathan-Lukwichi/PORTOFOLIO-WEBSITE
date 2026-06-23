# JLW Analytics — portfolio site

Production build of the JLW Analytics portfolio (Jonathan Lukwichi, Simulation &
Digital-Twin Engineer). Ported from the Claude Design `.dc.html` prototypes in
`../project/` into a static **Astro** multi-page site, preserving the design exactly.

## Stack

- **Astro** static MPA — one `.astro` page per route, shared `SiteNav` / `SiteFooter`
  components, no client framework.
- Inline styles kept verbatim from the prototypes; shared rules, keyframes and
  `:hover` states live in `src/styles/global.css`.
- `public/reveal.js` is the prototype's reveal/count-up helper, reused as-is
  (translateY-only motion, opacity always 1 — content is never invisible if JS stalls;
  honours `prefers-reduced-motion`).

## Commands

```bash
npm install     # install deps
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # serve the production build
```

## Routes

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, marquee, method, count-up stats, CTA, left social rail (≥1081px) |
| `/about` | `src/pages/about.astro` | Profile, competencies, positioning |
| `/skills` | `src/pages/skills.astro` | Skills, experience timeline, education, certs, **Download CV** |
| `/projects` | `src/pages/projects.astro` | "Building now" flagship + 15 case studies + working sector filter |
| `/contact` | `src/pages/contact.astro` | Vision + contact + scannable QR (qrious) |

Project data lives in `src/data/projects.ts`.

## Content rules (preserved from the design brief)

- **Generic tool/model names only** — no specific software/ML/AI product names anywhere.
- The **15 case studies read as delivered work**; only the *Intelligent Operations
  Platform* is framed as "currently building / in progress".

## Wired in this pass

- **CV download** — `public/cv.pdf` ships and the Download CV links resolve.
- Crystal-logo **favicon** + per-page `<title>` / meta description.

## Still open (from `../project/HANDOFF.md`)

- Contact form is still `mailto:` — wire a real form (Formspree/serverless) if desired.
- **QR code** points to LinkedIn (`src/pages/contact.astro`, `qrUrl`) — repoint to the
  live site URL once deployed; also set `site` in `astro.config.mjs`.
- Image optimisation (hero PNGs are ~1.7 MB → WebP/AVIF), fuller SEO (OG/Twitter,
  sitemap, JSON-LD), analytics, deploy.
