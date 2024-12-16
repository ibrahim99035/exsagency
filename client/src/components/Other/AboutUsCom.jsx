import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/AboutUsSmall.css';
import stock from '/images/about-us-stock.png';

const AboutUsSmall = () => {
  return (
    <div className="about-small-container">
      <div className="about-small-content">
        <h2>About Us</h2>
        <h3>Your Partner in Brand Growth</h3>
        <p>
          Founded in 2021, EXs Company is a creative agency dedicated to helping businesses achieve their full potential.
        </p>
        <Link to="/about-us" className="learn-more-link">
          Learn More
        </Link>
      </div>
      <div className="about-small-media">
        <img src={stock} alt="Team Collaboration" />
      </div>
    </div>
  );
};

export default AboutUsSmall;