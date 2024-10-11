// ServiceCard.js
import React, { useState } from 'react';
import { FaBusinessTime, FaChartLine, FaBullhorn, FaSearch, FaUsersCog, FaFileAlt, FaPenFancy, FaClipboard, FaVideo, FaPencilAlt, FaBrain } from 'react-icons/fa';
import "../../CSS/ServiceCard.css";
import ServicesModal from './ServicesModal';

const services = [
    { 
      name: 'Business Consultation', 
      icon: <FaBusinessTime />, 
      description: 'Expert guidance to improve your business operations and strategies.' 
    },
    { 
      name: 'Business Development', 
      icon: <FaChartLine />, 
      description: 'Strategies to grow your business and increase revenue.' 
    },
    { 
      name: 'Marketing Solutions', 
      icon: <FaBullhorn />, 
      description: 'Comprehensive marketing strategies to reach your target audience.' 
    },
    { 
      name: 'Market Research', 
      icon: <FaSearch />, 
      description: 'Insights into market trends and consumer behavior.' 
    },
    { 
      name: 'Competitors Analysis', 
      icon: <FaUsersCog />, 
      description: 'Assessment of competitors to identify strengths and weaknesses.' 
    },
    { 
      name: 'Content Marketing', 
      icon: <FaFileAlt />, 
      description: 'Creating valuable content to attract and engage your audience.' 
    },
    { 
      name: 'Content Creation', 
      icon: <FaPenFancy />, 
      description: 'Producing high-quality content for various platforms.' 
    },
    { 
      name: 'Script Writing', 
      icon: <FaClipboard />, 
      description: 'Crafting scripts for videos, presentations, and more.' 
    },
    { 
      name: 'PMP Creation', 
      icon: <FaBrain />, 
      description: 'Developing project management plans tailored to your needs.' 
    },
    { 
      name: 'Copywriting', 
      icon: <FaPencilAlt />, 
      description: 'Creating compelling copy that drives conversions and sales.' 
    },
    { 
      name: 'Reels Making', 
      icon: <FaVideo />, 
      description: 'Producing engaging reels to boost your social media presence.' 
    },
    { 
      name: 'Strategy Creation', 
      icon: <FaBrain />, 
      description: 'Formulating strategic plans to achieve your business goals.' 
    },
];  

const ServiceCard = () => {
    const [isDataModalOpen, setIsDataModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (service) => {
        console.log(`Selected Service: ${service.name}`); // Check if the service is correctly passed
        setSelectedCard(service);
        setIsDataModalOpen(true);
    };
    

  return (
    <>
        <div className="service-container">
        {services.map((service, index) => (
            <div className="service-card" key={index} onClick={() => handleCardClick(service)}>
                <div className="icon">{service.icon}</div>
                <h3>{service.name}</h3>
            </div>
        ))}
        </div>
        
        <ServicesModal
            isOpen={isDataModalOpen}
            onClose={() => setIsDataModalOpen(false)}  
            service={selectedCard}  
        />
    </>
  );
};

export default ServiceCard;