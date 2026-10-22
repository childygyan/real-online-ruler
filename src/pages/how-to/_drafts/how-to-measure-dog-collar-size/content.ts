/**
 * content.ts — "How to Measure Your Dog's Collar Size".
 *
 * Draft for the 3-day ongoing publish program (2026-11-09). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-19:
 * measure snug at the base of the neck where the collar sits; add 2 in
 * (1 in small dogs, 2–3 in large breeds); the two-finger rule confirms fit;
 * typical brackets S 8–12 / M 12–18 / L 18–26 / XL 24–34 in; recheck
 * puppies often as they grow.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-09';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: "How to measure your dog's neck for a collar",
    totalTime: 'PT10M',
    tools: ['Soft measuring tape', 'Treats'],
    steps: [
      {
        name: 'Get the dog standing and calm',
        text: 'Have your dog stand squarely — a treat held in front of the nose works wonders. Measuring while tired after a walk also keeps wiggly dogs still.',
      },
      {
        name: 'Find the collar spot',
        text: 'Locate where the collar will actually sit: at the base of the neck, just above the shoulders and a few inches below the jawline — not up on the throat.',
      },
      {
        name: 'Wrap the tape snug, not tight',
        text: 'Circle a soft tape around that spot so it touches the fur without pressing into it. Note the number to the nearest half inch.',
      },
      {
        name: 'Add comfort room',
        text: 'Add 2 inches to the neck measurement for most dogs — 1 inch for small breeds, 2 to 3 for large ones. Thick-coated dogs get an extra quarter to half inch measured over the full coat.',
      },
      {
        name: 'Match a size bracket',
        text: 'Compare your number to the maker’s chart — typical flat-collar brackets run S 8–12, M 12–18, L 18–26, XL 24–34 inches — and pick the bracket where your number lands near the middle of its adjustment range.',
      },
    ],
  },
  {
    name: 'How to fit-check a collar with the two-finger rule',
    totalTime: 'PT5M',
    tools: ['The collar'],
    steps: [
      {
        name: 'Fasten the collar at midneck',
        text: 'Buckle the collar where it will be worn — midneck, clear of the throat — at the adjustment that felt right from your measurement.',
      },
      {
        name: 'Slide two fingers underneath',
        text: 'Slip two flat fingers between the collar and the neck at the snuggest point. Both should pass with light resistance: one finger means too tight, three means too loose.',
      },
      {
        name: 'Try the slip test',
        text: 'Gently pull upward from the back of the collar. It should not slide over the ears — if it does, the collar is a flight risk no matter what the tape said.',
      },
      {
        name: 'Watch the dog move',
        text: 'Let the dog walk, trot, shake, and turn its head. The collar should stay put without rotating freely or bunching skin. Recheck the fit monthly for puppies and every few months for adults.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: "How to Measure Your Dog's Collar Size | Real Online Ruler",
  description:
    'Measure snug at the base of the neck, add 2 inches, then confirm with the two-finger rule. The right collar is snug — never tight, never loose.',
  h1: "How to Measure Your Dog's Collar Size",
  lede: 'A collar that is too tight chafes and can choke; one that is too loose slides off at the worst moment. The fix takes five minutes: one tape measurement, two added inches, and the two-finger test.',
  breadcrumb: "Measure dog collar size",
  blocks: [
    {
      kind: 'p',
      html: 'Collar size is a neck measurement plus breathing room — not a guess, and not the size of the last collar. Dogs change shape with growth, weight, and even coat season, so measure fresh each time you buy.',
    },
    { kind: 'h2', text: 'Step 1: Measure the neck' },
    {
      kind: 'ul',
      items: [
        '<strong>Stand the dog up</strong> and have a helper hold a treat at nose height.',
        '<strong>Find the collar spot:</strong> the base of the neck, just above the shoulders and a few inches below the jawline — not on the throat.',
        '<strong>Wrap a soft tape snug, not tight</strong> — touching the fur without pressing in. Note it to the nearest half inch.',
        '<strong>Add 2 inches</strong> for most dogs (1 inch for small breeds, 2–3 for large). Thick coats: measure over the full coat and add a touch more.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-dog-collar-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a short drawn measurement line for checking collar lengths',
      caption:
        'The on-screen inch ruler — handy for double-checking a collar’s adjustment range against your tape number.',
    },
    { kind: 'h2', text: 'Step 2: Pick the right size bracket' },
    {
      kind: 'p',
      html: 'Flat buckle collars typically bracket as S 8–12, M 12–18, L 18–26, and XL 24–34 inches — but every brand charts differently, so always check the maker’s own guide. Choose the bracket where your number sits near the <em>middle</em> of the adjustment range, not at either extreme: centered buckles adjust cleanly in both directions, and excess strap on an oversized collar can snag.',
    },
    { kind: 'h2', text: 'Step 3: The two-finger rule' },
    {
      kind: 'ul',
      items: [
        '<strong>Fasten at midneck</strong>, clear of the throat.',
        '<strong>Slide two flat fingers</strong> under the collar at the snuggest point. Light resistance on both = correct. Forcing them = too tight; no resistance = too loose.',
        '<strong>Slip test:</strong> pull gently upward from the back — it must not pass over the ears.',
        '<strong>Movement check:</strong> walk, trot, shake, head-turns. No free spinning, no skin bunching, no sliding toward the shoulders.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-dog-collar-size/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a drawn measurement line',
      caption:
        'At the pet store? The inch ruler on your phone settles "is this the 16-inch one?" — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'Puppies, thick coats, and escape artists' },
    {
      kind: 'p',
      html: 'Puppies can gain a fifth of their adult neck size in a few months — recheck the fit monthly and buy for now, not for "growing into." Measure thick-coated breeds over the full coat. For dogs that back out of flat collars, a martingale (limited-slip) collar is the safer pick; for brachycephalic breeds or dogs with trachea issues, a harness beats any collar for walks. And just as with <a href="/how-to-measure-necklace-length/">measuring a neck for a chain</a>, the tape position — base of the neck, not the throat — is what makes the number honest.',
    },
  ],
  faqs: [
    {
      q: 'How many inches should I add to my dog’s neck measurement?',
      a: 'Add 2 inches for most dogs — 1 inch for small breeds and 2 to 3 for large ones. That lands the buckle near the middle of the collar’s adjustment range.',
    },
    {
      q: 'What is the two-finger rule for dog collars?',
      a: 'With the collar fastened, two flat fingers should slide underneath with light resistance. One finger means too tight; three or loose means too loose.',
    },
    {
      q: 'Where on the neck do you measure for a collar?',
      a: 'At the base of the neck where the collar will sit — just above the shoulders, a few inches below the jawline, with the dog standing.',
    },
    {
      q: 'What size collar does a Labrador need?',
      a: 'Most Labradors land in the Large bracket, roughly 18–26 inches, but necks vary — measure your individual dog rather than buying by breed.',
    },
    {
      q: 'How often should I recheck my dog’s collar fit?',
      a: 'Monthly for puppies, since they grow fast, and every few months for adults — weight changes and winter coats both move the number.',
    },
    {
      q: 'Can I measure with string if I have no tape?',
      a: 'Yes. Wrap a string snug around the neck, mark it, then measure the string against any ruler — including the on-screen one after calibration.',
    },
  ],
  related: [
    { href: '/how-to-measure-necklace-length/', label: 'Measure necklace length' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
