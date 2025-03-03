import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CollectionPage.css'; // This CSS file should include your carousel & product card styles with scroll animation
import daily from '../assets/images/dailywear.webp';

const DailyWears = () => {
  // Five product items for the carousel
  const carouselProducts = [
    { id: 11, name: "Daily Product 1", price: "299", image: daily },
    { id: 12, name: "Daily Product 2", price: "349", image: daily },
    { id: 13, name: "Daily Product 3", price: "399", image: daily },
    { id: 14, name: "Daily Product 4", price: "449", image: daily },
    { id: 15, name: "Daily Product 5", price: "499", image: daily },
  ];

  // Duplicate the products to create a seamless infinite scrolling effect.
  const extendedProducts = [...carouselProducts, ...carouselProducts];

  return (
    <div className="dailywear-page shopnow-page">
      <header className="collection-header shopnow-header">
        <h1>Elegant Daily Wears</h1>
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

export default DailyWears;
