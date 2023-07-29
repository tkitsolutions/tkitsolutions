import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='header'>
       <Navbar/>
       <Hero/>
       </div>
    </div>
  )
}

export default Header