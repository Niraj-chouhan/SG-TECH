function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">&nearr;</span>
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> SGTech / Portfolio</p>
        <h1 id="hero-title">Dir. Sharad<br />Gawali</h1>
        <p className="hero-role">IT Consultant</p>
        <div className="hero-footer">
          <div className="hero-actions">
            <a className="button button-primary" href="/contact">Let's Talk <ArrowIcon /></a>
            <a className="button button-secondary" href="/services">Explore Services <ArrowIcon /></a>
          </div>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-placeholder" role="img" aria-label="Trainer image placeholder">
          <div className="placeholder-lines" aria-hidden="true"><i /><i /><i /></div>
          <span>Trainer image</span>
          <small>Image placeholder</small>
        </div>
        <p className="portrait-caption">SGTech / Portfolio</p>
      </div>

      <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
    </section>
  )
}

export default Hero
