# Requirements Document

## Introduction

This feature adds an "Open Source Projects" section to the existing personal developer portfolio website (Astro 6, Tailwind CSS 4, TypeScript). The section showcases the portfolio owner's FOSS (Free and Open Source Software) contributions and personal open-source projects.

The new section mirrors the existing "Case Studies" section in terms of landing-page layout and navigation patterns, but each project's detail page is purpose-built for open-source software presentation — covering overview, tech stack, features, installation/usage, repository/demo links, license, and contribution information rather than a professional case study format.

The section appears after the Case Studies section on the landing page, has its own navbar link, and is seeded with 3 placeholder projects (reusing existing case study data as a starting point, to be replaced with real content later).

---

## Glossary

- **Portfolio_Site**: The Astro 6 static portfolio website being modified.
- **Landing_Page**: The single-page entry point at `src/pages/index.astro` that composes all section components.
- **Case_Studies_Section**: The existing `<Projects />` component rendered at `#projects`, displaying professional project cards.
- **OSS_Section**: The new "Open Source Projects" section component to be created, rendered at `#open-source`.
- **OSS_Card**: A project card within the OSS_Section, visually consistent with the existing `project-card.astro` component.
- **OSS_Detail_Page**: A dynamic Astro page at `/open-source/[slug]` that presents a single open-source project in FOSS-appropriate format.
- **OSS_Project**: A data record describing one open-source project, stored in `src/data.ts`.
- **Navbar**: The `nav.astro` component providing fixed navigation with anchor links.
- **Accent_Color**: The brand purple `#a476ff`, referenced via the `text-accent` / `bg-accent` / `border-accent` Tailwind utilities.
- **Background_Color**: The dark navy `#1d1a3c`, referenced via `bg-background` / `var(--color-background)`.
- **Slug**: A URL-safe kebab-case string uniquely identifying an OSS_Project, used as the route parameter for OSS_Detail_Page.
- **Tech_Stack_Tags**: Inline pill-style labels listing the technologies used in a project.
- **Hero_Image**: An optional banner image displayed at the top of an OSS_Detail_Page.
- **License_Badge**: A visual indicator showing the open-source license (e.g., MIT, Apache 2.0, GPL-3.0) of an OSS_Project.
- **Placeholder_Project**: One of the 3 initial OSS_Projects seeded from existing case study data, intended to be replaced with real content later.

---

## Requirements

### Requirement 1: OSS_Project Data Model

**User Story:** As a developer maintaining the portfolio, I want a typed data structure for open-source projects, so that I can add, update, and type-check project content in one canonical location.

#### Acceptance Criteria

1. THE `Portfolio_Site` SHALL define an `OssProject` TypeScript interface in `src/data.ts` with the following required fields: `title` (string), `slug` (string), `description` (string), `tech` (string array), `repoUrl` (string), `license` (string), `features` (string array), `category` (string).
2. THE `Portfolio_Site` SHALL define an `OssProject` TypeScript interface in `src/data.ts` with the following optional fields: `demoUrl` (string), `heroImage` (string), `installationSteps` (string array), `usageExample` (string), `contributingGuide` (string), `status` (string — e.g., "Active", "Archived", "Experimental").
3. THE `Portfolio_Site` SHALL export an `ossProjects` array of type `OssProject[]` from `src/data.ts` as the canonical data source for the OSS_Section and OSS_Detail_Page.
4. THE `Portfolio_Site` SHALL seed the `ossProjects` array with exactly 3 Placeholder_Projects derived from existing case study content at the time of implementation.
5. WHEN the `ossProjects` array is imported by any component, THE `Portfolio_Site` SHALL resolve without TypeScript compilation errors.

---

### Requirement 2: OSS Section Landing Page Component

**User Story:** As a visitor to the portfolio, I want to see a dedicated "Open Source Projects" section on the landing page, so that I can quickly browse the portfolio owner's open-source work.

#### Acceptance Criteria

1. THE `Portfolio_Site` SHALL render an `<OssProjects />` Astro component as a `<section>` element with `id="open-source"` on the Landing_Page.
2. THE `Portfolio_Site` SHALL position the OSS_Section immediately after the Case_Studies_Section in the Landing_Page component order.
3. THE OSS_Section SHALL display a section heading reading "Open Source Projects" styled consistently with the Case_Studies_Section heading (same font, size, and Accent_Color slash prefix pattern).
4. THE OSS_Section SHALL display a subtitle paragraph describing the section's purpose, styled consistently with the Case_Studies_Section subtitle.
5. THE OSS_Section SHALL render one OSS_Card per entry in the `ossProjects` array in a responsive grid layout matching the Case_Studies_Section grid (1 column on mobile, 2 on tablet, 3 on desktop).
6. WHEN the `ossProjects` array contains 0 entries, THE OSS_Section SHALL render the section heading and subtitle but no card grid.

---

### Requirement 3: OSS Card Component

**User Story:** As a visitor, I want each open-source project card to show key information at a glance, so that I can decide which projects to explore further.

#### Acceptance Criteria

1. THE OSS_Card SHALL display the project `title`, `category`, `description` (truncated to 3 lines with a "Read more" toggle), and `tech` array as Tech_Stack_Tags.
2. THE OSS_Card SHALL display a License_Badge showing the project's `license` value, visually distinct from Tech_Stack_Tags (e.g., different border color or icon).
3. WHEN an OSS_Project has a `repoUrl`, THE OSS_Card SHALL render a link to `repoUrl` opening in a new tab with `rel="noopener noreferrer"`.
4. WHEN an OSS_Project has a `demoUrl`, THE OSS_Card SHALL render a link to `demoUrl` opening in a new tab with `rel="noopener noreferrer"`.
5. THE OSS_Card SHALL render a "View Project" call-to-action link navigating to `/open-source/[slug]`.
6. THE OSS_Card SHALL apply the same scroll-reveal animation pattern (`.project-card` class with `IntersectionObserver` stagger) used by the existing `project-card.astro` component.
7. THE OSS_Card SHALL use only Tailwind CSS utility classes and the existing theme tokens (`text-accent`, `bg-accent`, `border-accent`, `font-heading`, `font-body`) for all styling — no new CSS custom properties or external stylesheets.
8. WHEN an OSS_Project has a `status` value, THE OSS_Card SHALL display a status indicator (e.g., "Active", "Archived") as a small badge.

---

### Requirement 4: Navbar Link

**User Story:** As a visitor, I want a navbar link to the Open Source Projects section, so that I can navigate directly to it from anywhere on the page.

#### Acceptance Criteria

1. THE Navbar SHALL include a navigation item with label "Open Source" and `href="#open-source"` inserted after the existing "Case Studies" item.
2. THE Navbar SHALL assign an appropriate MDI icon to the "Open Source" nav item (e.g., `mdi:source-branch` or `mdi:github`), consistent with the icon style of existing nav items.
3. WHEN the viewport scrolls such that the `#open-source` section is 50% visible, THE Navbar SHALL apply the `active` CSS class to the "Open Source" nav link, consistent with the existing section-highlighting behavior.
4. THE Navbar SHALL display the "Open Source" label as text on desktop and as an icon with label below on mobile, consistent with existing nav item rendering.

---

### Requirement 5: OSS Detail Page

**User Story:** As a visitor, I want a dedicated detail page for each open-source project, so that I can read a comprehensive presentation of the project including how to use it and contribute to it.

#### Acceptance Criteria

1. THE `Portfolio_Site` SHALL generate a static page at `/open-source/[slug]` for each entry in the `ossProjects` array using Astro's `getStaticPaths`.
2. THE OSS_Detail_Page SHALL render a Hero section displaying the project `title`, `category`, `description`, and `heroImage` (if present), styled consistently with the existing case study hero section (full-bleed image with gradient overlay, or a gradient-only fallback when no image is provided).
3. THE OSS_Detail_Page SHALL render a "Quick Info" stats bar displaying: `license`, `status` (if present), `category`, and a link count (repo + demo links available), styled as stat cards consistent with the case study Quick Stats bar.
4. THE OSS_Detail_Page SHALL render an "Overview" section with the project's `description` as the primary content.
5. THE OSS_Detail_Page SHALL render a "Features" section listing each entry in the `features` array, styled as a checklist consistent with the case study Key Takeaways section.
6. THE OSS_Detail_Page SHALL render a "Tech Stack" section displaying `tech` array entries as pill tags, styled consistently with the case study Tech Stack section.
7. WHEN an OSS_Project has `installationSteps`, THE OSS_Detail_Page SHALL render an "Installation & Usage" section listing each step, styled as a numbered step list consistent with the case study Approach section.
8. WHEN an OSS_Project has a `usageExample`, THE OSS_Detail_Page SHALL render the usage example inside a styled code block within the "Installation & Usage" section.
9. THE OSS_Detail_Page SHALL render a "Links" section containing: a link to `repoUrl` labeled "View Repository" and, when `demoUrl` is present, a link labeled "Live Demo". Both links SHALL open in a new tab with `rel="noopener noreferrer"`.
10. THE OSS_Detail_Page SHALL render a "License" section displaying the `license` value and, when `contributingGuide` is present, a "Contributing" subsection with the guide content.
11. THE OSS_Detail_Page SHALL render a fixed "Back" button linking to `/#open-source`, styled consistently with the case study back button.
12. THE OSS_Detail_Page SHALL render a bottom navigation bar with prev/next OSS_Project links and an "All Open Source Projects" link to `/#open-source`, styled consistently with the case study navigation.
13. THE OSS_Detail_Page SHALL render a footer navigation bar with links to all main portfolio sections (`#home`, `#skills`, `#career`, `#projects`, `#open-source`, `#contact`), styled consistently with the case study footer nav.
14. THE OSS_Detail_Page SHALL apply the `.cs-reveal` scroll-triggered animation class and `IntersectionObserver` pattern used in the existing case study page for all content sections.
15. WHEN an OSS_Detail_Page is rendered for a Placeholder_Project, THE OSS_Detail_Page SHALL display all available placeholder data without rendering empty or broken sections.

---

### Requirement 6: Visual Design Consistency

**User Story:** As a visitor, I want the Open Source Projects section and detail pages to look like a natural part of the existing portfolio, so that the site feels cohesive.

#### Acceptance Criteria

1. THE OSS_Section SHALL use `Background_Color` (`#1d1a3c`) as the page background, consistent with all other sections.
2. THE OSS_Section SHALL use `Accent_Color` (`#a476ff`) for interactive highlights, borders on hover, and decorative elements, consistent with the Case_Studies_Section.
3. THE OSS_Detail_Page SHALL use the same `font-heading` (Space Grotesk Variable) and `font-body` (Inter Variable) Tailwind utilities as the rest of the site.
4. THE OSS_Detail_Page SHALL use `bg-white/5`, `border-white/10`, and `rounded-2xl` card styles for content sections, consistent with the case study detail page.
5. THE OSS_Section background glow effect (radial `bg-accent/5` blur) SHALL be present, consistent with the Case_Studies_Section.
6. WHEN an OSS_Card or OSS_Detail_Page section is hovered, THE `Portfolio_Site` SHALL apply `hover:border-accent/40` or equivalent accent-tinted border transitions, consistent with existing hover patterns.

---

### Requirement 7: Accessibility and Markup Quality

**User Story:** As a visitor using assistive technology, I want the Open Source Projects section to be navigable and understandable, so that I can access the content regardless of how I browse the web.

#### Acceptance Criteria

1. THE OSS_Section `<section>` element SHALL include an `aria-label="Open Source Projects"` attribute.
2. THE OSS_Card SHALL use a semantic `<article>` element as its root, with the project title rendered as an `<h3>` heading.
3. WHEN an OSS_Card link opens in a new tab, THE OSS_Card SHALL include `aria-label` text that communicates the destination and that it opens in a new tab (e.g., `aria-label="View repository for [title], opens in new tab"`).
4. THE OSS_Detail_Page SHALL use a single `<h1>` for the project title and `<h2>` elements for each named section (Overview, Features, Tech Stack, Installation & Usage, Links, License).
5. THE OSS_Detail_Page back button SHALL include an `aria-label="Back to Open Source Projects"` attribute.
6. THE OSS_Section card grid SHALL include `role="list"` on the grid container and `role="listitem"` on each card wrapper, consistent with accessible list patterns.
