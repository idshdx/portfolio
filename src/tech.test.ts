import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Read tech.astro source directly as in other component tests
const techSource = readFileSync(
  resolve(__dirname, 'components/tech.astro'),
  'utf-8',
);

describe('tech.astro — skills section redesign', () => {
  // Domain Skills is the prominent uncollapsed section
  it('renders Domain Skills as an open primary section', () => {
    expect(techSource).toContain('domainCategory');
    expect(techSource).toContain('domainCategory.title');
    expect(techSource).toContain('Primary Focus');
  });

  // The remaining 4 sections are rendered as collapsible cards
  it('renders the 4 technical categories as collapsible cards', () => {
    expect(techSource).toContain('otherCategories');
    expect(techSource).toContain('collapsible-skill-card');
    expect(techSource).toContain('skill-accordion-trigger');
    expect(techSource).toContain('skill-accordion-panel');
  });

  // Hidden by default using aria-expanded="false" and hidden="until-found"
  it('has technical sections hidden and collapsed by default', () => {
    expect(techSource).toContain('aria-expanded="false"');
    expect(techSource).toContain('hidden="until-found"');
    expect(techSource).toContain('role="region"');
  });

  // Individual toggle buttons control their respective panels
  it('associates each trigger button with its corresponding panel ID', () => {
    expect(techSource).toContain('aria-controls={`skill-panel-${categorySlug}`}');
    expect(techSource).toContain('id={`skill-panel-${categorySlug}`}');
    expect(techSource).toContain('aria-labelledby={`skill-btn-${categorySlug}`}');
    expect(techSource).toContain('id={`skill-btn-${categorySlug}`}');
  });

  // Includes an Expand All / Collapse All toggle button
  it('provides an Expand All / Collapse All toggle control', () => {
    expect(techSource).toContain('id="toggle-all-categories"');
    expect(techSource).toContain('id="toggle-all-text"');
    expect(techSource).toContain('Expand All');
  });

  // Smooth collapsible grid animation styles
  it('includes smooth CSS grid accordion transition styles', () => {
    expect(techSource).toContain('.collapsible-content');
    expect(techSource).toContain('grid-template-rows: 0fr;');
    expect(techSource).toContain('grid-template-rows: 1fr;');
    expect(techSource).toContain('.collapsible-inner');
  });

  // Native browser find-in-page support (beforematch)
  it('handles beforematch event for accessible find-in-page support', () => {
    expect(techSource).toContain('beforematch');
  });

  // View Transitions support
  it('supports Astro view transitions via astro:after-swap', () => {
    expect(techSource).toContain('document.addEventListener("astro:after-swap", initTechSkills);');
  });
});
