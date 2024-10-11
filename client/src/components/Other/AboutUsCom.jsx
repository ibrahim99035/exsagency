// AboutUs.jsx
import React from 'react';
import '../../CSS/aboucomponent.css'; // Import your styles

const aboucomponent = () => {
    return (
        <>
            <div className="about-us-com-container">
                <h2 className="com-about-title">ABOUT</h2>
                <h1 className="brand-growth">Your Partner in Brand Growth</h1>
                <p className="com-about-description">
                    Founded in 2021, EXs Company is a leading creative agency dedicated to helping businesses achieve their full potential. We offer a comprehensive suite of services designed to elevate your brand and drive results.
                </p>

                <h3 className="why-choose-title">Why Choose EXs Company?</h3>
                <ul className="why-choose-list">
                    <li>✨ <strong>Proven Expertise:</strong> Our team of experienced professionals has a track record of success in helping businesses grow in Egypt.</li>
                    <li>🎯 <strong>Customized Solutions:</strong> We tailor our services to meet your unique needs and objectives.</li>
                    <li>📈 <strong>Results-Driven Approach:</strong> We focus on delivering measurable outcomes that drive your business forward.</li>
                    <li>🚀 <strong>Innovation:</strong> We stay ahead of the curve by embracing the latest marketing trends and technologies.</li>
                </ul>

                <h3 className="let-grow-title">Let's Grow Your Brand Together.</h3>
                <p className="com-contact-description">
                    Contact us today to discuss your business goals and learn how EXs Company can help you achieve them.
                </p>
            </div>
            <div id='yellowsvgcontainerdown'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7ac09" fill-opacity="1" d="M0,32L18.5,74.7C36.9,117,74,203,111,202.7C147.7,203,185,117,222,96C258.5,75,295,117,332,128C369.2,139,406,117,443,117.3C480,117,517,139,554,165.3C590.8,192,628,224,665,229.3C701.5,235,738,213,775,176C812.3,139,849,85,886,101.3C923.1,117,960,203,997,208C1033.8,213,1071,139,1108,112C1144.6,85,1182,107,1218,133.3C1255.4,160,1292,192,1329,213.3C1366.2,235,1403,245,1422,250.7L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
            </div>
       </>
    );
};

export default aboucomponent;