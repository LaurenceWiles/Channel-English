const SamplesGallery = ({ items, onOpen }) => {
  return (
    <section className="samples__gallery" aria-label="Sample pages gallery">
      {items.map((item, index) => (
        <button
          key={item.src}
          type="button"
          className="samples__thumb"
          onClick={() => onOpen(index)}
          aria-label={`Open sample page ${index + 1}`}
        >
          <div className="samples__thumb-media">
            <img
              src={item.src}
              alt={item.alt}
              className="samples__thumb-img"
              width="1414"
              height="2000"
              loading="lazy"
              draggable="false"
            />
          </div>
        </button>
      ))}
    </section>
  );
};

export default SamplesGallery;
