import React from 'react';
import '../CSS/AboutUs.css';

import Header from '../components/Layout/Header';
import HeroSection from '../components/Other/HeroSection';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import GalleryComponent from '../components/Sliders/MallSlider';

const GalleryPage = () => {
  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      {/* <HeroSection /> */}
      <div id="gallerycomHandler">ddddddddd</div>
      <GalleryComponent />
      <Footer />
      <Up />
    </>
  );
};

export default GalleryPage;