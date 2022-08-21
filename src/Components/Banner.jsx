import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <header className='banner'>
      <div className="banner-info">
        <div className='banner-title'>
          <h2>Your Card Repairs</h2>
        </div>
        <div className="banner-desc">
          <p>Visit for our service</p>
        </div>
        <div className='btn-container'>
          <button className='btn-1'>Book Appoinment</button>
        </div>
      </div>
    </header >
  )
}

export default Banner