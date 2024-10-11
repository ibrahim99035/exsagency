import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from "/icons/Ex'sLogo.webp"

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const IntellectualPropertyRights = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">Intellectual Property Rights</h1>
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

export default IntellectualPropertyRights;
