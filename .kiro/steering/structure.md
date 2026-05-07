# Project Structure

```
/
├── public/                  # Static assets served as-is
│   ├── companies/           # Employer logo images (svg/png)
│   ├── profile*.png/jpg     # Profile photo variants
│   └── *.webp/jpeg          # Other images
│
├── src/
│   ├── components/          # Astro section components (one per page section)
│   │   ├── home.astro       # Hero section
│   │   ├── nav.astro        # Sticky navigation bar
│   │   ├── career.astro     # Work experience timeline
│   │   ├── companies.astro  # Employer logos strip
│   │   ├── tech.astro       # Skills / tech stack grid
│   │   ├── projects.astro   # Project cards grid
│   │   ├── project-card.astro  # Individual project card
│   │   ├── interests.astro  # Personal interests
│   │   └── contact.astro    # Contact section
│   │
│   ├── data/                # JSON mock/fallback data files
│   │   ├── home.json        # Home section defaults
│   │   ├── projects.json    # Project list
│   │   ├── career.json      # Career data (legacy/unused)
│   │   ├── tech.json        # Tech stack data
│   │   └── *.md             # Case study markdown content
│   │
│   ├── data.ts              # Primary data source — TypeScript exports:
│   │                        #   personalInfo, workExperience, education,
│   │                        #   skills, projects (with embedded caseStudy)
│   │
│   ├── layouts/             # Astro layout wrappers
│   │   └── Layout.astro     # Base HTML shell (head, body, slots)
│   │
│   ├── pages/
│   │   ├── index.astro      # Single-page app entry point
│   │   └── case-study/
│   │       └── [slug].astro # Dynamic case study detail pages
│   │
│   └── styles/
│       └── global.css       # Global styles, Tailwind @theme tokens, base layer
│
├── astro.config.mjs         # Astro config (Vite plugins, integrations)
├── tsconfig.json            # TypeScript config
└── package.json
```

## Architecture Patterns

- **Single page layout**: `index.astro` composes all section components in order; navigation uses anchor links (`#section-id`)
- **Data in `src/data.ts`**: The canonical source of truth for all portfolio content. Components import directly from here. JSON files in `src/data/` are secondary/legacy
- **API fallback pattern**: Components check `import.meta.env.PROD` and `PUBLIC_API_BASE_URL`; if both are set, they fetch from the API and fall back to static data on error
- **No client-side framework**: All rendering is server-side Astro. Interactivity (scroll animations, nav highlighting, read-more toggles) is handled with vanilla JS in `<script>` blocks inside `.astro` files
- **Scroll animations**: Elements use `.reveal-content` or `.scroll-stat` CSS classes with `IntersectionObserver` in component `<script>` blocks to animate on scroll
- **Icons**: Always use `<Icon name="mdi:icon-name" />` from `astro-icon/components`; never use inline SVGs or `<img>` for icons

## Adding Content

- **New work experience**: Add an entry to `workExperience` array in `src/data.ts`
- **New project / case study**: Add to `projects` array in `src/data.ts`; set `caseStudy.slug` to enable the detail page
- **New skills**: Update the `skills` object in `src/data.ts`
- **Personal info**: Edit `personalInfo` in `src/data.ts`
