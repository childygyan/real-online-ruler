/**
 * content.ts — typed building blocks for the Phase 5 SEO content pages (Phase 8).
 *
 * Each content page's article body is a list of ContentBlocks stored in the
 * locale dictionary. `p.html` / `ul.items` / table cells may contain a small
 * set of inline tags: <strong>, <em>, <code>, <a href="...">. Translators keep
 * href paths as English root paths ("/guide/"); the renderer localizes them.
 */
export type ContentBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; html: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'figure'; src: string; alt: string; caption: string };

export interface ContentFaq {
  q: string;
  a: string;
}

export interface ContentRelated {
  href: string;
  label: string;
}

export interface ContentPageDict {
  title: string;
  description: string;
  h1: string;
  lede: string;
  breadcrumb: string;
  related: ContentRelated[];
  faqs: ContentFaq[];
  blocks: ContentBlock[];
}
