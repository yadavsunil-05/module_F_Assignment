import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='Home-Container'>
      <div className='info-container'>
        <p className='home-tittle'>Our Location</p>
        <p>15 Street Suburt Country 6000</p>
      </div>
      <div className='info-container phone'>
        <p className='home-tittle'>Phone</p>
        <p>789654123</p>
      </div>
      <div className='info-container'>
        <p className='home-tittle'>Email</p>
        <p>automotive@carsales.com.au</p>
      </div>
    </div>
  )
}

export default Home