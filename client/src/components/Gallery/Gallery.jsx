import './Gallery.css'

const photos = Array.from({ length: 4 }, (_, index) => `/assets/gallery-${String(index + 1).padStart(2, '0')}.webp`)

export default function Gallery() {
  return <section className="gallery-section" id="gallery">
    <h2><span>Stories Told in Frames</span></h2>
    <div className="gallery-grid">
      {photos.map((source, index) => (
        <img
          src={source}
          alt={`Dr. Sharad Gawali event photo ${index + 1}`}
          key={source}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  </section>
}
