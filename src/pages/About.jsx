import React from 'react';
import './AdvancedPage.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="collection-page">
      <div className="collection-container">
        <h1>About Us</h1>
        <section className="about-content">
          <p>
            Welcome to our Jewelry Emporium, where timeless elegance meets modern design. Our passion is to craft and curate jewelry pieces that tell your story.
          </p>
          <p>
            With years of expertise in the jewelry industry, we specialize in custom designs and exceptional customer service. Every piece is crafted with precision and care.
          </p>
          <p>
            Discover our legacy, our creative process, and why we are a trusted name in luxury jewelry.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
