import type { ImageMetadata } from 'astro';

// Todas as imagens da pasta /assets, encontradas pelo nome do arquivo.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('/assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export function imagem(nome: string): ImageMetadata | undefined {
  return arquivos[`/assets/${nome}`]?.default;
}
