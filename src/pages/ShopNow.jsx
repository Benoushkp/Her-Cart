import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './ShopNow.css';
import earing from '../assets/images/Earing.jpeg';
import earing2 from '../assets/images/Earing2.webp';
import brace from '../assets/images/Samplebrace.avif';
import neck from '../assets/images/Necklace.jpg';
import ring from '../assets/images/ring.avif';

const products = [
  { id: 5, name: 'Elegant Earrings', price: '185/-', image: earing },
  { id: 1, name: 'Crystal Earrings', price: '159/-', image: earing2 },
  { id: 2, name: 'Luxury Bracelet', price: '259/-', image: brace },
  { id: 3, name: 'Stylish Necklace', price: '399/-', image: neck },
  { id: 4, name: 'Crystal Ring', price: '129/-', image: ring },
];

// Duplicate products to ensure smooth scrolling
const repeatedProducts = [...products, ...products];

const ShopNow = () => {
  return (
    <div className="shopnow-page">
      <header className="shopnow-header">
        <h1>Discover Elegance</h1>
        <p>Experience our curated collection of premium jewelry</p>
      </header>
      
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel-track">
          {repeatedProducts.map((product, index) => (
            <div key={index} className="carousel-item">
              <Link to={`/product/${product.id}`} className="product-link">
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopNow;
