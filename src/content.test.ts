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

describe('robots.txt and llms.txt', () => {
  it('robots.txt points crawlers at the production sitemap', () => {
    const robots = read('public/robots.txt');
    expect(robots).toContain('Sitemap: https://realonlineruler.online/sitemap-index.xml');
    expect(robots).not.toContain('pages.dev');
  });

  it('llms.txt exists and describes the site for LLMs', () => {
    expect(existsSync(join(ROOT, 'public/llms.txt'))).toBe(true);
    const llms = read('public/llms.txt');
    expect(llms).toContain('# Real Online Ruler');
    expect(llms).toContain('https://realonlineruler.online/');
    expect(llms).toContain('/privacy-policy/');
    expect(llms).toContain('/zh/');
  });
});

describe('ring-size article', () => {
  it('article page and colocated content exist with complete metadata', async () => {
    expect(existsSync(join(ROOT, 'src/pages/how-to-measure-ring-size/index.astro'))).toBe(true);
    const mod = await import('./pages/how-to-measure-ring-size/content.js');
    const a = mod.article;
    for (const key of ['title', 'description', 'h1', 'lede', 'breadcrumb'] as const) {
      expect(a[key].length, `article.${key}`).toBeGreaterThan(0);
    }
    expect(a.blocks.length).toBeGreaterThan(10);
    expect(a.faqs.length).toBeGreaterThanOrEqual(5);
    expect(a.related.length).toBeGreaterThanOrEqual(3);
    // ISO publish date, unique per article (never reuse one date across articles)
    expect(mod.DATE_PUBLISHED).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(mod.DATE_PUBLISHED))).toBe(false);
  });

  it('every figure references a real image file with alt text', async () => {
    const mod = await import('./pages/how-to-measure-ring-size/content.js');
    const figures = mod.article.blocks.filter((b) => b.kind === 'figure');
    expect(figures.length).toBeGreaterThanOrEqual(2);
    for (const f of figures) {
      expect(f.alt.length, `${f.src} alt`).toBeGreaterThan(10);
      expect(f.caption.length, `${f.src} caption`).toBeGreaterThan(0);
      const rel = f.src.replace(/^\//, '');
      expect(existsSync(join(ROOT, 'public', rel)), rel).toBe(true);
    }
  });

  it('article links only to pages that exist (interlinking integrity)', async () => {
    const mod = await import('./pages/how-to-measure-ring-size/content.js');
    const hrefs = new Set<string>();
    for (const r of mod.article.related) hrefs.add(r.href);
    const html = mod.article.blocks
      .filter((b) => b.kind === 'p' || b.kind === 'figure')
      .map((b) => (b.kind === 'p' ? b.html : b.caption))
      .join(' ');
    for (const m of html.matchAll(/href="(\/[^"]*\/)"/g)) hrefs.add(m[1]);
    expect(hrefs.size).toBeGreaterThan(0);
    for (const href of hrefs) {
      const pageFile = join(ROOT, 'src/pages', href.slice(1), 'index.astro');
      const dirIndex = join(ROOT, 'src/pages', href.slice(1), 'index.astro');
      expect(existsSync(pageFile) || existsSync(dirIndex), href).toBe(true);
    }
  });

  it('english footer and homepage surface the how-to hub (english-only)', () => {
    // The how-to section has no localized versions yet, so the link is rendered
    // conditionally in the components — never via localizePath (would 404).
    const footer = read('src/components/Footer.astro');
    expect(footer).toContain("locale === 'en'");
    expect(footer).toContain('href="/how-to/"');
    const home = read('src/pages/index.astro');
    expect(home).toContain('href="/how-to/"');
    // ...and the locale dicts stay in exact parity (no per-locale how-to key)
    expect(JSON.stringify(en.footer.guideLinks)).not.toContain('/how-to/');
  });

  it('how-to structured data covers both methods with named steps', async () => {
    const mod = await import('./pages/how-to-measure-ring-size/content.js');
    expect(mod.howToMethods.length).toBe(2);
    for (const m of mod.howToMethods) {
      expect(m.name.length).toBeGreaterThan(0);
      expect(m.steps.length).toBeGreaterThanOrEqual(3);
      for (const s of m.steps) {
        expect(s.name.length, 'step name').toBeGreaterThan(0);
        expect(s.text.length, 'step text').toBeGreaterThan(20);
      }
    }
  });

  it('how-to index lists every registered article with date and working links', async () => {
    expect(existsSync(join(ROOT, 'src/pages/how-to/index.astro'))).toBe(true);
    const mod = await import('./pages/how-to/articles.js');
    expect(mod.ARTICLES.length).toBeGreaterThanOrEqual(1);
    // newest first, each article with its own unique publish date
    const dates = mod.ARTICLES.map((a) => a.datePublished);
    expect(new Set(dates).size).toBe(dates.length);
    const sorted = [...mod.ARTICLES].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
    expect(mod.ARTICLES.map((a) => a.slug)).toEqual(sorted.map((a) => a.slug));
    for (const a of mod.ARTICLES) {
      expect(a.title.length).toBeGreaterThan(0);
      expect(a.description.length).toBeGreaterThan(0);
      expect(existsSync(join(ROOT, 'src/pages', a.slug, 'index.astro')), a.slug).toBe(true);
      if (a.image) {
        expect(existsSync(join(ROOT, 'public', a.image.replace(/^\//, ''))), a.image).toBe(true);
      }
    }
  });
});
