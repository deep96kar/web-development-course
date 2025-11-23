import React from 'react'
import Footer from './footer';

const navbar = (props) => {
  return (
    <div>
      <div className='logo'>{props.logotext}</div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navbar
