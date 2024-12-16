import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const PartenersSlider = () => {
  const settings = {
    dots: false, // Disable dots for a cleaner look
    infinite: true,
    speed: 3000, // Speed of the continuous slide (in ms)
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set to 0 to allow continuous motion
    cssEase: "linear", // Makes the transition smooth and linear
    pauseOnHover: false, // Avoid pausing on hover for continuous effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" id="parteners">
      <h2>Our Clients</h2>
      <Slider {...settings}>
        <div className="partener-slide-div">
          <img src="/images/gallary/IMG-20241010-WA0048.jpg" alt="Slide 1" />
        </div>
        <div className="partener-slide-div">
          <img src="/images/gallary/IMG-20241010-WA0049.jpg" alt="Slide 2" />
        </div>
        <div className="partener-slide-div">
          <img src="/images/gallary/IMG-20241010-WA0050.jpg" alt="Slide 3" />
        </div>
        <div className="partener-slide-div">
          <img src="/images/gallary/IMG-20241010-WA0051.jpg" alt="Slide 4" />
        </div>
        <div className="partener-slide-div">
          <img src="/images/gallary/IMG-20241010-WA0052.jpg" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default PartenersSlider;