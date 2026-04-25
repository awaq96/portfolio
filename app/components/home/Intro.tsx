export default function Intro() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-24">
      <p className="text-sm text-foreground/40 mb-4 tracking-widest uppercase">
        Software Engineer
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
        Asher Waqar
      </h1>
      <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
        [Placeholder] Building high-throughput distributed systems at AT&T.
        Studying CS at Georgia Tech. Interested in performance engineering,
        async systems, and clean interfaces.
      </p>
    </section>
  );
}
