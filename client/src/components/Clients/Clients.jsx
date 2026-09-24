import { useState } from 'react'
import './Clients.css'

const clients = Array.from({ length: 10 }, (_, index) => `/assets/client-${String(index + 1).padStart(2, '0')}.webp`)

export default function Clients() {
  const [slide, setSlide] = useState(5)
  const visibleClients = Array.from({ length: 5 }, (_, index) => clients[(slide + index) % clients.length])
  const moveSlide = (direction) => setSlide((current) => (current + direction + 8) % 8)

  return <section className="clients-section" aria-labelledby="clients-heading">
    <h2 className="section-heading" id="clients-heading"><span>Happy clients</span></h2>
    <div className="client-logo-row">
      {clients.slice(0, 5).map((client, index) => <div className="client-logo-slot" key={client}><img src={client} alt={`Client logo ${index + 1}`} /></div>)}
    </div>
    <div className="client-dots" aria-label="Choose client logo slide">
      {clients.slice(0, 8).map((client, index) => <button type="button" className={index === slide ? 'active' : ''} aria-label={`Show client logos, slide ${index + 1}`} aria-pressed={index === slide} onClick={() => setSlide(index)} key={client} />)}
    </div>
    <div className="client-logo-row second-row">
      <button className="client-arrow" type="button" aria-label="Previous client logos" onClick={() => moveSlide(-1)}>‹</button>
      {visibleClients.map((client) => <div className="client-logo-slot" key={client}><img src={client} alt="Client logo" /></div>)}
      <button className="client-arrow" type="button" aria-label="Next client logos" onClick={() => moveSlide(1)}>›</button>
    </div>
  </section>
}
