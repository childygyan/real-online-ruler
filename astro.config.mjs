// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Production domain: https://realonlineruler.online (Firoz, 2026-09-30).
export default defineConfig({
  site: 'https://realonlineruler.online',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // /404/ is an error page, not content — keep it out of the sitemap.
      filter: (page) => !/\/404\//.test(page),
    }),
  ],
});
