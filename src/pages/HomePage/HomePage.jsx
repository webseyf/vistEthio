// src/components/HomePage/HomePage.jsx

import React from 'react';

import './Homepage.css';
import Hero from '../Hero/Hero';
import Attractions from './Attractions';

const HomePage = () => {


  return (
    <div className="home-container">
      <Hero />
     
   
      <Attractions />
    </div>
  );
};

export default HomePage;
