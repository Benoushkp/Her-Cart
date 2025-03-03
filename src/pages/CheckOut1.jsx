import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';
import './Checkout.css';

const Checkout = () => {
  // Only extract 'cart' from the CartContext
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  // State for shipping details only
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Validate all shipping fields
    for (const key in shippingInfo) {
      if (!shippingInfo[key]) {
        return `Please enter your ${key}.`;
      }
    }
    return null;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    console.log('Form valid. Navigating to advanced checkout...');
    // Navigate to the Advanced Checkout page
    navigate('/advanced-checkout', { state: { shippingInfo } });

  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="checkout-container">
        <form onSubmit={handlePlaceOrder} className="checkout-form">
          <section className="shipping-section">
            <h2>Shipping Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shippingInfo.fullName}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
            />
          </section>
          <section className="order-summary">
            <h2>Order Summary</h2>
            <ul className="order-items">
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> <br />
                  {item.quantity} x Rs. {parseFloat(item.price).toFixed(2)} = Rs. {(parseFloat(item.price) * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Total: Rs. {totalPrice.toFixed(2)}</h3>
          </section>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
