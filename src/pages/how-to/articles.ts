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
import { article as beltSize, DATE_PUBLISHED as beltSizeDate } from '../how-to-measure-belt-size/content.js';
// PUBLISH QUEUE (daily cron): add one import per published article here, e.g.
import { article as sixInches, DATE_PUBLISHED as sixInchesDate } from '../what-does-6-inches-look-like/content.js';
import { article as screenSize, DATE_PUBLISHED as screenSizeDate } from '../how-to-measure-screen-size/content.js';
import { article as footSize, DATE_PUBLISHED as footSizeDate } from '../how-to-measure-foot-size/content.js';
import { article as tv55, DATE_PUBLISHED as tv55Date } from '../how-big-is-55-inch-tv/content.js';
import { article as wristSize, DATE_PUBLISHED as wristSizeDate } from '../how-to-measure-wrist-size/content.js';
import { article as fourInches, DATE_PUBLISHED as fourInchesDate } from '../how-big-is-4-inches/content.js';
import { article as headSize, DATE_PUBLISHED as headSizeDate } from '../how-to-measure-head-size/content.js';
import { article as screwSize, DATE_PUBLISHED as screwSizeDate } from '../how-to-identify-screw-size/content.js';
import { article as waistSize, DATE_PUBLISHED as waistSizeDate } from '../how-to-measure-waist-size/content.js';
import { article as necklaceLength, DATE_PUBLISHED as necklaceLengthDate } from '../how-to-measure-necklace-length/content.js';
import { article as glassesSize, DATE_PUBLISHED as glassesSizeDate } from '../how-to-find-glasses-frame-size/content.js';
import { article as gloveSize, DATE_PUBLISHED as gloveSizeDate } from '../how-to-measure-hand-for-gloves/content.js';
import { article as boxSize, DATE_PUBLISHED as boxSizeDate } from '../how-to-measure-box-for-shipping/content.js';
import { article as frameSize, DATE_PUBLISHED as frameSizeDate } from '../how-to-measure-picture-frame/content.js';
import { article as inseamSize, DATE_PUBLISHED as inseamSizeDate } from '../how-to-measure-inseam/content.js';
import { article as twoInches, DATE_PUBLISHED as twoInchesDate } from '../how-big-is-2-inches/content.js';
import { article as tenCm, DATE_PUBLISHED as tenCmDate } from '../what-does-10-cm-look-like/content.js';
import { article as fiveCm, DATE_PUBLISHED as fiveCmDate } from '../what-does-5-cm-look-like/content.js';
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
  entry('what-does-6-inches-look-like', sixInches, sixInchesDate),
  entry('how-to-measure-screen-size', screenSize, screenSizeDate),
  entry('how-to-measure-foot-size', footSize, footSizeDate),
  entry('how-big-is-55-inch-tv', tv55, tv55Date),
  entry('how-to-measure-wrist-size', wristSize, wristSizeDate),
  entry('how-big-is-4-inches', fourInches, fourInchesDate),
  entry('how-to-measure-head-size', headSize, headSizeDate),
  entry('how-to-identify-screw-size', screwSize, screwSizeDate),
  entry('how-to-measure-waist-size', waistSize, waistSizeDate),
  entry('how-to-measure-necklace-length', necklaceLength, necklaceLengthDate),
  entry('how-to-find-glasses-frame-size', glassesSize, glassesSizeDate),
  entry('how-to-measure-hand-for-gloves', gloveSize, gloveSizeDate),
  entry('how-to-measure-box-for-shipping', boxSize, boxSizeDate),
  entry('how-to-measure-picture-frame', frameSize, frameSizeDate),
  entry('how-to-measure-inseam', inseamSize, inseamSizeDate),
  entry('how-big-is-2-inches', twoInches, twoInchesDate),
  entry('what-does-10-cm-look-like', tenCm, tenCmDate),
  entry('what-does-5-cm-look-like', fiveCm, fiveCmDate),
  entry('how-to-measure-belt-size', beltSize, beltSizeDate),
  // entry('how-to-measure-foot-size', footSize, footSizeDate),
].sort(byNewest);
