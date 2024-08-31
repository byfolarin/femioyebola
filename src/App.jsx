import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navigation2 from './Components/Nav/Navigation2'
import LandingPage from './Components/LandingPage'
import FeaturedProjects from './Components/FeaturedProjects'
import Section2 from './Components/Section2'
import BlogSec from './Components/BlogSec'
import Footer from './Components/Footer'
import Works from './Components/Pages/Works'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Thoughts from './Components/Pages/Thoughts'

function App() {
  return (
    <Router>
      {/* <div className='fixed z-50'>
        <Navigation2 />
      </div> */}
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