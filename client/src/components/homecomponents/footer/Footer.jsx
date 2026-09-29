import './Footer.css'

const usefulLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journey', href: '/journey' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/sharadgawalii/', icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="footer-icon-fill" cx="18" cy="6" r="1" /></> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharad-gawalii-3b272b77/', icon: <path className="footer-icon-fill" d="M5 9H2v12h3zm-1.5-6a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6M9 9H6v12h3v-6.4c0-3.5 4-3.8 4 0V21h3v-7.4c0-6.1-6.4-5.9-7-2.9z" /> },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: <path className="footer-icon-fill" d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H8V13h2.8v8z" /> },
  { label: 'Email', href: 'mailto:', icon: <><path d="M3 5h18v14H3z" /><path d="m3 6 9 7 9-7" /><path className="footer-icon-fill" d="m15 17 5-5 2 2-5 5-3 1z" /></> },
  { label: 'WhatsApp', href: 'https://wa.me/919855106094', icon: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.4 7.6L3 21l1.7-4.9a8.5 8.5 0 1 1 15.8-4.4Z" /><path d="M8 7.5c.3-.6.6-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.5.9 1.2 1.5 2.1 2.1.3.2.5.2.7 0l.9-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .6-.3 1.4-.8 1.8-.5.5-1.3.7-2.1.5-1.1-.3-2.5-.9-4-2.4-1.3-1.3-2.1-2.7-2.3-3.8-.2-.8.1-1.7.6-2.3Z" /></> },
]

function SocialLinks() {
  return (
    <nav className="footer-socials" aria-label="Social media">
      {socialLinks.map(({ label, href, icon }) => (
        <a href={href} aria-label={label} title={label} key={label} target={href.startsWith('https://') ? '_blank' : undefined} rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
        </a>
      ))}
    </nav>
  )
}

export default function Footer() {
  const isHomePage = window.location.pathname.replace(/\/$/, '') === ''
  const homeAnchor = (href) => isHomePage ? href : `/${href}`

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand-column">
          <a className="footer-brand" href={homeAnchor('#home')} aria-label="SGTech home">
            SGTech<span aria-hidden="true">⚙</span>
          </a>
          <SocialLinks />
        </div>

        <div className="footer-links">
          <h2>Useful Links</h2>
          <nav aria-label="Footer navigation">
            {usefulLinks.map(({ label, href }) => <a href={href.startsWith('/') ? href : homeAnchor(href)} key={label}>{label}</a>)}
          </nav>
        </div>

        <div className="footer-contact">
          <h2>Your Ideas, Our Expertise</h2>
          <p>Have an idea? Let’s make it a reality.<br />Reach out now!</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your mail here" aria-label="Your mail here" />
            <button type="submit" aria-label="Submit email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z" /><path d="m3 6 9 7 9-7" /></svg>
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">©2025.SGTech. All Rights Reserved.</div>
      <a className="back-to-top" href={homeAnchor('#home')} aria-label="Back to top">↑</a>
    </footer>
  )
}
