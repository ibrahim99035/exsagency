import React from 'react';
import '../CSS/Contact.css'; 
import TinyLogo from "/icons/Ex'sLogo.webp";

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import HeroSection from '../components/Other/HeroSection';

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <div className='overlay-image'></div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>We liew to hear from you, contact with us across our social media accounts or send us a message</p>
        <form className="contact-form">
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100086658396302" target="_blank" rel="noopener noreferrer" id='facebookIcon'>
              <FaFacebookSquare />
            </a>
            <a href="https://x.com/exsagency" target="_blank" rel="noopener noreferrer" id='twitterIcon'>
              <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/exscompany/" target="_blank" rel="noopener noreferrer" id='instgramIcon'>
              <FaSquareInstagram />
            </a>
            <a href="https://www.linkedin.com/company/exs-company/posts/?feedView=all" target="_blank" rel="noopener noreferrer" id='linkedIcon'>
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/channel/UCFE71Fn_sTy7ujmIwu7U3qQ" target="_blank" rel="noopener noreferrer" id='youtubeIcon'>
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@exscompany" target="_blank" rel="noopener noreferrer" id='tiktokIcon'>
              <AiFillTikTok />
            </a>
            <a href="https://api.whatsapp.com/send?phone=01558787856" target="_blank" rel="noopener noreferrer" id='whatsappIcon'>
              <FaSquareWhatsapp />
            </a>
            <a href="https://t.me/Exscomp" target="_blank" rel="noopener noreferrer" id='telegramIcon'>
              <FaTelegramPlane />
            </a>
            <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer" id='gmailIcon'>
              <SiGmail />
            </a>
          </div>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Now!</button>
        </form>
      </div>
      <div id="ContactPageLogoTiny">
        <img src={TinyLogo} alt="Malls Logo" />
      </div>
      <Footer />
      <Up />
    </div>
  );
}

export default Contact;