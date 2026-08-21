import { describe, it, expect } from 'vitest';
import { ossProjects } from './data/site/oss';
import { personalInfo } from './data/site/personal';
import type { OssProject } from './data/site/types';

describe('ossProjects data model', () => {
  // Requirements 1.4 — exactly 3 placeholder entries
  it('has exactly 3 entries', () => {
    expect(ossProjects).toHaveLength(3);
  });

  // Requirements 1.3 — every entry satisfies the OssProject interface
  describe('every entry satisfies the OssProject interface', () => {
    ossProjects.forEach((project, index) => {
      describe(`entry ${index} — "${project.title}"`, () => {
        it('has a non-empty title', () => {
          expect(typeof project.title).toBe('string');
          expect(project.title.trim().length).toBeGreaterThan(0);
        });

        it('has a non-empty slug', () => {
          expect(typeof project.slug).toBe('string');
          expect(project.slug.trim().length).toBeGreaterThan(0);
        });

        it('has a non-empty description', () => {
          expect(typeof project.description).toBe('string');
          expect(project.description.trim().length).toBeGreaterThan(0);
        });

        it('has a non-empty tech array with at least one entry', () => {
          expect(Array.isArray(project.tech)).toBe(true);
          expect(project.tech.length).toBeGreaterThan(0);
          project.tech.forEach((t) => {
            expect(typeof t).toBe('string');
            expect(t.trim().length).toBeGreaterThan(0);
          });
        });

        it('has a non-empty repoUrl', () => {
          expect(typeof project.repoUrl).toBe('string');
          expect(project.repoUrl.trim().length).toBeGreaterThan(0);
        });

        it('has a non-empty license', () => {
          expect(typeof project.license).toBe('string');
          expect(project.license.trim().length).toBeGreaterThan(0);
        });

        it('has a non-empty features array with at least one entry', () => {
          expect(Array.isArray(project.features)).toBe(true);
          expect(project.features.length).toBeGreaterThan(0);
          project.features.forEach((f) => {
            expect(typeof f).toBe('string');
            expect(f.trim().length).toBeGreaterThan(0);
          });
        });

        it('has a non-empty category', () => {
          expect(typeof project.category).toBe('string');
          expect(project.category.trim().length).toBeGreaterThan(0);
        });

        it('has a valid status when present', () => {
          if (project.status !== undefined) {
            expect(['Active', 'Archived', 'Experimental']).toContain(project.status);
          }
        });
      });
    });
  });

  // Requirements 1.4 — all slug values are unique and URL-safe (kebab-case)
  describe('slug uniqueness and URL-safety', () => {
    it('all slugs are unique', () => {
      const slugs = ossProjects.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('all slugs are URL-safe kebab-case (no spaces, lowercase alphanumeric with hyphens)', () => {
      const kebabCasePattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
      ossProjects.forEach((project) => {
        expect(
          kebabCasePattern.test(project.slug),
          `slug "${project.slug}" is not valid kebab-case`
        ).toBe(true);
      });
    });
  });

  describe("personalInfo introSection", () => {
    it("exists and is defined", () => {
      expect(personalInfo.introSection).toBeDefined();
    });

    it("has non-empty title and subtitle", () => {
      expect(typeof personalInfo.introSection.title).toBe("string");
      expect(personalInfo.introSection.title.trim().length).toBeGreaterThan(0);
      expect(typeof personalInfo.introSection.subtitle).toBe("string");
      expect(personalInfo.introSection.subtitle.trim().length).toBeGreaterThan(0);
    });

    it("has a non-empty array of paragraphs", () => {
      const paragraphs = personalInfo.introSection.paragraphs;
      expect(Array.isArray(paragraphs)).toBe(true);
      expect(paragraphs.length).toBeGreaterThan(0);
      paragraphs.forEach((p) => {
        expect(typeof p).toBe("string");
        expect(p.trim().length).toBeGreaterThan(0);
      });
    });

    it("has a non-empty guideTitle", () => {
      expect(typeof personalInfo.introSection.guideTitle).toBe("string");
      expect(personalInfo.introSection.guideTitle.trim().length).toBeGreaterThan(0);
    });

    it("has valid guideItems", () => {
      const items = personalInfo.introSection.guideItems;
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBeGreaterThan(0);
      items.forEach((item) => {
        expect(typeof item.label).toBe("string");
        expect(item.label.trim().length).toBeGreaterThan(0);
        expect(typeof item.description).toBe("string");
        expect(item.description.trim().length).toBeGreaterThan(0);
      });
    });
  });
});