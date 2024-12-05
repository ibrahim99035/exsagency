import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import BrandForm from '../components/Other/BrandForm';
import SocialMediaColumn from '../components/Other/SocialMediaColumn';
import HeroSection from '../components/Other/HeroSection';

const ApplyNow = () =>{

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            {/* <HeroSection /> */}
            <BrandForm />
            <Up />
            <SocialMediaColumn/>
            <Footer />
        </div>
    );
}

export default ApplyNow;