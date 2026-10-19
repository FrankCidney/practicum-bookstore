export default function QuantityStepper({ quantity, onQuantityChange, label }) {
  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div
      className="inline-flex items-center border border-line rounded bg-paper"
      role="group"
      aria-label={`Quantity selector for ${label}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity === 0}
        aria-label={`Decrease quantity for ${label}`}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold text-ink hover:bg-surface-alt disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        &minus;
      </button>

      <span
        className="min-w-[1.75rem] text-center text-xs sm:text-sm font-semibold text-ink tabular-nums px-1"
        aria-live="polite"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        aria-label={`Increase quantity for ${label}`}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold text-ink hover:bg-surface-alt transition-colors cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
