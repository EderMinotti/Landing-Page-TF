export default function SectionPlaceholder({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="border-t border-ink-100 bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">
          {title}
        </h2>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Seção em desenvolvimento
        </p>
      </div>
    </section>
  );
}
