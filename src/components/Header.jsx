export default function Header({ bagCount = 0 }) {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-line py-3 md:py-0 md:h-[72px] flex items-center transition-shadow"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        <a
          href="#home"
          aria-label="Page and Pine Booksellers Home"
          className="flex items-center gap-3 text-ink no-underline"
        >
          <svg
            className="text-accent shrink-0"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-tight tracking-tight">
              Page &amp; Pine
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Booksellers
            </span>
          </div>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 list-none m-0 p-0">
            <li>
              <a
                href="#home"
                className="text-sm sm:text-[15px] font-medium text-ink hover:text-accent transition-colors py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#catalog"
                className="text-sm sm:text-[15px] font-medium text-ink hover:text-accent transition-colors py-1"
              >
                Catalog
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-sm sm:text-[15px] font-medium text-ink hover:text-accent transition-colors py-1"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm sm:text-[15px] font-medium text-ink hover:text-accent transition-colors py-1"
              >
                Visit &amp; Contact
              </a>
            </li>
            {bagCount > 0 && (
              <li>
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent-light text-accent px-3 py-1.5 rounded-full"
                >
                  <span>Bag ({bagCount})</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
