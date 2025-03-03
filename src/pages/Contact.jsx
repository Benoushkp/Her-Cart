import React, { useState } from 'react';
import './AdvancedPage.css';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here, such as an API call.
    setSubmitted(true);
  };

  return (
    <div className="collection-page">
      <div className="collection-container">
        <h1>Contact Us</h1>
        {submitted ? (
          <p>
            Thank you for reaching out! We will respond to your inquiry regarding our jewelry
            collections soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (e.g., custom orders, bulk order inquiries, etc.)"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
