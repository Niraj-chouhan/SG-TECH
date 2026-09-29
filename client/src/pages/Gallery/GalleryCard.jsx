const GalleryCard = ({ image, onOpen }) => (
  <button className="gallery-card" onClick={() => onOpen(image)} type="button">
    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
    <span className="gallery-card-overlay">
      <strong>{image.title}</strong>
      <small>{image.category}</small>
    </span>
  </button>
);
export default GalleryCard;
