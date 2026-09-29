import NavbarHome from '../../components/homecomponents/navbarsection/navbarsection'
import HeroSection from '../../components/homecomponents/herosection/herosection'
import AboutSection from '../../components/homecomponents/aboutsection/aboutsection'
import JourneySection from '../../components/homecomponents/journeysection/journeysection'
import GallerySection from '../../components/homecomponents/gallerysection/gallerysection'
import ExpertiseSection from '../../components/homecomponents/expertisesection/expertisesection'
import SessionSection from '../../components/homecomponents/sessionsection/sessionsection'
import TestimonialSection from '../../components/homecomponents/testimonialsection/testimonialsection'
import HappyClients from '../../components/homecomponents/happyclients/HappyClients'
import HomeFooter from '../../components/homecomponents/footer/Footer'
import './Home.css'

export default function Home() {
  return (
    <div className="portfolio-page">
      <NavbarHome />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ExpertiseSection />
      <GallerySection />
      <SessionSection />
      <TestimonialSection />
      <HappyClients />
      <HomeFooter />
    </div>
  )
}
