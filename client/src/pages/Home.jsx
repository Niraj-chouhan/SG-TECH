import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import PortfolioSections from '../components/home/PortfolioSections'
import './Home.css'

function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <PortfolioSections />
    </main>
  )
}

export default Home
