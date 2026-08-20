# Gemini Developer Guidelines — Career Portfolio Astro Theme

This document defines the team-shared architecture, coding standards, directory conventions, and automated workflows for this repository. All contributors and AI agents must strictly adhere to these guidelines to maintain a robust, high-performance, and easily maintainable codebase.

---

## 🏗️ 1. Architecture & Core Concepts

### 1.1 Zero-JS by Default
The site is built with **Astro v6** to leverage static site generation (SSG) with zero client-side JavaScript by default. This ensures perfect Lighthouse scores, exceptional load times, and superior SEO.
- Avoid introducing interactive client-side React, Vue, or Angular components unless client interaction is strictly required.
- If client interaction is necessary, utilize Astro's **Islands Architecture** (`client:load`, `client:visible`, etc.) and ensure the components are properly encapsulated.

### 1.2 Data-Driven Design
A core design pattern of this codebase is the strict separation between **presentation (Astro components)** and **content (TypeScript data modules)**.
- **NEVER** hardcode portfolio details, job positions, projects, or testimonials inside Astro components.
- All portfolio content lives in `src/data/site/` as type-safe TypeScript modules.
- Changes to the site content must always be done by modifying the corresponding file in `src/data/site/`.

---

## 📁 2. Repository Structure

Here is the directory structure highlighting key folders and files:

- `public/`: Static assets (logos, images, sitemaps, PDFs, favicons).
- `src/components/`: Reusable Astro components (navigation, cards, career timeline, tech grids, etc.).
- `src/data/site/`: Main data layer containing type-safe TypeScript files for portfolio personalization (e.g., `personal.ts`, `experience.ts`, `projects.ts`, `oss.ts`, `skills.ts`, etc.).
- `src/layouts/`: Base layout templates containing standard SEO configurations, Open Graph meta tags, and font configurations.
- `src/pages/`: File-system routes.
  - `index.astro`: The main single-page portfolio view.
  - `case-study/[slug].astro`: Dynamic routing for in-depth professional project case studies.
  - `open-source/[slug].astro`: Dynamic routing for open-source library details.
- `src/styles/`: Contains global styling definitions using **Tailwind CSS v4** via `@tailwindcss/vite`.
- `src/**/*.test.ts`: Colocated test suites (using Vitest and fast-check).

---

## 💻 3. Coding & Styling Standards

### 3.1 Styling with Tailwind CSS v4
- This project leverages **Tailwind CSS v4** via the `@tailwindcss/vite` plugin.
- Do not mix inline style attributes with Tailwind classes.
- Use semantic utility classes to ensure a unified dark mode / modern glassmorphism design language (e.g., using transparency `bg-white/5`, borders `border-white/10`, and transitions `transition-all duration-500`).

### 3.2 TypeScript & Type Safety
- Always enforce strict typing. Avoid using `any`, type assertions (casts like `as ...`), or disabling compiler warnings unless absolutely necessary and documented.
- All database/data schemas must conform to the TypeScript interfaces defined in `src/data/site/types.ts`.
- When extending schemas or updating data structures, ensure you update both the interfaces in `types.ts` and the property-based tests verifying the shape.

### 3.3 Composition & Clean Code
- **Composition over Inheritance:** Prioritize explicit composition (e.g., modular components, utility functions, wrapper components) over complex inheritance hierarchies.
- **Self-contained Logic:** Colocate styling, HTML structure, and standard Astro scripts within single `.astro` files. Keep utility helper functions inside `src/utils/`.

### 3.4 Code Comments
- Focus comments on **why** something is done, especially for non-obvious algorithms, complex calculations, or responsive layout quirks. Avoid commenting on *what* is done (which should be clear from readable variable and function names).
- Never use code comments to talk to other developers or document step-by-step agent modifications inside the code files.

---

## 🧪 4. Testing & Verification

### 4.1 Vitest & Property-Based Testing
We run **Vitest** for unit and integration testing, integrated with **fast-check** for property-based data validation.
- All test suites are colocated with source code using the `*.test.ts` extension.
- Property-based tests are used to verify component rendering logic (by replicating Astro component rendering inside pure functions and running them under thousands of random inputs from `fast-check`).
- Tests validate:
  - Required schema fields and data integrity.
  - Slugs are unique, lowercase, URL-safe kebab-case strings.
  - Expected dynamic content generation matches layouts.

### 4.2 Local Test Commands
- **Run all tests once:** `npm run test`
- Ensure all tests pass successfully before pushing any updates or initiating deployments.

---

## 🚀 5. Deployment and CI/CD

### 5.1 Automated GitHub Actions
The project includes a robust continuous integration and deployment pipeline defined in `.github/workflows/deploy.yml`.
On every push or Pull Request merging to the `main` branch, the pipeline automatically:
1. Installs Node dependencies (`npm install`).
2. Runs the typechecker and linter checks.
3. Executes the full Vitest test suite (`npm run test`).
4. Builds the production-ready static site (`npm run build`).
5. Deploys the artifacts to **GitHub Pages**.

### 5.2 Pre-Release Checklist
Before finalizing changes:
1. Ensure your site URL is properly defined in `astro.config.mjs` (crucial for sitemap and canonical URLs).
2. Verify that there are no TS compiler warnings or Astro build failures by running `npm run build` locally.
3. Update `public/robots.txt` and meta tag defaults inside `src/layouts/Layout.astro` if necessary.

---

## 🤖 6. AI Agent Guidelines (Gemini CLI)

If you are an AI assistant or Gemini agent working on this repository, strictly adhere to these specific workflows:
1. **Never Assume Tools:** Verify the existence of tools, libraries, or configuration files before using or recommending them.
2. **Strict Context Isolation:** Do not re-read or rewrite files unnecessarily. Use targeted edits with the `replace` tool rather than complete file rewrites for existing files to ensure context efficiency.
3. **No Hidden Logic:** Implement changes using standard, idiomatic language features rather than prototype manipulation or reflection.
4. **Memory Persistence:**
   - Put team-shared conventions, standards, and architecture changes inside this file (`GEMINI.md`).
   - Store developer-specific, private workflows, notes, or temporary indices inside the private project memory file (`MEMORY.md` located in the user's home/temp directory). Do **NOT** commit private memories to the public repository.
