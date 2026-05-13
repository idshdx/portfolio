import { education } from './education';
import { personalInfo } from './personal';
import { workExperience } from './experience';
import type { OssProject, Project } from './types';
import { withBase } from '../../utils/url';

type JsonLd =
  | {
      [key: string]: JsonLd | JsonLd[] | string | number | boolean | null;
    }
  | string
  | number
  | boolean
  | null;

export const siteName = personalInfo.name;
export const siteUrl = process.env.SITE_URL ?? personalInfo.website;
export const defaultSocialImage = '/profile.jpg';
export const defaultDescription =
  'Andrei Botez is a Romania-based fullstack engineer building secure, privacy-first software across enterprise platforms, consulting engagements, and open-source projects.';
export const homeTitle = `${personalInfo.name} | Fullstack Engineer Portfolio`;
export const homeDescription =
  'Portfolio of Andrei Botez, a fullstack engineer delivering secure web platforms, modernization work, case studies, and open-source software.';

const currentWorkplaces = workExperience
  .filter((role) => role.period.toLowerCase().includes('present'))
  .map((role) => ({
    '@type': 'Organization',
    name: role.company,
    ...(role.website ? { url: role.website } : {}),
  }));

const sameAs = [personalInfo.github, personalInfo.linkedin].filter(Boolean);

const toolAliases: Record<string, string> = {
  'angular2': 'Angular 2',
  'express.js': 'Express.js',
  'mysql': 'MySQL',
  'ngrx': 'NgRx',
  'nodejs': 'Node.js',
  'node.js': 'Node.js',
  'postgres': 'PostgreSQL',
  'postgresql': 'PostgreSQL',
  'rxjs': 'RxJS',
  'typescript': 'TypeScript',
  'vuejs': 'Vue.js',
};

function normalizeLabel(value: string) {
  const trimmed = value.trim();
  const normalized = trimmed.toLowerCase();

  return toolAliases[normalized] ?? trimmed;
}

function uniqueLabels(values: string[]) {
  const seen = new Set<string>();

  return values.filter((value) => {
    const normalized = value.toLowerCase();

    if (!normalized || seen.has(normalized)) {
      return false;
    }

    seen.add(normalized);
    return true;
  });
}

const knowsAbout = uniqueLabels(
  workExperience
    .flatMap((role) => role.tools ?? [])
    .map((tool) => normalizeLabel(tool))
).slice(0, 20);

const programmingLanguageLabels = new Set([
  'assembly',
  'c',
  'javascript',
  'php',
  'shell',
  'typescript',
  'webassembly',
]);

function normalizePath(path: string) {
  if (path === '/' || path.endsWith('/') || /[?#]/.test(path) || /\.[a-z0-9]+$/i.test(path)) {
    return path;
  }

  return `${path}/`;
}

function toAbsoluteUrl(path: string) {
  return new URL(withBase(normalizePath(path)), siteUrl).toString();
}

function buildPersonStructuredData(): JsonLd {
  const homeUrl = toAbsoluteUrl('/');

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    url: homeUrl,
    image: toAbsoluteUrl(defaultSocialImage),
    jobTitle: 'Fullstack Software Developer',
    description: defaultDescription,
    email: personalInfo.email,
    sameAs,
    knowsAbout,
    knowsLanguage: ['en', 'ro'],
    ...(currentWorkplaces.length > 0 ? { worksFor: currentWorkplaces } : {}),
    alumniOf: education.map((entry) => ({
      '@type': 'EducationalOrganization',
      name: entry.institution.replaceAll('"', ''),
    })),
  };
}

function buildWebsiteStructuredData(): JsonLd {
  const homeUrl = toAbsoluteUrl('/');

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: homeUrl,
    description: homeDescription,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      url: homeUrl,
    },
  };
}

function buildProfilePageStructuredData(): JsonLd {
  const homeUrl = toAbsoluteUrl('/');

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: homeTitle,
    description: homeDescription,
    url: homeUrl,
    inLanguage: 'en',
    mainEntity: {
      '@type': 'Person',
      name: personalInfo.name,
      url: homeUrl,
    },
  };
}

export function buildHomeStructuredData() {
  return [
    buildWebsiteStructuredData(),
    buildPersonStructuredData(),
    buildProfilePageStructuredData(),
  ];
}

export function buildBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildCaseStudyStructuredData(project: Project) {
  if (!project.caseStudy) {
    return null;
  }

  const { caseStudy } = project;
  const pagePath = `/case-study/${caseStudy.slug}`;
  const homeUrl = toAbsoluteUrl('/');

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${project.title} case study`,
    name: `${project.title} case study`,
    description: caseStudy.overview,
    url: toAbsoluteUrl(pagePath),
    image: toAbsoluteUrl(caseStudy.heroImage),
    inLanguage: 'en',
    articleSection: 'Case Study',
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      url: homeUrl,
    },
    about: project.category,
    keywords: [project.title, ...project.category, ...project.tech],
    mainEntityOfPage: toAbsoluteUrl(pagePath),
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: homeUrl,
    },
  };
}

function resolveLicenseUrl(license: string) {
  const normalized = license.trim().toUpperCase();

  if (normalized === 'MIT') {
    return 'https://opensource.org/license/mit';
  }

  return undefined;
}

export function buildOpenSourceStructuredData(project: OssProject) {
  const pagePath = `/open-source/${project.slug}`;
  const image = project.heroImage ?? defaultSocialImage;
  const homeUrl = toAbsoluteUrl('/');
  const programmingLanguage = uniqueLabels(
    project.tech
      .map((tool) => normalizeLabel(tool))
      .filter((tool) => programmingLanguageLabels.has(tool.toLowerCase()))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    url: toAbsoluteUrl(pagePath),
    codeRepository: project.repoUrl,
    image: toAbsoluteUrl(image),
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      url: homeUrl,
    },
    keywords: [project.category, ...project.tech],
    ...(programmingLanguage.length > 0 ? { programmingLanguage } : {}),
    ...(resolveLicenseUrl(project.license)
      ? { license: resolveLicenseUrl(project.license) }
      : {}),
  };
}
