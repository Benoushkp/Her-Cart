import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: Rs. {product.price}</p>
        <Link to={`/product/${product.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
