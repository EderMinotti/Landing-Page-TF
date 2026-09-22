import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O Next.js bloqueia, por padrão, requisições cross-origin aos recursos de
  // desenvolvimento. Sem isto, um celular acessando pelo IP da rede local não
  // carrega os arquivos JS: o HTML e o CSS aparecem, mas o React nunca hidrata
  // e nada interativo funciona (menu hambúrguer, animações de entrada).
  // Compara apenas o hostname (sem esquema e sem porta).
  allowedDevOrigins: ["192.168.15.5", "192.168.15.*"],
};

export default nextConfig;
