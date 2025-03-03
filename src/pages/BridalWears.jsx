import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CollectionPage.css'; // Ensure this file includes your carousel & product card styles
import bridal from '../assets/images/Bridal.jpg';

const BridalWears = () => {
  // Five product items for the carousel
  const carouselProducts = [
    { id: '16', name: "Bridal Product 1", price: "1599", image: bridal },
    { id: '17', name: "Bridal Product 2", price: "1699", image: bridal },
    { id: '18', name: "Bridal Product 3", price: "1799", image: bridal },
    { id: '19', name: "Bridal Product 4", price: "1899", image: bridal },
    { id: '20', name: "Bridal Product 5", price: "1999", image: bridal },
  ];

  // Duplicate the list for an infinite scrolling effect
  const extendedProducts = [...carouselProducts, ...carouselProducts];

  return (
    <div className="bridalwears-page shopnow-page">
      <header className="collection-header shopnow-header">
        <h1>Divine Bridal Wears</h1>
      </header>
      <main className="collection-content">
        {/* Infinite Scrolling Carousel */}
        <div className="carousel-container">
          <div className="carousel-track">
            {extendedProducts.map((product, index) => (
              <div className="carousel-item" key={index}>
                <div className="product-card">
                  <div className="image-container">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h2>{product.name}</h2>
                    <p>Rs. {product.price}</p>
                    <Link to={`/product/${product.id}`}>
                      <button className="buy-now">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BridalWears;
