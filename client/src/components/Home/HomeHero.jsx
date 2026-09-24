import './HomeHero.css'

const icons = {
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="fill" cx="18" cy="6" r="1"/></>,
  linkedin: <path className="fill" d="M5 9H2v12h3zM3.5 3a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6M9 9H6v12h3v-6.4c0-3.5 4-3.8 4 0V21h3v-7.4c0-6.1-6.4-5.9-7-2.9z"/>,
  facebook: <path className="fill" d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H8V13h2.8v8z"/>,
  mail: <><path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/><path className="fill" d="m15 17 5-5 2 2-5 5-3 1z"/></>,
  whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.4 7.6L3 21l1.7-4.9a8.5 8.5 0 1 1 15.8-4.4Z"/><path d="M8 7.5c.3-.6.6-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.5.9 1.2 1.5 2.1 2.1.3.2.5.2.7 0l.9-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .6-.3 1.4-.8 1.8-.5.5-1.3.7-2.1.5-1.1-.3-2.5-.9-4-2.4-1.3-1.3-2.1-2.7-2.3-3.8-.2-.8.1-1.7.6-2.3Z"/></>
}

function SocialLinks() {
  return <div className="socials">
    {Object.entries(icons).map(([name, icon]) => <a className="social" href="#" aria-label={name} key={name}><svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></a>)}
  </div>
}

export default function HomeHero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <h1>Dr. Sharad Gawali</h1>
      <p>Specialized Software Profession With global Experience Since 2017,<br className="desktop-break"/> Delivering Excellence Across Leading Tech Companies.</p>
      <SocialLinks />
    </div>
    <div className="image-composition">
      <div className="orange-circle" aria-hidden="true" />
      <img className="portrait" src="/assets/hero-portrait.webp" alt="Dir. Sharad Gawali" />
    </div>
  </section>
}
