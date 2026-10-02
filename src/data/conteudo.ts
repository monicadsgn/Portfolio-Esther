/**
 * Todo o conteúdo do portfólio mora aqui.
 * Para editar texto, número ou imagem, mexa só neste arquivo.
 * As imagens são procuradas pelo nome dentro da pasta /assets.
 * Se uma imagem não existir, o site mostra um espaço marcado no lugar.
 */

export const site = {
  titulo: 'Esther Torres | Social media e copywriting',
  descricao:
    'Portfólio da Esther Torres, social media e copywriter. Marketing de conteúdo, SEO e redação publicitária. Planejo o mês antes de ele começar e escrevo o que vira resultado.',
};

export const contato = {
  whatsappExibicao: '83 99121-9697',
  whatsappNumero: '5583991219697',
  whatsappMensagem: 'Oi, Esther! Vi seu portfólio e quero conversar.',
  email: 'torresesther2809@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esther-torres-4472672b3/',
  formato: 'Trabalho remoto.',
  botaoWhatsapp: 'Conversar no WhatsApp',
  botaoEmail: 'Mandar um e-mail',
  botaoCopiar: 'Copiar e-mail',
  botaoLinkedin: 'Ver meu LinkedIn',
};

export const capa = {
  nome: 'Esther Torres',
  funcao: 'Social media e copywriting',
  linhaFina: 'Marketing de conteúdo, SEO e redação publicitária.',
  frase:
    'Transformo informações em conteúdos estratégicos que geram conexão, fortalecem marcas e apoiam objetivos de negócio.',
  retrato: 'esther-foto-retrato-fundo-neutro.jpg',
  retratoAlt:
    'Retrato da Esther Torres: cabelo preto, longo e cacheado, blusa preta, sorriso leve, olhando para a câmera.',
  botao: 'Conversar no WhatsApp',
  /** Três números curtos, cada um leva ao caso de onde vem. */
  numeros: [
    { valor: '3 anos', rotulo: 'como social media', link: '#onde' },
    { valor: '+5 mil', rotulo: 'visualizações num Reel com roteiro meu', link: '#rita' },
    { valor: '2.400', rotulo: 'matrículas na campanha Vitalício', link: '#revisao' },
  ],
};

export type Experiencia = {
  empresa: string;
  cargo: string;
  sobre?: string;
  /** O que ela fazia, em etiquetas curtas. */
  tarefas: string[];
  resultado?: string;
};

export const ondeAtuei = {
  titulo: 'Onde atuei',
  experiencias: [
    {
      empresa: 'V4 Company',
      cargo: 'Social media',
      tarefas: [
        'Campanhas com base em SEO',
        'Endomarketing',
        'Copy para diversos canais',
        'Newsletters',
        'Calendário e textos pra designer',
      ],
    },
    {
      empresa: 'Numit',
      cargo: 'Social media',
      sobre: 'Agência de marketing para médicos.',
      tarefas: ['Planejamento do mês', 'Texto dos carrosséis', 'Roteiro de Reels', 'Vídeos de lançamento'],
    },
    {
      empresa: 'C2S (Contact2Sale)',
      cargo: 'Copywriter e growth marketing',
      tarefas: ['Copy para conversão', 'Growth marketing', 'Branding e mídia', 'UX writing em landing pages'],
    },
    {
      empresa: 'BSN Tec',
      cargo: 'Redatora e conteudista',
      tarefas: ['Comunicação com foco em SEO', 'Implantação da marca', 'UX writing em interfaces'],
    },
  ] as Experiencia[],
};

export const sobre = {
  titulo: 'Sobre mim',
  destaque: 'Meu forte é a escrita.',
  paragrafos: [
    'Atuo como social media há 3 anos, em agência e em projeto independente. Uso os números pra entender o que funciona e decidir o próximo passo.',
    'Gosto de nichos diferentes. Cada um me faz explorar a criatividade e aprender algo novo.',
  ],
  formacao: [
    { curso: 'Comunicação e Marketing', onde: 'Anhanguera', quando: '2024' },
    { curso: 'IA Generativa em Marketing', onde: 'USP', quando: '2026' },
    { curso: 'Jornalismo', onde: 'Unifacetie', quando: 'em curso' },
  ],
  ferramentas: ['Notion', 'ClickUp', 'Trello', 'Ekyte', 'Jira', 'Slack', 'Google Workspace', 'Claude', 'ChatGPT', 'Gemini', 'Manus', 'NotebookLM'],
};

/** Frases da faixa em movimento entre as seções. */
export const metodo = ['planejo o mês', 'escrevo o texto', 'roteirizo o vídeo', 'leio os números', 'ajusto a rota'];

export const comoTrabalho = {
  titulo: 'Como eu trabalho',
  frase: 'Eu planejo o mês antes de ele começar.',
  complemento:
    'Tema, texto e roteiro ficam prontos antes. Depois olho os números pra decidir o próximo passo.',
  prova: 'Consigo planejar o mês de vários clientes ao mesmo tempo, com antecedência, coerência e estratégia.',
};

export type Card = { imagem: string; texto: string };

export type Carrossel = {
  titulo: string;
  descricao: string;
  cards: Card[];
  /** Opcional: link do post publicado. Quando preenchido, aparece o botão "Ver o post publicado". */
  link?: string;
};

export const destaques = {
  titulo: 'Trabalhos em destaque',
};

export const revisao = {
  id: 'revisao',
  nome: 'Revisão Ensino Jurídico',
  onde: 'Projeto independente',
  gancho: 'Estratégia de conteúdo para um perfil grande, direto com o cliente, sem agência no meio.',
  contexto: 'Perfil de preparação para procuradorias, que já era grande quando entrei.',
  fiz: ['Estratégia de conteúdo'],
  seguidores: {
    antes: '190 mil',
    antesRotulo: 'seguidores quando entrei',
    depois: '197 mil',
    depoisRotulo: 'em 4 meses',
  },
  campanha: {
    numero: '2.400',
    rotulo: 'matrículas na campanha Vitalício deste ano',
    explicacao:
      'O Vitalício reúne todos os cursos para concursos da carreira de procuradoria, com acesso vitalício ao que já existe e ao que ainda vai ser feito.',
  },
  nota: 'Números informados por mim, do período em que atuei no perfil.',
  print: {
    imagem: 'revisao-perfil-seguidores.jpg',
    alt: 'Print do topo do perfil Revisão Ensino Jurídico no Instagram, com 9.351 posts, 197 mil seguidores e 297 seguindo.',
    legenda: 'O perfil hoje: 197 mil seguidores.',
  },
  /**
   * Opcional. Só aparece no site quando preenchido.
   * Preencha se a página do Revisão estiver no ar, por exemplo:
   * { titulo: 'Copy da landing page do Vitalício', texto: '...', link: 'https://...' }
   */
  copyLandingPage: null as null | { titulo: string; texto: string; link?: string },
};

export const rita = {
  id: 'rita',
  nome: 'Dra. Rita Leão',
  onde: 'Numit, dermatologia',
  gancho: 'Reels com roteiro meu passaram de 5 mil visualizações.',
  contexto:
    'Planejei o mês do perfil e, na reformulação da linha editorial, levantei com a médica as referências visuais que orientaram a arte dos primeiros posts.',
  fiz: ['Planejamento do mês', 'Texto dos carrosséis', 'Roteiro dos Reels', 'Referências para a arte'],
  reels: [
    { grupo: 'Reels anteriores', tema: 'Procedimento só porque viu', visualizacoes: 349 },
    { grupo: 'Reels anteriores', tema: 'Pele seca no inverno', visualizacoes: 518 },
    { grupo: 'Reels com roteiro meu', tema: 'Pele na menopausa', visualizacoes: 5069 },
    { grupo: 'Reels com roteiro meu', tema: 'O melhor resultado', visualizacoes: 3329 },
  ],
  prints: [
    {
      imagem: 'rita-antes-reel-procedimento-so-porque-viu-insights.jpg',
      alt: 'Insights de um Reel anterior da Dra. Rita Leão sobre fazer procedimento só porque viu no Instagram de alguém: 349 visualizações.',
      tipo: 'antes',
      /** Altura do recorte (0 = topo, 100 = base) para o número de visualizações aparecer. */
      foco: 50,
    },
    {
      imagem: 'rita-antes-reel-pele-seca-inverno-insights.jpg',
      alt: 'Insights de um Reel anterior da Dra. Rita Leão sobre pele seca no inverno: 518 visualizações.',
      tipo: 'antes',
      /** Altura do recorte (0 = topo, 100 = base) para o número de visualizações aparecer. */
      foco: 50,
    },
    {
      imagem: 'rita-depois-reel-pele-na-menopausa-insights.jpg',
      alt: 'Insights do Reel da Dra. Rita Leão sobre pele na menopausa, com roteiro da Esther: 5.069 visualizações.',
      tipo: 'depois',
      foco: 70,
    },
    {
      imagem: 'rita-depois-reel-melhor-resultado-insights.jpg',
      alt: 'Insights do Reel da Dra. Rita Leão sobre o melhor resultado, com roteiro da Esther: 3.329 visualizações.',
      tipo: 'depois',
      foco: 70,
    },
  ],
  carrossel: {
    titulo: 'O envelhecimento que aparece antes das rugas',
    descricao: 'Escrito na voz da médica. A capa fisga, os cards explicam e o último leva para a consulta.',
    cards: [
      {
        imagem: 'rita-carrossel-02-09-card-1-capa.jpg',
        texto: 'Existe um tipo de envelhecimento que aparece antes das rugas… E muda a forma como você reconhece seu próprio rosto.',
      },
      {
        imagem: 'rita-carrossel-02-09-card-2.jpg',
        texto: 'O contorno perde definição. A firmeza diminui. A mandíbula já não aparece da mesma forma e a parte inferior do rosto pode parecer mais pesada. É aquela sensação de que o rosto mudou, mas você não sabe dizer exatamente onde.',
      },
      {
        imagem: 'rita-carrossel-02-09-card-3.jpg',
        texto: 'Essas mudanças podem envolver perda de sustentação, firmeza, qualidade da pele e até a transição entre rosto e pescoço. Por isso, tentar corrigir apenas adicionando volume ou tratando uma região isolada pode não resolver a origem da queixa.',
      },
      {
        imagem: 'rita-carrossel-02-09-card-4.jpg',
        texto: 'Na avaliação, eu procuro entender: onde houve perda de definição? O que está deixando o rosto mais pesado? O que merece prioridade? E o que deve ser preservado? O tratamento precisa partir dessas respostas.',
      },
      {
        imagem: 'rita-carrossel-02-09-card-5-cta.jpg',
        texto: 'O melhor tratamento não é o mais famoso ou o mais recente. É aquele que faz sentido para o seu rosto, respeita suas características e acompanha o seu momento. Agende sua consulta pelo link da bio.',
      },
    ],
  } as Carrossel,
  raciocinio: [
    'Os roteiros partem de uma pergunta que a paciente já se faz, como “Sua pele mudou na menopausa?”. Depois explicam o porquê da mudança e terminam na avaliação, não num procedimento.',
    'No carrossel, o cuidado é o mesmo: começar pela observação, explicar sem prometer e tratar a personalização como parte do cuidado.',
  ],
};

export const horn = {
  id: 'horn',
  nome: 'Dra. Gabriela Horn',
  onde: 'Numit, dermatologia',
  gancho: 'O roteiro parte da dor da paciente e coloca o diagnóstico antes do procedimento.',
  contexto: 'Roteiros dos vídeos de lançamento do Exomine (exossomos autólogos) e do LhaLa Peel.',
  fiz: ['Planejamento do mês', 'Roteiro dos vídeos'],
  /** Roteiro aberto, com o texto exato da Esther. */
  roteiro: {
    titulo: 'Lançamento do Exomine',
    descricao: 'Escrito na voz da médica, do gancho à chamada final.',
    partes: [
      {
        nome: 'Gancho',
        texto: [
          'Você sente que o seu cabelo está mais fino, com menos volume, e que os tratamentos que já tentou não estão trazendo a resposta que esperava?',
        ],
      },
      {
        nome: 'Desenvolvimento',
        texto: [
          'Quando isso acontece, o próximo passo não deveria ser simplesmente testar mais um produto ou repetir o tratamento que funcionou para outra pessoa.',
          'Na consulta, eu preciso entender o diagnóstico, o histórico daquele cabelo e o que já foi feito até aqui.',
          'E, quando existe indicação para uma estratégia regenerativa, hoje temos recursos que ampliam essas possibilidades.',
          'Um deles é o Exomine, uma tecnologia com exossomos autólogos, obtidos do próprio paciente, que pode ser incorporada aos meus protocolos capilares.',
          'Mas ele não entra simplesmente por ser uma tecnologia nova. Ele entra quando faz sentido dentro da estratégia daquele paciente.',
        ],
      },
      {
        nome: 'Fechamento',
        texto: [
          'Porque, quando falamos de cabelo, tão importante quanto ter acesso a novos recursos é saber quando e para quem utilizá-los.',
        ],
      },
      {
        nome: 'Chamada',
        texto: [
          'Se você percebe queda, afinamento ou perda de densidade, agende sua consulta e vamos entender qual estratégia faz sentido para o seu cabelo.',
        ],
      },
    ],
  },
  raciocinio: [
    'Nos dois lançamentos, o vídeo abre com a queixa da paciente: o cabelo mais fino, a pele que leva dias para parar de descamar. A tecnologia só aparece depois, como parte de uma estratégia, e não como novidade.',
  ],
};

export const outrosProjetos = {
  titulo: 'Outros projetos',
  intro: 'Alguns dos meus projetos na V4 Company.',
  projetos: [
    {
      nome: 'Ateliê Noiva & Cia',
      tipo: 'Ateliê de noivas, formandas e padrinhos',
      desafio: 'Mostrar sofisticação sem parecer intocável e caro.',
      texto: 'O foco do ateliê era realizar sonhos, não ser o mais premium da cidade. Levei esse equilíbrio pros conteúdos.',
      fiz: ['Calendário', 'Textos', 'Direção visual com a designer'],
      feed: {
        imagem: 'atelie-feed-instagram.jpg',
        alt: 'Print do feed do Instagram do Ateliê Noiva & Cia, com posts de vestidos de noiva, formandas e trajes de padrinho.',
      },
      detalhe: {
        imagem: 'atelie-post-detalhe.jpg',
        alt: 'Post publicado do Ateliê Noiva & Cia: uma noiva e uma mulher de vestido azul de mãos dadas, com o texto "Tem traje novo esperando por você."',
      },
    },
    {
      nome: 'Trajeton Magazine',
      tipo: 'Loja de varejo',
      desafio: 'Uma campanha de volta às aulas com um tema só.',
      texto: 'Organização e começo de semestre, cada post com um ângulo diferente. Mais o comunicado do novo horário de sábado.',
      fiz: ['Calendário', 'Textos', 'Direção visual com a designer', 'Programação', 'Acompanhamento'],
      feed: {
        imagem: 'trajeton-feed-volta-as-aulas.jpg',
        alt: 'Print do feed do Instagram da Trajeton Magazine com a campanha de volta às aulas e o comunicado do novo horário de sábado.',
      },
      detalhe: {
        imagem: 'trajeton-post-detalhe.jpg',
        alt: 'Post publicado da Trajeton Magazine com material escolar e o texto "Ainda dá tempo de começar o semestre com tudo em mãos. Na Trajeton você encontra o material escolar que faltava para voltar às aulas com tranquilidade."',
      },
    },
  ],
};

/** Frentes em que ela já atuou e pode assumir num time (agência ou empresa). */
export const entregas = {
  titulo: 'Onde eu somo no time',
  intro: 'Frentes em que já atuei em agência e posso assumir na sua equipe.',
  itens: [
    {
      icone: 'calendario',
      nome: 'Planejamento mensal',
      texto: 'Montei o calendário do mês de vários clientes ao mesmo tempo, com tema, texto e roteiro prontos antes.',
    },
    {
      icone: 'pena',
      nome: 'Copy para redes',
      texto: 'Escrevi legendas, carrosséis e textos de campanha na voz de cada marca.',
    },
    {
      icone: 'video',
      nome: 'Roteiros de vídeo',
      texto: 'Roteirizei Reels e vídeos de lançamento, do gancho à chamada final.',
    },
    {
      icone: 'lupa',
      nome: 'Conteúdo com SEO',
      texto: 'Planejei e executei ações de comunicação com base em SEO, incluindo endomarketing e newsletters.',
    },
    {
      icone: 'tela',
      nome: 'UX writing',
      texto: 'Escrevi textos de landing pages e interfaces na C2S e na BSN Tec.',
    },
    {
      icone: 'grafico',
      nome: 'Leitura de resultados',
      texto: 'Uso os números para ajustar a comunicação e orientar as próximas decisões.',
    },
  ],
  nichosTitulo: 'Nichos em que já trabalhei',
  nichos: [
    'Saúde e dermatologia',
    'Educação jurídica',
    'Educação',
    'Varejo',
    'Noivas e moda festa',
    'Alimentício',
    'Tecnologia',
  ],
};

export const rodape = {
  retratoAlt: 'Retrato da Esther Torres sorrindo, com cabelo preto e cacheado.',
  chamada: 'Gostou do que viu?',
  titulo: 'Vamos planejar o seu próximo mês?',
  texto:
    'Estou aberta a vagas e projetos de social media e copywriting em agências e empresas, em trabalho remoto. O caminho mais rápido é o WhatsApp.',
};
