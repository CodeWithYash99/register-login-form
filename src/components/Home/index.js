import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='logo-container'>
            <h2>Yash Events</h2>
        </div>

        <div className='navbar-container'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/address'>Address</Link>
            <Link to='/contactus'>Contact Us</Link>
        </div>

        <div className='book-event-container'>
            <button>Book Event</button>
        </div>
    </div>
  )
}

export default Home