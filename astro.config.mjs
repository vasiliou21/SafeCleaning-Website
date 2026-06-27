import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://safecleaning.gr',
  output: 'static',
  trailingSlash: 'ignore',
  // Exclude the noindex thank-you page from the sitemap (avoids GSC
  // "Submitted URL marked noindex" warnings).
  integrations: [sitemap({ filter: (page) => !page.includes('/efxaristoume') })],
});
