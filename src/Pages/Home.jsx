import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from './Hero'
import Services from './Services'
import Meet from './Meet'
import People from './People'
import Footer from '../Components/Footer'
import Products from './Products'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Meet/>
      <People/>
      
      <Footer/>
      {/* <Services/> */}

    </div>
  )
}
export default Home