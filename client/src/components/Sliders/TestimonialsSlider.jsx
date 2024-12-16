import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../CSS/testimonial-slider.css";

const TestimonialSlider = () => {
  const settingsTop = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const settingsBottom = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: true, // Makes the bottom slider move in the opposite direction
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This is the best service I've ever used! Highly recommended.",
      image: "/images/testimonials/user1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Exceptional quality and great support. Five stars!",
      image: "/images/testimonials/user2.jpg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      feedback: "I love it! This made my life so much easier.",
      image: "/images/testimonials/user3.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      feedback: "Amazing experience. I will definitely use this again.",
      image: "/images/testimonials/user4.jpg",
    },
    {
      id: 5,
      name: "Sarah Davis",
      feedback: "Great value for money and a fantastic team!",
      image: "/images/testimonials/user5.jpg",
    },
  ];

  return (
    <div className="testimonial-slider-container">
      <h2>What Our Clients Say</h2>
      {/* Top Slider */}
      <Slider {...settingsTop} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </Slider>
      {/* Bottom Slider */}
      <Slider {...settingsBottom} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;