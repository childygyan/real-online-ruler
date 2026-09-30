/**
 * locales.ts — the six Phase 8 locales.
 *
 * Native-term demand (Google Trends, worldwide, past 12 months, pulled 2026-09-30):
 * - es "regla online": STRONG, 32 regions (Spain 100, Ecuador 81, Chile 72, ...)
 * - fr "règle en ligne": MODERATE (France 100, BE/CH/MA/CA)
 * - pt "régua online": MODERATE (Portugal 100, Brazil 47 — 215M people)
 * - zh "在线尺子": STRONG concentration (China 100 — 1.4B people)
 * - id "penggaris online": MODERATE (Indonesia-only, 280M people)
 * Arabic DROPPED: "مسطرة اون لاين" ≈ zero measurable demand (UAE/Lebanon demand
 * appears in English-term data, served by the English base). No RTL work needed.
 * German/Italian dropped earlier (no demand signal).
 */

export const LOCALES = [
  { code: 'en', hreflang: 'en', htmlLang: 'en', label: 'English', prefix: '' },
  { code: 'es', hreflang: 'es', htmlLang: 'es', label: 'Español', prefix: '/es' },
  { code: 'fr', hreflang: 'fr', htmlLang: 'fr', label: 'Français', prefix: '/fr' },
  { code: 'pt', hreflang: 'pt', htmlLang: 'pt', label: 'Português', prefix: '/pt' },
  { code: 'zh', hreflang: 'zh-Hans', htmlLang: 'zh-Hans', label: '中文', prefix: '/zh' },
  { code: 'id', hreflang: 'id', htmlLang: 'id', label: 'Bahasa Indonesia', prefix: '/id' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: LocaleCode = 'en';

/** All non-default locale codes (locales that live under a path prefix). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l.code !== 'en');

export function getLocale(code: string): (typeof LOCALES)[number] {
  const found = LOCALES.find((l) => l.code === code);
  if (!found) throw new RangeError(`Unknown locale: ${code}`);
  return found;
}
