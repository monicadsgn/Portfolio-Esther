import { defineConfig } from 'astro/config';

// Endereço oficial do portfólio. Nas prévias da Vercel, usa o link da própria prévia,
// para a imagem de compartilhamento abrir ali também.
const OFICIAL = 'https://esther-torres.vercel.app';
const previa = process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_BRANCH_URL;

export default defineConfig({
  site: previa ? `https://${previa}` : OFICIAL,
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
});
