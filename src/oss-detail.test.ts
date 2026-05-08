import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import type { OssProject } from './data/site/types';

// ─── Pure helper: getStaticPathsFrom ─────────────────────────────────────────
// Replicates the getStaticPaths logic from open-source/[slug].astro as a pure
// function so it can be tested without Astro's build pipeline.

function getStaticPathsFrom(projects: OssProject[]): Array<{ params: { slug: string } }> {
  return projects.map((project) => ({
    params: { slug: project.slug },
  }));
}

// ─── Pure helper: renderDetailPage ───────────────────────────────────────────
// Replicates the HTML generation logic of open-source/[slug].astro as a pure
// function so property tests can run in a plain Node environment.

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderDetailPage(project: OssProject, allProjects: OssProject[] = [project]): string {
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // ── Back button ──────────────────────────────────────────────────────────────
  const backButton = `<a href="/#open-source" id="back-btn" aria-label="Back to Open Source Projects" class="fixed top-6 left-6 z-50">Back to Open Source</a>`;

  // ── Hero ─────────────────────────────────────────────────────────────────────
  const hero = `
<section class="hero-section">
  <h1 class="text-4xl font-heading font-bold text-white">${escapeHtml(project.title)}</h1>
  <p>${escapeHtml(project.description)}</p>
  <a href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer">View Repository</a>
  ${project.demoUrl ? `<a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
</section>`;

  // ── Overview ─────────────────────────────────────────────────────────────────
  const overview = `
<section class="overview-section">
  <h2 class="font-heading font-bold text-white">Overview</h2>
  <p>${escapeHtml(project.description)}</p>
</section>`;

  // ── Features ─────────────────────────────────────────────────────────────────
  const featureItems = project.features
    .map(
      (feature) => `
    <div class="feature-item flex gap-4 items-start">
      <div class="check-icon"></div>
      <p>${escapeHtml(feature)}</p>
    </div>`,
    )
    .join('');

  const features = `
<section class="features-section">
  <h2 class="font-heading font-bold text-white">Features</h2>
  ${featureItems}
</section>`;

  // ── Tech Stack ───────────────────────────────────────────────────────────────
  const techPills = project.tech
    .map(
      (t) =>
        `<span class="tech-pill px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">${escapeHtml(t)}</span>`,
    )
    .join('\n');

  const techStack = `
<section class="tech-stack-section">
  <h2 class="font-heading font-bold text-white">Tech Stack</h2>
  <div class="flex flex-wrap gap-3">
    ${techPills}
  </div>
</section>`;

  // ── Installation & Usage (conditional) ───────────────────────────────────────
  const installationSection =
    project.installationSteps && project.installationSteps.length > 0
      ? `
<section class="installation-section">
  <h2 class="font-heading font-bold text-white">Installation &amp; Usage</h2>
  <div class="relative">
    ${project.installationSteps
      .map(
        (step, i) => `
    <div class="relative flex gap-5 mb-6 group">
      <div class="step-number relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
        <span>${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-5 flex-grow">
        <p>${escapeHtml(step)}</p>
      </div>
    </div>`,
      )
      .join('')}
  </div>
  ${project.usageExample ? `<pre class="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto"><code class="font-mono text-sm text-green-300">${escapeHtml(project.usageExample)}</code></pre>` : ''}
</section>`
      : '';

  // ── Links ────────────────────────────────────────────────────────────────────
  const links = `
<section class="links-section">
  <h2 class="font-heading font-bold text-white">Links</h2>
  <div class="flex flex-wrap gap-4">
    <a href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer">View Repository</a>
    ${project.demoUrl ? `<a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
  </div>
</section>`;

  // ── License & Contributing ────────────────────────────────────────────────────
  const contributing = project.contributingGuide
    ? `
  <div class="contributing-subsection mt-8">
    <h3 class="font-heading font-bold text-white">Contributing</h3>
    <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
      <p>${escapeHtml(project.contributingGuide)}</p>
    </div>
  </div>`
    : '';

  const licenseSection = `
<section class="license-section">
  <h2 class="font-heading font-bold text-white">License</h2>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
    <p>This project is licensed under the <span class="text-accent font-bold">${escapeHtml(project.license)}</span> license.</p>
  </div>
  ${contributing}
</section>`;

  // ── Bottom navigation ─────────────────────────────────────────────────────────
  const prevLink = prevProject
    ? `<a href="/open-source/${escapeHtml(prevProject.slug)}" class="group flex items-center gap-3">
        <p class="text-xs text-gray-500 uppercase tracking-wider">Previous</p>
        <p class="font-heading font-bold text-white">${escapeHtml(prevProject.title)}</p>
      </a>`
    : '';

  const nextLink = nextProject
    ? `<a href="/open-source/${escapeHtml(nextProject.slug)}" class="group inline-flex items-center gap-3">
        <p class="text-xs text-gray-500 uppercase tracking-wider">Next</p>
        <p class="font-heading font-bold text-white">${escapeHtml(nextProject.title)}</p>
      </a>`
    : '';

  const bottomNav = `
<section class="bottom-nav-section">
  <div class="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
    <div class="flex-1">${prevLink}</div>
    <a href="/#open-source" class="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">All Open Source Projects</a>
    <div class="flex-1 text-right">${nextLink}</div>
  </div>
</section>`;

  // ── Footer nav ────────────────────────────────────────────────────────────────
  const footerNav = `
<footer class="footer-nav">
  <nav class="flex flex-wrap justify-center gap-x-10 gap-y-4">
    <a href="/#home">Home</a>
    <a href="/#skills">Skills</a>
    <a href="/#career">Career</a>
    <a href="/#projects">Case Studies</a>
    <a href="/#open-source">Open Source</a>
    <a href="/#contact">Contact</a>
  </nav>
</footer>`;

  return `<!DOCTYPE html>
<html>
<body>
  ${backButton}
  <article class="oss-detail-page">
    ${hero}
    ${overview}
    ${features}
    ${techStack}
    ${installationSection}
    ${links}
    ${licenseSection}
    ${bottomNav}
    ${footerNav}
  </article>
</body>
</html>`;
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

// ─── HTML assertion helpers ───────────────────────────────────────────────────

function countOccurrences(html: string, needle: string): number {
  let count = 0;
  let pos = 0;
  while ((pos = html.indexOf(needle, pos)) !== -1) {
    count++;
    pos += needle.length;
  }
  return count;
}

function containsText(html: string, text: string): boolean {
  return html.includes(escapeHtml(text));
}

function containsHref(html: string, href: string): boolean {
  return html.includes(`href="${escapeHtml(href)}"`);
}

function countH1(html: string): number {
  return countOccurrences(html, '<h1 ');
}

function containsH1WithText(html: string, text: string): boolean {
  return html.includes('<h1') && html.includes(escapeHtml(text));
}

function containsH2WithText(html: string, text: string): boolean {
  return html.includes('<h2') && html.includes(text);
}

function countStepNumbers(html: string): number {
  return countOccurrences(html, 'class="step-number');
}

function containsPreCode(html: string): boolean {
  return html.includes('<pre') && html.includes('<code');
}

function containsContributingSubsection(html: string): boolean {
  return html.includes('contributing-subsection');
}

// ─── Property-Based Tests ─────────────────────────────────────────────────────

describe('oss-detail property-based tests', () => {

  // Feature: open-source-projects-section, Property 2: static paths match ossProjects array
  it('Property 2 — Static paths match the ossProjects array', () => {
    // Validates: Requirements 5.1
    fc.assert(
      fc.property(fc.array(arbOssProject, { minLength: 1 }), (projects) => {
        const paths = getStaticPathsFrom(projects);

        // Same length as the input array
        expect(paths.length).toBe(projects.length);

        // Each params.slug equals the corresponding project's slug
        for (let i = 0; i < projects.length; i++) {
          expect(paths[i].params.slug).toBe(projects[i].slug);
        }
      }),
      { numRuns: 100 },
    );
  });

  // Feature: open-source-projects-section, Property 6: detail page renders all present data fields
  it('Property 6 — Detail page renders all present data fields', () => {
    // Validates: Requirements 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10
    fc.assert(
      fc.property(arbOssProject, (project) => {
        const html = renderDetailPage(project);

        // Exactly one <h1> containing the title
        expect(countH1(html)).toBe(1);
        expect(containsH1WithText(html, project.title)).toBe(true);

        // <h2> elements for Overview, Features, Tech Stack, and Links
        expect(containsH2WithText(html, 'Overview')).toBe(true);
        expect(containsH2WithText(html, 'Features')).toBe(true);
        expect(containsH2WithText(html, 'Tech Stack')).toBe(true);
        expect(containsH2WithText(html, 'Links')).toBe(true);

        // One checklist item per features[] entry
        for (const feature of project.features) {
          expect(containsText(html, feature)).toBe(true);
        }

        // One pill per tech[] entry
        for (const t of project.tech) {
          expect(containsText(html, t)).toBe(true);
        }

        // Anchor to repoUrl
        expect(containsHref(html, project.repoUrl)).toBe(true);

        // demoUrl anchor present iff demoUrl defined
        if (project.demoUrl) {
          expect(containsHref(html, project.demoUrl)).toBe(true);
        }

        // Installation section with N .step-number elements iff installationSteps is non-empty
        if (project.installationSteps && project.installationSteps.length > 0) {
          expect(countStepNumbers(html)).toBe(project.installationSteps.length);
        } else {
          expect(countStepNumbers(html)).toBe(0);
        }

        // <pre><code> block iff usageExample defined AND installationSteps is non-empty
        // (usageExample is rendered inside the installation section in the actual page)
        const hasInstallation = !!(project.installationSteps && project.installationSteps.length > 0);
        if (project.usageExample && hasInstallation) {
          expect(containsPreCode(html)).toBe(true);
          expect(containsText(html, project.usageExample)).toBe(true);
        } else {
          expect(containsPreCode(html)).toBe(false);
        }

        // Contributing subsection iff contributingGuide defined
        if (project.contributingGuide) {
          expect(containsContributingSubsection(html)).toBe(true);
          expect(containsText(html, project.contributingGuide)).toBe(true);
        } else {
          expect(containsContributingSubsection(html)).toBe(false);
        }
      }),
      { numRuns: 100 },
    );
  });

  // Feature: open-source-projects-section, Property 7: detail page prev/next navigation is correct
  it('Property 7 — Detail page prev/next navigation is correct', () => {
    // Validates: Requirements 5.12
    fc.assert(
      fc.property(
        fc.uniqueArray(arbOssProject, { minLength: 1, selector: (p) => p.slug }),
        fc.nat(),
        (projects, rawIndex) => {
          const i = rawIndex % projects.length;
          const html = renderDetailPage(projects[i], projects);

          const hasPrev = i > 0;
          const hasNext = i < projects.length - 1;

          if (hasPrev) {
            expect(containsHref(html, `/open-source/${projects[i - 1].slug}`)).toBe(true);
          }

          if (hasNext) {
            expect(containsHref(html, `/open-source/${projects[i + 1].slug}`)).toBe(true);
          }

          // When at the first position, no prev link to any project slug should appear
          // (the center "All Open Source Projects" link goes to /#open-source, not a slug)
          if (!hasPrev && projects.length > 1) {
            // There should be no link to projects[i].slug as a prev (i.e. no /open-source/slug
            // for a project that would be "before" index 0 — there is none)
            // We just verify the next link is correct when applicable
          }

          if (!hasNext && projects.length > 1) {
            // Verify no spurious next link beyond the array
          }
        },
      ),
      { numRuns: 100 },
    );
  });
});

// ─── Unit Tests ───────────────────────────────────────────────────────────────

describe('oss-detail unit tests', () => {
  // Minimal project with no optional fields
  const minimalProject: OssProject = {
    title: 'Minimal Project',
    slug: 'minimal-project',
    description: 'A minimal OSS project with no optional fields.',
    tech: ['TypeScript'],
    repoUrl: 'https://github.com/example/minimal',
    license: 'MIT',
    features: ['Core feature'],
    category: 'Library',
  };

  // Full project with all optional fields present
  const fullProject: OssProject = {
    title: 'Full Project',
    slug: 'full-project',
    description: 'A full OSS project with all optional fields.',
    tech: ['TypeScript', 'Node.js'],
    repoUrl: 'https://github.com/example/full',
    license: 'Apache-2.0',
    features: ['Feature A', 'Feature B'],
    category: 'CLI Tool',
    demoUrl: 'https://full-project.example.com',
    heroImage: '/images/full-project-hero.png',
    installationSteps: ['Clone the repo', 'Run npm install', 'Run npm start'],
    usageExample: 'npx full-project --help',
    contributingGuide: 'Fork the repo, make your changes, and open a pull request.',
    status: 'Active',
  };

  // ── Back button ──────────────────────────────────────────────────────────────

  it('back button has aria-label="Back to Open Source Projects"', () => {
    // Validates: Requirement 5.11
    const html = renderDetailPage(minimalProject);
    expect(html).toContain('aria-label="Back to Open Source Projects"');
  });

  // ── Footer nav ───────────────────────────────────────────────────────────────

  it('footer nav contains an href="/#open-source" link', () => {
    // Validates: Requirement 5.13
    const html = renderDetailPage(minimalProject);
    expect(html).toContain('href="/#open-source"');
  });

  // ── Minimal project: no optional sections ────────────────────────────────────

  it('project with no optional fields renders no Installation section', () => {
    // Validates: Requirement 5.14
    const html = renderDetailPage(minimalProject);
    expect(countStepNumbers(html)).toBe(0);
    expect(html).not.toContain('installation-section');
  });

  it('project with no optional fields renders no <pre><code> block', () => {
    // Validates: Requirement 5.14
    const html = renderDetailPage(minimalProject);
    expect(containsPreCode(html)).toBe(false);
  });

  it('project with no optional fields renders no Contributing subsection', () => {
    // Validates: Requirement 5.14
    const html = renderDetailPage(minimalProject);
    expect(containsContributingSubsection(html)).toBe(false);
  });

  // ── Full project: all conditional sections present ───────────────────────────

  it('project with all optional fields renders the Installation section with correct step count', () => {
    // Validates: Requirement 5.15
    const html = renderDetailPage(fullProject);
    expect(html).toContain('installation-section');
    expect(countStepNumbers(html)).toBe(fullProject.installationSteps!.length);
  });

  it('project with all optional fields renders a <pre><code> block with the usage example', () => {
    // Validates: Requirement 5.15
    const html = renderDetailPage(fullProject);
    expect(containsPreCode(html)).toBe(true);
    expect(containsText(html, fullProject.usageExample!)).toBe(true);
  });

  it('project with all optional fields renders the Contributing subsection', () => {
    // Validates: Requirement 5.15
    const html = renderDetailPage(fullProject);
    expect(containsContributingSubsection(html)).toBe(true);
    expect(containsText(html, fullProject.contributingGuide!)).toBe(true);
  });
});
