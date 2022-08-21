import React, { useState } from "react";
import "./Navbar.css"
import logo from "../assets/logo.jpg"

function Navbar() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
        <span className="logo-text">Automotive</span>
      </div>
      <div className="nav-link-container">
        {
          show ||
          <div className="nav-link">
            <li>Home</li>
            <li>Features</li>
            <li>Price</li>
            <li>Contact</li>
            <button className='btn-1'>Book Appoinment</button>
          </div>
        }
      </div>
      <div className="drawer" onClick={handleShow}>
        <span className="drawer-line"></span>
        <span className="drawer-line"></span>
        <span className="drawer-line"></span>
      </div>
    </div>
  );
}

export default Navbar;
