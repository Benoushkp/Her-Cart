import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './Collections.css';
import daily from '../assets/images/dailywear.webp';
import bridal from '../assets/images/Bridal.jpg';
import party from '../assets/images/Party.jpg';

const Collections = () => {
  const navigate = useNavigate();

  // Collections data with dedicated routes
  const collections = [
    { id: 1, name: 'Elegant Daily Wears', price: '350/- onwards', image: daily, route: '/daily-wears' },
    { id: 2, name: 'Divine Bridal Wears', price: '1050/- onwards', image: bridal, route: '/bridal-wears' },
    { id: 3, name: 'Stylish Party Wears', price: '850/- onwards', image: party, route: '/party-wears' },
  ];

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="collections-page">
      <div className="collections-container">
        <h1>COLLECTIONS</h1>
        <section className="products-grid">
          {collections.map((collection) => (
            <div
              key={collection.id}
              onClick={() => handleClick(collection.route)}
              style={{ cursor: 'pointer' }}
            >
              <ProductCard product={collection} />
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
