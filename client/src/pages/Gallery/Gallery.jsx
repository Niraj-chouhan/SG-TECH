import { useEffect, useMemo, useState } from "react";
import NavbarHome from "../../components/homecomponents/navbarsection/navbarsection";
import HomeFooter from "../../components/homecomponents/footer/Footer";
import GalleryCard from "./GalleryCard";
import {
  eventsForCategory,
  galleryCategories,
  galleryImages,
} from "./galleryData";
import "./Gallery.css";

const GalleryTabs = ({ activeCategory, onChange }) => (
  <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
    {galleryCategories.map((category) => (
      <button
        aria-selected={activeCategory === category}
        className={activeCategory === category ? "is-active" : ""}
        key={category}
        onClick={() => onChange(category)}
        role="tab"
        type="button"
      >
        {category}
      </button>
    ))}
  </div>
);

const GalleryEventFilter = ({ events, activeEvent, onChange }) => (
  <label className="gallery-event-filter">
    <span>Filter by event</span>
    <select
      value={activeEvent}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="ALL">All events</option>
      {events.map((event) => (
        <option key={event} value={event}>
          {event}
        </option>
      ))}
    </select>
  </label>
);

const GalleryGrid = ({ images, onOpen }) => (
  <div className="gallery-grid" aria-live="polite">
    {images.map((image) => (
      <GalleryCard image={image} key={image.id} onOpen={onOpen} />
    ))}
  </div>
);

const GalleryLightbox = ({ images, activeImage, onClose, onMove }) => {
  const currentIndex = images.findIndex(
    (image) => image.id === activeImage?.id,
  );
  useEffect(() => {
    if (!activeImage) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onMove(-1);
      if (event.key === "ArrowRight") onMove(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage, onClose, onMove]);
  if (!activeImage) return null;
  return (
    <div
      className="gallery-lightbox"
      aria-label={`${activeImage.title} image preview`}
      aria-modal="true"
      onMouseDown={onClose}
      role="dialog"
    >
      <button
        className="lightbox-close"
        aria-label="Close preview"
        onClick={onClose}
        type="button"
      >
        ×
      </button>
      <button
        className="lightbox-arrow lightbox-previous"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onMove(-1);
        }}
        type="button"
      >
        ‹
      </button>
      <figure onMouseDown={(event) => event.stopPropagation()}>
        <img key={activeImage.id} src={activeImage.src} alt={activeImage.alt} />
        <figcaption>
          {activeImage.title}
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
      <button
        className="lightbox-arrow lightbox-next"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onMove(1);
        }}
        type="button"
      >
        ›
      </button>
    </div>
  );
};

const Gallery = () => {
  const [category, setCategory] = useState("ALL");
  const [event, setEvent] = useState("ALL");
  const [activeImage, setActiveImage] = useState(null);
  const events = useMemo(() => eventsForCategory(category), [category]);
  const filteredImages = useMemo(
    () =>
      galleryImages.filter(
        (image) =>
          (category === "ALL" || image.category === category) &&
          (event === "ALL" || image.event === event),
      ),
    [category, event],
  );
  const changeCategory = (nextCategory) => {
    setCategory(nextCategory);
    setEvent("ALL");
  };
  const moveImage = (direction) => {
    const index = filteredImages.findIndex(
      (image) => image.id === activeImage?.id,
    );
    setActiveImage(
      filteredImages[
        (index + direction + filteredImages.length) % filteredImages.length
      ],
    );
  };
  return (
    <div className="gallery-site">
      <NavbarHome />
      <main className="gallery-page">
        <header className="gallery-page-heading">
          <span>MEMORIES &amp; MOMENTS</span>
          <h1>Gallery</h1>
        </header>
        <p className="gallery-intro">
          A glimpse into the moments that make learning memorable.
        </p>
        <GalleryTabs activeCategory={category} onChange={changeCategory} />
        <GalleryEventFilter
          activeEvent={event}
          events={events}
          onChange={setEvent}
        />
        <GalleryGrid images={filteredImages} onOpen={setActiveImage} />
      </main>
      <GalleryLightbox
        activeImage={activeImage}
        images={filteredImages}
        onClose={() => setActiveImage(null)}
        onMove={moveImage}
      />
      <HomeFooter />
    </div>
  );
};

export default Gallery;
