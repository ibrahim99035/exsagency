import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';
import ImageGallery from '../Other/ImageGallery';

const MallSlider = () => { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 2000, // Speed of autoplay (in ms)
    pauseOnHover: true, // Pause when hovering
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
    <>
      <div className="galleryContainerRoot">
        <div className="slider-container">
          <h2>Gallary</h2>
          <Slider {...settings}>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0043.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0045.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0046.jpg" alt="Slide 3" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0048.jpg" alt="Slide 4" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0049.jpg" alt="Slide 5" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0050.jpg" alt="Slide 6" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0051.jpg" alt="Slide 7" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0052.jpg" alt="Slide 8" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0053.jpg" alt="Slide 9" />
            </div>
            <div>
              <img src="/images/gallary/IMG-20241010-WA0054.jpg" alt="Slide 10" />
            </div>
          </Slider>
          <ImageGallery />
        </div>
        <div id="yellowsvgcontainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7ac09" fill-opacity="1" d="M0,32L12.6,69.3C25.3,107,51,181,76,202.7C101.1,224,126,192,152,197.3C176.8,203,202,245,227,256C252.6,267,278,245,303,229.3C328.4,213,354,203,379,213.3C404.2,224,429,256,455,277.3C480,299,505,309,531,298.7C555.8,288,581,256,606,245.3C631.6,235,657,245,682,229.3C707.4,213,733,171,758,181.3C783.2,192,808,256,834,245.3C858.9,235,884,149,909,122.7C934.7,96,960,128,985,170.7C1010.5,213,1036,267,1061,272C1086.3,277,1112,235,1137,192C1162.1,149,1187,107,1213,90.7C1237.9,75,1263,85,1288,112C1313.7,139,1339,181,1364,165.3C1389.5,149,1415,75,1427,37.3L1440,0L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
        </div>
      </div>
    </>
  );
};

export default MallSlider;