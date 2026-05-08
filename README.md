# CareerPortfolio: Data-Driven Astro SSG

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build/)

A high-performance, responsive portfolio built with **Astro**, **Tailwind CSS**, and **Native Browser Animations**. Designed to be 100% data-driven and easy to customize as a reusable template.

## 🌟 Highlights
- **Zero-JS by Default:** Leveraging Astro's islands architecture.
- **JSON-First:** Update your information in `src/data/` without touching any code.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **Performance:** Optimized for perfect Lighthouse scores.
- **SEO Ready:** Open Graph, Twitter cards, canonical URLs, sitemap, and robots.txt included.

## 🛠️ Tech Stack
- **Frontend:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/) via `astro-icon`
- **Testing:** [Vitest](https://vitest.dev/) with [fast-check](https://fast-check.dev/) for property-based testing
- **Deployment:** [GitHub Pages](https://pages.github.com/) (GitHub Actions workflow included)

## 🚀 Getting Started
Follow these instructions to get a local copy up and running.

### Prerequisites
Make sure you have **Node.js** (v22.12.0 or higher) installed on your machine.

### Installation
1. Click **Use this template** on this repository.
2. Choose **Create a new repository**.
3. Clone your new repository: `git clone <your-repo-url>`
4. Navigate to your repo: `cd <your-repo-name>`
5. Install dependencies: `npm install`
6. Start development server: `npm run dev`
7. Update your content in `src/data/`
8. Build and deploy on your preferred platform

## 🛠️ How to Customize
To make this portfolio yours, simply edit the data files in `src/data/` and `src/data/site/`.

```
Directory Structure
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # Portfolio content (JSON + TypeScript modules)
│   │   └── site/        # TypeScript data modules (personal, projects, skills, etc.)
│   ├── layouts/         # Layout templates with Meta tags
│   ├── pages/           # Site routes (index.astro, dynamic [slug] routes)
│   └── styles/          # Global CSS (Tailwind)
│   ├── *.test.ts        # Test files (colocated with source in src/)
├── astro.config.mjs     # Astro configuration
├── vitest.config.ts     # Vitest test configuration
└── tsconfig.json        # TypeScript configuration
```

### Key Configuration
Before deploying, update these values:

1. **`astro.config.mjs`** — Set your `site` URL (e.g., `https://<username>.github.io`)
2. **`src/data/site/personal.ts`** — Your name, email, links, and social profiles
3. **`src/layouts/Layout.astro`** — Default meta description
4. **`public/robots.txt`** — Update the sitemap URL to match your domain

### Useful Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run test`            | Run tests with Vitest                             |

## 🚀 Deployment (GitHub Pages)

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site on every push to `main`.

### Setup
1. In your GitHub repository, go to **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Update `site` in `astro.config.mjs` with your GitHub Pages URL:
   ```js
   site: 'https://<username>.github.io',
   ```
4. If deploying to a subpath (e.g., `https://<username>.github.io/repo-name`), also set:
   ```js
   base: '/repo-name',
   ```
5. Push to `main` — the workflow will build and deploy automatically.

## 📝 License
[MIT License](LICENSE)
