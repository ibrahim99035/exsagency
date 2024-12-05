import React from 'react';
import './TermsAndConditions.css';

import DiyarahLogo from "/icons/Ex'sLogo.webp"

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const TermsAndConditions = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      {/* <HeroSection /> */}
      <Up />
      <div className="terms-and-conditions-container">
        <header>
          <h1 className="terms-and-conditions-title">Terms & Conditions</h1>
        </header>

        <section>
          <h2>Lorem, ipsum.</h2>
          <h3>Lorem, ipsum dolor:</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius corporis assumenda repudiandae harum pariatur:</p>
          <ul>
              <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, tempore!</li>
              <li>- Lorem ipsum dolor sit amet.</li>
              <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ea ab.</li>
          </ul>

        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
