const servicePlaceholders = ['Service title', 'Service title', 'Service title']
const expertisePlaceholders = ['Skill category', 'Skill category', 'Skill category']
const stats = ['Experience', 'Training', 'Projects', 'Students']

function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}

function ImagePlaceholder({ label, className = '' }) {
  return (
    <div className={`section-image-placeholder ${className}`} role="img" aria-label={`${label} image placeholder`}>
      <span>{label}</span>
      <small>Image placeholder</small>
    </div>
  )
}

function PlaceholderNote({ children = 'Verified content placeholder' }) {
  return <p className="placeholder-note">{children}</p>
}

function AboutSection() {
  return (
    <section className="home-section about-section" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="section-eyebrow">01 / Introduction</p>
        <h2 id="about-title">A considered approach to technology.</h2>
        <p className="about-name">Dir. Sharad Gawali <span>— IT Consultant</span></p>
        <PlaceholderNote>Professional introduction to be added from verified profile content.</PlaceholderNote>
        <a className="text-link" href="/about">More about the trainer <span aria-hidden="true">↗</span></a>
      </div>
      <ImagePlaceholder label="Trainer portrait" className="about-image" />
    </section>
  )
}

function JourneySection() {
  return (
    <section className="home-section journey-section" aria-labelledby="journey-title">
      <SectionHeading eyebrow="02 / Journey" title="Experience, thoughtfully documented." />
      <div className="timeline-placeholder">
        <div className="timeline-line" aria-hidden="true" />
        {[1, 2, 3].map((item) => (
          <article className="journey-card" key={item}>
            <span className="journey-number">0{item}</span>
            <div className="journey-dot" aria-hidden="true" />
            <h3>Experience entry</h3>
            <PlaceholderNote>Verified role, organization and duration to be added.</PlaceholderNote>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="home-section expertise-section" aria-labelledby="expertise-title">
      <SectionHeading eyebrow="03 / Expertise" title="Capabilities, in focus." />
      <div className="expertise-grid">
        {expertisePlaceholders.map((item, index) => (
          <article className="expertise-card" key={`${item}-${index}`}>
            <span className="card-index">0{index + 1}</span>
            <span className="minimal-icon" aria-hidden="true">✦</span>
            <h3>{item}</h3>
            <PlaceholderNote>Verified skills to be added.</PlaceholderNote>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="home-section services-section" aria-labelledby="services-title">
      <SectionHeading
        eyebrow="04 / Services"
        title="Ways to work together."
        action={<a className="text-link heading-link" href="/services">View All Services <span aria-hidden="true">↗</span></a>}
      />
      <div className="services-grid">
        {servicePlaceholders.map((item, index) => (
          <article className="service-card" key={`${item}-${index}`}>
            <div className="service-icon-placeholder" aria-hidden="true"><span>0{index + 1}</span></div>
            <h3>{item}</h3>
            <PlaceholderNote>Service description to be added from verified service content.</PlaceholderNote>
            <a href="/services" aria-label={`View ${item}`} className="round-arrow">↗</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function HighlightsSection() {
  return (
    <section className="highlights-section" aria-label="Professional highlights">
      {stats.map((stat) => (
        <div className="stat-item" key={stat}>
          <span className="stat-value">—</span>
          <span className="stat-label">{stat}</span>
          <small>Data pending</small>
        </div>
      ))}
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="home-section testimonials-section" aria-labelledby="testimonials-title">
      <SectionHeading eyebrow="05 / Testimonials" title="Words from collaborators." />
      <article className="testimonial-card">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>Testimonial content to be added from verified feedback.</p>
        <footer><span>—</span><small>Client / learner details pending</small></footer>
      </article>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="connect-title">
      <p className="section-eyebrow">SGTech / Start a conversation</p>
      <h2 id="connect-title">Let’s build the next step together.</h2>
      <p>Connect with Dir. Sharad Gawali to discuss your requirements.</p>
      <a className="button button-light" href="/contact">Let’s Talk <span className="arrow-icon" aria-hidden="true">↗</span></a>
    </section>
  )
}

function PortfolioSections() {
  return (
    <div className="portfolio-sections">
      <AboutSection />
      <JourneySection />
      <ExpertiseSection />
      <ServicesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <FinalCta />
    </div>
  )
}

export default PortfolioSections
