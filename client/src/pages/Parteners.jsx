import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import Icon from '/icons/MallStackTitledCleared.png';

import '../CSS/Parteners.css'

const Parteners = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <Up />
            <Footer />
        </div>
    );

};

export default Parteners;