import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Slider from './slider'

const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header