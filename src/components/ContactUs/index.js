import React from 'react'

import NavbarContainer from "../NavbarConatiner";

import './index.css'

const ContactUs = () => {
  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <div className="navbar d-flex flex-row justify-content-center fixed-top">
        <NavbarContainer />
      </div>

      <div className='body-container d-flex flex-column justify-content-center align-items-center text-white'>
        ContactUs
      </div>
    </div>
  )
}

export default ContactUs