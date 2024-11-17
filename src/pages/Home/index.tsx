import React from 'react'
import Hero from '../../components/Hero'
import CompanySection from '../../components/CompanySection'
import ExploreCategory from '../../components/ExploreCategory'
import JoinNow from '../../components/JoinNow'
import FeatureJobs from '../../components/FeatureJobs'
import LatestOpening from '../../components/LatestOpening'

const Home: React.FC = () => {
  return (
    <>
    <Hero/>
    <CompanySection/>
    <ExploreCategory/>
    <JoinNow/>
    <FeatureJobs/>
    <LatestOpening/>
    </>
  )
}

export default Home