import type { ReactNode } from "react";

import Reveal from "../reveal";

// Ícones ilustrativos (traço fino, consistentes entre si).
// São SVGs inline — nenhuma biblioteca externa necessária.

function IconPlanejamento() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {/* Folha de projeto (blueprint) com dobra no canto */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      {/* Grade do blueprint */}
      <path d="M9 12h6" />
      <path d="M9 16h6" />
      <path d="M9 12v8" />
      <path d="M12 12v8" />
      <path d="M15 12v8" />
    </svg>
  );
}

function IconManutencao() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {/* Engrenagem */}
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconConstrucao() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {/* Edifício */}
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

type Servico = {
  icon: ReactNode;
  title: string;
  description: string;
};

// O texto descritivo de cada card será inserido manualmente (CLAUDE.md §17).
// Substitua "[DESCRIÇÃO DO SERVIÇO]" pelo conteúdo definitivo de cada serviço.
const SERVICOS: Servico[] = [
  {
    icon: <IconPlanejamento />,
    title: "Planejamento de Projetos",
    description: "A TF Soluções Integradas é uma empresa de construção civil especializada em planejamento de projetos. Nossa equipe de profissionais altamente qualificados trabalha para garantir que seu projeto seja executado de maneira eficiente e dentro do orçamento. Entre em contato conosco para saber mais sobre nossos serviços.",
  },
  {
    icon: <IconManutencao />,
    title: "Manutenção Industrial",
    description: "Na TF Soluções Integradas, oferecemos serviços de manutenção industrial especializada em reparos, limpeza, aferições, montagem e desmontagem de estruturas . Nossa equipe trabalha com as ferramentas mais avançadas do mercado para garantir que seu projeto seja executado com sucesso. Entre em contato conosco para saber mais sobre nossos serviços.",
  },
  {
    icon: <IconConstrucao />,
    title: "Construção e reforma",
    description: "A TF Soluções Integradas trabalha com projetos de construção civil, nos ramos residencial, comercial e industrial. Realiza desde a preparação do solo, fundações, edificações e acabamaneto. Entre em contato conosco para saber mais sobre nossos serviços",
  },
];

export default function ServicosSection() {
  return (
    <section
      id="servicos"
      className="flex min-h-[calc(100vh-4rem)] items-center border-t border-ink-100 bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            O que fazemos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Serviços
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Soluções completas em construção civil e engenharia, planejadas e
            executadas com qualidade e compromisso.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICOS.map((servico, index) => {
            const isPlaceholder = servico.description.startsWith("[");
            return (
              <Reveal
                key={servico.title}
                delay={index * 100}
                className="flex"
              >
                <article className="group flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-ink-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/15">
                  <div className="flex flex-col items-center bg-accent-500 px-6 py-8 text-center text-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                      {servico.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {servico.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col bg-ink-50 p-6">
                    {isPlaceholder ? (
                      <p className="rounded-md border border-dashed border-ink-200 px-3 py-2 text-sm italic text-ink-400">
                        {servico.description}
                      </p>
                    ) : (
                      <p className="leading-normal text-ink-600">
                        {servico.description}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
