// import React from 'react'
// import './Header.css'
// import logo from '../Assets/images/logo512.png'
// import heartImage from '../Assets/images/eplaza v1.png'

// const Header = () => {
//   return (
//     <header className="header-container">
//       {/* Top Nav */}
//       <div className="nav-bar">
//         <div className="logo-section">
//           <img src={logo} alt="Eplaza Logo" className="logo-img" />
//           <span className="brand-name">E-PLAZA</span>
//         </div>

//         <nav className="nav-links">
//           <a href="#welcome">Welcome</a>
//           <a href="#ecommerce">E-Commerce</a>
//           <a href="#marketplaces">E-Marketplaces</a>
//           <a href="#marketing">Marketing</a>
//           <a href="#ai">AI</a>
//           <a href="#contact">Contact</a>
//           <span className="search-icon">&#128269;</span>
//         </nav>
//       </div>

//       {/* Hero Content */}
//       <div className="hero-section">
//         <div className="hero-left">
//           <img src={heartImage} alt="Heart" className="heart-img" />
//           <h2 className="main-tagline">specialists in e-marketplaces</h2>
//           <p className="brand-slogan">"Online shopping made better"</p>
//         </div>

//         <div className="hero-right" role="presentation" />
//       </div>
//       <div className='button'>
//         <button className='sellbutton'>Start Selling</button>  <button className='shopbutton'>Start Shopping</button>
//       </div>
//     </header>
//   )
// }

// export default Header

// src/Views/Header.js
import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/images/logo512.png'
// import heartImage from '../Assets/images/eplaza v1.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header-container">
      {/* Top Nav */}
      <div className="nav-bar">
        <div className="logo-section">
          <img src={logo} alt="Eplaza Logo" className="logo-img" />
          <span className="brand-name">E-PLAZA</span>
        </div>

        {/* Hamburger Icon */}
        <div 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#welcome">Welcome</a>
          <a href="#ecommerce">E-Commerce</a>
          <a href="#marketplaces">E-Marketplaces</a>
          <a href="#marketing">Marketing</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
          <span className="search-icon">&#128269;</span>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="hero-section">
        <div className="hero-left">
          {/* <img src={heartImage} alt="Heart" className="heart-img" /> */}
          <h2 className="main-tagline">specialists in e-marketplaces</h2>
          <h2 className="brand-slogan">"Online shopping made better"</h2>
        </div>
        <div className="hero-right" role="presentation" />
      </div>

      <div className='button'>
        <button className='sellbutton'>Start Selling</button>
        <button className='shopbutton'>Start Shopping</button>
      </div>
    </header>
  )
}

export default Header
