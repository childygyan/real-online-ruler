/**
 * content.test.ts — Phase 5/8 static checks over the SEO content pages.
 *
 * Phase 8: pages are locale-driven. Content lives in the English dictionary
 * (src/i18n/dicts/en.ts) and thin locale wrappers mirror every page under
 * /{locale}/. These checks verify the wiring and the dictionary content.
 */
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { en } from './i18n/dicts/en.js';
import { getDict } from './i18n/dict.js';
import { DEFAULT_LOCALE, LOCALES } from './i18n/locales.js';

const ROOT = join(__dirname, '..');

const PAGES = [
  {
    file: 'src/pages/how-to-calibrate/index.astro',
    path: '/how-to-calibrate/',
    key: 'howToCalibrate',
  },
  { file: 'src/pages/guide/index.astro', path: '/guide/', key: 'guide' },
  { file: 'src/pages/cm/index.astro', path: '/cm/', key: 'cm' },
  { file: 'src/pages/inches/index.astro', path: '/inches/', key: 'inches' },
  { file: 'src/pages/mm/index.astro', path: '/mm/', key: 'mm' },
  { file: 'src/pages/pixels/index.astro', path: '/pixels/', key: 'pixels' },
] as const;

const EXPECTED = {
  howToCalibrate: 'How to calibrate your on-screen ruler',
  guide: 'How to read the ruler',
  cm: 'Centimeter ruler',
  inches: 'Inch ruler',
  mm: 'Millimeter ruler',
  pixels: 'Pixel ruler',
} as const;

function read(rel: string): string {
  return readFileSync(join(ROOT, rel), 'utf8');
}

describe('content pages', () => {
  for (const page of PAGES) {
    it(`${page.path} is locale-driven with full metadata`, () => {
      expect(existsSync(join(ROOT, page.file))).toBe(true);
      const src = read(page.file);
      expect(src).toContain(`path = '${page.path}'`);
      expect(src).toContain('getDict');
      expect(src).toContain('ContentBlocks');
      expect(src).toContain('locale');
      expect(src).toContain(`content.${page.key}`);
    });

    it(`${page.path} ships FAQPage JSON-LD from the dictionary`, () => {
      const src = read(page.file);
      expect(src).toContain("'@type': 'FAQPage'");
      expect(src).toContain('mainEntity');
      expect(src).toContain('acceptedAnswer');
    });

    it(`${page.path} dictionary content is complete`, () => {
      const dict = en.content[page.key];
      expect(dict.title.length).toBeGreaterThan(0);
      expect(dict.description.length).toBeGreaterThan(0);
      expect(dict.h1).toBe(EXPECTED[page.key]);
      expect(dict.faqs.length).toBeGreaterThan(0);
      expect(dict.blocks.length).toBeGreaterThan(0);
      expect(dict.breadcrumb.length).toBeGreaterThan(0);
      expect(dict.related.length).toBeGreaterThanOrEqual(2);
    });

    it(`${page.path} exists under every locale`, () => {
      for (const l of LOCALES) {
        if (l.code === DEFAULT_LOCALE) continue;
        const rel = `src/pages/${l.code}${page.path}index.astro`;
        expect(existsSync(join(ROOT, rel)), rel).toBe(true);
      }
    });

    it(`${page.path} localized content keeps its shape`, () => {
      for (const l of LOCALES) {
        if (l.code === DEFAULT_LOCALE) continue;
        const dict = getDict(l.code).content[page.key];
        expect(dict.title.length, l.code).toBeGreaterThan(0);
        expect(dict.h1.length, l.code).toBeGreaterThan(0);
        expect(dict.faqs.length, l.code).toBe(en.content[page.key].faqs.length);
        expect(dict.blocks.length, l.code).toBe(en.content[page.key].blocks.length);
      }
    });
  }

  it('home page ships WebApplication + FAQPage JSON-LD from the dictionary', () => {
    const src = read('src/pages/index.astro');
    expect(src).toContain("'@type': 'WebApplication'");
    expect(src).toContain("'@type': 'Offer'");
    expect(src).toContain("'@type': 'FAQPage'");
    expect(en.home.faqs).toHaveLength(12);
  });

  it('footer dictionary links every content page', () => {
    const hrefs = en.footer.guideLinks.map((r) => r.href);
    for (const page of PAGES) {
      expect(hrefs).toContain(page.path);
    }
  });

  it('content pages cross-link each other via dictionary related links', () => {
    for (const page of PAGES) {
      const dict = en.content[page.key];
      const others: string[] = PAGES.filter((p) => p.path !== page.path).map((p) => p.path);
      const linked = dict.related.filter((r) => others.includes(r.href));
      expect(linked.length).toBeGreaterThanOrEqual(2);
    }
  });
});
