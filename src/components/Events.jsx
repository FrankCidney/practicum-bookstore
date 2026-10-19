import { events } from '../data/books.js';

export default function Events() {
  return (
    <section
      id="events"
      className="py-14 md:py-20 bg-surface-alt border-t border-b border-line"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <header className="text-center max-w-[680px] mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent mb-2">
            Community &amp; Culture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight m-0 mb-3">
            Upcoming Literary Events
          </h2>
          <p className="text-base sm:text-[17px] text-muted leading-relaxed m-0">
            Join fellow bibliophiles for intimate author conversations, monthly reading circles, and
            acoustic poetry nights in our reading room.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-surface border border-line rounded-lg p-5 sm:p-7 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-subtle"
            >
              <div className="shrink-0 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 px-3 py-1.5 sm:px-0 sm:py-0 sm:w-[62px] sm:h-[68px] bg-paper border border-line rounded text-center">
                <span className="text-[11px] font-bold text-accent tracking-[0.12em] leading-none">
                  {event.month}
                </span>
                <span className="font-serif text-lg sm:text-[26px] font-bold text-ink leading-none">
                  {event.day}
                </span>
              </div>

              <div className="flex flex-col grow min-w-0 w-full">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] bg-accent-light text-accent px-2.5 py-0.5 rounded-full">
                    {event.tag}
                  </span>
                  <span className="text-xs font-medium text-muted">{event.time}</span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-ink m-0 mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed m-0 mb-5">{event.description}</p>

                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-auto pt-4 border-t border-line-subtle">
                  <span className="text-xs font-medium text-subtle">📍 {event.location}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold rounded border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors text-center"
                  >
                    {event.ctaText}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-surface border border-line rounded-lg p-6 sm:p-9 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-8">
          <div className="max-w-[700px]">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink m-0 mb-1.5">
              Host Your Own Reading Circle Here
            </h3>
            <p className="text-sm sm:text-[15px] text-muted leading-relaxed m-0">
              We welcome neighborhood book clubs, poetry collectives, and student study groups to
              reserve our private fireside parlor free of charge on weekday evenings.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded border border-line text-ink hover:bg-paper hover:border-subtle transition-all text-center"
          >
            Inquire About Space
          </a>
        </div>
      </div>
    </section>
  );
}
