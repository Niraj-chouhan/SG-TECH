import { useState } from 'react'
import './navbarsection.css'

const links = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Gallery', '#gallery'],
  ['Journey', '#journey'],
  ['Books', '#books'],
  ['EdTechSavers', 'https://www.edtechsavers.info/'],
  ['DigitalSavers', 'https://www.digitalsavers.in/'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = window.location.pathname.replace(/\/$/, '')
  const isHomePage = path === ''
  const activeLabel = path === '/about' ? 'About Me' : path === '/gallery' ? 'Gallery' : path === '/journey' ? 'Journey' : path === '/books' ? 'Books' : 'Home'
  const homeHref = (href) => isHomePage ? href : `/${href}`
  const getLinkHref = (label, href) => {
    if (label === 'About Me') return '/about'
    if (label === 'Gallery') return '/gallery'
    if (label === 'Journey') return '/journey'
    if (label === 'Books') return '/books'
    if (href.startsWith('https://')) return href
    return homeHref(href)
  }

  return (
    <header className="site-header">
      <a className="brand" href={isHomePage ? '#home' : '/#home'} aria-label="SGTech home">
        SGTech<span className="brand-mark" aria-hidden="true">⚙</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
      <nav id="main-navigation" className={`navigation${menuOpen ? ' menu-open' : ''}`} aria-label="Main navigation">
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a
              className={label === activeLabel ? 'active' : ''}
              href={getLinkHref(label, href)}
              key={label}
              onClick={() => setMenuOpen(false)}
              rel={href.startsWith('https://') ? 'noreferrer' : undefined}
              target={href.startsWith('https://') ? '_blank' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="connect" href="/contact#contact" onClick={() => setMenuOpen(false)}>
          Connect With Me <span aria-hidden="true">➲</span>
        </a>
      </nav>
    </header>
  )
}
