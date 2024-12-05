import React from 'react';
import '../CSS/AboutUs.css';

import Header from '../components/Layout/Header';
import HeroSection from '../components/Other/HeroSection';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';

import AboutUsC from "../components/Other/AboutUsCom";

const AboutUs = () => {
  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      {/* <HeroSection /> */}
      <div id="aboutcomHandler">ddddddddd</div>
      <AboutUsC />
      <Footer />
      <Up />
    </>
  );
};

// Sample team members data
const teamMembers = [
  {
    name: 'محمد أحمد',
    role: 'الرئيس التنفيذي',
    bio: 'محمد هو الرؤية وراء شركتنا، يقود الابتكار والنمو.',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    name: 'فاطمة درويش',
    role: 'مديرة التكنولوجيا',
    bio: 'فاطمة تقود فريق التكنولوجيا لدينا بشغف للحلول الحديثة.',
    image: 'https://banner2.cleanpng.com/lnd/20240424/rbc/transparent-islamic-fashion-person-in-blue-hijab-with-black-background66290aeb5c39a1.55620265.webp',
  },
  {
    name: 'سليمان حسين',
    role: 'مدير المالية',
    bio: 'سليمان يدير شؤوننا المالية بخبرة ودقة.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s',
  },
];

// Sample testimonials data
const testimonials = [
  {
    text: 'This company exceeded all our expectations. Their dedication and expertise are unmatched.',
    author: 'Emily Davis, CEO of XYZ Corp',
  },
  {
    text: 'We are thrilled with the results. The team was professional and delivered on time.',
    author: 'Robert Brown, Director at ABC Ltd.',
  },
  {
    text: 'Fantastic service and support. Highly recommend for any business needs.',
    author: 'Sarah Wilson, Founder of DEF Inc.',
  },
];

export default AboutUs;