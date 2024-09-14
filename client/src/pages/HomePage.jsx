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
import Logo from '/icons/MallStackTitledCleared.png'

const HomePage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <div id="homelogo">
                <img src={Logo} alt="MallsLogo" />
            </div>
            <h3 id='hometext'>
                المنصة تجمع كافة معارض الضجيج للأثاث احدث المعروض من مفروشات وإكسسوارات منزلية لديهم ، فقط يتصفح العميل ويختار الموجود والجودة ويتواصل مع المعرض لأي استفسار آخر
                عن المكان والسعر والمواصفات وإمكانية توافر خدمة التوصيل والتركيب ، كل ذلك وجد لراحة العمل
            </h3>
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