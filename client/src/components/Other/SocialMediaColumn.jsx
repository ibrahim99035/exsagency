import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import '../../CSS/SocialMediaColumn.css'; // External CSS for styling

const SocialMediaColumn = () => {
  return (
    <div className="social-media-column">
      <a href="https://www.facebook.com/profile.php?id=100086658396302" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare className="icon facebook" />
      </a>
      <a href="https://x.com/exsagency" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter className="icon twitter" />
      </a>
      <a href="https://www.instagram.com/exscompany/" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram className="icon instagram" />
      </a>
      <a href="https://www.linkedin.com/in/exs-agency-4ba081286/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon linkedin" />
      </a>
      <a href="https://www.youtube.com/channel/UCFE71Fn_sTy7ujmIwu7U3qQ" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon youtube" />
      </a>
      <a href="https://www.tiktok.com/@exscompany" target="_blank" rel="noopener noreferrer">
        <AiFillTikTok className="icon tiktok" />
      </a>
    </div>
  );
};

export default SocialMediaColumn;