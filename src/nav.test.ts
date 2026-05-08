import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Read nav.astro as a plain string — Astro components can't be imported in
// a plain Node/Vitest environment, so we parse the source text directly.
const navSource = readFileSync(
  resolve(__dirname, 'components/nav.astro'),
  'utf-8',
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns the index of the first occurrence of `needle` in `source`,
 * or -1 if not found.
 */
function indexOf(source: string, needle: string): number {
  return source.indexOf(needle);
}

// ─── Unit Tests ───────────────────────────────────────────────────────────────

describe('nav.astro — navItems integration', () => {
  // Requirements 4.1 — Open Source nav entry exists
  it('contains an entry with href="/#open-source"', () => {
    expect(navSource).toContain('href: "/#open-source"');
  });

  // Requirements 4.2 — Open Source nav entry uses mdi:source-branch icon
  it('uses "mdi:source-branch" as the icon for the Open Source entry', () => {
    // Find the block that contains href: "/#open-source" and verify the icon
    // appears in close proximity (within the same object literal).
    const hrefIndex = navSource.indexOf('href: "/#open-source"');
    expect(hrefIndex).toBeGreaterThan(-1);

    // Grab a window of text around the href to check the icon field.
    // The navItems entries are small objects; 200 chars is more than enough.
    const window = navSource.slice(
      Math.max(0, hrefIndex - 100),
      hrefIndex + 200,
    );
    expect(window).toContain('mdi:source-branch');
  });

  // Requirements 4.1 — Open Source entry is positioned after the #projects entry
  it('href="/#open-source" appears after href="/#projects" in the navItems array', () => {
    const projectsIndex = indexOf(navSource, 'href: "/#projects"');
    const openSourceIndex = indexOf(navSource, 'href: "/#open-source"');

    expect(projectsIndex).toBeGreaterThan(-1);
    expect(openSourceIndex).toBeGreaterThan(-1);
    expect(openSourceIndex).toBeGreaterThan(projectsIndex);
  });
});
