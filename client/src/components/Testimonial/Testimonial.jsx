import './Testimonial.css'

export default function Testimonial() {
  return <section className="testimonial-section" aria-labelledby="testimonial-heading">
    <div className="testimonial-copy">
      <span className="testimonial-rule" />
      <h2 id="testimonial-heading">What People<br/>Say About Me</h2>
      <a href="#contact" className="learn-more">Learn More</a>
    </div>
    <div className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">“</span>
      <p>Collaborating with this expert was a fantastic journey! Their creativity and focus on quality made a big difference in my project. The process was smooth, and I felt supported at every step. I’m very pleased with the outcome!</p>
      <div className="testimonial-avatar" aria-hidden="true"><span /></div>
      <h3>Utsav Events</h3>
    </div>
    <div className="testimonial-dots" aria-hidden="true"><span className="selected"/><span/><span/><span/></div>
  </section>
}
