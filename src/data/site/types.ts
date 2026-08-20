export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  period: string;
  summary?: string;
  website?: string;
  achievements: string[];
  tools?: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements?: string[];
}

export type ProjectCategory = "Enterprise" | "Startup" | "Product Launch" | "Open Source" | "Legacy Software Migration";

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudyTechSection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  heroImage: string;
  overview: string;
  role: string;
  duration: string;
  team: string;
  challenge: string;
  approach: string[];
  results: CaseStudyResult[];
  techDeepDive: CaseStudyTechSection[];
  keyTakeaways: string[];
}

export interface Project {
  title: string;
  link: string;
  description: string[];
  tech: string[];
  category: ProjectCategory[];
  caseStudy?: CaseStudy;
}

export type InterestLabel = "Exploring" | "Active" | "Core" | "Old";

export interface Interest {
  title: string;
  description: string;
  label: InterestLabel;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  link: string;
}

export interface OssProject {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  repoUrl: string;
  license: string;
  features: string[];
  category: string;
  demoUrl?: string;
  heroImage?: string;
  installationSteps?: string[];
  usageExample?: string;
  contributingGuide?: string;
  status?: 'Active' | 'Archived' | 'Experimental';
  keyTakeaways?: string[];
}

export interface IntroHighlight {
  title: string;
  icon: string;
  description: string;
}

export interface IntroStat {
  value: string;
  label: string;
}

export interface IntroSection {
  title: string;
  subtitle: string;
  description: string;
  highlights: IntroHighlight[];
  stats: IntroStat[];
}

