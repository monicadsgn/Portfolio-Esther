# Plano do portfólio da Esther Torres

Primeira passada, antes de construir. Depois do plano, a revisão contra o briefing.

## Cores

| Nome | Hex | Papel |
| --- | --- | --- |
| Mata fechada | `#0E2A1E` | Fundo dos blocos escuros e cor do texto nos blocos claros. É a cor que manda. |
| Folha de bananeira | `#1B6B3E` | Verde vivo: barras "com roteiro meu", links e detalhes nos blocos claros (5,46:1 sobre capim). |
| Capim | `#E4EFD2` | Fundo dos blocos claros. Verde bem claro, puxado para o amarelo, longe do sálvia da Dra. Gabriela Horn. |
| Cajá | `#F4B63F` | Quente principal. Estrelas, números e botões sobre o verde escuro (8,48:1 sobre mata fechada). |
| Urucum | `#A93514` | Quente de apoio. Só nos blocos claros: chip "Minha parte", sol atrás do retrato (5,48:1 sobre capim e 4,92:1 sobre o capim mais fundo dos cartões). |

Regras de contraste: cajá nunca vira texto sobre capim (1,5:1); urucum nunca vira texto sobre mata fechada (3,2:1).

O sálvia da arte da Dra. Gabriela Horn fica em torno de `#7E9A68`, médio e acinzentado. O site usa os dois extremos (mata fechada, quase preta, e capim, quase branco) mais um verde saturado. Assim as artes das médicas leem como conteúdo de cliente.

## Fontes

- **Bricolage Grotesque** (variável, títulos). Em peso alto e tamanho grande ela tem cara de letreiro pintado à mão, de placa de feira e capa de cordel. É a brasilidade nas letras, sem cair em fonte temática. O título é tratado como forma: corpo enorme, entrelinha apertada, quebras de linha escolhidas.
- **Hanken Grotesk** (variável, texto). Sem serifa aberta, legível no celular, neutra o bastante para não brigar com a de cima.

As duas são servidas pelo próprio site (sem Google Fonts), com `font-display: swap`.

## Conceito: o céu do mês

A ideia central do briefing é "ela planeja o mês antes de ele começar". O recurso gráfico que une isso ao pedido de brasilidade e de místico é um **calendário de cobogó**: 30 furos redondos numa grade, como um elemento vazado de muro. Os dias com conteúdo planejado viram estrelas de cajá e uma linha fina liga as estrelas, como uma constelação. É o único momento de movimento da página: a constelação se desenha uma vez quando a seção "Como eu trabalho" entra na tela. O resto fica quieto.

O retrato fica dentro de um **arco** (portal de igreja colonial, janela de casarão), com um sol de urucum atrás e uma lua fina em traço. Granulado leve em SVG nos blocos escuros.

```
┌──────────────────────────────────────────────┐
│ Esther Torres          Trabalhos Sobre Contato│  menu fixo pequeno
├──────────────────────────────────────────────┤
│ MATA FECHADA + granulado                     │
│  Esther                        ╭──────╮  ☾   │
│  Torres                       │ retrato│      │  arco + sol de urucum
│  social media e copywriting   │ (arco) │      │
│  linha fina                    ╰──────╯       │
│  "Transformo informações..."                  │
│  [Conversar no WhatsApp]                      │
├──────────────────────────────────────────────┤
│ CAPIM   Onde atuei                            │
│  V4 Company ........ Ateliê, Trajeton         │  nomes grandes, só texto
│  Numit ............. Dra. Rita Leão, Horn     │
│  Também: C2S, BSN Tec                         │
├──────────────────────────────────────────────┤
│ CAPIM   Sobre | Formação | Ferramentas        │
├──────────────────────────────────────────────┤
│ MATA    Como eu trabalho                      │
│  "Eu planejo o mês antes      ○ ○ ★ ○ ○ ○ ○   │
│   de ele começar..."          ○ ★─○─○─★ ○ ○   │  calendário de cobogó
│                               ○ ○ ○ ★ ○ ○ ○   │  constelação se desenha
├──────────────────────────────────────────────┤
│ CAPIM   Destaques                             │
│  Revisão Ensino Jurídico   [Minha parte]      │
│   190 mil ──★── 197 mil   2.400 matrículas    │
│   print do perfil      ▸ ver o raciocínio     │
│  Dra. Rita Leão            [Minha parte]      │
│   barras do zero: 349 518 | 5.069 3.329       │
│   prints   carrossel ◂ card ▸  + texto ao lado│
│  Dra. Gabriela Horn        [Minha parte]      │
│   carrossel ◂ card ▸  + texto  ▸ raciocínio   │
├──────────────────────────────────────────────┤
│ CAPIM   Outros projetos: Ateliê | Trajeton    │  dois cartões iguais
├──────────────────────────────────────────────┤
│ MATA    Contato: WhatsApp, e-mail, LinkedIn   │
│         Trabalho remoto.                      │
└──────────────────────────────────────────────┘
          [WhatsApp] fixo no celular, abaixo do conteúdo
```

## Três princípios do que torna a página única

1. **O mês é o desenho.** O único gesto gráfico forte (o calendário de cobogó com constelação) é a própria tese dela: planejar antes. Não é enfeite.
2. **O texto dela aparece inteiro.** Os carrosséis abertos mostram a arte e, ao lado, o texto que ela escreveu, card a card. A prova é a escrita, e a arte da cliente fica como contexto.
3. **Número sem maquiagem.** Barras começando do zero, números exatos do anexo, nenhum multiplicador, nenhum adjetivo de resultado.

## Revisão do plano contra o briefing

- **Trocado:** a primeira ideia de fundo era um off-white quente. Isso é o combo creme mais terracota que o briefing manda evitar. Virou capim, um verde claríssimo.
- **Trocado:** a primeira ideia era usar a constelação nos números do Revisão (sugestão do briefing). Mas a ousadia deve ficar em um lugar só, e o calendário que se desenha conta a tese central melhor que dois números. No Revisão ficou só uma linha fina estática entre 190 mil e 197 mil, sem animação.
- **Trocado:** retrato em círculo é o padrão de qualquer portfólio. Virou arco de portal, com o sol atrás.
- **Trocado:** chita, azulejo e folhagem tropical entraram e saíram. Ficou só o cobogó (no calendário) e o traço fino de sol e lua. Contenção.
- **Trocado:** os títulos de seção não têm etiqueta em caixa-alta espaçada nem número 01/02/03. A navegação é pelo menu e pelos próprios títulos.
- **Mantido:** dois pesos de bloco (mata fechada e capim) alternando, porque isso também separa o site das artes das médicas, que são claras e acinzentadas.
