import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import type { OssProject } from './data/site/types';

// ─── renderOssProjects helper ─────────────────────────────────────────────────
// Replicates the HTML generation logic of oss-projects.astro as a pure function
// so tests can run in a plain Node environment without Astro's build pipeline.
// Mirrors the structure defined in design.md §2 and oss-projects.astro.

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderOssCard(project: OssProject): string {
  return `<article class="project-card group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500">
  <div class="p-6 flex flex-col flex-grow space-y-4">
    <div>
      <span class="text-accent text-[10px] uppercase tracking-widest font-bold">${escapeHtml(project.category)}</span>
      <h3 class="text-xl font-heading font-bold text-white mt-1">${escapeHtml(project.title)}</h3>
    </div>
  </div>
</article>`;
}

function renderOssProjects(projects: OssProject[]): string {
  const cardGrid =
    projects.length > 0
      ? `<div role="list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max items-stretch">
        ${projects
          .map(
            (project) =>
              `<div role="listitem">
            ${renderOssCard(project)}
          </div>`,
          )
          .join('\n        ')}
      </div>`
      : '';

  return `<section id="open-source" aria-label="Open Source Projects" class="py-12 md:py-24 px-4 md:px-0 overflow-hidden relative">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="container mx-auto relative z-10">
    <div class="mb-16 md:mb-20">
      <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-4 flex items-center gap-4">
        <span class="text-accent">/</span> Open Source Projects
      </h2>
      <p class="text-gray-400 font-body text-base md:text-lg max-w-2xl leading-relaxed">
        A selected collection of free open-source tools, libraries built in public.
      </p>
    </div>
    ${cardGrid}
  </div>
</section>`;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Count non-overlapping occurrences of a substring in a string */
function countOccurrences(html: string, needle: string): number {
  let count = 0;
  let pos = 0;
  while ((pos = html.indexOf(needle, pos)) !== -1) {
    count++;
    pos += needle.length;
  }
  return count;
}

// ─── Arbitraries ─────────────────────────────────────────────────────────────

const arbNonEmptyString = fc
  .string({ minLength: 1, maxLength: 80 })
  .filter((s) => s.trim().length > 0);

const arbUrl = fc.webUrl();

const arbStatus = fc.option(
  fc.constantFrom('Active' as const, 'Archived' as const, 'Experimental' as const),
  { nil: undefined },
);

const arbOssProject: fc.Arbitrary<OssProject> = fc.record({
  title: arbNonEmptyString,
  slug: fc.stringMatching(/^[a-z][a-z0-9-]{0,39}$/),
  description: arbNonEmptyString,
  tech: fc.array(arbNonEmptyString, { minLength: 1, maxLength: 8 }),
  repoUrl: arbUrl,
  license: arbNonEmptyString,
  features: fc.array(arbNonEmptyString, { minLength: 1, maxLength: 6 }),
  category: arbNonEmptyString,
  demoUrl: fc.option(arbUrl, { nil: undefined }),
  heroImage: fc.option(arbNonEmptyString, { nil: undefined }),
  installationSteps: fc.option(fc.array(arbNonEmptyString, { minLength: 1 }), { nil: undefined }),
  usageExample: fc.option(arbNonEmptyString, { nil: undefined }),
  contributingGuide: fc.option(arbNonEmptyString, { nil: undefined }),
  status: arbStatus,
});

// ─── Property-Based Tests ─────────────────────────────────────────────────────

describe('oss-projects.astro property-based tests', () => {
  // Feature: open-source-projects-section, Property 1: card grid renders exactly one card per project
  it('Property 1 — Card grid renders exactly one card per project', () => {
    // Validates: Requirements 2.5, 2.6
    fc.assert(
      fc.property(fc.array(arbOssProject), (projects) => {
        const html = renderOssProjects(projects);
        const articleCount = countOccurrences(html, '<article class="project-card');
        expect(articleCount).toBe(projects.length);
      }),
      { numRuns: 100 },
    );
  });
});

// ─── Unit Tests ───────────────────────────────────────────────────────────────

describe('oss-projects.astro unit tests', () => {
  // ── Section wrapper ──────────────────────────────────────────────────────────

  it('renders a section with id="open-source"', () => {
    // Validates: Requirement 2.1, 7.1
    const html = renderOssProjects([]);
    expect(html).toContain('id="open-source"');
  });

  it('renders a section with aria-label="Open Source Projects"', () => {
    // Validates: Requirement 7.1
    const html = renderOssProjects([]);
    expect(html).toContain('aria-label="Open Source Projects"');
  });

  it('section heading text contains "Open Source Projects"', () => {
    // Validates: Requirement 2.3
    const html = renderOssProjects([]);
    expect(html).toContain('Open Source Projects');
  });

  // ── Grid accessibility roles ─────────────────────────────────────────────────

  it('grid container has role="list" when projects are present', () => {
    // Validates: Requirement 7.6
    const project: OssProject = {
      title: 'Test Project',
      slug: 'test-project',
      description: 'A test project.',
      tech: ['TypeScript'],
      repoUrl: 'https://github.com/example/test',
      license: 'MIT',
      features: ['Feature A'],
      category: 'Library',
    };
    const html = renderOssProjects([project]);
    expect(html).toContain('role="list"');
  });

  it('each card wrapper has role="listitem" when projects are present', () => {
    // Validates: Requirement 7.6
    const projects: OssProject[] = [
      {
        title: 'Alpha',
        slug: 'alpha',
        description: 'Alpha project.',
        tech: ['Go'],
        repoUrl: 'https://github.com/example/alpha',
        license: 'MIT',
        features: ['Feature 1'],
        category: 'CLI Tool',
      },
      {
        title: 'Beta',
        slug: 'beta',
        description: 'Beta project.',
        tech: ['Rust'],
        repoUrl: 'https://github.com/example/beta',
        license: 'Apache-2.0',
        features: ['Feature 2'],
        category: 'Library',
      },
    ];
    const html = renderOssProjects(projects);
    const listitemCount = countOccurrences(html, 'role="listitem"');
    expect(listitemCount).toBe(projects.length);
  });

  // ── Empty state ──────────────────────────────────────────────────────────────

  it('renders no <article> elements when ossProjects is empty', () => {
    // Validates: Requirement 2.6
    const html = renderOssProjects([]);
    expect(html).not.toContain('<article');
  });

  it('still renders the heading when ossProjects is empty', () => {
    // Validates: Requirement 2.6
    const html = renderOssProjects([]);
    expect(html).toContain('Open Source Projects');
  });

  it('does not render role="list" when ossProjects is empty', () => {
    // Validates: Requirement 2.6
    const html = renderOssProjects([]);
    expect(html).not.toContain('role="list"');
  });

  // ── Card count ───────────────────────────────────────────────────────────────

  it('renders exactly one <article> per project', () => {
    // Validates: Requirement 2.5
    const projects: OssProject[] = [
      {
        title: 'One',
        slug: 'one',
        description: 'First.',
        tech: ['JS'],
        repoUrl: 'https://github.com/example/one',
        license: 'MIT',
        features: ['f1'],
        category: 'Tool',
      },
      {
        title: 'Two',
        slug: 'two',
        description: 'Second.',
        tech: ['TS'],
        repoUrl: 'https://github.com/example/two',
        license: 'MIT',
        features: ['f2'],
        category: 'Library',
      },
      {
        title: 'Three',
        slug: 'three',
        description: 'Third.',
        tech: ['Python'],
        repoUrl: 'https://github.com/example/three',
        license: 'GPL-3.0',
        features: ['f3'],
        category: 'CLI',
      },
    ];
    const html = renderOssProjects(projects);
    const articleCount = countOccurrences(html, '<article class="project-card');
    expect(articleCount).toBe(3);
  });
});
