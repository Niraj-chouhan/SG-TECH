import { useEffect, useState } from 'react'
import './testimonialsection.css'

const testimonials = [
  {
    name: 'Utsav Events',
    text: 'Collaborating with this expert was a fantastic journey! Their creativity and focus on quality made a big difference in my project. The process was smooth, and I felt supported at every step. I’m very pleased with the outcome!',
  },
  {
    name: 'karmaass.com',
    text: 'The website looks clean and attractive. The overall layout is well structured, and the user experience feels smooth and simple.',
  },
  {
    name: 'Houseofskoon',
    text: 'The design is modern and visually appealing. A little improvement in spacing and alignment would make it look even more professional.',
  },
  {
    name: 'Govt',
    text: 'Good work on the website structure and responsiveness. The sections are nicely organized and the overall presentation looks engaging.',
  },
]

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 10000)

    return () => window.clearTimeout(timeout)
  }, [activeIndex])

  return <section className="testimonial-section" aria-labelledby="testimonial-heading">
    <div className="testimonial-copy">
      <span className="testimonial-rule" aria-hidden="true" />
      <h2 id="testimonial-heading">What People<br/>Say About Me</h2>
      <a href="#contact" className="learn-more">Learn More</a>
    </div>
    <div className="testimonial-showcase">
      <article className="testimonial-card" key={activeIndex} aria-live="polite">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>{activeTestimonial.text}</p>
      </article>
      <div className="testimonial-avatar" aria-hidden="true"><span /></div>
      <h3 className="testimonial-name">{activeTestimonial.name}</h3>
      <div className="testimonial-dots" role="group" aria-label="Choose a testimonial">
        {testimonials.map((testimonial, index) => (
          <button
            className={index === activeIndex ? 'selected' : ''}
            type="button"
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-pressed={index === activeIndex}
            key={testimonial.name}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  </section>
}
