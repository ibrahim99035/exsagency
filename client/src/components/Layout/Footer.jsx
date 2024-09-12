import React from 'react';
import '../../CSS/Footer.css'; 

import Logo from '/icons/MallStackIconTitled.jpg';

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
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src={Logo} alt="Company Logo" className="footer-logo" />
        </div>
        {/* About Section */}
        <div className="footer-section company-info">
          <h3>عنا</h3>
          <p>
            معارض الضجيج للأثاث متخصصة في تصميم وتصنيع الأثاث الذي يجمع بين الجودة العالية والتصميم الأنيق.
          </p>
          <br />
          <p>
            نهدف إلى تلبية احتياجات عملائنا من خلال توفير قطع أثاث فريدة ومتنوعة، تناسب كل الأذواق والمنازل.   
          </p>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>المصادر</h3>
          <ul>
            <li><a href="#blog">المدونة</a></li> <br />
            <li><a href="#news">الأخبار</a></li> <br />
            <li><a href="#careers">المهن</a></li> <br />
            <li><a href="#partners">الشركاء</a></li> <br />
            <li><a href="/auth">المدراء و المسؤوؤلين</a></li> <br />
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>الدعم</h3>
          <ul>
            <li><a href="#faq">الأسئلة الشائعة</a></li> <br />
            <li><a href="#help-center">مركز المساعدة</a></li> <br />
            <li><a href="/contact-us">تواصل معنا</a></li> <br />
            <li><a href="/privacy-policy">سياسة الخصوصية</a></li> <br />
            <li><a href="/intellectual-property-rights">حقوق الملكية الفكرية</a></li> <br />
            <li><a href="/terms-and-conditions">شروط الخدمة</a></li> <br />
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>تابعنا</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" id='facebookIcon'>
                <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" id='twitterIcon'>
                <FaSquareXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" id='instgramIcon'>
                <FaSquareInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" id='linkedIcon'>
                <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" id='youtubeIcon'>
                <FaYoutube />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" id='tiktokIcon'>
                <AiFillTikTok />
            </a>
            <a href="https://telegram.me" target="_blank" rel="noreferrer" id='telegramIcon'>
                <FaTelegramPlane />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" id='whatsappIcon'>
                <FaSquareWhatsapp />
            </a>
            <a href="https://gmail.com" target="_blank" rel="noreferrer" id='gmailIcon'>
                <SiGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 معارض الضجيج. كل الحقوق محفوظة.</p>
        <p>
          <a href="/terms-and-conditions">شروط الخدمة</a> | <a href="/privacy-policy">سياسة الخصوصية</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;