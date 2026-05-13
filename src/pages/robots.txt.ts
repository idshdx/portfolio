import type { APIRoute } from 'astro';
import { withBase } from '../utils/url';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
