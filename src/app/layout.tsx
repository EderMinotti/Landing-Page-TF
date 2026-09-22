import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TF Soluções Integradas | Construção Civil e Engenharia",
  description:
    "A TF Soluções Integradas atua em construção civil e engenharia, oferecendo soluções personalizadas, com qualidade, eficiência e compromisso em cada projeto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // O script abaixo adiciona a classe "js" ao <html> antes da hidratação,
      // então o React encontra um atributo diferente do que renderizou no
      // servidor. A diferença é intencional — só silencia o aviso.
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        {/* Marca que o JavaScript está ativo. É um script inline, executado
            durante a leitura do HTML — não depende dos arquivos externos.
            Sem ele (JS desabilitado ou bloqueado), as animações de entrada
            não escondem o conteúdo: os elementos ficam visíveis por padrão. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
