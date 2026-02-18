import { useEffect, useMemo, useState } from "react";
import "../styles/Samples.css";
import introVideo from "../assets/introvideo.mp4";
import videoPoster from "../assets/poster.jpg";
import sampleCover from "../assets/samples/sample-cover.png";
import sampleExplanation from "../assets/samples/sample-explanation.png";
import sampleOutcomes from "../assets/samples/sample-outcomes.png";
import sampleActivity from "../assets/samples/sample-activity.png";

const Samples = () => {
  const items = useMemo(
    () => [
      { src: sampleCover, alt: "Sample materials cover page" },
      { src: sampleExplanation, alt: "Sample materials explanation page" },
      { src: sampleOutcomes, alt: "Sample materials learning outcomes page" },
      { src: sampleActivity, alt: "Sample materials activity example page" },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const openModal = (index) => setActiveIndex(index);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setActiveIndex((prev) => (prev + 1) % items.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex]);

  return (
    <main className="samples">
      <header className="samples__header">
        <h1>Sample materials</h1>
        <p className="samples__intro">
          Below is a preview of some of my classroom-ready materials. These
          pages are watermarked and provided as a viewing sample only.
        </p>
      </header>

      <section className="samples__video-section" aria-label="Video preview">
        <div className="samples__video-wrapper">
          <video
            className="samples__video"
            src={introVideo}
            poster={videoPoster}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
      </section>

      <section className="samples__gallery" aria-label="Sample pages gallery">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="samples__thumb"
            onClick={() => openModal(index)}
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

      {activeIndex !== null && (
        <div
          className="samples__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Sample page viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="samples__modal-content">
            <button
              type="button"
              className="samples__modal-close"
              onClick={closeModal}
              aria-label="Close viewer"
            >
              ×
            </button>

            <button
              type="button"
              className="samples__modal-nav samples__modal-nav--prev"
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + items.length) % items.length,
                )
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
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % items.length)
              }
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Samples;
