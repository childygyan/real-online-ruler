/**
 * queue.ts — the 15-day daily publish program (2026-10-05 → 2026-10-19).
 *
 * Each entry is a COMPLETE draft living in `src/pages/how-to/_drafts/<slug>/`
 * (content.ts + index.astro + screenshots already in public/images/articles/<slug>/).
 * Astro ignores `_`-prefixed directories for routing, so drafts are invisible
 * until published.
 *
 * THE DAILY PUBLISHER (cron) takes QUEUE[0] and, in order:
 *  1. `mv src/pages/how-to/_drafts/<slug> src/pages/<slug>/`
 *  2. Fix import depth in the moved files (drafts live 4 levels deep, published
 *     pages 2): in src/pages/<slug>/content.ts and index.astro, replace every
 *     `../../../../` with `../../` (e.g. `../../../../i18n/` → `../../i18n/`).
 *  3. In `src/pages/how-to/articles.ts`: add the import line, then append
 *     `entry('<slug>', <var>, <var>Date),` to ARTICLES (see the PUBLISH QUEUE
 *     anchors there).
 *  4. In `src/content.test.ts`: add the static import and the ARTICLES entry
 *     (see the PUBLISH QUEUE anchors there).
 *  5. Remove the entry from QUEUE below.
 *  6. Append one line to `public/llms.txt`:
 *     `- [<h1>](https://realonlineruler.online/<slug>/) (<datePublished>): <one-line summary>.`
 *  7. `npx vitest run && npx tsc --noEmit && npm run build` — ALL must pass.
 *  8. Deploy: `python3 ~/workspace/bin/cf-pages-deploy.py real-online-ruler
 *     /home/hatch/workspace/real-online-ruler/dist --branch=main` (run with
 *     cwd = the repo root).
 *  9. Verify live: the new URL returns 200 and contains its datePublished;
 *     /how-to/ returns 200 and shows the new card.
 *  10. Push: `git add -A` first (the push script reads tracked files from
 *     disk, so moved/new files must be staged), then
 *     `python3 ~/workspace/skills/github/bin/gh_datapush.py
 *     childygyan/real-online-ruler main "Publish <slug> (<datePublished>)"`
 *     (run with cwd = the repo root).
 * If any step fails: STOP, do not deploy, report the failure.
 *
 * `var` is the exact TS variable name to use in articles.ts / content.test.ts.
 * `visual: true` means the article is a visual reference (Article + FAQPage
 * schema only, no howToMethods) — its index.astro already reflects that.
 */
export interface QueuedArticle {
  slug: string;
  var: string;
  datePublished: string;
  visual?: boolean;
}

export const QUEUE: QueuedArticle[] = [
  { slug: 'how-big-is-4-inches', var: 'fourInches', datePublished: '2026-10-07', visual: true },
  { slug: 'how-to-measure-head-size', var: 'headSize', datePublished: '2026-10-08' },
  { slug: 'how-to-identify-screw-size', var: 'screwSize', datePublished: '2026-10-09' },
  { slug: 'how-to-measure-necklace-length', var: 'necklaceLength', datePublished: '2026-10-10' },
  { slug: 'how-to-measure-screen-size', var: 'screenSize', datePublished: '2026-10-11' },
  { slug: 'how-to-find-glasses-frame-size', var: 'glassesSize', datePublished: '2026-10-12' },
  { slug: 'how-to-measure-hand-for-gloves', var: 'gloveSize', datePublished: '2026-10-13' },
  { slug: 'how-big-is-55-inch-tv', var: 'tv55', datePublished: '2026-10-14', visual: true },
  { slug: 'how-to-measure-box-for-shipping', var: 'boxSize', datePublished: '2026-10-15' },
  { slug: 'what-does-6-inches-look-like', var: 'sixInches', datePublished: '2026-10-16', visual: true },
  { slug: 'how-to-measure-waist-size', var: 'waistSize', datePublished: '2026-10-17' },
  { slug: 'how-to-measure-picture-frame', var: 'frameSize', datePublished: '2026-10-18' },
  { slug: 'how-to-measure-inseam', var: 'inseamSize', datePublished: '2026-10-19' },
];
