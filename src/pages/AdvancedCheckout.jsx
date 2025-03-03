import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';
import './AdvancedCheckout.css';

const AdvancedCheckout = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve shipping info passed via state from the previous checkout page.
  const previousShippingInfo = location.state?.shippingInfo;

  // Declare all hooks unconditionally at the top of the component.
  const [paymentMode, setPaymentMode] = useState('COD');
  const [cardInfo, setCardInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiInfo, setUpiInfo] = useState({ upiId: '' });
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect if shipping information is missing.
  useEffect(() => {
    if (!previousShippingInfo) {
      navigate('/checkout');
    }
  }, [previousShippingInfo, navigate]);

  // Conditionally render while waiting for shipping info.
  if (!previousShippingInfo) {
    return null;
  }

  // Calculate total price.
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  // Handlers and validation functions...
  const handleCardChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleUpiChange = (e) => {
    setUpiInfo({ ...upiInfo, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (paymentMode === 'CARD') {
      for (const key in cardInfo) {
        if (!cardInfo[key]) {
          return `Please enter ${key} for card payment.`;
        }
      }
    }
    if (paymentMode === 'UPI' && !upiInfo.upiId) {
      return 'Please enter your UPI ID.';
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
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="advanced-checkout-page shopnow-page">
        <h2>Thank you for your order!</h2>
        <p>Your order has been placed successfully. Your privacy and payment details are secure.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="advanced-checkout-page shopnow-page">
      <header className="shopnow-header">
        <h1>Checkout & Payment</h1>
        <p>Secure, private, and advanced payment options With Her-Cart</p>
      </header>
      <div className="checkout-container">
        <section className="shipping-info-display">
          <h2>Shipping Information</h2>
          <p><strong>Full Name:</strong> {previousShippingInfo.fullName}</p>
          <p><strong>Address:</strong> {previousShippingInfo.address}</p>
          <p><strong>City:</strong> {previousShippingInfo.city}</p>
          <p><strong>State:</strong> {previousShippingInfo.state}</p>
          <p><strong>ZIP Code:</strong> {previousShippingInfo.zip}</p>
          <p><strong>Country:</strong> {previousShippingInfo.country}</p>
          <p><strong>Phone:</strong> {previousShippingInfo.phone}</p>
        </section>
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <section className="payment-section">
            <h2>Payment Options</h2>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="COD"
                  checked={paymentMode === 'COD'}
                  onChange={() => setPaymentMode('COD')}
                />
                Cash on Delivery (COD)
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="CARD"
                  checked={paymentMode === 'CARD'}
                  onChange={() => setPaymentMode('CARD')}
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="UPI"
                  checked={paymentMode === 'UPI'}
                  onChange={() => setPaymentMode('UPI')}
                />
                UPI Payment
              </label>
            </div>
            {paymentMode === 'CARD' && (
              <div className="card-payment">
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={cardInfo.cardName}
                  onChange={handleCardChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardInfo.cardNumber}
                  onChange={handleCardChange}
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardInfo.expiryDate}
                  onChange={handleCardChange}
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={cardInfo.cvv}
                  onChange={handleCardChange}
                />
              </div>
            )}
            {paymentMode === 'UPI' && (
              <div className="upi-payment">
                <input
                  type="text"
                  name="upiId"
                  placeholder="Enter UPI ID"
                  value={upiInfo.upiId}
                  onChange={handleUpiChange}
                />
              </div>
            )}
          </section>
          <section className="order-summary">
            <h2>Order Summary</h2>
            <ul className="order-items">
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> <br />
                  <em>{item.description}</em> <br />
                  {item.quantity} x Rs. {parseFloat(item.price).toFixed(2)} = Rs. {(parseFloat(item.price) * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Total: Rs. {totalPrice.toFixed(2)}</h3>
          </section>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdvancedCheckout;
