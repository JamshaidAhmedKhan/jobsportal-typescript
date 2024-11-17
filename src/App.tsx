import './App.css'
import CompanySection from './components/CompanySection'
import ExploreCategory from './components/ExploreCategory'
import FeatureJobs from './components/FeatureJobs'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import JoinNow from './components/JoinNow'
import LatestOpening from './components/LatestOpening'

function App() {

  return (
    <>
    <Header/>
    <div>
    <Hero/>
    <CompanySection/>
    <ExploreCategory/>
    <JoinNow/>
    <FeatureJobs/>
    <LatestOpening/>
    <Footer/>
    </div>
    </>
  )
}

export default App
