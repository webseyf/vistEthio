// src/components/AboutPage/Testimonials.jsx

import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    comment: "My trip to Ethiopia was life-changing! The landscapes are breathtaking.",
    image: "/guy.jpg", 
    rating: 5, // Star rating
  },
  {
    name: "Jane Smith",
    comment: "Incredible cultural experiences! I loved every moment of my visit.",
    image: "/rfd.jpg",
    rating: 4,
  },
  {
    name: "Mark Wilson",
    comment: "Ethiopia has the most delicious food and warm-hearted people.",
    image: "/Z.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" data-aos="fade-up">
      <h2>What Our Visitors Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} className="testimonial-image" />
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="star">★</span> // Use an icon or image for stars if preferred
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
