import { useEffect, useRef, useState } from 'react'
import './gallerysection.css'
import certificationPhoto from '../../../assets/images/home/gallery/certification-01.jpg'
import workshopPhoto from '../../../assets/images/home/gallery/workshop-01.jpg'
import khargonePhoto from '../../../assets/images/home/gallery/khargone-01.jpg'
import birthdayPhoto from '../../../assets/images/home/gallery/birthday-celebration.jpg'

const photos = [
  certificationPhoto,
  workshopPhoto,
  khargonePhoto,
  birthdayPhoto,
]
const sliderPhotos = [...photos, ...photos]

export default function Gallery() {
  const viewportRef = useRef(null)
  const [slide, setSlide] = useState(0)
  const [step, setStep] = useState(0)
  const [isMoving, setIsMoving] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return undefined

    const updateStep = () => {
      const image = viewport.querySelector('img')
      if (!image) return
      const gap = Number.parseFloat(getComputedStyle(viewport.querySelector('.gallery-track')).columnGap) || 0
      setStep(image.getBoundingClientRect().width + gap)
    }

    updateStep()
    const observer = new ResizeObserver(updateStep)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  const next = () => {
    if (isMoving || !step) return
    setIsMoving(true)
    setSlide((current) => current + 1)
  }

  const finishSlide = () => {
    if (slide === photos.length) {
      setIsResetting(true)
      setSlide(0)
      requestAnimationFrame(() => requestAnimationFrame(() => setIsResetting(false)))
    }
    setIsMoving(false)
  }

  return <section className="gallery-section" id="gallery">
    <h2><span>Stories Told in Frames</span></h2>
    <div className="gallery-carousel">
      <div className="gallery-viewport" ref={viewportRef} role="region" aria-label="Event photo gallery">
        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${slide * step}px)`,
            
            transition: isResetting ? 'none' : undefined,
          }}
          onTransitionEnd={finishSlide}
        >
          {sliderPhotos.map((source, index) => (
            <img
              src={source}
              alt={index < photos.length ? `Dr. Sharad Gawali event photo ${index + 1}` : ''}
              aria-hidden={index >= photos.length}
              key={`${source}-${index}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
      <button className="gallery-next" type="button" aria-label="Show next gallery image" onClick={next} disabled={isMoving}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
      </button>
    </div>
  </section>
}
