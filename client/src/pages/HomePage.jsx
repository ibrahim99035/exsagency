import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MallSlider from '../components/Sliders/MallSlider';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import ServiceCard from "../components/Other/ServicesComponent";
import AboutUs from "../components/Other/AboutUsCom"; // Make sure the name matches your component's file
import ApplyWithUs from "../components/Other/ApplyWithUs";
import PartenersSlider from '../components/Sliders/PartenersSlider';
import TestimonialSlider from '../components/Sliders/TestimonialsSlider';

const HomePage = () => {
    return (
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <AboutUs />
            <ServiceCard />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#ff6444" id='HeroSvgflip'>
                <path 
                d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z">
                </path>
            </svg>
            <MallSlider />
            
            <ApplyWithUs />
            <PartenersSlider />
            <TestimonialSlider />
            <Up />
            <Footer />
        </div>
    );
};

export default HomePage;