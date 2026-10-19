export default function Hero() {
  return (
    <section
      id="home"
      className="py-14 md:py-24 border-b border-line bg-[radial-gradient(circle_at_80%_20%,rgba(184,80,66,0.06)_0%,transparent_60%),radial-gradient(circle_at_10%_80%,rgba(244,238,227,0.7)_0%,transparent_50%)]"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col">
        <div className="max-w-[820px]">
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-accent bg-accent-light px-3.5 py-1.5 rounded-full mb-4 sm:mb-6">
            Est. 2014 &bull; Independent &amp; Community Owned
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-ink mb-4 sm:mb-6">
            A quiet sanctuary for curious minds &amp; avid readers
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted mb-7 sm:mb-9 max-w-[680px]">
            Curated fiction, thought-provoking nonfiction, and cherished staff recommendations in the
            heart of the city. Discover your next favorite story or join our weekly community
            gatherings.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold rounded bg-accent text-white border border-accent hover:bg-accent-hover hover:border-accent-hover transition-all text-center"
            >
              Browse Catalog
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold rounded bg-transparent text-ink border border-line hover:bg-surface hover:border-subtle transition-all text-center"
            >
              Upcoming Events
            </a>
          </div>

          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 sm:gap-10 pt-7 sm:pt-10 border-t border-line">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold text-ink leading-tight">
                12,000+
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-muted uppercase tracking-wider">
                Curated Titles
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold text-ink leading-tight">
                Weekly
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-muted uppercase tracking-wider">
                Author Readings
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold text-ink leading-tight">
                100%
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-muted uppercase tracking-wider">
                Independently Run
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
