import { useEffect, useRef } from 'react'
import NavbarHome from '../../components/homecomponents/navbarsection/navbarsection'
import HomeFooter from '../../components/homecomponents/footer/Footer'
import aboutImage from '../../assets/images/home/about/LPU.jpeg'
import trainingImage from '../../assets/images/home/about/about-training-session.webp'
import intelioLogo from '../../assets/images/home/journey/intelio-technologies-logo.png'
import ibmLogo from '../../assets/images/home/journey/ibm-networking-logo.webp'
import edtechLogo from '../../assets/images/home/journey/edtech-savers-logo.png'
import digitalSaversLogo from '../../assets/images/home/journey/digital-savers-logo.png'
import nicLogo from '../../assets/images/home/journey/government-of-india-logo.png'
import rssLogo from '../../assets/images/home/journey/rss-ashagram-flag.png'
import sevaBharatiLogo from '../../assets/images/home/journey/seva-bharati-emblem.png'
import './About.css'

const experienceCards = [
  {
    title: 'Corporate Experience',
    logos: [
      { src: intelioLogo, alt: 'Intelio Technologies' },
      { src: ibmLogo, alt: 'IBM' },
    ],
  },
  {
    title: 'IT Training & IT Company',
    logos: [
      { src: edtechLogo, alt: 'EdTech Savers' },
      { src: digitalSaversLogo, alt: 'Digital Savers' },
    ],
  },
  {
    title: 'Government of India',
    logos: [{ src: nicLogo, alt: 'National Informatics Centre' }],
  },
  {
    title: 'Social Responsibilities',
    logos: [
      { src: rssLogo, alt: 'Rashtriya Swayamsevak Sangh' },
      { src: sevaBharatiLogo, alt: 'Seva Bharati' },
    ],
  },
]

const summaryItems = [
  {
    number: '01',
    title: 'Professional Growth',
    text: 'Continuous learning, development and exploration in technology.',
  },
  {
    number: '02',
    title: 'Technology',
    text: 'Building innovative solutions and helping organizations achieve meaningful results.',
  },
  {
    number: '03',
    title: 'Entrepreneurship',
    text: 'Turning ideas into practical ventures that create positive change.',
  },
]

const experienceText = "My journey in the realm of technology has been one of continuous growth and exploration. As an experienced software developer and IT consultant, I've honed my skills in crafting innovative solutions and providing strategic guidance to clients across diverse industries."

export default function About() {
  const pageRef = useRef(null)

  useEffect(() => {
    const page = pageRef.current
    const cards = page?.querySelectorAll('.about-experience-card')
    if (!page || !cards?.length) return undefined

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    page.classList.add('has-scroll-effects')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-site" ref={pageRef}>
      <NavbarHome />
      <main className="about-page">
        <section className="about-page-hero">
          <div className="about-hero-pattern" aria-hidden="true" />
          <h1>About Me</h1>
          <div className="about-leaf" aria-hidden="true"><span>🍂</span></div>
        </section>

        <section className="about-intro-section" id="about" aria-labelledby="about-intro-heading">
          <div className="about-intro-container">
            <div className="about-intro-image-wrap">
              <div className="about-intro-image">
                <img src={aboutImage} alt="Dr. Sharad Gawali" />
              </div> 
            </div>

            <div className="about-intro-content">
              <span className="about-small-heading">FROM DREAMS TO ACTIONS</span>
              <h2 id="about-intro-heading">About Me</h2>
              <div className="about-heading-line" aria-hidden="true" />
              <p>
                Driven by a profound desire to make a meaningful impact, I aspire to ascend to the pinnacle of leadership in the tech arena. My vision is to inspire and empower others, fostering a culture of innovation, collaboration, and excellence.
              </p>
              <p>{experienceText}</p>
            </div>
          </div>
        </section>

        <section className="about-experience-section" aria-label="Experience and organizations">
          <div className="about-experience-container">
            <div className="about-experience-text">
              <div className="about-quote-line" aria-hidden="true" />
              <div className="about-experience-copy">
                <p>{experienceText}</p>
                <div className="about-experience-image">
                  <img src={trainingImage} alt="Dr. Sharad Gawali leading an IT training session" />
                </div>
              </div>
            </div>

            <div className="about-experience-cards">
              {experienceCards.map(({ title, logos }, index) => (
                <article className={`about-experience-card card-position-${index + 1}`} key={title}>
                  <h2 className="about-card-title">{title}</h2>
                  <div className="about-card-logos">
                    {logos.map(({ src, alt }) => <img src={src} alt={alt} key={alt} />)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-summary" aria-label="Areas of focus">
          <div className="about-summary-container">
            {summaryItems.map(({ number, title, text }) => (
              <article className="about-summary-item" key={number}>
                <span className="about-summary-number">{number}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  )
}
