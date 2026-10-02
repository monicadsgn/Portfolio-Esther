import { defineConfig } from 'astro/config';

// Na Vercel, o endereço oficial vem da própria plataforma (VERCEL_PROJECT_PRODUCTION_URL).
// Assim a imagem de compartilhamento e o link canônico sempre batem com o domínio real.
const producao = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: producao ? `https://${producao}` : 'https://esther-torres.vercel.app',
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
});
