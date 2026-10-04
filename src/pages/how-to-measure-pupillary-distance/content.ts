/**
 * content.ts — "How to Measure Your Pupillary Distance (PD) at Home" article.
 *
 * English-only article (English-first article strategy): content lives next to
 * the page instead of the shared locale dictionary. Each article carries its
 * own publish date — never reuse one date across articles.
 */
import type { ContentPageDict } from '../../i18n/content.js';

export const DATE_PUBLISHED = '2026-10-07';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string;
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure pupillary distance with a mirror',
    totalTime: 'PT10M',
    tools: ['Mirror', 'Millimeter ruler (or the on-screen ruler)'],
    steps: [
      {
        name: 'Position yourself',
        text: 'Stand about 20 cm (8 inches) from a mirror in good light, and take your glasses off.',
      },
      {
        name: 'Hold the ruler against your brow',
        text: 'Hold a millimeter ruler horizontally against your brow, just above your eyes.',
      },
      {
        name: 'Align zero with your left pupil',
        text: 'Close your right eye. With your left eye looking straight ahead, align the ruler\u2019s zero mark with the center of your left pupil.',
      },
      {
        name: 'Read your right pupil',
        text: 'Without moving the ruler, open your right eye and close your left. Read the millimeter mark at the center of your right pupil.',
      },
      {
        name: 'Record the number',
        text: 'That reading, in millimeters, is your (single) pupillary distance.',
      },
    ],
  },
  {
    name: 'How to measure pupillary distance with a friend\u2019s help',
    totalTime: 'PT5M',
    tools: ['A helper', 'Millimeter ruler (or the on-screen ruler)'],
    steps: [
      {
        name: 'Sit facing each other',
        text: 'Sit about an arm\u2019s length apart, facing each other.',
      },
      {
        name: 'Look into the distance',
        text: 'Look straight ahead at something distant behind your helper — not at their face — so your eyes stay parallel.',
      },
      {
        name: 'Hold the ruler across your brow',
        text: 'Your helper holds the millimeter ruler horizontally across your brow.',
      },
      {
        name: 'Read pupil to pupil',
        text: 'Your helper reads the distance between the centers of your pupils in millimeters.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Pupillary Distance (PD) for Glasses Online | Real Online Ruler',
  description:
    'Measure your pupillary distance at home with a mirror and a millimeter ruler — or our free on-screen ruler. Step-by-step mirror and helper methods, plus single vs dual PD explained.',
  h1: 'How to Measure Your Pupillary Distance (PD) at Home',
  lede: 'Ordering glasses online? You\u2019ll need your pupillary distance — the millimeter span between the centers of your pupils. Here\u2019s how to measure it at home in minutes, with a mirror and our free on-screen ruler.',
  breadcrumb: 'Measure pupillary distance',
  related: [
    { href: '/mm/', label: 'Millimeter ruler' },
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
  faqs: [
    {
      q: 'What is a normal pupillary distance?',
      a: 'Most adults fall between 54 and 74 millimeters. If your measurement lands far outside that range, re-measure — something slipped.',
    },
    {
      q: 'Can I measure my PD with my phone?',
      a: 'Yes. Calibrate the on-screen ruler with a credit card, open the millimeter ruler on your phone, and use the mirror method holding the phone\u2019s edge against your brow like a ruler.',
    },
    {
      q: 'Single vs dual PD — which one do I need?',
      a: 'Most online glasses stores accept a single (binocular) PD — one number like 64 mm. Dual (monocular) PD gives a per-eye split like 32/32 and is more precise; it matters most for strong prescriptions.',
    },
    {
      q: 'How accurate is measuring PD at home?',
      a: 'Within about 1 mm when done carefully — fine for most online orders. For strong prescriptions (roughly \u00b14.00 diopters or more), a professional measurement is worth the trip.',
    },
    {
      q: 'Does pupillary distance change over time?',
      a: 'In adults it\u2019s essentially stable. Children\u2019s PD changes as they grow, so re-measure kids each time they need glasses.',
    },
    {
      q: 'Can I measure PD in inches?',
      a: 'Don\u2019t — PD is always given in millimeters. Inches are far too coarse: a single millimeter is only about four-hundredths of an inch, and lens centering needs that precision.',
    },
  ],
  blocks: [
    {
      kind: 'p',
      html: 'Your <strong>pupillary distance (PD)</strong> is the distance between the centers of your pupils, measured in millimeters. Online glasses stores need it to align each lens\u2019s optical center with your eyes — without it, even a perfect prescription feels wrong. Eye doctors measure PD during an exam but often leave it off the printed prescription, so here\u2019s how to get the number yourself.',
    },
    { kind: 'h2', text: 'What you\u2019ll need' },
    {
      kind: 'ul',
      items: [
        '<strong>A mirror</strong> (for the solo method) or <strong>a friend</strong> (for the helper method below).',
        '<strong>A millimeter ruler</strong> — or our <a href="/mm/">on-screen millimeter ruler</a>, which works once calibrated.',
        'Good lighting, and your glasses off.',
      ],
    },
    { kind: 'h2', text: 'Method 1: The mirror method (by yourself)' },
    {
      kind: 'p',
      html: 'This is the method most eyewear guides describe. It takes a steady hand and about five minutes.',
    },
    {
      kind: 'ul',
      items: [
        '<strong>Stand about 20 cm (8 inches) from a mirror</strong> in good light. Take your glasses off.',
        '<strong>Hold a millimeter ruler horizontally against your brow</strong>, just above your eyes.',
        '<strong>Close your right eye.</strong> With your left eye looking straight ahead, align the ruler\u2019s zero with the <strong>center of your left pupil</strong>.',
        '<strong>Without moving the ruler</strong>, open your right eye and close your left. Read the millimeter mark at the <strong>center of your right pupil</strong>.',
        '<strong>That reading is your PD</strong> in millimeters — a single number like 63.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-pupillary-distance/mm-ruler-desktop.webp',
      alt: 'The Real Online Ruler workspace with the millimeter unit selected, showing a millimeter scale',
      caption:
        'The on-screen ruler set to <strong>millimeters</strong>. Calibrate once with a credit card and the scale reads true millimeters.',
    },
    { kind: 'h2', text: 'Method 2: With a friend\u2019s help (more accurate)' },
    {
      kind: 'p',
      html: 'A second pair of hands removes the hardest part — keeping the ruler still while switching eyes.',
    },
    {
      kind: 'ul',
      items: [
        '<strong>Sit facing each other</strong>, about an arm\u2019s length apart.',
        '<strong>Look straight ahead</strong> at something distant behind your helper — not at their face. Looking at something close makes your eyes converge and shrinks the reading.',
        '<strong>Your helper holds the ruler</strong> horizontally across your brow.',
        '<strong>They read the distance</strong> between the centers of your pupils in millimeters.',
      ],
    },
    { kind: 'h2', text: 'No physical ruler? Use the on-screen ruler' },
    {
      kind: 'p',
      html: 'Every PD guide on the internet starts with \u201cget a millimeter ruler\u201d — and stops helping if you don\u2019t have one. Here\u2019s the part those guides can\u2019t do: <strong>calibrate this site once with a credit card</strong> (any bank card is exactly 85.60 mm wide), open the <a href="/mm/">millimeter ruler on your phone</a>, and hold the phone\u2019s edge against your brow while you do the mirror method. The full walkthrough is on our <a href="/how-to-calibrate/">calibration page</a> — it takes under a minute, and then your phone is the ruler.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-pupillary-distance/mm-ruler-phone.webp',
      alt: 'The millimeter ruler displayed on a phone screen',
      caption:
        'The millimeter ruler on a phone — hold the phone\u2019s edge against your brow and read your PD in the mirror.',
    },
    { kind: 'h2', text: 'Single PD vs dual PD: what\u2019s the difference?' },
    {
      kind: 'p',
      html: 'You\u2019ll see two formats at checkout. Both describe the same geometry:',
    },
    {
      kind: 'table',
      head: ['Type', 'What it measures', 'Example'],
      rows: [
        ['Single (binocular) PD', 'Total distance between pupil centers', '64 mm'],
        ['Dual right PD', 'Nose-bridge center to right pupil center', '32 mm'],
        ['Dual left PD', 'Nose-bridge center to left pupil center', '31.5 mm'],
      ],
    },
    {
      kind: 'p',
      html: 'Most online stores accept a <strong>single PD</strong> quite happily. <strong>Dual PD</strong> is more precise — it accounts for faces that aren\u2019t perfectly symmetric — and it matters more the stronger your prescription is. If you measured with the mirror method above, you have a single PD, and that\u2019s enough for most orders.',
    },
    { kind: 'h2', text: 'Tips for an accurate measurement' },
    {
      kind: 'ul',
      items: [
        '<strong>Look into the distance, not at the ruler.</strong> Converging on something close narrows your measured PD.',
        '<strong>Keep the ruler perfectly still</strong> between the two eye readings — this is where most errors creep in.',
        '<strong>Measure two or three times and average.</strong> If readings differ by more than 1 mm, redo it.',
        '<strong>Take your glasses off</strong> — frames shift where the ruler sits.',
        '<strong>Sanity-check the result:</strong> most adults land between 54 and 74 mm. Far outside that range means a re-measure.',
        '<strong>Strong prescription?</strong> Around \u00b14.00 diopters and up, lens centering gets unforgiving — a professional PD measurement is worth it.',
      ],
    },
    { kind: 'h2', text: 'What if your prescription doesn\u2019t list your PD?' },
    {
      kind: 'p',
      html: 'That\u2019s normal — PD is measured during the eye exam but often left off the printed prescription slip. It\u2019s your measurement, so you can simply ask your eye doctor\u2019s office for it. Measuring at home, as above, is the fallback — and now you know exactly how.',
    },
  ],
};
