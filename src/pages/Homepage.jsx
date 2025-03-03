import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Homepage.css';
import Footer from '../components/Footer';
import Banner from '../assets/images/banner (1).png';
import Bracelet from '../assets/images/Bracelet 3.webp';
import Earring from '../assets/images/Earing.webp';

const Homepage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  return (
    <div>
      <div className="homepage">
      <section className="hero" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="transparent-box">
          <h1>Elegant Jewellery for Every Occasion</h1>
          <button className="shop-now" onClick={() => handleNavigation('/shop')}>
            Shop Now
          </button>
        </div>
      </section>
      <section className="products">
        <div className="product-card">
          <img src={Bracelet} alt="Bracelet" />
          <h3>Elegant Bracelets</h3>
          <p>From 599/-</p>
          <div className='view-details'>
          <button onClick={() => handleNavigation('/shop')}>View More</button>
          </div>
        </div>
        <div className="product-card">
          <img src={Earring} alt="Earring" />
          <h3>Elegant Earrings</h3>
          <p>From 499/-</p>
          <div className='view-details'>
          <button onClick={() => handleNavigation('/shop')}>View More</button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
