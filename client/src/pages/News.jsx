import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import NewsMain from '../components/Other/NewsMain';

import Icon from '/icons/MallStackTitledCleared.png';

const News = () => {

    return(
        <div id='news-page'>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <Up />
            <Footer />
        </div>
    );

};

export default News;