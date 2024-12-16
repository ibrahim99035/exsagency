import React from 'react';
import { FaLightbulb, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa';
import '../CSS/AboutUsLarge.css';

import stock from '/images/about-us-cover.png';

const AboutUsLarge = () => {
  return (
    <div className="about-large-container">
      <div className="about-large-header">
        <h1>About EXs Company</h1>
        <p>
          Your trusted partner in innovation and growth, driving business success since 2021.
        </p>
      </div>

      <div className="about-large-content">
        <h2>Why Choose Us?</h2>
        <div className="about-benefits">
          <div className="benefit-item">
            <FaLightbulb className="benefit-icon" />
            <h3>Innovative Solutions</h3>
            <p>We embrace the latest trends and technologies to deliver creative solutions.</p>
          </div>
          <div className="benefit-item">
            <FaChartLine className="benefit-icon" />
            <h3>Proven Expertise</h3>
            <p>A team of experienced professionals with a proven track record in business growth.</p>
          </div>
          <div className="benefit-item">
            <FaCogs className="benefit-icon" />
            <h3>Customized Services</h3>
            <p>Tailored strategies to meet your unique business needs and goals.</p>
          </div>
          <div className="benefit-item">
            <FaRocket className="benefit-icon" />
            <h3>Results-Driven</h3>
            <p>Focused on achieving measurable success to propel your business forward.</p>
          </div>
        </div>
      </div>

      <div className="about-large-media">
        <img src={stock} alt="Our Mission" className="about-large-image" />
        <video controls className="about-large-video">
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUsLarge;