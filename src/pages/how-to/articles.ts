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
  // entry('how-to-measure-...', next, nextDate),
].sort(byNewest);
