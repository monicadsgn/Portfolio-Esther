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
  url: 'https://esther-torres.vercel.app',
};

export const contato = {
  whatsappExibicao: '83 99121-9697',
  whatsappNumero: '5583991219697',
  whatsappMensagem: 'Oi, Esther! Vi seu portfólio e quero conversar.',
  email: 'torresesther2809@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esther-torres-4472672b3/',
  formato: 'Trabalho remoto.',
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
};

export type Experiencia = {
  empresa: string;
  cargo?: string;
  sobre?: string;
  texto: string;
  resultado?: string;
};

export const ondeAtuei = {
  titulo: 'Onde atuei',
  experiencias: [
    {
      empresa: 'V4 Company',
      cargo: 'Redatora e conteudista',
      texto:
        'Planejei e executei campanhas e ações de comunicação, externas e internas (endomarketing), com base em SEO. Escrevi copys persuasivas para diversos canais e newsletters para clientes e colaboradores. Nas contas de varejo, entregava o calendário e os textos prontos pra designer.',
    },
    {
      empresa: 'Numit',
      sobre: 'Agência especializada em marketing para médicos.',
      texto:
        'Cuidava do planejamento do mês de perfis de médicas: tema, texto dos carrosséis e roteiro dos Reels e dos vídeos de lançamento, sempre na voz de cada médica.',
      resultado:
        'Em um dos perfis, os Reels com roteiro meu chegaram a 5.069 e 3.329 visualizações. Os anteriores tinham 349 e 518.',
    },
    {
      empresa: 'Por conta própria',
      sobre: 'Sem agência, direto com o perfil.',
      texto: 'Estratégia de conteúdo de um perfil grande de preparação para procuradorias.',
      resultado:
        'O perfil foi de 190 mil para 197 mil seguidores em 4 meses. Na campanha Vitalício deste ano, foram 2.400 matrículas.',
    },
    {
      empresa: 'C2S (Contact2Sale)',
      cargo: 'Copywriter e growth marketing',
      texto:
        'Escrevi textos para diferentes canais, com foco em conversão e engajamento. Apoiei ações de branding e mídia para fortalecer o reconhecimento da marca, implementei estratégias de growth marketing para expandir a base de clientes e fiz UX writing em landing pages e interfaces.',
    },
    {
      empresa: 'BSN Tec',
      cargo: 'Redatora e conteudista',
      texto:
        'Desenvolvi e implementei ações de comunicação em diversos canais, com foco em SEO. Apoiei a implantação da marca e o branding, e fiz UX writing em interfaces.',
    },
  ] as Experiencia[],
};

export const sobre = {
  titulo: 'Sobre mim',
  paragrafos: [
    'Atuo como social media há 4 anos, em agência e por conta própria.',
    'Meu forte é a escrita: copywriting, criação de pautas e planejamento de conteúdo. Também trabalho com marketing de conteúdo, SEO, redação publicitária e UX writing.',
    'Trabalho com base em dados e performance. Uso os resultados pra entender o que funciona, ajustar a comunicação e orientar as próximas decisões.',
    'Gosto de trabalhar com nichos diferentes. Cada um me faz explorar a criatividade e aprender algo novo.',
  ],
  formacao: [
    { curso: 'Comunicação e Marketing', onde: 'Anhanguera', quando: '2024' },
    { curso: 'Inteligência Artificial Generativa em Marketing', onde: 'USP', quando: '2026' },
    { curso: 'Jornalismo', onde: 'Unifacetie', quando: 'em curso, 2026' },
  ],
  ferramentas: ['Notion', 'Jira', 'Slack', 'Google Workspace'],
  ferramentasIA: ['Claude', 'ChatGPT', 'Gemini', 'Manus', 'NotebookLM'],
};

export const comoTrabalho = {
  titulo: 'Como eu trabalho',
  frase: 'Eu planejo o mês antes de ele começar.',
  complemento:
    'Tema, texto e roteiro ficam prontos antes. Depois olho os números pra decidir o próximo passo.',
  prova: 'Em setembro, planejei 5 carrosséis para a Dra. Rita Leão e 7 para a Dra. Gabriela Horn.',
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
  contexto: 'Por conta própria, num perfil grande de preparação para procuradorias.',
  minhaParte: 'a estratégia de conteúdo.',
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
      'O Vitalício é um curso que reúne todos os cursos para concursos da carreira de procuradoria, com acesso vitalício ao que já existe e ao que ainda vai ser feito.',
  },
  nota: 'Números informados por mim, do período em que atuei no perfil.',
  print: {
    imagem: 'revisao-perfil-seguidores.jpg',
    alt: 'Print do topo do perfil Revisão Ensino Jurídico no Instagram, com 9.351 posts, 197 mil seguidores e 297 seguindo.',
    legenda: 'O perfil hoje: 197 mil seguidores.',
  },
  raciocinio: [
    'O perfil já era grande quando entrei, com 190 mil seguidores. Sem agência no meio, minha parte foi a estratégia de conteúdo.',
    'Em 4 meses, chegou a 197 mil. Na mesma época, a campanha do Vitalício somou 2.400 matrículas.',
  ],
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
  agencia: 'Numit',
  minhaParte: 'planejamento do mês, texto dos carrosséis, roteiro dos Reels e as referências que orientaram a arte.',
  resumo: 'Dois Reels com roteiro meu chegaram a 5.069 e 3.329 visualizações. Os Reels anteriores tinham 349 e 518.',
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
      rotulo: 'Anterior: 349',
    },
    {
      imagem: 'rita-antes-reel-pele-seca-inverno-insights.jpg',
      alt: 'Insights de um Reel anterior da Dra. Rita Leão sobre pele seca no inverno: 518 visualizações.',
      rotulo: 'Anterior: 518',
    },
    {
      imagem: 'rita-depois-reel-pele-na-menopausa-insights.jpg',
      alt: 'Insights do Reel da Dra. Rita Leão sobre pele na menopausa, com roteiro da Esther: 5.069 visualizações.',
      rotulo: 'Com roteiro meu: 5.069',
    },
    {
      imagem: 'rita-depois-reel-melhor-resultado-insights.jpg',
      alt: 'Insights do Reel da Dra. Rita Leão sobre o melhor resultado, com roteiro da Esther: 3.329 visualizações.',
      rotulo: 'Com roteiro meu: 3.329',
    },
  ],
  carrossel: {
    titulo: 'O envelhecimento que aparece antes das rugas',
    descricao: 'Carrossel publicado, escrito na voz da médica. A capa fisga, os cards explicam e o último leva para a consulta.',
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
    'Em setembro, planejei 5 carrosséis do mês. Um deles está aberto aqui em cima, card a card.',
    'Participei da reformulação da linha editorial: levantei as referências visuais junto com a Dra. Rita Leão para orientar a arte.',
  ],
};

export const horn = {
  id: 'horn',
  nome: 'Dra. Gabriela Horn',
  agencia: 'Numit',
  minhaParte: 'planejamento do mês e roteiro dos vídeos.',
  resumo: 'Roteiros de vídeo dos lançamentos Exomine (exossomos autólogos) e LhaLa Peel, ambos publicados.',
  logica: 'O roteiro parte da dor da paciente e coloca o diagnóstico antes do procedimento.',
  carrossel: {
    titulo: 'Por que tanta gente fala de exossomos vegetais',
    descricao: 'Carrossel publicado. Apresenta uma tecnologia nova sem prometer resultado.',
    cards: [
      {
        imagem: 'horn-carrossel-02-09-card-1-capa.jpg',
        texto: 'Por que tanta gente está falando sobre exossomos vegetais?',
      },
      {
        imagem: 'horn-carrossel-02-09-card-2.jpg',
        texto: 'Na medicina, algumas tecnologias surgem e desaparecem rapidamente. Outras começam a ganhar espaço porque despertam interesse da comunidade científica. Os exossomos vegetais fazem parte dessa segunda conversa.',
      },
      {
        imagem: 'horn-carrossel-02-09-card-3.jpg',
        texto: 'Eles não chegaram para substituir tudo o que já existe. O interesse está na forma como podem participar dos processos de comunicação celular e regeneração tecidual. É justamente isso que vem sendo estudado.',
      },
      {
        imagem: 'horn-carrossel-02-09-card-4.jpg',
        texto: 'Mais importante do que acompanhar uma novidade é entender quando ela realmente faz sentido. Na Dermatologia, indicação continua sendo uma decisão clínica. Não uma tendência.',
      },
      {
        imagem: 'horn-carrossel-02-09-card-5.jpg',
        texto: 'Foi esse olhar que busquei aprofundar no curso sobre exossomos vegetais. Mais do que conhecer uma tecnologia, entender onde ela pode agregar valor ao tratamento.',
      },
      {
        imagem: 'horn-carrossel-02-09-card-6-final.jpg',
        texto: 'A medicina evolui constantemente. Estudar é a forma de oferecer tratamentos cada vez mais individualizados e baseados em evidências.',
      },
    ],
  } as Carrossel,
  raciocinio: [
    'Nos roteiros dos lançamentos, a paciente se reconhece primeiro na queixa. Depois vem o diagnóstico, e só então o procedimento.',
    'Com tecnologia nova, o cuidado é não prometer resultado. O carrossel explica o que está sendo estudado e deixa a indicação como decisão clínica.',
    'No calendário de setembro, foram 7 carrosséis planejados.',
  ],
};

export const outrosProjetos = {
  titulo: 'Outros projetos',
  intro: 'Na V4 Company.',
  projetos: [
    {
      nome: 'Ateliê Noiva & Cia',
      tipo: 'Ateliê de noivas, formandas e padrinhos.',
      texto:
        'O desafio era mostrar sofisticação e qualidade sem parecer algo intocável e caro. O foco do ateliê era realizar sonhos, não ser o mais premium da cidade. Identifiquei o público específico e levei esse equilíbrio pros conteúdos e pra comunicação.',
      minhaParte: 'calendário, textos e direção visual em parceria com a designer.',
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
      tipo: 'Loja de varejo.',
      texto:
        'Mesma rotina do Ateliê, com calendário e textos prontos pra designer. Campanha de volta às aulas com o tema organização e começo de semestre, cada post com um ângulo diferente, mais o comunicado do novo horário de sábado.',
      minhaParte:
        'calendário, textos, direção visual em parceria com a designer, programação e acompanhamento das postagens.',
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

export const rodape = {
  titulo: 'Vamos conversar?',
  texto: 'Me chama no WhatsApp, por e-mail ou no LinkedIn.',
};
