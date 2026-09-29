import NavbarHome from '../../components/homecomponents/navbarsection/navbarsection'
import JourneySection from '../../components/homecomponents/journeysection/journeysection'
import HomeFooter from '../../components/homecomponents/footer/Footer'
import './Journey.css'

export default function Journey() {
  return (
    <div className="journey-page">
      <NavbarHome />
      <main>
        <JourneySection />
      </main>
      <HomeFooter />
    </div>
  )
}
