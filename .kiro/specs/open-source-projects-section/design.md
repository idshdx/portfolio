# Design Document — Open Source Projects Section

## Overview

This document describes the technical design for adding an "Open Source Projects" section to the Astro 6 + Tailwind CSS 4 portfolio site. The feature introduces a new landing-page section (`#open-source`), a reusable card component, a dynamic detail page at `/open-source/[slug]`, a navbar entry, and a typed data model — all following the conventions already established by the Case Studies section.

The design goal is zero visual discontinuity: a visitor should perceive the OSS section as a natural extension of the existing portfolio rather than a bolt-on addition. Every layout decision, animation pattern, color token, and markup convention is derived directly from the existing `projects.astro` / `project-card.astro` / `case-study/[slug].astro` trio.

### Key Design Decisions

| Decision | Rationale |
|---|---|
| `<article>` root for OSS card | Semantically correct for self-contained content items; distinguishes from the `<div>`-rooted `project-card.astro` |
| License badge uses `border-yellow-500/30 text-yellow-400` | Visually distinct from tech tags (`border-white/5 text-white/60`) without introducing new tokens |
| Status badge color-coded by value | Active=green (`text-green-400`), Archived=gray (`text-gray-400`), Experimental=orange (`text-orange-400`) — communicates project health at a glance |
| Hero fallback is gradient-only | `bg-gradient-to-br from-accent/20 via-background to-background` when no `heroImage` — consistent with the site's accent-purple identity |
| Quick Info bar mirrors case study Quick Stats | Same 4-card grid, same stat-card classes; different icons and data fields appropriate for OSS context |
| Installation steps reuse Approach numbered-step pattern | Vertical connector line + numbered accent boxes — no new CSS needed |
| Usage example uses `<pre><code>` with `bg-black/40` | Monospace code block styled with `text-green-300` for terminal-like feel, consistent with the dark theme |
| Nav icon `mdi:source-branch` | Universally recognized git-branching icon; communicates "open source" without ambiguity |
| `role="list"` / `role="listitem"` on grid | Matches the existing `nav.astro` pattern; required for screen readers that strip list semantics from CSS grids |

---

## Architecture

The feature follows the existing single-page architecture: all rendering is server-side Astro, interactivity is vanilla JS in `<script>` blocks, and data lives in `src/data.ts`.

```
src/data.ts                          ← OssProject interface + ossProjects[]
src/components/oss-projects.astro    ← Landing section (#open-source)
src/components/oss-card.astro        ← Individual card (<article>)
src/pages/open-source/[slug].astro   ← Static detail pages
src/components/nav.astro             ← +1 nav item after "Case Studies"
src/pages/index.astro                ← <OssProjects /> after <Projects />
```

### Data Flow

```
src/data.ts
  └── ossProjects: OssProject[]
        ├── imported by oss-projects.astro  → renders N oss-card.astro instances
        ├── imported by open-source/[slug].astro → getStaticPaths() + detail render
        └── (nav.astro has no data dependency — href is a static anchor)
```

### Static Path Generation

`open-source/[slug].astro` uses `getStaticPaths()` mapping every `ossProjects` entry to its `slug` param — identical to the existing `case-study/[slug].astro` pattern:

```typescript
export async function getStaticPaths() {
  return ossProjects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
```

---

## Components and Interfaces

### 1. `OssProject` (src/data.ts)

```typescript
export interface OssProject {
  // Required
  title: string;
  slug: string;
  description: string;
  tech: string[];
  repoUrl: string;
  license: string;
  features: string[];
  category: string;
  // Optional
  demoUrl?: string;
  heroImage?: string;
  installationSteps?: string[];
  usageExample?: string;
  contributingGuide?: string;
  status?: 'Active' | 'Archived' | 'Experimental';
}

export const ossProjects: OssProject[] = [
  // 3 placeholder entries seeded from existing case study data
];
```

The `status` field uses a string union rather than a plain `string` to enable exhaustive color-mapping in components without a runtime lookup table.

### 2. `oss-projects.astro` (Landing Section)

**Props:** none (imports `ossProjects` directly)

**Structure:**
```
<section id="open-source" aria-label="Open Source Projects">
  <!-- Background glow (mirrors projects.astro) -->
  <div class="absolute ... bg-accent/5 rounded-full blur-[120px]" />

  <div class="container mx-auto relative z-10">
    <!-- Heading: <span class="text-accent">/</span> Open Source Projects -->
    <!-- Subtitle paragraph -->

    <!-- Card grid -->
    <div role="list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {ossProjects.map((project, index) => (
        <div role="listitem" class="oss-wrapper">
          <OssCard project={project} />
        </div>
      ))}
    </div>
  </div>
</section>
```

**Script:** `IntersectionObserver` on `.project-card` elements with `(index % 3) * 150` ms stagger at `threshold: 0.15` — identical to `projects.astro`. The `.project-card` CSS class (defined globally in `project-card.astro`) is reused on the `<article>` root of `oss-card.astro` so the same reveal animation applies without duplicating styles.

**Empty state:** When `ossProjects.length === 0`, the grid `<div>` is not rendered (conditional `{ossProjects.length > 0 && <div ...>}`), but the heading and subtitle remain visible.

### 3. `oss-card.astro` (Card Component)

**Props:** `{ project: OssProject }`

**Root element:** `<article>` (semantic self-contained content item)

**Structure:**
```
<article class="project-card group relative flex flex-col h-full
                bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                hover:border-accent/40 transition-all duration-500">

  <!-- Hero image strip (h-32, same as project-card) or gradient fallback -->
  <div class="h-32 w-full relative overflow-hidden ...">
    {project.heroImage
      ? <img src={project.heroImage} ... />
      : <div class="w-full h-full bg-gradient-to-br from-accent/20 via-background to-background" />
    }
    <!-- Status badge (top-right, absolute) -->
    {project.status && <StatusBadge status={project.status} />}
  </div>

  <div class="p-6 flex flex-col flex-grow space-y-4">
    <!-- Category + Title -->
    <span class="text-accent text-[10px] uppercase tracking-widest font-bold">{category}</span>
    <h3 class="text-xl font-heading font-bold text-white">{title}</h3>

    <!-- Description (line-clamp-3 + Read more toggle) -->
    <div class="description-container ...">
      <div class="line-clamp-3 ...">{description}</div>
      <button class="read-more-btn ...">Read more</button>
    </div>

    <!-- Tech tags -->
    <div class="flex flex-wrap gap-2">
      {tech.map(t => <span class="px-2 py-1 bg-white/5 rounded-md text-[10px] text-white/60 border border-white/5">{t}</span>)}
    </div>

    <!-- License badge (visually distinct) -->
    <span class="px-2 py-1 rounded-md text-[10px] font-bold
                 border border-yellow-500/30 text-yellow-400
                 flex items-center gap-1 w-fit">
      <Icon name="mdi:scale-balance" class="w-3 h-3" />
      {license}
    </span>

    <!-- External links row -->
    <div class="flex gap-3 mt-auto">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer"
         aria-label={`View repository for ${title}, opens in new tab`}
         class="inline-flex items-center gap-1 text-accent text-xs font-bold ...">
        <Icon name="mdi:github" /> Repo
      </a>
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer"
           aria-label={`View demo for ${title}, opens in new tab`}
           class="...">
          <Icon name="mdi:open-in-new" /> Demo
        </a>
      )}
    </div>

    <!-- View Project CTA -->
    <a href={`/open-source/${slug}`}
       class="inline-flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all duration-300 group/cta">
      <span>View Project</span>
      <Icon name="mdi:arrow-right" class="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
    </a>
  </div>
</article>
```

**Status badge color mapping:**
- `Active` → `bg-green-500/10 border-green-500/20 text-green-400`
- `Archived` → `bg-gray-500/10 border-gray-500/20 text-gray-400`
- `Experimental` → `bg-orange-500/10 border-orange-500/20 text-orange-400`

The badge is positioned `absolute top-3 right-3 z-20` inside the hero strip, mirroring the platform badge pattern in `project-card.astro`.

### 4. `open-source/[slug].astro` (Detail Page)

**Props:** `{ project: OssProject }` (via `getStaticPaths`)

**Page sections (in order):**

| Section | Element | Icon | Color accent |
|---|---|---|---|
| Fixed Back button | `<a>` fixed top-left | `mdi:arrow-left` | white/10 → accent/40 on hover |
| Hero | `<section>` full-bleed | — | gradient overlay |
| Quick Info bar | `<section>` 4-col grid | per-stat icons | accent |
| Overview | `<section>` | `mdi:information-outline` | blue-500 |
| Features | `<section>` | `mdi:star-outline` | yellow-500 |
| Tech Stack | `<section>` | `mdi:layers-outline` | accent |
| Installation & Usage | `<section>` (conditional) | `mdi:console` | accent |
| Links | `<section>` | `mdi:link-variant` | accent |
| License & Contributing | `<section>` | `mdi:scale-balance` | green-500 |
| Bottom nav | `<section>` | `mdi:arrow-left/right` | — |
| Footer nav | `<footer>` | per-section icons | — |

**Hero section:**
- When `heroImage` is present: `<img>` with `opacity-40` + gradient overlays (identical to case study hero)
- When `heroImage` is absent: gradient-only `<div class="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background">`
- Hero content: category badge, `<h1>` title, description paragraph, repo/demo link buttons

**Quick Info bar (4 stat cards):**

| Stat | Icon | Value |
|---|---|---|
| License | `mdi:scale-balance` | `project.license` |
| Status | `mdi:circle` | `project.status ?? "—"` |
| Category | `mdi:tag-outline` | `project.category` |
| Links | `mdi:link-variant` | count of available links (1 or 2) |

**Features section:** Checklist pattern from case study Key Takeaways — `mdi:check` icon in `bg-accent/10 border-accent/20` box, one item per `features[]` entry.

**Installation & Usage section:** Rendered only when `installationSteps` is present. Numbered step pattern from case study Approach section (vertical connector line, accent-numbered boxes). When `usageExample` is also present, a `<pre><code>` block follows the steps:

```html
<pre class="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto">
  <code class="font-mono text-sm text-green-300">{usageExample}</code>
</pre>
```

**Links section:** Two CTA buttons styled as `bg-white/5 border border-white/10 rounded-full` pill links, consistent with the case study "Visit Live Project" button.

**License & Contributing section:** License value displayed in a `bg-white/5 border border-white/10 rounded-2xl` card. When `contributingGuide` is present, a "Contributing" subsection renders the guide text below the license card.

**Bottom navigation:** Prev/next pattern identical to case study — flex row with prev on left, "All Open Source Projects" center button linking to `/#open-source`, next on right.

**Footer navigation:** Adds `#open-source` link (with `mdi:source-branch` icon) to the existing set of section links.

### 5. `nav.astro` (Modified)

A single entry is inserted into the `navItems` array after the "Case Studies" item:

```typescript
{
  label: "Open Source",
  href: "#open-source",
  icon: "mdi:source-branch",
},
```

No other changes to `nav.astro` are required. The existing `IntersectionObserver` on `section[id]` at `threshold: 0.5` automatically picks up the new `#open-source` section.

### 6. `index.astro` (Modified)

```astro
import OssProjects from "../components/oss-projects.astro";
// ...
<Projects />
<OssProjects />   <!-- inserted here -->
<Interests />
```

---

## Data Models

### `OssProject` Interface

```typescript
export interface OssProject {
  title: string;           // Display name of the project
  slug: string;            // URL-safe kebab-case identifier
  description: string;     // Single paragraph overview
  tech: string[];          // Technology names for pill tags
  repoUrl: string;         // GitHub/GitLab repository URL
  license: string;         // SPDX license identifier (e.g., "MIT", "Apache-2.0")
  features: string[];      // Bullet-point feature list for detail page
  category: string;        // Project category label (e.g., "CLI Tool", "Library")
  demoUrl?: string;        // Optional live demo URL
  heroImage?: string;      // Optional /public path to hero image
  installationSteps?: string[];  // Optional ordered installation steps
  usageExample?: string;   // Optional code snippet string
  contributingGuide?: string;    // Optional contributing instructions
  status?: 'Active' | 'Archived' | 'Experimental';
}
```

### Placeholder Seed Data (3 entries)

The three placeholder entries are derived from existing case study projects (Superbet Club, DuePet, ISP Database), adapted to the `OssProject` shape. They use `status: 'Active'` and include representative `features`, `installationSteps`, and `usageExample` values so every conditional section on the detail page renders during development.

### Type Compatibility

`OssProject` is intentionally separate from the existing `Project` interface. They share no inheritance relationship — OSS projects have a fundamentally different presentation model (license, features, installation) versus professional case studies (results, approach, team). Keeping them separate avoids polluting either interface with optional fields that only apply to the other.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

Before writing properties, redundancy was assessed across the prework analysis:

- Properties 3.3 and 3.4 (repoUrl link / demoUrl link attributes) share the same structure — both test "for any project with URL field X, the rendered link has correct target/rel/aria-label". These can be combined into one property covering all external links.
- Properties 5.4, 5.5, 5.6 (Overview, Features, Tech Stack sections) all follow the pattern "for any OssProject, section Y renders all N items from array Z". These can be combined into one comprehensive "detail page renders all data fields" property.
- Properties 5.7 and 5.8 (installationSteps and usageExample) are both conditional on optional fields and can be combined.
- Properties 7.2 and 7.3 (semantic article root + aria-labels on links) both concern card markup correctness and can be combined.
- Properties 5.2 and 5.3 (hero + quick info bar) both concern the detail page header area and can be combined.
- Property 2.5 (card count) and 5.1 (static path count) are independent — both kept.

After reflection, 12 candidate properties reduce to 7 non-redundant properties.

---

### Property 1: Card grid renders exactly one card per project

*For any* `ossProjects` array of length N (including N=0), the OSS section's card grid SHALL contain exactly N `<article>` elements with the `project-card` class.

**Validates: Requirements 2.5, 2.6**

---

### Property 2: Static paths match the ossProjects array

*For any* `ossProjects` array of length N, `getStaticPaths()` in `open-source/[slug].astro` SHALL return exactly N path objects, each with a `params.slug` equal to the corresponding `OssProject.slug`.

**Validates: Requirements 5.1**

---

### Property 3: OSS card renders all required fields

*For any* `OssProject`, the rendered `oss-card.astro` SHALL contain: the project `title` in an `<h3>` element, the `category` text, the `description` text, one pill element per `tech` entry, a license badge containing the `license` value, and a "View Project" anchor with `href="/open-source/{slug}"`.

**Validates: Requirements 3.1, 3.2, 3.5, 7.2**

---

### Property 4: External links have correct security and accessibility attributes

*For any* `OssProject` with a `repoUrl` or `demoUrl`, every rendered external link in `oss-card.astro` SHALL have `target="_blank"`, `rel="noopener noreferrer"`, and an `aria-label` attribute containing both the project `title` and the phrase "opens in new tab".

**Validates: Requirements 3.3, 3.4, 7.3**

---

### Property 5: Status badge appears if and only if status is present

*For any* `OssProject`, the rendered `oss-card.astro` SHALL display a status badge if and only if `project.status` is defined. When displayed, the badge text SHALL equal the `status` value.

**Validates: Requirements 3.8**

---

### Property 6: Detail page renders all present data fields

*For any* `OssProject`, the rendered `/open-source/[slug]` page SHALL:
- Contain exactly one `<h1>` with the project `title`
- Contain `<h2>` elements for Overview, Features, Tech Stack, and Links sections
- Contain exactly as many feature checklist items as entries in `features[]`
- Contain exactly as many tech pill elements as entries in `tech[]`
- Contain an anchor to `repoUrl` in the Links section
- Contain a `demoUrl` anchor if and only if `demoUrl` is defined
- Contain an Installation & Usage section with numbered steps if and only if `installationSteps` is defined and non-empty
- Contain a `<pre><code>` block with `usageExample` text if and only if `usageExample` is defined
- Contain a `contributingGuide` subsection if and only if `contributingGuide` is defined

**Validates: Requirements 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10**

---

### Property 7: Detail page prev/next navigation is correct

*For any* `OssProject` at index `i` in the `ossProjects` array, the rendered detail page's bottom navigation SHALL:
- Display a "previous" link to `ossProjects[i-1].slug` if and only if `i > 0`
- Display a "next" link to `ossProjects[i+1].slug` if and only if `i < ossProjects.length - 1`

**Validates: Requirements 5.12**

---

## Error Handling

### Missing Optional Fields

All optional `OssProject` fields are handled with conditional rendering — no section is rendered when its data source is absent. This prevents empty `<section>` elements or broken layouts for placeholder projects that lack `heroImage`, `installationSteps`, `usageExample`, or `contributingGuide`.

Pattern used throughout:
```astro
{project.installationSteps && project.installationSteps.length > 0 && (
  <section>...</section>
)}
```

### Missing Hero Image

The hero strip in both `oss-card.astro` and the detail page uses a conditional:
```astro
{project.heroImage
  ? <img src={project.heroImage} alt={`${project.title} hero`} ... />
  : <div class="w-full h-full bg-gradient-to-br from-accent/20 via-background to-background" />
}
```
This ensures the hero area always has a visual presence regardless of whether an image is provided.

### Invalid Slug

Astro's static generation means only slugs present in `ossProjects` at build time produce pages. Requests for unknown slugs result in a 404 from the static host — no runtime error handling is needed. The `slug` field should be validated at the data layer (unique, URL-safe) to prevent build-time collisions.

### Empty ossProjects Array

The landing section handles an empty array gracefully: the heading and subtitle render, but the grid container is omitted. The nav link to `#open-source` still appears and scrolls to the section correctly.

### TypeScript Compilation Errors

The `OssProject` interface enforces required fields at compile time. Any `ossProjects` entry missing a required field (e.g., `repoUrl`, `license`) will produce a TypeScript error during `npm run build`, preventing a broken deployment.

---

## Testing Strategy

### Assessment: Is Property-Based Testing Applicable?

This feature involves rendering Astro components from typed data objects. The core logic is data-to-markup transformation — a pure function from `OssProject` → HTML string. This is well-suited for property-based testing:

- Input space is large (arbitrary `OssProject` objects with varying optional fields)
- Universal properties hold across all valid inputs (card always has h3, links always have aria-label, etc.)
- 100 iterations with generated inputs would surface edge cases (very long titles, empty arrays, special characters in slugs, all optional fields absent vs. all present)
- Tests run against rendered HTML strings — no external services, no I/O, low cost per iteration

**PBT library:** [fast-check](https://github.com/dubzzz/fast-check) (TypeScript-native, well-maintained, works with any test runner)

**Test runner:** Vitest (already in the Astro ecosystem; `@astrojs/test-utils` for component rendering)

### Unit Tests

Unit tests cover specific examples, edge cases, and integration points:

- `ossProjects` array has exactly 3 entries (Requirement 1.4)
- `ossProjects` imports without TypeScript errors (Requirement 1.5)
- `oss-projects.astro` renders `section#open-source` with `aria-label` (Requirement 7.1)
- `oss-projects.astro` renders `role="list"` on grid and `role="listitem"` on wrappers (Requirement 7.6)
- Nav contains "Open Source" item after "Case Studies" (Requirement 4.1)
- Detail page back button has `aria-label="Back to Open Source Projects"` (Requirement 7.5)
- Detail page footer nav contains `#open-source` link (Requirement 5.13)
- Empty `ossProjects` array: section renders heading but no grid (Requirement 2.6)
- Placeholder project with all optional fields absent: no broken/empty sections (Requirement 5.15)

### Property-Based Tests

Each property test uses fast-check arbitraries to generate random `OssProject` instances and asserts the universal property holds. Minimum 100 iterations per test.

**Tag format:** `// Feature: open-source-projects-section, Property {N}: {property_text}`

**Property 1 — Card count:**
```typescript
// Feature: open-source-projects-section, Property 1: card grid renders exactly one card per project
fc.assert(fc.property(
  fc.array(arbOssProject),
  (projects) => {
    const html = renderOssProjects(projects);
    const articleCount = countElements(html, 'article.project-card');
    return articleCount === projects.length;
  }
), { numRuns: 100 });
```

**Property 2 — Static paths:**
```typescript
// Feature: open-source-projects-section, Property 2: static paths match ossProjects array
fc.assert(fc.property(
  fc.array(arbOssProject, { minLength: 1 }),
  (projects) => {
    const paths = getStaticPathsFrom(projects);
    return paths.length === projects.length &&
      paths.every((p, i) => p.params.slug === projects[i].slug);
  }
), { numRuns: 100 });
```

**Property 3 — Card renders all required fields:**
```typescript
// Feature: open-source-projects-section, Property 3: OSS card renders all required fields
fc.assert(fc.property(
  arbOssProject,
  (project) => {
    const html = renderOssCard(project);
    return containsH3(html, project.title) &&
      containsText(html, project.category) &&
      containsText(html, project.description) &&
      project.tech.every(t => containsText(html, t)) &&
      containsText(html, project.license) &&
      containsHref(html, `/open-source/${project.slug}`);
  }
), { numRuns: 100 });
```

**Property 4 — External link attributes:**
```typescript
// Feature: open-source-projects-section, Property 4: external links have correct security and accessibility attributes
fc.assert(fc.property(
  arbOssProjectWithLinks,
  (project) => {
    const html = renderOssCard(project);
    const externalLinks = extractExternalLinks(html);
    return externalLinks.every(link =>
      link.target === '_blank' &&
      link.rel.includes('noopener') &&
      link.rel.includes('noreferrer') &&
      link.ariaLabel.includes(project.title) &&
      link.ariaLabel.includes('opens in new tab')
    );
  }
), { numRuns: 100 });
```

**Property 5 — Status badge conditional:**
```typescript
// Feature: open-source-projects-section, Property 5: status badge appears if and only if status is present
fc.assert(fc.property(
  arbOssProject,
  (project) => {
    const html = renderOssCard(project);
    const hasBadge = containsStatusBadge(html);
    return hasBadge === (project.status !== undefined);
  }
), { numRuns: 100 });
```

**Property 6 — Detail page renders all present data fields:**
```typescript
// Feature: open-source-projects-section, Property 6: detail page renders all present data fields
fc.assert(fc.property(
  arbOssProject,
  (project) => {
    const html = renderDetailPage(project);
    return countElements(html, 'h1') === 1 &&
      containsH1(html, project.title) &&
      project.features.every(f => containsText(html, f)) &&
      project.tech.every(t => containsText(html, t)) &&
      containsHref(html, project.repoUrl) &&
      (project.demoUrl ? containsHref(html, project.demoUrl) : !containsHref(html, 'demoUrl')) &&
      (project.installationSteps?.length
        ? countElements(html, '.step-number') === project.installationSteps.length
        : !containsSection(html, 'Installation')) &&
      (project.usageExample
        ? containsInCode(html, project.usageExample)
        : !containsElement(html, 'pre code')) &&
      (project.contributingGuide
        ? containsText(html, project.contributingGuide)
        : !containsText(html, 'Contributing'));
  }
), { numRuns: 100 });
```

**Property 7 — Prev/next navigation:**
```typescript
// Feature: open-source-projects-section, Property 7: detail page prev/next navigation is correct
fc.assert(fc.property(
  fc.array(arbOssProject, { minLength: 1 }),
  fc.nat(),
  (projects, rawIndex) => {
    const i = rawIndex % projects.length;
    const html = renderDetailPage(projects[i], projects);
    const hasPrev = i > 0;
    const hasNext = i < projects.length - 1;
    return (hasPrev ? containsHref(html, `/open-source/${projects[i-1].slug}`) : true) &&
      (hasNext ? containsHref(html, `/open-source/${projects[i+1].slug}`) : true);
  }
), { numRuns: 100 });
```

### Dual Coverage Summary

| Requirement Area | Unit Tests | Property Tests |
|---|---|---|
| Data model (Req 1) | ✓ compile check, array length | — |
| Landing section (Req 2) | ✓ section ID, aria-label, grid roles | Property 1 (card count) |
| Card component (Req 3) | ✓ CSS class, read-more toggle | Properties 3, 4, 5 |
| Navbar (Req 4) | ✓ item order, icon, label | — |
| Detail page (Req 5) | ✓ back button, footer nav, .cs-reveal | Properties 2, 6, 7 |
| Visual design (Req 6) | ✓ glow div, hover classes | — |
| Accessibility (Req 7) | ✓ aria-label, role attrs | Properties 3, 4 |
