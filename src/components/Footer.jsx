import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      id="contact"
      className="bg-footer-bg text-footer-text pt-14 md:pt-20 pb-10 border-t border-line"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col">
            <a
              href="#home"
              aria-label="Page and Pine Booksellers Home"
              className="flex items-center gap-3 text-white mb-4 no-underline"
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
                <span className="font-serif text-xl font-bold leading-tight">Page &amp; Pine</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a49e95]">
                  Booksellers
                </span>
              </div>
            </a>
            <p className="text-sm text-[#a49e95] leading-relaxed m-0 mb-5">
              An independent brick-and-mortar sanctuary celebrating literature, author discussions,
              and the quiet joy of discovery in our neighborhood.
            </p>
            <div className="flex items-center gap-3 text-xs font-medium" aria-label="Social links">
              <a href="#contact" className="text-footer-text hover:text-accent transition-colors">
                Instagram
              </a>
              <span className="text-[#6a645d]" aria-hidden="true">
                &bull;
              </span>
              <a href="#contact" className="text-footer-text hover:text-accent transition-colors">
                Goodreads
              </a>
              <span className="text-[#6a645d]" aria-hidden="true">
                &bull;
              </span>
              <a href="#contact" className="text-footer-text hover:text-accent transition-colors">
                Substack
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col">
            <h3 className="font-serif text-lg font-semibold text-white m-0 mb-4 tracking-wide">
              Store Hours
            </h3>
            <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-2.5 text-sm">
              <li className="flex justify-between border-b border-dashed border-[#3a3734] pb-1.5">
                <span className="text-footer-text font-medium">Monday &ndash; Friday</span>
                <span className="text-[#a49e95] tabular-nums">9:00 AM &ndash; 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-[#3a3734] pb-1.5">
                <span className="text-footer-text font-medium">Saturday</span>
                <span className="text-[#a49e95] tabular-nums">10:00 AM &ndash; 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-[#3a3734] pb-1.5">
                <span className="text-footer-text font-medium">Sunday</span>
                <span className="text-[#a49e95] tabular-nums">11:00 AM &ndash; 6:00 PM</span>
              </li>
            </ul>
            <p className="text-xs text-[#8c8479] italic m-0">
              Coffee bar brews fresh 30 minutes before doors open daily.
            </p>
          </div>

          {/* Column 3: Location & Contact */}
          <div className="flex flex-col">
            <h3 className="font-serif text-lg font-semibold text-white m-0 mb-4 tracking-wide">
              Visit Us
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-[#a49e95] leading-relaxed">
              <p className="m-0">
                <strong className="text-white font-semibold">Address:</strong>
                <br />
                142 Pine Street, Historic Quarter
                <br />
                Portland, OR 97204
              </p>
              <p className="m-0">
                <strong className="text-white font-semibold">Phone:</strong>
                <br />
                <a href="tel:5035550182" className="text-footer-text hover:text-accent">
                  (503) 555-0182
                </a>
              </p>
              <p className="m-0">
                <strong className="text-white font-semibold">Inquiries:</strong>
                <br />
                <a
                  href="mailto:hello@pageandpinebooks.com"
                  className="text-footer-text hover:text-accent break-all"
                >
                  hello@pageandpinebooks.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter / Dispatch */}
          <div className="flex flex-col">
            <h3 className="font-serif text-lg font-semibold text-white m-0 mb-4 tracking-wide">
              The Monthly Dispatch
            </h3>
            <p className="text-sm text-[#a49e95] leading-relaxed m-0 mb-4">
              Handwritten essays, early access to author events, and curated reading lists delivered
              once a month.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="reader@example.com"
                  required
                  className="grow min-w-0 px-3.5 py-2.5 bg-[#2e2b28] border border-[#433f3b] rounded text-white text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-sm font-semibold rounded bg-accent text-white hover:bg-accent-hover transition-colors whitespace-nowrap cursor-pointer"
                >
                  Join
                </button>
              </div>
              {subscribed ? (
                <span className="text-xs text-[#9ec9a6] font-medium">
                  Thank you for subscribing to The Monthly Dispatch!
                </span>
              ) : (
                <span className="text-xs text-[#7f786f]">
                  Zero algorithms or spam. Unsubscribe anytime.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#363330] text-xs sm:text-sm text-[#7f786f] gap-3 text-center sm:text-left">
          <p className="m-0">
            &copy; 2026 Page &amp; Pine Booksellers. Built with React &amp; Tailwind CSS.
          </p>
          <div>
            <a
              href="#top"
              className="text-footer-text font-medium hover:text-accent transition-colors"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
