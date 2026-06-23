# ▶️ RUN ME — JLW Analytics portfolio

This repo contains the **built, working website** in [`site/`](./site) (Astro static
multi-page site, ported from the Claude Design prototypes in `project/`).

If you are **Claude CLI / Claude Code**, read **[§ For Claude CLI](#-for-claude-cli)** and run it.
If you are a **human in VS Code**, read **[§ Quick start](#-quick-start)**.

---

## 🤖 For Claude CLI

> Paste this prompt to Claude:
>
> **"Read RUN.md, then start the JLW Analytics site in `site/` and give me the local URL."**

Then do exactly this:

```bash
cd site
npm install        # first run only; installs Astro + deps
npm run dev -- --host
```

- Dev server URL: **http://localhost:4321**
- Report the URL back to the user. Keep the server running.
- If port 4321 is busy, Astro auto-picks the next free port — read the printed URL from the output.
- To verify without a browser: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/`
  should print `200`.

To produce a deployable build instead of a dev server:

```bash
cd site
npm install
npm run build      # outputs static files to site/dist/
npm run preview    # serves the production build for a final check
```

---

## 🚀 Quick start (human, VS Code)

**Prerequisites:** [Node.js](https://nodejs.org) 18.20+ (20+ recommended; this was built on Node 22).
Check with `node --version`.

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and run:

   ```bash
   cd site
   npm install
   npm run dev
   ```

3. Open the printed URL — **http://localhost:4321** — in your browser.
   Edits to files in `site/src/` hot-reload automatically.

To stop the server: press `Ctrl+C` in the terminal.

---

## 📦 What gets run

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload (development) |
| `npm run build` | Static production build → `site/dist/` |
| `npm run preview` | Serves the built `site/dist/` locally |

All commands run **from inside the `site/` folder.**

## 🗂️ Project layout

```
site/
├── src/
│   ├── pages/        index · about · skills · projects · contact
│   ├── components/   SiteNav.astro · SiteFooter.astro
│   ├── layouts/      BaseLayout.astro (head, fonts, nav, footer, reveal)
│   ├── data/         projects.ts (15 case studies + flagship)
│   └── styles/       global.css (palette, keyframes, hover states)
├── public/           assets/ (photos) · cv.pdf · reveal.js · favicon.svg
├── astro.config.mjs  set `site` to your deployed URL before deploying
└── package.json
```

## 🚢 Deploy (when ready)

It's a static site — any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

```bash
cd site && npm run build      # → site/dist/  (upload this folder)
```

- **Netlify/Vercel:** set base directory `site`, build command `npm run build`,
  publish directory `site/dist`.
- Before deploying, set `site:` in `site/astro.config.mjs` to the live URL, and
  repoint the contact QR code (`qrUrl` in `site/src/pages/contact.astro`) to it.

## 🛠️ Troubleshooting

- **`command not found: npm`** → install Node.js (see prerequisites).
- **`npm install` fails behind a proxy/offline** → ensure network access to the npm registry.
- **Port already in use** → Astro auto-selects another port; use the URL it prints,
  or run `npm run dev -- --port 3000`.
- **Blank/old content after pulling changes** → re-run `npm install` (deps may have changed),
  then `npm run dev`.

## ✅ Still open (optional follow-ups)

See `site/README.md` → *Still open*: real contact form (currently `mailto:`),
repoint QR to the live URL, image optimisation, fuller SEO, deploy.
