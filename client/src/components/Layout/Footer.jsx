import React from 'react';
import '../../CSS/Footer.css'; 

import Logo from "/icons/Ex'sLogo.webp";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img 
            src={Logo} 
            alt="Company Logo" 
            className="footer-logo" 
            onClick={scrollToTop} 
          />
        </div>
        {/* About Section */}
        {/* <div className="footer-section company-info">
          <h3>About US</h3>
          <p>
            Founded in 2021, 
            <br /><br />EXs Company is a leading creative agency dedicated to helping businesses achieve their full potential. 
            <br /><br />We offer a comprehensive suite of services designed to elevate your brand and drive results.
          </p>
        </div> */}

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources & Links</h3>
          <ul>
            <li>
              <a href="/careers">Career</a> | 
              <a href="/fqa">FQA</a> | 
              <a href="/help-center">Support Center</a>
            </li> 
            <li>
              <a href="/privacy-policy">Privacy Policy</a> | 
              <a href="/intellectual-property-rights">Intellectual Property Rights</a> | 
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Follow Us on Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100086658396302" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaFacebookSquare />
            </a>
            <a href="https://x.com/exsagency" target="_blank" rel="noreferrer" >
                <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/exscompany/" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaSquareInstagram />
            </a>
            <a href="https://www.linkedin.com/company/exs-company/posts/?feedView=all" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/channel/UCFE71Fn_sTy7ujmIwu7U3qQ" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@exscompany" target="_blank" rel="noreferrer" className='socialiconf'>
                <AiFillTikTok />
            </a>
            <a href="https://t.me/Exscomp" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaTelegramPlane />
            </a>
            <a href="https://api.whatsapp.com/send?phone=01558787856" target="_blank" rel="noreferrer" className='socialiconf'>
                <FaSquareWhatsapp />
            </a>
            <a href="mailto:exs.agency1468@gmail.com" target="_blank" rel="noreferrer" className='socialiconf'>
                <SiGmail /> 
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p id='copyrightparagraph'>&copy; All Rights Reserved for EX's Company 2024 | Made By <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/">Ibrahim Abu Eita</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;