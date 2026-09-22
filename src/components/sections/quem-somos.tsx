import type { ReactNode } from "react";

// Ícones ilustrativos dos diferenciais (traço fino, consistentes entre si).
// São SVGs inline — nenhuma biblioteca externa necessária.

function IconQualidade() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

function IconCompromisso() {
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function IconSeguranca() {
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
      <path d="M12 22s8-3.5 8-10V5.5L12 2 4 5.5V12c0 6.5 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconProfissionalismo() {
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
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
  );
}

type Diferencial = {
  icon: ReactNode;
  title: string;
};

// Diferenciais de exemplo — ajustar conforme as informações reais da empresa (CLAUDE.md §7).
const DIFERENCIAIS: Diferencial[] = [
  { icon: <IconQualidade />, title: "Qualidade" },
  { icon: <IconCompromisso />, title: "Compromisso" },
  { icon: <IconSeguranca />, title: "Segurança" },
  { icon: <IconProfissionalismo />, title: "Profissionalismo" },
];

const TEXTO_INSTITUCIONAL =
  "A JF Soluções Integradas é uma empresa de construção civil, instalação e manutenção industrial. Nossa equipe de profissionais altamente qualificados trabalha para garantir que seu projeto seja executado de maneira eficiente e dentro do orçamento. Entre em contato conosco para saber mais sobre nossos serviços.";

export default function QuemSomosSection() {
  return (
    <section
      id="quem-somos"
      className="flex min-h-[calc(100vh-4rem)] items-center border-t border-ink-100 bg-ink-50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto institucional + diferenciais */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
              Sobre nós
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Quem Somos
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              {TEXTO_INSTITUCIONAL}
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-x-6">
              {DIFERENCIAIS.map((diferencial) => (
                <li key={diferencial.title} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                    {diferencial.icon}
                  </span>
                  <span className="text-sm font-semibold text-ink-900">
                    {diferencial.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem ilustrativa */}
          <img
            src="/ilustracao.jpg"
            alt="Ilustração de construção civil e engenharia"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
