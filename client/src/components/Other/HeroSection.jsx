import React from 'react';
import '../../CSS/HeroSection.css';
import Logo from "/icons/ExesLogoLatge.webp"

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your <br /> &nbsp; &nbsp; Business Potential with</h1>
            <div id='Exlogocont'>
              <img src={Logo} alt="Hero Section Logo" className="hero-logo" /><br />
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#aa0c0c" id='HeroSvg'>
        <path 
          d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z">
        </path>
      </svg>
    </>
  );
};

export default HeroSection;