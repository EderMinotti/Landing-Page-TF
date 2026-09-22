"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

// Número oficial do WhatsApp será informado posteriormente (CLAUDE.md §17).
// Substituir por "https://wa.me/55..." quando disponível.
const CTA_HREF = "#contato";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: destaca o link da seção atualmente visível.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector<HTMLElement>(item.href),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive((visible.target as HTMLElement).id);
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Fecha com Esc e trava o scroll do body enquanto o menu está aberto.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-ink-100 bg-white transition-shadow",
          scrolled && "shadow-sm",
        )}
      >
        <div className="flex h-16 w-full items-center gap-6 px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            aria-label="TF Soluções Integradas — Início"
            className="shrink-0"
          >
            <img
              src="/logo.jpeg"
              alt="TF Soluções Integradas"
              className="h-[4rem] w-auto"
            />
          </Link>

          {/* Navegação desktop + CTA (canto direito) */}
          <div className="ml-auto flex items-center gap-8">
            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Navegação principal"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-accent-500 after:transition-all after:duration-300 after:content-['']",
                      isActive
                        ? "text-ink-900"
                        : "text-ink-600 hover:text-ink-900",
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + hambúrguer */}
            <div className="flex items-center gap-2">
              <Link
                href={CTA_HREF}
                className="hidden h-10 items-center rounded-md bg-accent-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-600 md:inline-flex"
              >
                Solicitar orçamento
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-900 transition-colors hover:bg-ink-50 md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
                      open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={cn(
            "absolute inset-x-0 top-16 border-b border-ink-100 bg-white shadow-md transition-all duration-200 md:hidden",
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <nav className="px-2 py-2" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={CTA_HREF}
              onClick={() => setOpen(false)}
              className="mt-2 flex h-11 items-center justify-center rounded-md bg-accent-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      </header>

      {/* Backdrop do menu mobile */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-ink-950/50 transition-opacity duration-200 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
    </>
  );
}
