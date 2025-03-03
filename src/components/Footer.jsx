import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import badges from '../assets/images/trustbadges.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Social Media Column */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          
          {/* Testimonials Column */}
          <div className="footer-column">
            <h3>Customer Testimonials</h3>
            <p>
              <Link to="/testimonials" className="testimonials-link">Click Here</Link>
              <img src={badges} alt="badges" className="testimonial-image" />
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>&copy; 2025 Her Cart | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
