"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Revela o conteúdo com fade-in + deslocamento vertical ao entrar na tela.
// Usa IntersectionObserver nativo — sem biblioteca externa.
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem IntersectionObserver, mostra o conteúdo imediatamente.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Anima apenas uma vez, quando o elemento entra no viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out",
        // O estado invisível só se aplica quando o JS está ativo (classe "js"
        // no <html>). Assim, se o JavaScript falhar, o conteúdo aparece mesmo
        // assim em vez de ficar permanentemente oculto.
        visible
          ? "translate-y-0 opacity-100"
          : "[.js_&]:translate-y-6 [.js_&]:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
