/**
 * urls.ts — locale-aware URL helpers (Phase 8 scaffolding).
 */
import { DEFAULT_LOCALE, LOCALES, type LocaleCode } from './locales.js';

/** hreflang values used on the site, including the x-default fallback. */
export type HreflangCode = 'en' | 'es' | 'fr' | 'pt' | 'zh-Hans' | 'id' | 'x-default';

/**
 * Map a root-relative path (e.g. "/cm/") to its locale version.
 * English stays at the root; every other locale gets its prefix.
 */
export function localizePath(path: string, locale: LocaleCode): string {
  if (!path.startsWith('/')) throw new RangeError(`path must start with '/', got ${path}`);
  if (locale === DEFAULT_LOCALE) return path;
  const prefix = LOCALES.find((l) => l.code === locale)?.prefix ?? '';
  return `${prefix}${path === '/' ? '/' : path}`;
}

/**
 * hreflang alternates for a page path, plus x-default (which points at English).
 * Returned in LOCALES order with x-default last.
 */
export function alternateLinks(
  path: string,
  siteOrigin: string,
  codes: LocaleCode[] = LOCALES.map((l) => l.code)
): { hreflang: HreflangCode; href: string }[] {
  const links: { hreflang: HreflangCode; href: string }[] = codes.map((code) => {
    const l = LOCALES.find((x) => x.code === code)!;
    return { hreflang: l.hreflang as HreflangCode, href: `${siteOrigin}${localizePath(path, code)}` };
  });
  links.push({ hreflang: 'x-default', href: `${siteOrigin}${path}` });
  return links;
}

/** og:locale value for a locale code (e.g. "es_ES", "zh_Hans"). */
export function ogLocale(code: LocaleCode): string {
  switch (code) {
    case 'en':
      return 'en_US';
    case 'es':
      return 'es_ES';
    case 'fr':
      return 'fr_FR';
    case 'pt':
      return 'pt_BR';
    case 'zh':
      return 'zh_Hans';
    case 'id':
      return 'id_ID';
  }
}

/**
 * Rewrite root-relative hrefs in an HTML snippet for a locale.
 * "/guide/" becomes "/es/guide/" under the es locale; the default locale,
 * fragment-only hrefs, and absolute URLs are left untouched.
 */
export function localizeHtml(html: string, locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE) return html;
  return html.replace(/href="\/(?!\/)/g, `href="/${locale}/`);
}

/**
 * Detect the locale from a URL pathname by its leading segment
 * ("/es/guide/" -> "es"). Unknown or missing segments mean English.
 */
export function getLocaleFromPath(pathname: string): LocaleCode {
  const seg = pathname.split('/').filter(Boolean)[0] ?? '';
  const found = LOCALES.find((l) => l.code !== DEFAULT_LOCALE && l.prefix === `/${seg}`);
  return found ? found.code : DEFAULT_LOCALE;
}
