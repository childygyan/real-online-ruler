/**
 * legal.test.ts — legal pages (About / Privacy / Terms / Contact) checks.
 *
 * Verifies every locale ships the full legal dictionary with the same
 * structure, and that the footer exposes exactly four legal links with
 * root-relative hrefs (localized at render time via localizePath).
 */
import { describe, expect, it } from 'vitest';
import { DICTS } from './dict.js';
import { LOCALES } from './locales.js';

const CODES = LOCALES.map((l) => l.code);
const LEGAL_PAGES = ['about', 'privacy', 'terms', 'contact'] as const;

describe('legal dictionaries', () => {
  it('every locale has all four legal pages', () => {
    for (const code of CODES) {
      const legal = DICTS[code].content.legal;
      for (const page of LEGAL_PAGES) {
        expect(legal[page], `${code}:${page}`).toBeDefined();
      }
    }
  });

  it('about page has photo, maker, principles and connect copy in every locale', () => {
    for (const code of CODES) {
      const about = DICTS[code].content.legal.about;
      expect(about.photoAlt.length, `${code}:photoAlt`).toBeGreaterThan(0);
      expect(about.makerName, `${code}:makerName`).toBe('Firoz Khan');
      expect(about.makerOrg, `${code}:makerOrg`).toBe('FK Digital Media');
      expect(about.principles, `${code}:principles`).toHaveLength(3);
      for (const pr of about.principles) {
        expect(pr.t.length, `${code}:principle title`).toBeGreaterThan(0);
        expect(pr.d.length, `${code}:principle body`).toBeGreaterThan(0);
      }
    }
  });

  it('privacy and terms have identical section counts in every locale', () => {
    for (const code of CODES) {
      const { privacy, terms } = DICTS[code].content.legal;
      expect(privacy.sections, `${code}:privacy sections`).toHaveLength(7);
      expect(terms.sections, `${code}:terms sections`).toHaveLength(7);
      expect(privacy.updated.length, `${code}:privacy updated`).toBeGreaterThan(0);
      expect(terms.updated.length, `${code}:terms updated`).toBeGreaterThan(0);
    }
  });

  it('contact page has social and note copy in every locale', () => {
    for (const code of CODES) {
      const contact = DICTS[code].content.legal.contact;
      expect(contact.socialTitle.length, `${code}:socialTitle`).toBeGreaterThan(0);
      expect(contact.emailTitle.length, `${code}:emailTitle`).toBeGreaterThan(0);
      expect(contact.email, `${code}:email`).toBe('support@realonlineruler.online');
      expect(contact.noteBody.length, `${code}:noteBody`).toBeGreaterThan(0);
    }
  });

  it('footer exposes exactly four legal links with root-relative hrefs', () => {
    const expectedHrefs = ['/about/', '/privacy-policy/', '/terms-of-service/', '/contact/'];
    for (const code of CODES) {
      const links = DICTS[code].footer.legalLinks;
      expect(links, `${code}:legalLinks length`).toHaveLength(4);
      expect(
        links.map((l) => l.href),
        `${code}:legalLinks hrefs`
      ).toEqual(expectedHrefs);
      for (const l of links) {
        expect(l.label.length, `${code}:legal link label`).toBeGreaterThan(0);
      }
      expect(DICTS[code].footer.legalLabel.length, `${code}:legalLabel`).toBeGreaterThan(0);
    }
  });
});
