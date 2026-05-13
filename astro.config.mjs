// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://idshdx.github.io/portfolio';
const base = normalizeBase(process.env.ASTRO_BASE ?? '/');

function normalizeBase(value) {
  if (!value || value === '/') {
    return '/';
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});
