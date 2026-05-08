# Project Guidelines

## Project Overview
CareerPortfolio is a data-driven, static portfolio site built with **Astro v6**, **Tailwind CSS v4**, and **TypeScript**. Content is managed through JSON and TypeScript data files in `src/data/` — no code changes are needed to update portfolio content.

## Project Structure
```
├── public/              # Static assets (images, favicon)
├── src/
│   ├── components/      # Reusable Astro components (.astro)
│   ├── data/            # Portfolio content (JSON + TypeScript modules)
│   │   └── site/        # TypeScript data modules (personal, projects, skills, etc.)
│   ├── layouts/         # Layout templates (Layout.astro with meta tags)
│   ├── pages/           # Site routes (index.astro, dynamic [slug] routes)
│   └── styles/          # Global CSS (Tailwind)
│   ├── *.test.ts        # Test files live alongside source in src/
├── astro.config.mjs     # Astro configuration
├── vitest.config.ts     # Vitest test configuration
└── tsconfig.json        # TypeScript configuration
```

## Build & Run
- **Install dependencies:** `npm install`
- **Development server:** `npm run dev` (runs at localhost:4321)
- **Production build:** `npm run build` (outputs to `./dist/`)
- **Preview build:** `npm run preview`

## Testing
- **Framework:** Vitest (v4) with fast-check for property-based testing
- **Run tests:** `npm run test` (equivalent to `vitest --run`)
- **Test location:** `src/**/*.test.ts` — test files are colocated with source files in `src/`
- Junie should run `npm run test` to verify changes don't break existing tests
- Junie should run `npm run build` before submitting to ensure the site builds successfully

## Code Style
- Components use `.astro` single-file format with Tailwind utility classes for styling
- Data files use TypeScript with typed exports (`src/data/site/types.ts` defines shared types)
- Follow existing naming conventions: kebab-case for component files, camelCase for TS data files
- Minimal inline comments — code should be self-explanatory
- Use Tailwind CSS utility classes; avoid custom CSS unless necessary
