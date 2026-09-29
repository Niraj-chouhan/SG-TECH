import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Journey from './pages/Journey/Journey'
import Books from './pages/Books/Books'
import Contact from './pages/Contact/Contact'
import './styles/app.css'

function App() {
	const path = window.location.pathname.replace(/\/$/, '')
	const currentPage = path === '/about'
		? <About />
		: path === '/gallery'
			? <Gallery />
		: path === '/journey'
				? <Journey />
		: path === '/books'
					? <Books />
					: path === '/contact'
						? <Contact />
				: <Home />
	return <main className="page">{currentPage}</main>
}

export default App
