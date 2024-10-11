import React, { useState } from 'react';
import '../../CSS/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/icons/Ex'sLogo.webp" alt="Logo" />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          
          <li><a href="#blog">Blog</a></li>
          <li><a href="/contact-us">Contact</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about-us">About</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;