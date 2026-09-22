"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";

type Projeto = {
  // Caminho da imagem a partir de /public. Use %20 no lugar de espaço
  // (ex.: "/barracao%20ldc.png"). Deixe "" para exibir o placeholder.
  imagem: string;
  nome: string;
};

// Fotos e informações dos projetos serão fornecidas posteriormente (CLAUDE.md §17).
//
// Para adicionar um projeto:
//   1. Coloque a imagem na pasta /public (na raiz ou em uma subpasta).
//   2. Preencha uma entrada abaixo com { imagem: "/nome-do-arquivo.png", ... }.
//      Se o arquivo tiver espaço no nome, use %20 (ex.: "/barracao%20ldc.png").
//   3. Para adicionar/remover projetos, basta incluir/retirar itens desta lista —
//      o carrossel se ajusta automaticamente ao total.
const PROJETOS: Projeto[] = [
  { imagem: "/projetos/barracao-ldc.png", nome: "Central de residuos" },
  { imagem: "/projetos/muro-fechamento.png", nome: "Muro de fechamento" },
  { imagem: "/projetos/contencao.png", nome: "Contenção de tanque de soda" },
];

// Intervalo (ms) entre as trocas automáticas.
const AUTOPLAY_MS = 5000;

// Ícone de imagem usado no placeholder dos projetos.
function IconImagem() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L6 20" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Slide({ projeto }: { projeto: Projeto }) {
  return (
    <figure className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-[16/9]">
      {projeto.imagem ? (
        <img
          src={projeto.imagem}
          alt={projeto.nome}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        // Placeholder exibido enquanto a foto não é fornecida.
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-ink-600/60 bg-ink-800 text-ink-400">
          <IconImagem />
          <span className="text-sm font-medium uppercase tracking-[0.15em]">
            [FOTO DO PROJETO]
          </span>
        </div>
      )}

      {/* Gradiente para legibilidade do nome sobre a imagem */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="truncate text-lg font-semibold tracking-tight text-white">
          {projeto.nome}
        </p>
      </figcaption>
    </figure>
  );
}

export default function ProjetosSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = PROJETOS.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  // Troca automática de imagens. Recria o intervalo a cada mudança de slide,
  // garantindo o tempo completo de exibição para cada projeto.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, goNext]);

  // Navegação por teclado (setas esquerda/direita) quando o carrossel tem foco.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") goPrev();
    if (event.key === "ArrowRight") goNext();
  };

  // Navegação por toque (swipe) no mobile.
  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0]?.clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="projetos"
      className="flex min-h-[calc(100vh-4rem)] items-center border-t border-ink-800 bg-ink-900"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Nossos trabalhos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Conheça alguns dos projetos executados pela TF Soluções Integradas.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <div
            className="group relative overflow-hidden rounded-2xl bg-ink-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Projetos realizados"
            tabIndex={0}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Trilho de slides */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {PROJETOS.map((projeto, i) => (
                <Slide key={i} projeto={projeto} />
              ))}
            </div>

            {/* Setas de navegação */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Projeto anterior"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-4"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo projeto"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Feedback de posição: indicadores + contador "atual / total" */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {PROJETOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir para o projeto ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-7 bg-accent-500"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm font-semibold tabular-nums text-ink-300">
              {index + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
