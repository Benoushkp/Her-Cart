// Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";
import "./Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-image-container">
                  <img src={item.image} alt={item.name} className="cart-image" />
                </div>
                <div className="cart-info">
                  <h2>{item.name}</h2>
                  <p>Rs. {parseFloat(item.price).toFixed(2)}</p>
                  <div className="quantity-buttons">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
        <div className="cart-summary">
          <h2>Total: Rs. {totalPrice.toFixed(2)}</h2>
          <button className="checkout-btn" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
