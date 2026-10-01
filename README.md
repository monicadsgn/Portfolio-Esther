# Portfólio da Esther Torres

Site estático em Astro, uma página só, pronto para a Vercel (projeto sugerido: `esther-torres`, link final `esther-torres.vercel.app`).

## Editar conteúdo

Todo o texto, número, link e nome de imagem fica em **`src/data/conteudo.ts`**. Não precisa mexer em componente.

- Imagens ficam em **`/assets`**, com os nomes do briefing. Para trocar uma imagem, substitua o arquivo mantendo o nome.
- Se uma imagem faltar, o site mostra um espaço tracejado com o nome do arquivo esperado.
- A copy da landing page do Revisão é opcional: preencha `revisao.copyLandingPage` e ela aparece dentro de "Ver o raciocínio". Com `null`, nada aparece.

## Rodar e publicar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
```

Na Vercel: importar o repositório, framework Astro, sem configuração extra (`vercel.json` já está aqui).

## Decisões

O plano de cores, fontes e layout está em `PLANO.md`.
