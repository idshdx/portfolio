# AGENTS.md

## Project at a glance
- Astro v6 static portfolio theme with Tailwind CSS v4 and TypeScript.
- The site is data-driven: most content lives in `src/data/site/*.ts` and `src/data/*.json`; components mainly render that data.
- The home page (`src/pages/index.astro`) composes the full one-page site from section components in `src/components/`.
- Dynamic pages are generated with `getStaticPaths()` in `src/pages/case-study/[slug].astro` and `src/pages/open-source/[slug].astro`.

## Data and routing conventions
- Treat `src/data/site/types.ts` as the source of truth for content shapes (`Project`, `OssProject`, `WorkExperience`, etc.).
- Keep slugs URL-safe and unique; tests enforce OSS slugs, and case-study/open-source routes depend on them.
- Update the matching data array when adding/removing a route: `projects.ts` for case studies, `oss.ts` for open source.
- Re-export data from `src/data/site/index.ts` when you need a central import path.

## URL, base path, and deployment
- Use `withBase()` from `src/utils/url.ts` for internal links and asset URLs; the app is deployed under GitHub Pages subpaths.
- Examples: `src/components/nav.astro`, `src/components/oss-card.astro`, `src/pages/case-study/[slug].astro`.
- `astro.config.mjs` reads `SITE_URL` and `ASTRO_BASE`; GitHub Actions sets both during build.

## Layout and SEO
- `src/layouts/Layout.astro` owns document meta tags, canonical URLs, Open Graph/Twitter tags, JSON-LD structured data, fonts, nav, and shared UI chrome.
- Preserve the existing structured-data helpers from `src/data/site/seo.ts` when adding new page types.
- Detail pages intentionally set `showNav={false}` and provide their own back/navigation links.

## Component patterns
- Astro components are mostly presentational and use Tailwind utility classes inline.
- Section components such as `src/components/projects.astro` and `src/components/oss-projects.astro` render lists from data and add reveal-on-scroll behavior with `astro:after-swap` support.
- `src/components/oss-card.astro` and the project cards rely on external links using `target="_blank"` plus `rel="noopener noreferrer"`.

## Content and asset rules
- Put static files in `public/` and reference them through `withBase('/...')`.
- Keep hero/images in `public/projects/`, company logos in `public/companies/`, and timeline media in `public/timeline/`.
- If you change a slug or asset path, update the corresponding page, card component, and any structured-data helpers.

## Testing and workflow
- Local dev: `npm install`, then `npm run dev`.
- Validation: `npm run test` (Vitest + fast-check) and `npm run build` before shipping changes.
- CI mirrors this order in `.github/workflows/deploy.yml`: `npm ci` → `npm run test` → `npm run build`.
- Tests are colocated in `src/*.test.ts` and often use property-based checks for data/card integrity.

## Practical guardrails
- Prefer editing data files over component code when changing portfolio content.
- Keep navigation anchors and section IDs aligned (`#projects`, `#open-source`, `#contact`, etc.).
- Preserve the existing scroll/reveal scripts and `astro:after-swap` listeners when touching nav or dynamic pages.
- Node.js 22.12+ is the documented baseline from `README.md`.

