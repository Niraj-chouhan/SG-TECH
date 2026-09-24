import './Footer.css'

const usefulLinks = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Gallery', '#gallery'],
  ['Journey', '#journey']
]

export default function Footer() {
  return <footer className="site-footer" id="contact">
    <div className="footer-content">
      <div className="footer-brand-column">
        <a className="footer-brand" href="#home">SGTech<span>⚙</span></a>
        <div className="footer-socials">
          {['Instagram', 'LinkedIn', 'Facebook', 'Email', 'WhatsApp'].map((name) => <a href="#" aria-label={name} key={name}>{name.slice(0, 2)}</a>)}
        </div>
      </div>
      <div className="footer-links">
        <h2>Useful Links</h2>
        <nav aria-label="Footer navigation">{usefulLinks.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</nav>
      </div>
      <div className="footer-contact">
        <h2>Your Ideas, Our Expertise</h2>
        <p>Have an idea? Let’s make it a reality.<br/>Reach out now!</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Your mail here" aria-label="Your mail here" />
          <button type="submit" aria-label="Submit email">✉</button>
        </form>
      </div>
    </div>
    <div className="copyright">©2025 SGTech. All Rights Reserved.</div>
    <a className="back-to-top" href="#home" aria-label="Back to top">↑</a>
  </footer>
}
