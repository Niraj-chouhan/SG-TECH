import { useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journey', href: '/journey' },
  { label: 'Books', href: '/books' },
  { label: 'EdtechSavers', href: '/edtech-savers' },
  { label: 'DigitalSavers', href: '/digital-savers' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a className="brand" href="/" aria-label="SGTech home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">SG</span>
        <span>SGTech</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.label} className={item.label === 'Home' ? 'active' : ''} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta mobile-cta" href="/contact" onClick={closeMenu}>Connect With Me <span aria-hidden="true">&nearr;</span></a>
      </nav>

      <a className="nav-cta desktop-cta" href="/contact">Connect With Me <span aria-hidden="true">&nearr;</span></a>
    </header>
  )
}

export default Navbar
