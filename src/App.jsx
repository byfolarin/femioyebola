import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Nav/Navigation'    
import LandingPage from './Components/LandingPage'
import FeaturedProjects from './Components/FeaturedProjects'
import Section2 from './Components/Section2'
import BlogSec from './Components/BlogSec'
import Footer from './Components/Footer'
import Works from './Components/Pages/Works'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Thoughts from './Components/Pages/Thoughts'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
        <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <FeaturedProjects />
            <Section2 />
            <BlogSec />
          </>
        } />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App