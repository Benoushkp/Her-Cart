import React, { useState, useEffect } from 'react';
import './AdvancedPage.css';
import Footer from '../components/Footer';
import girl1 from '../assets/images/girl1.jpg';
import girl2 from '../assets/images/girl2.jpg';
import girl3 from '../assets/images/girl3.jpg';

const testimonials = [
  {
    id: 31,
    name: "Sussainah",
    image: girl1,
    text: "The custom jewelry design is breathtaking! I absolutely adore my new necklace.",
  },
  {
    id: 32,
    name: "Nivi Jenlove",
    image: girl2,
    text: "Their bulk order service was top-notch—efficient, elegant, and exceeded expectations!",
  },
  {
    id: 33,
    name: "Laura Jennifer",
    image: girl3,
    text: "I feel like royalty every time I wear their pieces. Their designs are simply exquisite.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through testimonials every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

 

  return (
    <div className="collection-page">
      <div className="collection-container testimonial-container">
        <h1>Customer Testimonials</h1>
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <h3>{testimonials[currentIndex].name}</h3>
            <p>"{testimonials[currentIndex].text}"</p>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
