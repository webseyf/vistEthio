// src/components/AboutPage/AboutPage.jsx

import React from 'react';
import './AboutPage.css';
import Testimonials from './Testimonials';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description"> <em><b>  We specialize in providing unforgettable experiences in Ethiopia, 
      from breathtaking landscapes to rich cultural heritage. </b></em>
      <br /><br />

Diverse Landscapes: <br />
Ethiopia is known for its varied geography, including the Simien Mountains, the Great Rift Valley, and the Danakil Depression.

Ethnic Diversity:  <br />
Ethiopia is home to over 80 ethnic groups, each with its own languages, traditions, and customs. 

      </p>
      <Testimonials />
      <button className="back-home" onClick={() => navigate('/')}>
        Back to Home
      </button>
      
    </div>
  );
};

export default AboutPage;
