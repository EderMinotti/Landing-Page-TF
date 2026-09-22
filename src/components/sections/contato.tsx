import type { ReactNode } from "react";

// Ícones ilustrativos (traço fino, consistentes entre si).
// São SVGs inline — nenhuma biblioteca externa necessária.

function IconChat({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Balão de conversa */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconTelefone({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Telefone */}
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconEmail({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Envelope */}
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconEndereco({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Pino de localização */}
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconHorario({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Relógio */}
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

// ————————————————————————————————————————————————
// DADOS DE CONTATO — preencha com os dados reais (CLAUDE.md §17).
// Deixe vazio ("") para exibir o placeholder no site.
// ————————————————————————————————————————————————
const WHATSAPP_NUMBER: string = "16 99787-8537"; // ex.: "5511999999999" (somente números, com DDI)
const TELEFONE: string = "16 99787-8537"; // ex.: "(11) 99999-9999"
const EMAIL: string = "tfsolucoesintegradas89@gmail.com"; // ex.: "contato@tfsolucoes.com.br"
const ENDERECO: string = "Rua Alberto Biduti, 488 - Park Do Imperador"; // ex.: "Rua Exemplo, 123 — São Paulo/SP"
const HORARIO: string = "08:00 as 17:00"; // ex.: "Segunda a sexta, das 8h às 18h"

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer melhor os serviços da TF Soluções Integradas e solicitar um orçamento.";

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#contato";

type InfoContato = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
};

const INFOS: InfoContato[] = [
  {
    icon: <IconChat />,
    label: "WhatsApp",
    value: WHATSAPP_NUMBER || "[WHATSAPP DA EMPRESA]",
    href: WHATSAPP_NUMBER ? whatsappUrl : undefined,
  },
  {
    icon: <IconTelefone />,
    label: "Telefone",
    value: TELEFONE || "[TELEFONE DA EMPRESA]",
    href: TELEFONE ? `tel:${TELEFONE.replace(/\D/g, "")}` : undefined,
  },
  {
    icon: <IconEmail />,
    label: "E-mail",
    value: EMAIL || "[EMAIL DA EMPRESA]",
    href: EMAIL ? `mailto:${EMAIL}` : undefined,
  },
  {
    icon: <IconEndereco />,
    label: "Endereço",
    value: ENDERECO || "[ENDEREÇO DA EMPRESA]",
  },
  {
    icon: <IconHorario />,
    label: "Horário de atendimento",
    value: HORARIO || "[HORÁRIO DE ATENDIMENTO]",
  },
];

// Renderiza um valor de contato, destacando placeholders com estilo pontilhado.
function ValorInfo({ value, href }: { value: string; href?: string }) {
  const isPlaceholder = value.startsWith("[");

  const content = isPlaceholder ? (
    <span className="border-b border-dashed border-ink-300 italic text-ink-400">
      {value}
    </span>
  ) : (
    <span className="text-ink-900">{value}</span>
  );

  if (href) {
    return (
      <p className="mt-1 font-medium">
        <a
          href={href}
          className="transition-colors hover:text-accent-600"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      </p>
    );
  }

  return <p className="mt-1 font-medium">{content}</p>;
}

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="flex min-h-[calc(100vh-4rem)] items-center border-t border-ink-100 bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Chamada para ação + WhatsApp */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
              Fale conosco
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Entre em contato
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-600">
              Tem um projeto em mente? Entre em contato com a TF Soluções
              Integradas e solicite um orçamento.
            </p>

            <a
              href={whatsappUrl}
              {...(WHATSAPP_NUMBER
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 self-start whitespace-nowrap rounded-md bg-accent-500 px-6 text-base font-semibold text-white transition-colors hover:bg-accent-600 sm:self-stretch"
            >
              <IconChat className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Informações de contato */}
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:p-10">
            <h3 className="text-lg font-semibold tracking-tight text-ink-900">
              Informações de contato
            </h3>

            <ul className="mt-7 space-y-6">
              {INFOS.map((info) => (
                <li key={info.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-500 ring-1 ring-ink-100">
                    {info.icon}
                  </span>
                  {/* wrap-anywhere e nao break-words: so o primeiro reduz o min-content,
                      sem o qual o e-mail longo estoura a largura da tela no mobile. */}
                  <div className="min-w-0 wrap-anywhere">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {info.label}
                    </p>
                    <ValorInfo value={info.value} href={info.href} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
