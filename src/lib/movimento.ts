// Todo o movimento da página. Com "reduzir movimento" ligado no aparelho,
// nada se mexe: o conteúdo aparece direto, no lugar final.

const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const temObserver = 'IntersectionObserver' in window;

/** Quebra o texto em palavras para elas surgirem uma a uma. */
function separarPalavras() {
  document.querySelectorAll<HTMLElement>('[data-revela="palavras"]').forEach((el) => {
    const palavras = (el.textContent ?? '').trim().split(/\s+/);
    el.textContent = '';
    palavras.forEach((p, i) => {
      const caixa = document.createElement('span');
      caixa.className = 'palavra';
      const dentro = document.createElement('span');
      dentro.style.setProperty('--i', String(i));
      dentro.textContent = p;
      caixa.append(dentro);
      el.append(caixa, i < palavras.length - 1 ? ' ' : '');
    });
  });
}

/** Revela textos, imagens e ilustrações quando entram na tela, também ao voltar a rolagem. */
function revelar() {
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revelado', 'visivel');
        } else if (e.boundingClientRect.top > window.innerHeight || e.boundingClientRect.bottom < 0) {
          // Saiu totalmente da tela: prepara para animar de novo quando voltar.
          e.target.classList.remove('revelado', 'visivel');
        }
      }),
    { threshold: [0, 0.12], rootMargin: '0px 0px -6% 0px' },
  );
  document.querySelectorAll('[data-revela], [data-anima]').forEach((el) => obs.observe(el));
}

/** Números que contam até o valor exato. */
function contar() {
  const animar = (el: HTMLElement) => {
    const final = el.dataset.conta ?? '';
    const m = final.match(/^([\d.]+)(.*)$/);
    if (!m) return;
    const alvo = Number(m[1].replace(/\./g, ''));
    const inicio = performance.now();
    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / 1400);
      el.textContent = Math.round(alvo * (1 - Math.pow(1 - t, 3))).toLocaleString('pt-BR') + m[2];
      if (t < 1) requestAnimationFrame(passo);
      else el.textContent = final;
    };
    requestAnimationFrame(passo);
  };
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        animar(e.target as HTMLElement);
        obs.unobserve(e.target);
      }),
    { threshold: 0.6 },
  );
  document.querySelectorAll('[data-conta]').forEach((el) => obs.observe(el));
}

/** Ilustrações que andam com a rolagem, e astros da capa que seguem o mouse. */
function paralaxe() {
  const itens = Array.from(document.querySelectorAll<SVGElement>('[data-paralaxe]')).map((el) => ({
    el,
    fator: Number(el.dataset.paralaxe) || 0,
  }));
  let pedido = 0;
  const atualizar = () => {
    pedido = 0;
    const meio = window.innerHeight / 2;
    for (const { el, fator } of itens) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
      el.style.translate = `0 ${((r.top + r.height / 2 - meio) * fator).toFixed(1)}px`;
    }
  };
  window.addEventListener('scroll', () => (pedido ||= requestAnimationFrame(atualizar)), { passive: true });
  atualizar();

  const capa = document.querySelector<HTMLElement>('.capa');
  if (capa && window.matchMedia('(pointer: fine)').matches) {
    capa.addEventListener('pointermove', (e) => {
      const r = capa.getBoundingClientRect();
      capa.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      capa.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    capa.addEventListener('pointerleave', () => {
      capa.style.setProperty('--mx', '0');
      capa.style.setProperty('--my', '0');
    });
  }
}

/** Menu: marcador que desliza até a seção atual e barra de leitura. Fica sempre parado no lugar. */
function menu() {
  const barra = document.querySelector<HTMLElement>('[data-menu-barra]');
  const marcador = document.querySelector<HTMLElement>('.menu-marcador');
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-menu]'));
  if (!barra || !marcador) return;

  const marcar = (link: HTMLAnchorElement | null) => {
    links.forEach((l) => (l === link ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current')));
    if (!link) {
      marcador.style.opacity = '0';
      return;
    }
    marcador.style.opacity = '1';
    marcador.style.width = `${link.offsetWidth}px`;
    marcador.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  if (temObserver) {
    const ativos = new Map<Element, boolean>();
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => ativos.set(e.target, e.isIntersecting));
        const atual = links.find((l) => ativos.get(document.querySelector(l.getAttribute('href')!)!));
        marcar(atual ?? null);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    links.forEach((l) => {
      const alvo = document.querySelector(l.getAttribute('href')!);
      if (alvo) obs.observe(alvo);
    });
  }

  let pedido = 0;
  const rolar = () => {
    pedido = 0;
    const y = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.setProperty('--progresso', String(total > 0 ? y / total : 0));
  };
  window.addEventListener('scroll', () => (pedido ||= requestAnimationFrame(rolar)), { passive: true });
  window.addEventListener('resize', () => marcar(links.find((l) => l.hasAttribute('aria-current')) ?? null));
  rolar();
}

/** Ampliar imagens numa janela, sem sair da página. */
function lupa() {
  const janela = document.querySelector<HTMLDialogElement>('[data-lupa]');
  const img = document.querySelector<HTMLImageElement>('[data-lupa-img]');
  if (!janela || !img || typeof janela.showModal !== 'function') return;
  document.querySelectorAll<HTMLAnchorElement>('[data-ampliar]').forEach((a) =>
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      img.src = a.href;
      img.alt = a.querySelector('img')?.alt ?? '';
      janela.showModal();
    }),
  );
  document.querySelector('[data-lupa-fechar]')?.addEventListener('click', () => janela.close());
  janela.addEventListener('click', (ev) => {
    if (ev.target === janela) janela.close();
  });
}

/** Copiar o e-mail com um toque. */
function copiar() {
  document.querySelectorAll<HTMLButtonElement>('[data-copiar]').forEach((b) =>
    b.addEventListener('click', async () => {
      const texto = b.querySelector<HTMLElement>('[data-copiar-texto]')!;
      const original = texto.textContent;
      try {
        await navigator.clipboard.writeText(b.dataset.copiar!);
        texto.textContent = 'E-mail copiado';
      } catch {
        texto.textContent = b.dataset.copiar!;
      }
      setTimeout(() => (texto.textContent = original), 2500);
    }),
  );
}

export function iniciar() {
  menu();
  lupa();
  copiar();
  if (reduzido || !temObserver) return;
  // A preparação das animações espera o navegador ficar livre, para não
  // atrasar a primeira pintura da página.
  const preparar = () => {
    document.documentElement.classList.add('anima');
    separarPalavras();
    revelar();
    contar();
    paralaxe();
  };
  if ('requestIdleCallback' in window) window.requestIdleCallback(preparar, { timeout: 1200 });
  else window.setTimeout(preparar, 200);
}
