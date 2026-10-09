/**
 * articles.ts — registry of English-only how-to articles.
 *
 * To publish a new article: add its page under src/pages/<slug>/ with a
 * colocated content.ts (title, description, h1, DATE_PUBLISHED), then append
 * one line to ARTICLES below. The /how-to/ index, sitemap, and interlinking
 * pick it up automatically. Each article keeps its OWN publish date — never
 * reuse one date across articles.
 */
import type { ContentBlock, ContentPageDict } from '../../i18n/content.js';
import {
  article as ringSize,
  DATE_PUBLISHED as ringSizeDate,
} from '../how-to-measure-ring-size/content.js';
import {
  article as pupillaryDistance,
  DATE_PUBLISHED as pupillaryDistanceDate,
} from '../how-to-measure-pupillary-distance/content.js';
import {
  article as whatInchLooksLike,
  DATE_PUBLISHED as whatInchLooksLikeDate,
} from '../what-does-an-inch-look-like/content.js';
// PUBLISH QUEUE (daily cron): add one import per published article here, e.g.
import { article as footSize, DATE_PUBLISHED as footSizeDate } from '../how-to-measure-foot-size/content.js';
import { article as wristSize, DATE_PUBLISHED as wristSizeDate } from '../how-to-measure-wrist-size/content.js';
import { article as fourInches, DATE_PUBLISHED as fourInchesDate } from '../how-big-is-4-inches/content.js';
import { article as headSize, DATE_PUBLISHED as headSizeDate } from '../how-to-measure-head-size/content.js';
import { article as screwSize, DATE_PUBLISHED as screwSizeDate } from '../how-to-identify-screw-size/content.js';
// import { article as footSize, DATE_PUBLISHED as footSizeDate } from '../how-to-measure-foot-size/content.js';

export interface ArticleEntry {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  image?: string;
}

type FigureBlock = Extract<ContentBlock, { kind: 'figure' }>;

function entry(slug: string, page: ContentPageDict, datePublished: string): ArticleEntry {
  const figure = page.blocks.find((b): b is FigureBlock => b.kind === 'figure');
  return {
    slug,
    title: page.h1,
    description: page.description,
    datePublished,
    image: figure?.src,
  };
}

const byNewest = (a: ArticleEntry, b: ArticleEntry) =>
  b.datePublished.localeCompare(a.datePublished);

export const ARTICLES: ArticleEntry[] = [
  entry('how-to-measure-ring-size', ringSize, ringSizeDate),
  entry('how-to-measure-pupillary-distance', pupillaryDistance, pupillaryDistanceDate),
  entry('what-does-an-inch-look-like', whatInchLooksLike, whatInchLooksLikeDate),
  // PUBLISH QUEUE (daily cron): append one entry(...) line per published article here, e.g.
  entry('how-to-measure-foot-size', footSize, footSizeDate),
  entry('how-to-measure-wrist-size', wristSize, wristSizeDate),
  entry('how-big-is-4-inches', fourInches, fourInchesDate),
  entry('how-to-measure-head-size', headSize, headSizeDate),
  entry('how-to-identify-screw-size', screwSize, screwSizeDate),
  // entry('how-to-measure-foot-size', footSize, footSizeDate),
].sort(byNewest);
