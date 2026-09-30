/**
 * urls.test.ts — Phase 8 locale URL helper tests.
 */
import { describe, expect, it } from 'vitest';
import { alternateLinks, getLocaleFromPath, localizeHtml, localizePath, ogLocale } from './urls.js';

describe('localizePath', () => {
  it('leaves English paths untouched', () => {
    expect(localizePath('/', 'en')).toBe('/');
    expect(localizePath('/guide/', 'en')).toBe('/guide/');
    expect(localizePath('/#ruler-app', 'en')).toBe('/#ruler-app');
  });

  it('prefixes non-default locales', () => {
    expect(localizePath('/', 'es')).toBe('/es/');
    expect(localizePath('/guide/', 'es')).toBe('/es/guide/');
    expect(localizePath('/#ruler-app', 'es')).toBe('/es/#ruler-app');
    expect(localizePath('/404/', 'zh')).toBe('/zh/404/');
  });
});

describe('alternateLinks', () => {
  it('emits all six locales plus x-default with absolute URLs', () => {
    const links = alternateLinks('/guide/', 'https://example.com');
    const byLang = Object.fromEntries(links.map((l) => [l.hreflang, l.href]));
    expect(byLang['en']).toBe('https://example.com/guide/');
    expect(byLang['es']).toBe('https://example.com/es/guide/');
    expect(byLang['fr']).toBe('https://example.com/fr/guide/');
    expect(byLang['pt']).toBe('https://example.com/pt/guide/');
    expect(byLang['zh-Hans']).toBe('https://example.com/zh/guide/');
    expect(byLang['id']).toBe('https://example.com/id/guide/');
    expect(byLang['x-default']).toBe('https://example.com/guide/');
    expect(links).toHaveLength(7);
  });
});

describe('ogLocale', () => {
  it('maps locale codes to OG locale tags', () => {
    expect(ogLocale('en')).toBe('en_US');
    expect(ogLocale('es')).toBe('es_ES');
    expect(ogLocale('fr')).toBe('fr_FR');
    expect(ogLocale('pt')).toBe('pt_BR');
    expect(ogLocale('zh')).toBe('zh_Hans');
    expect(ogLocale('id')).toBe('id_ID');
  });
});

describe('getLocaleFromPath', () => {
  it('detects the locale from the leading path segment', () => {
    expect(getLocaleFromPath('/')).toBe('en');
    expect(getLocaleFromPath('/guide/')).toBe('en');
    expect(getLocaleFromPath('/es/')).toBe('es');
    expect(getLocaleFromPath('/es/guide/')).toBe('es');
    expect(getLocaleFromPath('/zh/cm/')).toBe('zh');
    expect(getLocaleFromPath('/pt/')).toBe('pt');
  });

  it('falls back to English for unknown segments', () => {
    expect(getLocaleFromPath('/de/guide/')).toBe('en');
    expect(getLocaleFromPath('/xx/')).toBe('en');
  });
});

describe('localizeHtml', () => {
  it('rewrites root-relative hrefs for non-default locales', () => {
    const html = '<a href="/guide/">x</a> <a href="/#ruler-app">y</a>';
    expect(localizeHtml(html, 'es')).toBe(
      '<a href="/es/guide/">x</a> <a href="/es/#ruler-app">y</a>'
    );
  });

  it('leaves English, fragments, and absolute URLs alone', () => {
    const html = '<a href="#faq">x</a> <a href="https://example.com/">y</a>';
    expect(localizeHtml(html, 'fr')).toBe(html);
    expect(localizeHtml('<a href="/guide/">x</a>', 'en')).toBe('<a href="/guide/">x</a>');
  });
});
