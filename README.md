# CareerPortfolio — Andrei Botez

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro_v6-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![CI/CD](https://img.shields.io/badge/GitHub_Actions-Deploy-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

A high-performance, fully responsive personal portfolio and career site built with **Astro v6**, **Tailwind CSS v4**, and **TypeScript**. Content is managed entirely through data files — no component code changes required to update portfolio information.

> **Origin:** This project was inspired by and initially based on work by [Nabil Akhunjee](https://github.com/nakhunjee). It has since been significantly extended with new features, sections, and content.

---

## 🌟 Highlights

- **Zero-JS by Default:** Leveraging Astro's islands architecture for maximum performance.
- **Data-Driven:** All content lives in `src/data/` — edit JSON/TypeScript files to update the site.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **SEO Ready:** Open Graph, Twitter cards, canonical URLs, sitemap, and robots.txt included.
- **Performance:** Optimized for perfect Lighthouse scores.
- **CI/CD Included:** GitHub Actions workflow runs tests and deploys to GitHub Pages on every push to `main`.
- **Property-Based Testing:** Vitest with fast-check for robust data validation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :---- | :--------- |
| Framework | [Astro v6](https://astro.build/) (Static Site Generation) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Icons | [Iconify](https://iconify.design/) via `astro-icon` (MDI, Simple Icons, Skill Icons, VSCode Icons) |
| Fonts | Inter Variable, Space Grotesk Variable via `@fontsource-variable` |
| Testing | [Vitest v4](https://vitest.dev/) + [fast-check](https://fast-check.dev/) for property-based tests |
| Sitemap | `@astrojs/sitemap` |
| Deployment | [GitHub Pages](https://pages.github.com/) via GitHub Actions |

---

## 📁 Project Structure

```
├── public/              # Static assets (images, favicon, robots.txt, CV files)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── career.astro
│   │   ├── companies.astro
│   │   ├── contact.astro
│   │   ├── home.astro
│   │   ├── interests.astro
│   │   ├── nav.astro
│   │   ├── oss-card.astro
│   │   ├── oss-projects.astro
│   │   ├── project-card.astro
│   │   ├── projects.astro
│   │   ├── tech.astro
│   │   └── testimonials.astro
│   ├── data/            # All portfolio content
│   │   ├── site/        # TypeScript data modules
│   │   │   ├── types.ts         # Shared TypeScript interfaces
│   │   │   ├── personal.ts      # Name, email, social links
│   │   │   ├── experience.ts    # Work history
│   │   │   ├── education.ts     # Education background
│   │   │   ├── projects.ts      # Projects with optional case studies
│   │   │   ├── oss.ts           # Open-source projects with detail pages
│   │   │   ├── skills.ts        # Technical skills by category
│   │   │   ├── interests.ts     # Personal/professional interests
│   │   │   ├── testimonials.ts  # Testimonials/references
│   │   │   ├── milestones.ts    # Career milestones
│   │   │   └── index.ts         # Re-exports
│   │   └── *.json               # Legacy JSON data files
│   ├── layouts/         # Layout templates (Layout.astro with full meta tags)
│   ├── pages/           # Site routes
│   │   ├── index.astro              # Main portfolio page
│   │   ├── case-study/[slug].astro  # Dynamic case study detail pages
│   │   └── open-source/[slug].astro # Dynamic OSS project detail pages
│   ├── styles/          # Global CSS (Tailwind)
│   └── *.test.ts        # Vitest tests (colocated with source)
├── .github/workflows/
│   └── deploy.yml       # CI/CD: test → build → deploy to GitHub Pages
├── astro.config.mjs     # Astro configuration (site URL, integrations)
├── vitest.config.ts     # Vitest configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 📄 Site Sections

| Section | Description |
| :------ | :---------- |
| **Home** | Hero intro with name, tagline, and primary CTAs |
| **Projects** | Professional projects with tech stack; links to case study detail pages |
| **Case Studies** | In-depth writeups: challenge, approach, results, and tech deep-dives |
| **Open Source** | OSS contributions with detail pages (features, usage, install steps) |
| **Tech** | Skills grouped by category (languages, frameworks, tools, cloud, etc.) |
| **Career** | Work experience timeline and education |
| **Interests** | Personal and professional interests with activity labels |
| **Testimonials** | Recommendations from colleagues and clients |
| **Contact** | Contact links (email, LinkedIn, GitHub, Signal, PGP key) |

---

## 🚀 Getting Started

### Prerequisites

**Node.js v22.12.0 or higher** is required.

### Local Development

```bash
git clone <repo-url>
cd career-portfolio-template
npm install
npm run dev        # Starts dev server at http://localhost:4321
```

### Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run all tests with Vitest |

---

## ✏️ Customizing Content

All portfolio content is managed through data files in `src/data/site/`. No component edits required.

### Key Files to Edit

| File | What it controls |
| :--- | :--------------- |
| `src/data/site/personal.ts` | Name, email, GitHub, LinkedIn, website, Signal, PGP |
| `src/data/site/experience.ts` | Work history entries |
| `src/data/site/education.ts` | Education entries |
| `src/data/site/projects.ts` | Projects and embedded case studies |
| `src/data/site/oss.ts` | Open-source projects with full detail pages |
| `src/data/site/skills.ts` | Tech skills by category |
| `src/data/site/interests.ts` | Interests with `Exploring / Active / Core / Old` labels |
| `src/data/site/testimonials.ts` | Testimonials/references |
| `src/data/site/milestones.ts` | Career milestones |
| `astro.config.mjs` | Site URL (required for sitemap and canonical URLs) |

### Before Deploying

1. **`astro.config.mjs`** — Set your `site` URL:
   ```js
   site: 'https://<username>.github.io',
   // base: '/<repo-name>',  // Uncomment if deploying to a subpath
   ```
2. **`src/data/site/personal.ts`** — Fill in your personal details.
3. **`public/robots.txt`** — Update the sitemap URL to match your domain.
4. **`src/layouts/Layout.astro`** — Review the default meta description.

---

## 🚀 Deployment (GitHub Pages)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Runs all Vitest tests
2. Builds the Astro site
3. Deploys to GitHub Pages

### Setup Steps

1. Push the repository to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select **GitHub Actions**.
4. Update `site` in `astro.config.mjs` with your GitHub Pages URL.
5. Push to `main` — the workflow will build and deploy automatically.

---

## 🧪 Testing

Tests are colocated with source files in `src/` and use Vitest with fast-check for property-based assertions on data integrity.

```bash
npm run test
```

Tests cover:
- Data shape and required field validation (personal info, projects, OSS entries)
- Navigation structure
- OSS card and detail page data integrity

---

## 📝 License

[MIT License](LICENSE) — Copyright © 2026 Andrei Botez.

Based on an original work by [Nabil Akhunjee](https://github.com/nakhunjee), which served as the initial inspiration and foundation for this project.
