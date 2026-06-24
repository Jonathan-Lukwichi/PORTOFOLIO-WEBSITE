// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// JLW Analytics — static multi-page site.
// One build serves both areas: portfolio at "/" and the company site at "/company".
// Set `site` to your primary deployed URL so absolute links / sitemap resolve.
// ⬇️ CHANGE THIS to your real domain before deploying.
export default defineConfig({
  site: 'https://jlwanalytics.com',
  // Keep the private print-only card out of the public sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/card') })],
});
