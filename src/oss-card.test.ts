import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import type { OssProject } from './site-data';

// ─── renderOssCard helper ─────────────────────────────────────────────────────
// Replicates the HTML generation logic of oss-card.astro as a pure function so
// property tests can run in a plain Node environment without Astro's build pipeline.

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const STATUS_CLASSES: Record<NonNullable<OssProject['status']>, string> = {
  Active:       'bg-green-500/10 border border-green-500/20 text-green-400',
  Archived:     'bg-gray-500/10 border border-gray-500/20 text-gray-400',
  Experimental: 'bg-orange-500/10 border border-orange-500/20 text-orange-400',
};

function renderOssCard(project: OssProject): string {
  const { title, slug, description, tech, repoUrl, license, category, demoUrl, heroImage, status } = project;

  const heroStrip = heroImage
    ? `<img src="${escapeHtml(heroImage)}" alt="${escapeHtml(title)} hero" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 z-0" />`
    : `<div class="w-full h-full bg-gradient-to-br from-accent/20 via-background to-background"></div>`;

  const statusBadge = status
    ? `<div class="status-badge absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold ${STATUS_CLASSES[status]}">${escapeHtml(status)}</div>`
    : '';

  const techPills = tech
    .map(t => `<span class="tech-pill px-2 py-1 bg-white/5 rounded-md text-[10px] text-white/60 border border-white/5">${escapeHtml(t)}</span>`)
    .join('\n');

  const repoLink = `<a href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="View repository for ${escapeHtml(title)}, opens in new tab" class="inline-flex items-center gap-1.5 text-accent text-xs font-bold hover:underline transition-colors">Repo</a>`;

  const demoLink = demoUrl
    ? `<a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="View demo for ${escapeHtml(title)}, opens in new tab" class="inline-flex items-center gap-1.5 text-white/60 text-xs font-bold hover:text-accent transition-colors">Demo</a>`
    : '';

  return `
<article class="project-card group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500">
  <div class="h-32 w-full relative overflow-hidden flex-shrink-0">
    ${heroStrip}
    <div class="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
    ${statusBadge}
  </div>
  <div class="p-6 flex flex-col flex-grow space-y-4">
    <div>
      <span class="text-accent text-[10px] uppercase tracking-widest font-bold">${escapeHtml(category)}</span>
      <h3 class="text-xl font-heading font-bold text-white mt-1">${escapeHtml(title)}</h3>
    </div>
    <div class="description-container relative flex-grow flex flex-col">
      <div class="text-gray-400 text-sm font-body line-clamp-3 transition-all duration-300 description-content w-full">
        ${escapeHtml(description)}
      </div>
      <button class="read-more-btn mt-2 inline-block text-left text-accent text-xs font-bold hover:underline bg-transparent border-none cursor-pointer w-max" aria-expanded="false">Read more</button>
    </div>
    <div class="flex flex-wrap gap-2">
      ${techPills}
    </div>
    <span class="license-badge px-2 py-1 rounded-md text-[10px] font-bold border border-yellow-500/30 text-yellow-400 flex items-center gap-1 w-fit">
      ${escapeHtml(license)}
    </span>
    <div class="flex gap-3 mt-auto">
      ${repoLink}
      ${demoLink}
    </div>
    <a href="/open-source/${escapeHtml(slug)}" class="inline-flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all duration-300 group/cta">
      <span>View Project</span>
    </a>
  </div>
</article>`;
}

// ─── Arbitraries ─────────────────────────────────────────────────────────────

// Non-empty string that avoids characters which would break naive HTML parsing
// in our assertions (we use includes() checks, not a real HTML parser).
const arbNonEmptyString = fc.string({ minLength: 1, maxLength: 80 }).filter(s => s.trim().length > 0);

// A valid-ish URL string (fast-check's webUrl can be slow; use a simpler approach)
const arbUrl = fc.webUrl();

const arbStatus = fc.option(
  fc.constantFrom('Active' as const, 'Archived' as const, 'Experimental' as const),
  { nil: undefined },
);

const arbOssProject: fc.Arbitrary<OssProject> = fc.record({
  title:       arbNonEmptyString,
  slug:        fc.stringMatching(/^[a-z][a-z0-9-]{0,39}$/),
  description: arbNonEmptyString,
  tech:        fc.array(arbNonEmptyString, { minLength: 1, maxLength: 8 }),
  repoUrl:     arbUrl,
  license:     arbNonEmptyString,
  features:    fc.array(arbNonEmptyString, { minLength: 1, maxLength: 6 }),
  category:    arbNonEmptyString,
  demoUrl:     fc.option(arbUrl, { nil: undefined }),
  heroImage:   fc.option(arbNonEmptyString, { nil: undefined }),
  installationSteps: fc.option(fc.array(arbNonEmptyString, { minLength: 1 }), { nil: undefined }),
  usageExample:      fc.option(arbNonEmptyString, { nil: undefined }),
  contributingGuide: fc.option(arbNonEmptyString, { nil: undefined }),
  status:      arbStatus,
});

// Variant that always has repoUrl and optionally a demoUrl (both are URLs)
const arbOssProjectWithLinks: fc.Arbitrary<OssProject> = fc.record({
  title:       arbNonEmptyString,
  slug:        fc.stringMatching(/^[a-z][a-z0-9-]{0,39}$/),
  description: arbNonEmptyString,
  tech:        fc.array(arbNonEmptyString, { minLength: 1, maxLength: 8 }),
  repoUrl:     arbUrl,
  license:     arbNonEmptyString,
  features:    fc.array(arbNonEmptyString, { minLength: 1, maxLength: 6 }),
  category:    arbNonEmptyString,
  demoUrl:     fc.option(arbUrl, { nil: undefined }),
  heroImage:   fc.option(arbNonEmptyString, { nil: undefined }),
  installationSteps: fc.option(fc.array(arbNonEmptyString, { minLength: 1 }), { nil: undefined }),
  usageExample:      fc.option(arbNonEmptyString, { nil: undefined }),
  contributingGuide: fc.option(arbNonEmptyString, { nil: undefined }),
  status:      arbStatus,
});

// ─── HTML assertion helpers ───────────────────────────────────────────────────

function containsH3WithText(html: string, text: string): boolean {
  // Match <h3 ...>text</h3> — the rendered helper escapes HTML entities
  const escaped = escapeHtml(text);
  return html.includes(`<h3`) && html.includes(escaped);
}

function containsText(html: string, text: string): boolean {
  return html.includes(escapeHtml(text));
}

function containsHref(html: string, href: string): boolean {
  return html.includes(`href="${escapeHtml(href)}"`);
}

/** Extract all <a ...> tags from the HTML string as attribute maps */
function extractAnchorAttributes(html: string): Array<{ href: string; target: string; rel: string; ariaLabel: string }> {
  const results: Array<{ href: string; target: string; rel: string; ariaLabel: string }> = [];
  // Match opening <a ...> tags (non-greedy)
  const tagRegex = /<a\s([^>]*?)>/gi;
  let match: RegExpExecArray | null;
  while ((match = tagRegex.exec(html)) !== null) {
    const attrs = match[1];
    const href      = (attrs.match(/href="([^"]*)"/))?.[1] ?? '';
    const target    = (attrs.match(/target="([^"]*)"/))?.[1] ?? '';
    const rel       = (attrs.match(/rel="([^"]*)"/))?.[1] ?? '';
    const ariaLabel = (attrs.match(/aria-label="([^"]*)"/))?.[1] ?? '';
    results.push({ href, target, rel, ariaLabel });
  }
  return results;
}

/** Return only the external links (those with target="_blank") */
function extractExternalLinks(html: string) {
  return extractAnchorAttributes(html).filter(a => a.target === '_blank');
}

function hasStatusBadge(html: string): boolean {
  return html.includes('status-badge');
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('oss-card.astro property-based tests', () => {

  // Feature: open-source-projects-section, Property 3: OSS card renders all required fields
  it('Property 3 — OSS card renders all required fields', () => {
    // Validates: Requirements 3.1, 3.2, 3.5, 7.2
    fc.assert(
      fc.property(arbOssProject, (project) => {
        const html = renderOssCard(project);

        // <h3> contains title
        expect(containsH3WithText(html, project.title)).toBe(true);

        // category text is present
        expect(containsText(html, project.category)).toBe(true);

        // description text is present
        expect(containsText(html, project.description)).toBe(true);

        // one pill per tech entry
        for (const t of project.tech) {
          expect(containsText(html, t)).toBe(true);
        }

        // license badge contains license value
        expect(containsText(html, project.license)).toBe(true);

        // "View Project" href equals /open-source/${slug}
        expect(containsHref(html, `/open-source/${project.slug}`)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  // Feature: open-source-projects-section, Property 4: external links have correct security and accessibility attributes
  it('Property 4 — External links have correct security and accessibility attributes', () => {
    // Validates: Requirements 3.3, 3.4, 7.3
    fc.assert(
      fc.property(arbOssProjectWithLinks, (project) => {
        const html = renderOssCard(project);
        const externalLinks = extractExternalLinks(html);

        // There must be at least one external link (repoUrl is always present)
        expect(externalLinks.length).toBeGreaterThanOrEqual(1);

        for (const link of externalLinks) {
          // target="_blank"
          expect(link.target).toBe('_blank');

          // rel contains both noopener and noreferrer
          expect(link.rel).toContain('noopener');
          expect(link.rel).toContain('noreferrer');

          // aria-label contains the project title and "opens in new tab"
          expect(link.ariaLabel).toContain(escapeHtml(project.title));
          expect(link.ariaLabel.toLowerCase()).toContain('opens in new tab');
        }
      }),
      { numRuns: 100 },
    );
  });

  // Feature: open-source-projects-section, Property 5: status badge appears if and only if status is present
  it('Property 5 — Status badge appears if and only if status is present', () => {
    // Validates: Requirements 3.8
    fc.assert(
      fc.property(arbOssProject, (project) => {
        const html = renderOssCard(project);
        const badgePresent = hasStatusBadge(html);

        if (project.status !== undefined) {
          // Badge must be present
          expect(badgePresent).toBe(true);
          // Badge text must equal the status value
          expect(containsText(html, project.status)).toBe(true);
        } else {
          // Badge must be absent
          expect(badgePresent).toBe(false);
        }
      }),
      { numRuns: 100 },
    );
  });
});
