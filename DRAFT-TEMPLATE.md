# Draft Article Template — 15-day publish program

Write your assigned articles under `src/pages/how-to/_drafts/<slug>/`:
- `content.ts` — article data (this template)
- `index.astro` — page (copy the pattern exactly)
- screenshots → `public/images/articles/<slug>/desktop.webp` + `mobile.webp`

Your brief message gives you: slug, title/h1, datePublished, visual-vs-procedural,
2 required screenshot units, and topic facts. **Use the exact slug, title, and
datePublished from your brief** (date must match `src/pages/how-to/queue.ts`).

## content.ts — procedural (how-to with steps)

```ts
/**
 * content.ts — "<H1>".
 *
 * Draft for the 15-day daily publish program (<DATE>). Procedural article:
 * ships Article + HowTo + FAQPage JSON-LD (index.astro builds it from
 * howToMethods below).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '<DATE>';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to <do X> with <method 1>',
    totalTime: 'PT10M',
    tools: ['<tool 1>', '<tool 2>', 'On-screen ruler'],
    steps: [
      { name: '<Step name>', text: '<1-2 sentences, >20 chars.>' },
      // ... 4-6 steps per method
    ],
  },
  {
    name: 'How to <do X> with <method 2>',
    totalTime: 'PT5M',
    tools: ['<tool>'],
    steps: [ /* 3-6 steps */ ],
  },
];

export const article: ContentPageDict = {
  title: '<H1> | Real Online Ruler', // keep ≤ 70 chars total
  description: '<1-2 sentence meta description, ≤ 160 chars.>',
  h1: '<H1>',
  lede: '<2-3 sentence intro shown under the H1.>',
  breadcrumb: '<short crumb, e.g. "Measure foot size">',
  blocks: [
    { kind: 'p', html: '...' },           // intro; may contain <a href="/.../">, <em>, <strong>
    { kind: 'h2', text: '...' },
    { kind: 'p', html: '...' },
    // ... 11+ blocks total: mix h2 / p / ul / table / figure / truesize
    {
      kind: 'figure',
      src: '/images/articles/<slug>/desktop.webp',
      alt: '<descriptive alt, >10 chars>',
      caption: '<caption, may contain links>',
    },
  ],
  faqs: [
    { q: '<question>', a: '<answer, 1-3 sentences>' },
    // ... 5-6 FAQs
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/mm/', label: 'Millimeter ruler' },   // pick 3 relevant
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
```

## content.ts — visual (actual-size reference, NO steps)

Same as above but **omit `howToMethods` entirely** and note in the header
comment: "Visual article: ships Article + FAQPage JSON-LD only."
Use `{ kind: 'truesize', bars: [...] }` and/or `shapes` blocks (see the live
`/what-does-an-inch-look-like/` article for the pattern) and use the
truesize index.astro variant below.

## index.astro — procedural (copy exactly, replace slug/path)

```astro
---
/**
 * /<slug>/ — "<H1>".
 *
 * Draft for the 15-day daily publish program (<DATE>).
 */
import ContentLayout from '../../../../layouts/ContentLayout.astro';
import ContentBlocks from '../../../../components/ContentBlocks.astro';
import { article, DATE_PUBLISHED, howToMethods } from './content.js';

const path = '/<slug>/';
const site = (Astro.site?.toString() ?? 'https://realonlineruler.online/').replace(/\/$/, '');
const pageUrl = `${site}${path}`;
const images = [
  `${site}/images/articles/<slug>/desktop.webp`,
  `${site}/images/articles/<slug>/mobile.webp`,
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: article.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.h1,
  description: article.description,
  datePublished: DATE_PUBLISHED,
  author: { '@type': 'Person', name: 'Firoz Khan' },
  mainEntityOfPage: pageUrl,
  image: images,
};

const howToJsonLd = howToMethods.map((m) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: m.name,
  description: article.description,
  image: images,
  totalTime: m.totalTime,
  tool: m.tools,
  step: m.steps.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
}));
---

<ContentLayout
  title={article.title}
  description={article.description}
  path={path}
  h1={article.h1}
  lede={article.lede}
  breadcrumb={article.breadcrumb}
  locales={['en']}
  datePublished={DATE_PUBLISHED}
  jsonLd={[articleJsonLd, ...howToJsonLd, faqJsonLd]}
  related={article.related}
>
  <ContentBlocks blocks={article.blocks} />
</ContentLayout>
```

## index.astro — visual (no howToMethods; WITH true-size script)

Same as procedural but: remove the `howToMethods` import and the
`howToJsonLd` const, use `jsonLd={[articleJsonLd, faqJsonLd]}`, and append
the sizing script verbatim from
`src/pages/what-does-an-inch-look-like/index.astro` (the `<script is:inline>`
block that reads `ror-calibration` and sizes `[data-actual-mm]` elements).

## Screenshots (2 per article, real production site)

```bash
node ~/workspace/bin/shots/cdp-shot.js "https://realonlineruler.online/" /tmp/<slug>-desktop.png 1280 900 "click:[data-unit=\"<unit>\"]" "#ruler-app"
node ~/workspace/bin/shots/cdp-shot.js "https://realonlineruler.online/" /tmp/<slug>-mobile.png 390 844 "click:[data-unit=\"<unit>\"]" "#ruler-app"
# then convert (cwebp is NOT installed — use ffmpeg):
ffmpeg -y -loglevel error -i /tmp/<slug>-desktop.png -c:v libwebp -quality 82 public/images/articles/<slug>/desktop.webp
ffmpeg -y -loglevel error -i /tmp/<slug>-mobile.png -c:v libwebp -quality 82 public/images/articles/<slug>/mobile.webp
rm /tmp/<slug>-desktop.png /tmp/<slug>-mobile.png
```

`<unit>` is `cm`, `mm`, `in`, or `px` per your brief. Open each PNG before
converting (read the file) and re-shoot if the unit didn't switch.

## Rules (non-negotiable)

1. **Never fabricate.** Every number, size chart value, and standard you state
   must be verified with `browser.search` first (or be in your brief as a
   verified fact). If a value varies by brand/region, say so in the article.
2. **Links:** `related` + in-body links may ONLY point to pages that exist
   today: `/how-to-calibrate/`, `/guide/`, `/cm/`, `/mm/`, `/inches/`,
   `/pixels/`, `/how-to/`, and the three live articles
   (`/how-to-measure-ring-size/`, `/how-to-measure-pupillary-distance/`,
   `/what-does-an-inch-look-like/`). NEVER link to another draft's slug.
3. English only. `locales={['en']}` always.
4. Figures: exactly the 2 screenshots above (desktop + mobile), real files.
5. Write genuinely useful content, not filler: real methods, real numbers,
   honest caveats ("brands vary", "verify critical measurements physically").
6. After writing, run: `npx vitest run src/content.test.ts` from the repo root
   and fix any failure in YOUR drafts. Do not touch other articles' files.
