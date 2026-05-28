import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import Experience from './components/sections/Experience'
import CinematicBreak from './components/sections/CinematicBreak'
import Contact from './components/sections/Contact'
import SmoothScroll from './providers/SmoothScroll'

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <CinematicBreak />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
