import React from 'react';
import '../CSS/LoadingAnimation.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-container">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingAnimation;
