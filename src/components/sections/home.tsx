export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center bg-ink-900"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="block h-1 w-12 rounded-full bg-accent-400"
          />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            TF SOLUÇÕES INTEGRADAS
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Soluções integradas para{" "}
            <span className="underline decoration-accent-400 decoration-[3px] underline-offset-[6px]">
              construção e engenharia
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-200">
            Atuamos com soluções em construção civil e engenharia, oferecendo
            qualidade, eficiência e compromisso em cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
