// src/components/Hero/Hero.jsx

import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom'; 

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigation
  const description = "Discover the breathtaking landscapes, rich culture, and unforgettable experiences that Ethiopia has to offer.";

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className="hero-container" data-aos="zoom-out">
      <div className="content">
        <h1 className="hero-title" data-aos="fade-up">Explore Ethiopia</h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
          {description}
        </p>
        <button 
          className="learn-more-button" 
          onClick={() => navigate('/about')} 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Learn More
        </button>
      </div>
      <div className="image-container">
        <img src="/images.jpg" alt="Ethiopian Landscape" className="animated-image" />
      </div>
    </div>
  );
};

export default Hero;
