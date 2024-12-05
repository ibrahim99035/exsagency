import React from 'react';
import '../CSS/AboutUs.css';

import Header from '../components/Layout/Header';
import HeroSection from '../components/Other/HeroSection';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import ServiceCard from "../components/Other/ServicesComponent";

const Services = () => {
  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      {/* <HeroSection /> */}
      <ServiceCard />
      <Footer />
      <Up />
    </>
  );
};

export default Services;