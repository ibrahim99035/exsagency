import React from 'react';
import './PrivacyPloicy.css'; 
import DiyarahLogo from "/icons/Ex'sLogo.webp"

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const PrivacyPolicy = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="privacy-policy-container">
        <header>
          <h1 className="privacy-policy-title">Privacy Policy</h1>
        </header>

        <section>
          <p className="privacy-policy-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repellendus impedit, aliquam excepturi tenetur expedita nesciunt debitis ducimus, consectetur cupiditate maiores molestias ut repudiandae, quasi id natus blanditiis neque vero.
          </p>
        </section>

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

export default PrivacyPolicy;
