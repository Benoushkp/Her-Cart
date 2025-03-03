import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CollectionPage.css'; // Ensure this file includes your shared styles
import party from '../assets/images/Party.jpg';

const PartyWears = () => {
  // Five product items for the carousel
  const carouselProducts = [
    { id: '21', name: "Party Product 1", price: "899", image: party },
    { id: '22', name: "Party Product 2", price: "949", image: party },
    { id: '23', name: "Party Product 3", price: "999", image: party },
    { id: '24', name: "Party Product 4", price: "1049", image: party },
    { id: '25', name: "Party Product 5", price: "1099", image: party },
  ];

  // Duplicate the products for a seamless infinite scrolling effect
  const extendedProducts = [...carouselProducts, ...carouselProducts];

  return (
    <div className="partywears-page shopnow-page">
      <header className="collection-header shopnow-header">
        <h1>Stylish Party Wears</h1>
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

export default PartyWears;
