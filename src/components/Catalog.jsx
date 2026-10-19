import { useState } from 'react';
import { books, categories } from '../data/books.js';
import BookCard from './BookCard.jsx';

export default function Catalog({ quantities, onQuantityChange, onClearBag }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBooks =
    activeCategory === 'All'
      ? books
      : books.filter((book) => book.category === activeCategory);

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = books.reduce(
    (sum, book) => sum + book.price * (quantities[book.id] || 0),
    0
  );

  return (
    <section id="catalog" className="py-14 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <header className="text-center max-w-[680px] mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent mb-2">
            Carefully Curated
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight m-0 mb-3">
            The Bookstore Catalog
          </h2>
          <p className="text-base sm:text-[17px] text-muted leading-relaxed m-0">
            Explore our thoughtfully assembled collection. Filter by genre or browse our resident
            booksellers&rsquo; personal recommendations.
          </p>
        </header>

        {/* Category Filter Tabs (useState) + Bag Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b-2 border-line">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter books by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'All'
                  ? books.length
                  : books.filter((b) => b.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-surface-alt text-muted hover:text-ink hover:bg-line'
                  }`}
                >
                  {cat.label}{' '}
                  <span
                    className={`ml-1 text-[11px] ${
                      isActive ? 'text-white/90' : 'text-subtle'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {totalItems > 0 && (
            <div className="flex items-center justify-between md:justify-end gap-3 bg-surface px-4 py-2 rounded-lg border border-line text-xs sm:text-sm">
              <span className="text-ink font-medium">
                Bag: <strong>{totalItems}</strong> {totalItems === 1 ? 'book' : 'books'} &bull;{' '}
                <strong className="text-accent tabular-nums">${totalPrice.toFixed(2)}</strong>
              </span>
              <button
                type="button"
                onClick={onClearBag}
                className="text-xs font-semibold text-muted hover:text-accent underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Main Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              quantity={quantities[book.id] || 0}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
