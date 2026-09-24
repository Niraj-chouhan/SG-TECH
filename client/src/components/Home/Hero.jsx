import Navbar from '../Layout/Navbar'
import HomeHero from './HomeHero'
import About from '../About/About'
import Journey from '../Journey/Journey'
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery'
import Consulting from '../Consulting/Consulting'
import Testimonial from '../Testimonial/Testimonial'
import Clients from '../Clients/Clients'
import HeadingBand from '../Layout/HeadingBand'
import Footer from '../Footer/Footer'
import './Hero.css'

export default function Hero() {
  return (
    <div className="portfolio-page">
      <Navbar />
      <HomeHero />
      <About />
      <Journey />
      <Gallery />
      <Services />
      <Consulting />
      <Testimonial />
      <Clients />
      <HeadingBand />
      <Footer />
    </div>
  )
}
