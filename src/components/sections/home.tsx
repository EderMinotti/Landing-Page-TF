export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center bg-blueprint text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
          TF SOLUÇÕES INTEGRADAS
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Soluções integradas para construção e engenharia
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-200">
          Atuamos com soluções em construção civil e engenharia, oferecendo
          qualidade, eficiência e compromisso em cada projeto.
        </p>
      </div>
    </section>
  );
}
