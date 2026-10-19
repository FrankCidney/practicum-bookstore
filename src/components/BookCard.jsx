import QuantityStepper from './QuantityStepper.jsx';

const badgeStyles = {
  Fiction: 'bg-white text-[#2f3e5c] border-line-subtle',
  Nonfiction: 'bg-white text-[#78471f] border-line-subtle',
  'Staff Pick': 'bg-white text-[#2c5936] border-[#c7d8c4]',
};

export default function BookCard({ book, quantity, onQuantityChange }) {
  const isStaffPick = book.category === 'Staff Pick';
  const badgeClass = badgeStyles[book.category] || badgeStyles.Fiction;

  return (
    <article
      className={`flex flex-col rounded-lg border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isStaffPick
          ? 'bg-[#fbfdfa] border-[#d1dcce] hover:border-subtle'
          : 'bg-surface border-line hover:border-subtle'
      }`}
    >
      <div className="relative w-full aspect-[2/3] bg-surface-alt overflow-hidden group">
        <img
          src={book.cover}
          alt={book.alt}
          width="400"
          height="600"
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full border shadow-sm z-10 ${badgeClass}`}
        >
          {book.category}
        </span>
      </div>

      <div className="flex flex-col grow p-3.5 sm:p-5">
        {book.staffNote && (
          <blockquote className="m-0 mb-3.5 px-3 py-2 text-xs italic leading-snug text-[#2c5936] bg-[#edf3ec] border-l-[3px] border-[#2c5936] rounded">
            &ldquo;{book.staffNote}&rdquo; &mdash; {book.recommendedBy}
          </blockquote>
        )}

        <h3 className="font-serif text-base sm:text-[18px] font-bold leading-snug text-ink m-0 mb-1">
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted m-0 mb-4">{book.author}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-line-subtle">
          <div className="flex flex-col">
            <span className="text-base sm:text-[17px] font-bold text-ink tabular-nums">
              ${book.price.toFixed(2)}
            </span>
            {quantity > 0 && (
              <span className="text-[11px] font-semibold text-accent">
                {quantity} in bag (${(book.price * quantity).toFixed(2)})
              </span>
            )}
          </div>

          <QuantityStepper
            quantity={quantity}
            onQuantityChange={(newQty) => onQuantityChange(book.id, newQty)}
            label={book.title}
          />
        </div>
      </div>
    </article>
  );
}
