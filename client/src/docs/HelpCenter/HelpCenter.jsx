import React, { useState, useRef } from 'react';

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

import './HelpCenter.css';

const HelpCenter = () => {
  const [activeSection, setActiveSection] = useState('faq');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'question 1',
      answer: 'answer 1',
    },
    {
      question: 'question 2',
      answer: 'answer 2',
    },
  ];

  return (
    <>
        <div className="overlay-image"></div>
        <Header />
        {/* <HeroSection />   */}
        <div className="help-center-container">
            <div className="help-center-header">
                <h1>Welcome in Help Center</h1>
                <p>Here you could find answers about the frequent questions or you could contact with our support team</p>
            </div>

            <div className="help-center-menu">
                <button
                className={`menu-button ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={() => handleSectionChange('faq')}
                >
                FQA
                </button>
                <button
                className={`menu-button ${activeSection === 'support' ? 'active' : ''}`}
                onClick={() => handleSectionChange('support')}
                >
                  Customer Support
                </button>
                <button
                className={`menu-button ${activeSection === 'inquiry' ? 'active' : ''}`}
                onClick={() => handleSectionChange('inquiry')}
                >
                  Submit Inquiry
                </button>
            </div>

            <div className="help-center-content">
                {activeSection === 'faq' && (
                    <div className="faq-items">
                        {faqData.map((item, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                            <h3>{item.question}</h3>
                            <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>+</span>
                            </div>
                            <div
                            ref={(el) => (contentRef.current[index] = el)}
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0px',
                                opacity: activeIndex === index ? '1' : '0',
                            }}
                            >
                            <p>{item.answer}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                )}

                {activeSection === 'support' && (
                <div className="support-section">
                    <h2>Customer Support</h2>
                    <p>If you need any help, you can contact with our customer support team by email or phone.</p>
                    <ul>
                    <li>Email: support@example.com</li>
                    <li>Phone: 123-456-7890</li>
                    </ul>
                </div>
                )}

                {activeSection === 'inquiry' && (
                <div className="inquiry-section">
                    <h2>Submit Inquiry</h2>
                    <p>If you have any inquiry, you can fill the form below, and we will reply to you as soon as possible.</p>
                    <form className="inquiry-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label>Inquiry</label>
                        <textarea placeholder="Enter Your Inquiry" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Inquiry</button>
                    </form>
                </div>
                )}
            </div>
        </div> 
        <Up />
        <Footer />
    </>
  );
};

export default HelpCenter;