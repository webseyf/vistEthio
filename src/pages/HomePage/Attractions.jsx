// src/components/HomePage/Attractions.jsx

import React from 'react';
import './Attractions.css';

const attractions = [
  {
    title: "Breathtaking Landscapes",
    description: "Experience the stunning views of the Simien Mountains and the Great Rift Valley.",
    image: "/landscape.jpg"
  },
  {
    title: "Rich Cultural Heritage",
    description: "Dive into the vibrant traditions and cultures that define the Ethiopian identity.",
    image: "/2Q==.jpg"
  },
  {
    title: "Delicious Cuisine",
    description: "Savor the flavors of authentic Ethiopian dishes, known for their unique spices and ingredients.",
    image: "/food.jpg" },
];

const Attractions = () => {
  return (
    <div className="content-section">
      {attractions.map((attraction, index) => (
        <div className="attraction" key={index}>
          <img src={attraction.image} alt={attraction.title} />
          <h2>{attraction.title}</h2>
          <p>{attraction.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Attractions;
