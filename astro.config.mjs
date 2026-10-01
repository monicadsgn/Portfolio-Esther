import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://esther-torres.vercel.app',
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
});
