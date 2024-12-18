import React from 'react';
import { useInView } from 'react-intersection-observer';
import PopUpCard from './PopUpCard';
import '../../CSS/PopUpCardGrid.css'; 

import { FaBullhorn } from "react-icons/fa";       // Advertising & Promotion
import { FaChartBar } from "react-icons/fa";       // Analytics & Insights
import { FaUsers } from "react-icons/fa";          // Social Media Management

const PopUpCardGrid = () => {
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: true });

  const cards = [
    {
      image: 'https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Advertising',
      title: 'Advertising & Promotion',
      description: 'Boost your brand visibility through strategic advertising campaigns and promotions that target the right audience and drive engagement.',
      icon: <FaBullhorn />,
      ref: cardRef1,
      inView: inView1
    },
    {
      image: 'https://via.placeholder.com/400x250/33C3FF/FFFFFF?text=Analytics',
      title: 'Analytics & Insights',
      description: 'Unlock the power of data-driven decisions with our marketing analytics services. Gain insights to improve campaign performance and ROI.',
      icon: <FaChartBar />,
      ref: cardRef2,
      inView: inView2
    },
    {
      image: 'https://via.placeholder.com/400x250/FFB833/FFFFFF?text=Social+Media',
      title: 'Social Media Management',
      description: 'Engage with your audience across platforms with our expert social media strategies, content creation, and performance tracking.',
      icon: <FaUsers />,
      ref: cardRef3,
      inView: inView3
    }
  ];

  return (
    <div id='popupcardcontainer'>   
      <h2>Our Marketing Services</h2> 
      <div className="popcard-grid">
        {cards.map((card, index) => (
          <div ref={card.ref} key={index}>
            <PopUpCard
              image={card.image}
              title={card.title}
              description={card.description}
              icon={card.icon}
              isVisible={card.inView}
            />
          </div>
        ))}
      </div>
      {/* Button to navigate to /services */}
      <div className="services-button-container">
        <a href="/services" target="_blank" rel="noopener noreferrer" className="services-button">
          Learn More About Our Services
        </a>
      </div>
    </div>
  );
};

export default PopUpCardGrid;