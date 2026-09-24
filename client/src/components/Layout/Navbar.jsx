import { useState } from 'react'
import './Navbar.css'

const links = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Gallery', '#gallery'],
  ['Journey', '#journey'],
  ['Books', '#books'],
  ['EdtechSavers', '#services'],
  ['DigitalSavers', '#digital-savers'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="SGTech home">
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
          {links.map(([label, href], index) => (
            <a className={index === 0 ? 'active' : ''} href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <a className="connect" href="#contact" onClick={() => setMenuOpen(false)}>
          Connect With Me <span aria-hidden="true">➲</span>
        </a>
      </nav>
    </header>
  )
}
