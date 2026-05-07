# Tech Stack

## Framework & Build

- **Astro 6** — Static site generator with island architecture; `.astro` files for all pages and components
- **TypeScript 5** — Strict typing; `astro/tsconfigs/base` extended in `tsconfig.json`
- **Tailwind CSS 4** — Utility-first CSS via `@tailwindcss/vite` plugin (no `tailwind.config.*` file — config lives in `src/styles/global.css` using `@theme`)
- **Vite** — Bundler, configured through `astro.config.mjs`

## Key Libraries

- **astro-icon** — Icon component using Iconify icon sets (`@iconify-json/mdi`, `@iconify-json/skill-icons`, `@iconify-json/vscode-icons`)
- **@fontsource-variable/inter** + **@fontsource-variable/space-grotesk** — Self-hosted variable fonts

## Styling Conventions

- Theme tokens defined in `src/styles/global.css` under `@theme { }`:
  - `--color-accent: #a476ff` (purple)
  - `--color-background: #1d1a3c` (dark navy)
  - `--font-heading`: Space Grotesk Variable
  - `--font-body`: Inter Variable
- Use `font-heading` / `font-body` Tailwind utilities for typography
- Use `text-accent`, `bg-accent`, `border-accent` for brand color
- Dark theme only — no light mode support

## Environment Variables

| Variable | Description |
|---|---|
| `PUBLIC_API_BASE_URL` | Optional REST API base URL for live data fetching |

See `.env.example` for reference.

## Common Commands

```bash
# Start dev server (runs on all network interfaces)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI
npm run astro
```

## Deployment

Output is a static site in `dist/`. Deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).
