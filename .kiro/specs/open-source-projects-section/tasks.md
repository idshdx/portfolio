# Implementation Plan: Open Source Projects Section

## Overview

Add an "Open Source Projects" section to the portfolio landing page, following the exact conventions of the existing Case Studies section. The work spans: a typed data model in `src/data.ts`, a landing-page section component (`oss-projects.astro`), a card component (`oss-card.astro`), a dynamic detail page (`/open-source/[slug].astro`), a navbar entry, and a Vitest + fast-check property-based test suite validating 7 correctness properties.

## Tasks

- [x] 1. Set up test infrastructure and define the `OssProject` data model
  - [x] 1.1 Install Vitest, `@astrojs/check`, and fast-check; add a `test` script to `package.json`
    - Install `vitest` and `fast-check` as dev dependencies
    - Add `"test": "vitest --run"` to the `scripts` block in `package.json`
    - Create `vitest.config.ts` at the project root configured for the Astro/TypeScript environment
    - _Requirements: 1.5 (TypeScript compilation must pass)_

  - [x] 1.2 Define the `OssProject` interface and `ossProjects` array in `src/data.ts`
    - Add the `OssProject` TypeScript interface with all required fields (`title`, `slug`, `description`, `tech`, `repoUrl`, `license`, `features`, `category`) and all optional fields (`demoUrl`, `heroImage`, `installationSteps`, `usageExample`, `contributingGuide`, `status`)
    - Use the `'Active' | 'Archived' | 'Experimental'` union type for `status`
    - Export the `ossProjects: OssProject[]` array seeded with exactly 3 placeholder entries derived from existing case study data (Superbet Club, DuePet, Lockpost); each placeholder must include `installationSteps`, `usageExample`, and `status` so every conditional section on the detail page renders during development
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x]* 1.3 Write unit tests for the data model
    - Assert `ossProjects` has exactly 3 entries
    - Assert every entry satisfies the `OssProject` interface (all required fields present and non-empty)
    - Assert all `slug` values are unique and URL-safe (kebab-case, no spaces)
    - _Requirements: 1.3, 1.4_

- [x] 2. Implement the `oss-card.astro` component
  - [x] 2.1 Create `src/components/oss-card.astro` with full card markup
    - Root element is `<article class="project-card ...">` (reuses the global `.project-card` reveal CSS from `project-card.astro`)
    - Hero strip (h-32): render `<img>` when `heroImage` is present, otherwise a `bg-gradient-to-br from-accent/20 via-background to-background` fallback div
    - Status badge: absolute top-right inside the hero strip, color-coded (`Active` → green, `Archived` → gray, `Experimental` → orange); rendered only when `project.status` is defined
    - Body: category label (`text-accent text-[10px] uppercase tracking-widest font-bold`), `<h3>` title, expandable description (`line-clamp-3` + Read more toggle reusing the `read-more-btn` script pattern from `project-card.astro`), tech pill tags, license badge (`border-yellow-500/30 text-yellow-400` with `mdi:scale-balance` icon)
    - External links row: repo link with `mdi:github` icon, optional demo link with `mdi:open-in-new` icon; both with `target="_blank" rel="noopener noreferrer"` and descriptive `aria-label` containing the project title and "opens in new tab"
    - "View Project" CTA link to `/open-source/${slug}` with animated arrow (`mdi:arrow-right`)
    - Use only existing Tailwind theme tokens (`text-accent`, `bg-accent`, `border-accent`, `font-heading`, `font-body`, `bg-white/5`, `border-white/10`, `rounded-2xl`)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 6.2, 6.6, 7.2, 7.3_

  - [x]* 2.2 Write property test for Property 3 — OSS card renders all required fields
    - **Property 3: OSS card renders all required fields**
    - **Validates: Requirements 3.1, 3.2, 3.5, 7.2**
    - Create a fast-check arbitrary `arbOssProject` generating random valid `OssProject` objects
    - For each generated project, render `oss-card.astro` to an HTML string and assert: `<h3>` contains `title`, category text is present, description text is present, one pill per `tech` entry, license badge contains `license` value, "View Project" href equals `/open-source/${slug}`
    - Tag: `// Feature: open-source-projects-section, Property 3: OSS card renders all required fields`
    - Minimum 100 runs

  - [x]* 2.3 Write property test for Property 4 — External links have correct security and accessibility attributes
    - **Property 4: External links have correct security and accessibility attributes**
    - **Validates: Requirements 3.3, 3.4, 7.3**
    - Use a variant arbitrary `arbOssProjectWithLinks` that always generates a `repoUrl` and optionally a `demoUrl`
    - Assert every external link in the rendered card has `target="_blank"`, `rel` containing both `noopener` and `noreferrer`, and `aria-label` containing the project `title` and the phrase "opens in new tab"
    - Tag: `// Feature: open-source-projects-section, Property 4: external links have correct security and accessibility attributes`
    - Minimum 100 runs

  - [x]* 2.4 Write property test for Property 5 — Status badge appears if and only if status is present
    - **Property 5: Status badge appears if and only if status is present**
    - **Validates: Requirements 3.8**
    - Assert that a status badge element is present in the rendered HTML if and only if `project.status` is defined; when present, the badge text equals the `status` value
    - Tag: `// Feature: open-source-projects-section, Property 5: status badge appears if and only if status is present`
    - Minimum 100 runs

- [x] 3. Implement the `oss-projects.astro` landing section component
  - [x] 3.1 Create `src/components/oss-projects.astro`
    - `<section id="open-source" aria-label="Open Source Projects" class="py-12 md:py-24 px-4 md:px-0 overflow-hidden relative">`
    - Background glow div: `absolute` radial `bg-accent/5 rounded-full blur-[120px]` (mirrors `projects.astro`)
    - Heading: `<h2>` with `<span class="text-accent">/</span> Open Source Projects`, same font/size classes as the Case Studies heading
    - Subtitle paragraph styled consistently with the Case Studies subtitle
    - Card grid: `<div role="list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max items-stretch">` rendered only when `ossProjects.length > 0`; each wrapper `<div role="listitem">` containing `<OssCard project={project} />`
    - `<script>` block: `IntersectionObserver` on `.project-card` with `(index % 3) * 150` ms stagger at `threshold: 0.15`, plus `astro:after-swap` listener — identical to `projects.astro`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.5, 6.1, 6.2, 6.5, 7.1, 7.6_

  - [x]* 3.2 Write property test for Property 1 — Card grid renders exactly one card per project
    - **Property 1: Card grid renders exactly one card per project**
    - **Validates: Requirements 2.5, 2.6**
    - Generate arrays of `OssProject` objects (including empty arrays) and render `oss-projects.astro`; assert the count of `<article class="project-card">` elements equals `projects.length`
    - Tag: `// Feature: open-source-projects-section, Property 1: card grid renders exactly one card per project`
    - Minimum 100 runs

  - [x]* 3.3 Write unit tests for the landing section
    - Assert the rendered section has `id="open-source"` and `aria-label="Open Source Projects"`
    - Assert the grid container has `role="list"` and each card wrapper has `role="listitem"`
    - Assert the section heading text contains "Open Source Projects"
    - Assert that when `ossProjects` is empty, no `<article>` elements are rendered but the heading is still present
    - _Requirements: 2.1, 2.3, 2.6, 7.1, 7.6_

- [x] 4. Checkpoint — Ensure card and section tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement the `/open-source/[slug].astro` detail page
  - [x] 5.1 Create `src/pages/open-source/[slug].astro` with `getStaticPaths` and full page layout
    - `getStaticPaths()` maps every `ossProjects` entry to `{ params: { slug }, props: { project } }` — identical pattern to `case-study/[slug].astro`
    - Fixed Back button: `<a href="/#open-source" aria-label="Back to Open Source Projects">` with `mdi:arrow-left` icon, same pill styling as the case study back button
    - Hero section (full-bleed): when `heroImage` is present render `<img>` with `opacity-40` + gradient overlays; when absent render gradient-only fallback (`bg-gradient-to-br from-accent/20 via-background to-background`); hero content includes category badge, `<h1>` title, description paragraph, repo/demo link buttons
    - Quick Info bar: 4-stat grid (`License` / `mdi:scale-balance`, `Status` / `mdi:circle`, `Category` / `mdi:tag-outline`, `Links` / `mdi:link-variant`) using the same `stats-card` classes as the case study
    - Overview section: `<h2>Overview</h2>` with `mdi:information-outline` icon, description in a `bg-white/5 border border-white/10 rounded-2xl` card
    - Features section: `<h2>Features</h2>` with `mdi:star-outline` icon, checklist pattern from case study Key Takeaways (`mdi:check` in `bg-accent/10 border-accent/20` box per item)
    - Tech Stack section: `<h2>Tech Stack</h2>` with `mdi:layers-outline` icon, pill tags matching the case study Tech Stack section
    - Installation & Usage section (conditional on `installationSteps` present and non-empty): `<h2>Installation & Usage</h2>` with `mdi:console` icon, numbered step pattern from case study Approach (vertical connector line + accent-numbered boxes); when `usageExample` is also present, render `<pre class="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto"><code class="font-mono text-sm text-green-300">{usageExample}</code></pre>` after the steps
    - Links section: `<h2>Links</h2>` with `mdi:link-variant` icon, pill-style CTA buttons for "View Repository" (`repoUrl`) and optionally "Live Demo" (`demoUrl`); both `target="_blank" rel="noopener noreferrer"`
    - License & Contributing section: `<h2>License</h2>` with `mdi:scale-balance` icon, license value in a card; when `contributingGuide` is present, render a "Contributing" subsection below
    - Bottom navigation: prev/next pattern identical to case study — prev link on left, "All Open Source Projects" center button linking to `/#open-source`, next link on right
    - Footer nav: same links as case study footer nav plus `<a href="/#open-source">` with `mdi:source-branch` icon
    - All content sections wrapped in `cs-reveal` class; `<script>` block with `IntersectionObserver` identical to case study
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 6.3, 6.4, 7.4, 7.5_

  - [x]* 5.2 Write property test for Property 2 — Static paths match the ossProjects array
    - **Property 2: Static paths match the ossProjects array**
    - **Validates: Requirements 5.1**
    - Extract the `getStaticPaths` logic into a pure helper function; generate random `OssProject` arrays and assert the returned paths array has the same length and each `params.slug` equals the corresponding project's `slug`
    - Tag: `// Feature: open-source-projects-section, Property 2: static paths match ossProjects array`
    - Minimum 100 runs

  - [x]* 5.3 Write property test for Property 6 — Detail page renders all present data fields
    - **Property 6: Detail page renders all present data fields**
    - **Validates: Requirements 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10**
    - For each generated `OssProject`, render the detail page and assert: exactly one `<h1>` containing `title`; `<h2>` elements for Overview, Features, Tech Stack, and Links; one checklist item per `features[]` entry; one pill per `tech[]` entry; anchor to `repoUrl`; `demoUrl` anchor present iff `demoUrl` defined; Installation section with N step elements iff `installationSteps` is non-empty; `<pre><code>` block iff `usageExample` defined; Contributing subsection iff `contributingGuide` defined
    - Tag: `// Feature: open-source-projects-section, Property 6: detail page renders all present data fields`
    - Minimum 100 runs

  - [x]* 5.4 Write property test for Property 7 — Detail page prev/next navigation is correct
    - **Property 7: Detail page prev/next navigation is correct**
    - **Validates: Requirements 5.12**
    - Generate arrays of `OssProject` objects (minLength 1) and a random index `i`; render the detail page for `projects[i]` with the full array as context; assert a prev link to `projects[i-1].slug` is present iff `i > 0`, and a next link to `projects[i+1].slug` is present iff `i < projects.length - 1`
    - Tag: `// Feature: open-source-projects-section, Property 7: detail page prev/next navigation is correct`
    - Minimum 100 runs

  - [x]* 5.5 Write unit tests for the detail page
    - Assert the back button has `aria-label="Back to Open Source Projects"`
    - Assert the footer nav contains an `href="/#open-source"` link
    - Assert the detail page for a placeholder project with all optional fields absent renders no Installation section, no `<pre><code>` block, and no Contributing subsection
    - Assert the detail page for a placeholder project with all optional fields present renders all conditional sections
    - _Requirements: 5.11, 5.13, 5.14, 5.15_

- [x] 6. Update `nav.astro` and `index.astro`
  - [x] 6.1 Add the "Open Source" nav item to `src/components/nav.astro`
    - Insert `{ label: "Open Source", href: "#open-source", icon: "mdi:source-branch" }` into the `navItems` array immediately after the "Case Studies" entry
    - No other changes needed — the existing `IntersectionObserver` at `threshold: 0.5` automatically activates the new link when `#open-source` is 50% visible
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 6.2 Register `<OssProjects />` in `src/pages/index.astro`
    - Import `OssProjects` from `../components/oss-projects.astro`
    - Insert `<OssProjects />` immediately after `<Projects />` and before `<Interests />`
    - _Requirements: 2.1, 2.2_

  - [x]* 6.3 Write unit tests for nav and index integration
    - Assert the `navItems` array in `nav.astro` contains an entry with `href="#open-source"` positioned after the `href="#projects"` entry
    - Assert the `nav.astro` entry uses `mdi:source-branch` as its icon
    - _Requirements: 4.1, 4.2_

- [x] 7. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The `.project-card` CSS class (global reveal animation) is defined in `project-card.astro` with `is:global` — `oss-card.astro` reuses it on its `<article>` root without duplicating styles
- All Astro component rendering in tests uses `@astrojs/test-utils` or equivalent HTML-string rendering; no browser required
- Each property test must include the exact tag comment format: `// Feature: open-source-projects-section, Property N: ...`
- Placeholder seed data should use Superbet Club, DuePet, and Lockpost entries from the existing `projects` array as the source material
- The `getStaticPaths` logic for Property 2 should be extracted into a pure helper to make it unit-testable without Astro's build pipeline

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["1.3", "2.1"] },
    { "id": 2, "tasks": ["2.2", "2.3", "2.4", "3.1"] },
    { "id": 3, "tasks": ["3.2", "3.3", "5.1"] },
    { "id": 4, "tasks": ["5.2", "5.3", "5.4", "5.5", "6.1", "6.2"] },
    { "id": 5, "tasks": ["6.3"] }
  ]
}
```
