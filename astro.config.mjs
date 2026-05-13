// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://shady.straja.org';

// https://astro.build/config
export default defineConfig({
  site,
  // base: '/career-portfolio-template',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});
