import React from 'react'
import Hero from '../pages/Hero/Hero'
import Events from '../pages/Events/Events'
import About from '../pages/About/About'
import Gallery from '../pages/Gallery/Gallery'
import Forms from '../pages/Form/Forms'
import Map from '../pages/Map/Map'
import Sponsors from '../pages/Sponsership/Sponser'
const Home_Layout = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Events/>
    <Gallery/>
    <Sponsors/>
    <Forms/>
    <Map/>
    </>
  )
}

export default Home_Layout