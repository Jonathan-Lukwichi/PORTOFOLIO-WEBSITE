// @ts-check
import { defineConfig } from 'astro/config';

// JLW Analytics — static multi-page site.
// One build serves both areas: portfolio at "/" and the company site at "/company".
// Set `site` to your primary deployed URL so absolute links / sitemap resolve.
// ⬇️ CHANGE THIS to your real domain before deploying.
export default defineConfig({
  site: 'https://jlwanalytics.com',
});
