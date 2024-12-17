import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To track the current route
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social Media Icons
import '../../CSS/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation(); // Get current route

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'AR' : 'EN'));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Blog', path: '/blogs' },
  ];
  

  return (
    <header className="header">
      <div className="logo" onClick={() => (window.location.href = '/')}>
        <img src="/icons/Ex'sLogo.webp" alt="Logo" />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Social Media Icons (Visible only on Mobile) */}
        <div className="header-social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </nav>
      <div className="language-toggle" onClick={toggleLanguage}>
        {language}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;