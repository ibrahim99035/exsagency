import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MallSlider from '../components/Sliders/MallSlider'
import StoreSlider from '../components/Sliders/StoreSlider';
import CardGrid from '../components/Store/CardGrid';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import PopUpCardGrid from '../components/Other/PopUpCardGrid';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

const HomePage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <MallSlider />
            <StoreSlider />
            <PopUpCardGrid />
            <CardGrid />
            <PartenersSlider />
            <Up />
            <Footer />
        </div>
    );

};

export default HomePage;