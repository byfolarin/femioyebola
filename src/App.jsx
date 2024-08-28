import './App.css'
import Navigation from './Components/Nav/Navigation'
import LandingPage from './Components/LandingPage'
import FeaturedProjects from './Components/FeaturedProjects'

function App() {


  return (
    <>
    <div className='fixed'>
       <Navigation />
    </div>

     <LandingPage />
     <FeaturedProjects />
    </>
  )
}

export default App
