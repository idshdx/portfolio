# Product

This is a personal developer portfolio website for Andrei Botez, a fullstack software engineer with 10+ years of experience. The site presents his professional identity, career history, technical skills, and case studies.

## Purpose

- Showcase professional background, skills, and work history
- Present detailed case studies of notable projects
- Provide contact information and links to social profiles / resume

## Key Sections

- **Home** — Hero with photo, intro, resume link, and social links
- **Companies** — Logos of past employers
- **Skills / Tech** — Categorized technology stack
- **Career** — Timeline of work experience
- **Projects / Case Studies** — Cards linking to detailed case study pages
- **Interests** — Personal interests section
- **Contact** — Contact form or links

## Data Strategy

Content is dual-sourced:
- **Development / fallback**: Static data from `src/data.ts` (TypeScript exports) and JSON files in `src/data/`
- **Production (optional)**: Fetched from a REST API at `PUBLIC_API_BASE_URL` env variable; falls back to static data on failure

The site is designed to be fully functional without any backend API.
