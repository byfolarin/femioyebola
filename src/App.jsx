import './App.css'
import Navigation2 from './Components/Nav/Navigation2'
import LandingPage from './Components/LandingPage'
import FeaturedProjects from './Components/FeaturedProjects'
import Section2 from './Components/Section2'
import BlogSec from './Components/BlogSec'

function App() {


  return (
    <>
    {/* <div className='fixed z-50'>
       <Navigation2 />
      
     </div> */}
      <LandingPage />
     <FeaturedProjects />
     <Section2 />
     <BlogSec />
    </>
  )
}

export default App
