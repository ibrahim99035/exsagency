import React from 'react';
import '../../CSS/ApplyWithUs.css'; 

const ApplyWithUs = () => {
    return (
        <div className="apply-container">
            <h2 className="apply-title">Join Us and Elevate Your Career</h2>
            <p className="apply-description">
                At EXs Company, we are always looking for passionate and talented individuals to join our team. If you're ready to make a difference and grow your career in a creative environment, we want to hear from you!
            </p>
            <button className="apply-button">
               <a href="/apply-now">Apply With Us Now</a>
            </button>
        </div>
    );
};

export default ApplyWithUs;