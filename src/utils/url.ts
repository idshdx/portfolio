const externalUrlPattern = /^(?:[a-z][a-z\d+\-.]*:|\/\/|#)/i;

function normalizeBase(base: string) {
  if (!base || base === '/') {
    return '/';
  }

  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

export const basePath = normalizeBase(import.meta.env?.BASE_URL ?? '/');

export function withBase(path: string) {
  if (!path || externalUrlPattern.test(path)) {
    return path;
  }

  if (path.startsWith('/')) {
    return `${basePath}${path.slice(1)}`;
  }

  return `${basePath}${path}`;
}
