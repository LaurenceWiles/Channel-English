const SamplesModal = ({ items, activeIndex, setActiveIndex, onClose }) => {
  if (activeIndex === null) return null;

  return (
    <div
      className="samples__modal"
      role="dialog"
      aria-modal="true"
      aria-label="Sample page viewer"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="samples__modal-content">
        <button
          type="button"
          className="samples__modal-close"
          onClick={onClose}
          aria-label="Close viewer"
        >
          ×
        </button>

        <button
          type="button"
          className="samples__modal-nav samples__modal-nav--prev"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
          }
          aria-label="Previous page"
        >
          ‹
        </button>

        <figure
          className="samples__modal-figure"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={items[activeIndex].src}
            alt={items[activeIndex].alt}
            className="samples__modal-img"
            width="1414"
            height="2000"
            draggable="false"
          />
          <figcaption className="samples__modal-caption">
            Page {activeIndex + 1} of {items.length}
          </figcaption>
        </figure>

        <button
          type="button"
          className="samples__modal-nav samples__modal-nav--next"
          onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SamplesModal;
