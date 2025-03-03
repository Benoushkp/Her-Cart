import React from 'react';
import Footer from '../components/Footer';
import './AdvancedPage.css';
import bulk from '../assets/images/bulk.webp';
import custom from '../assets/images/custom.jpg';

const servicesData = [
  {
    id: 1,
    title: "Custom Jewelry Design",
    description:
      "Experience best craftsmanship in every piece. Our custom jewelry design service is tailored to reflect your unique style and personality.",
    image: custom,
  },
  {
    id: 2,
    title: "Wholesale & Bulk Orders",
    description:
      "Our exclusive discounts on bulk orders, We offer premium quality jewelry at competitive prices for retailers and large orders.",
    image: bulk,
  },
];

const Services = () => {
  return (
    <div className="collection-page">
      <div className="collection-container">
        <h1>Our Jewelry Services</h1>
        <div className="products-grid">
          {servicesData.map(service => (
            <article key={service.id} className="product-card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
