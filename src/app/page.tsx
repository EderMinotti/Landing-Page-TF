import HomeSection from "@/components/sections/home";
import ServicosSection from "@/components/sections/servicos";
import QuemSomosSection from "@/components/sections/quem-somos";
import ProjetosSection from "@/components/sections/projetos";
import ContatoSection from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ServicosSection />
      <QuemSomosSection />
      <ProjetosSection />
      <ContatoSection />
    </>
  );
}
