/**
 * content.test.ts — Phase 5 static checks over the SEO content pages.
 * Verifies every content page ships the metadata, JSON-LD, and internal
 * links the SEO plan requires. (Source-level checks; the build also emits
 * the sitemap, which is verified in the phase report.)
 */
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(__dirname, '..');

const PAGES = [
  {
    file: 'src/pages/how-to-calibrate/index.astro',
    path: '/how-to-calibrate/',
    h1: 'How to calibrate your on-screen ruler',
  },
  { file: 'src/pages/guide/index.astro', path: '/guide/', h1: 'How to read the ruler' },
  { file: 'src/pages/cm/index.astro', path: '/cm/', h1: 'Centimeter ruler' },
  { file: 'src/pages/inches/index.astro', path: '/inches/', h1: 'Inch ruler' },
  { file: 'src/pages/mm/index.astro', path: '/mm/', h1: 'Millimeter ruler' },
  { file: 'src/pages/pixels/index.astro', path: '/pixels/', h1: 'Pixel ruler' },
];

function read(rel: string): string {
  return readFileSync(join(ROOT, rel), 'utf8');
}

describe('content pages', () => {
  for (const page of PAGES) {
    it(`${page.path} exists with full metadata`, () => {
      expect(existsSync(join(ROOT, page.file))).toBe(true);
      const src = read(page.file);
      expect(src).toContain(`path = '${page.path}'`);
      expect(src).toContain('title=');
      expect(src).toContain('description=');
      expect(src).toContain(`h1="${page.h1}"`);
      expect(src).toContain('breadcrumb=');
      expect(src).toContain('related={related}');
    });

    it(`${page.path} ships FAQPage JSON-LD`, () => {
      const src = read(page.file);
      expect(src).toContain("'@type': 'FAQPage'");
      expect(src).toContain('mainEntity');
      expect(src).toContain('acceptedAnswer');
    });
  }

  it('home page ships WebApplication + FAQPage JSON-LD', () => {
    const src = read('src/pages/index.astro');
    expect(src).toContain("'@type': 'WebApplication'");
    expect(src).toContain("'@type': 'Offer'");
    expect(src).toContain("'@type': 'FAQPage'");
    expect(src).toContain('mainEntity: FAQS.map');
  });

  it('home FAQ is expanded (12 questions)', () => {
    const src = read('src/pages/index.astro');
    const count = (src.match(/^\s*q: '/gm) ?? []).length;
    expect(count).toBe(12);
  });

  it('footer links every content page', () => {
    const src = read('src/components/Footer.astro');
    for (const page of PAGES) {
      expect(src).toContain(`href="${page.path}"`);
    }
  });

  it('content pages cross-link each other', () => {
    // Every content page must link at least two others (via related links).
    for (const page of PAGES) {
      const src = read(page.file);
      const others = PAGES.filter((p) => p.path !== page.path);
      const linked = others.filter((o) => src.includes(`href: '${o.path}'`));
      expect(linked.length).toBeGreaterThanOrEqual(2);
    }
  });
});
