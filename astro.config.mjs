import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://safecleaning.gr',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
