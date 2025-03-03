import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './ProductDetails.css';
import { CartContext } from '../context/CartContext';

// Import images
import earing from '../assets/images/Earing.jpeg';
import earing2 from '../assets/images/Earing2.webp';
import brace from '../assets/images/Samplebrace.avif';
import neck from '../assets/images/Necklace.jpg';
import ring from '../assets/images/ring.avif';
import daily from '../assets/images/dailywear.webp';
import bridal from '../assets/images/Bridal.jpg';
import party from '../assets/images/Party.jpg';

// Consolidated product data – ensure this array contains ALL products
const productsData = [
  {
    id: '1',
    name: 'Crystal Earrings',
    description: 'Elegant and refined, perfect for any formal occasion.',
    price: '159',
    image: earing2,
  },
  {
    id: '2',
    name: 'Luxury Bracelet',
    description: 'A stunning bracelet that exudes luxury and style.',
    price: '259',
    image: brace,
  },
  {
    id: '3',
    name: 'Stylish Necklace',
    description: 'A chic necklace to complete your stylish look.',
    price: '399',
    image: neck,
  },
  {
    id: '4',
    name: 'Crystal Ring',
    description: 'A ring that sparkles with elegance and charm.',
    price: '129',
    image: ring,
  },
  {
    id: '5',
    name: 'Elegant Earrings',
    description: 'Sophisticated earrings to add a touch of elegance to your ensemble.',
    price: '185',
    image: earing,
  },
  {
    id: '11',
    name: 'Daily Product 1',
    description: 'Enhance Your Daily look with this Jewelry.',
    price: '350',
    image: daily,
  },
  {
    id: '12',
    name: 'Daily Product 2',
    description: 'Enhance Your Daily look with this Jewelry.',
    price: '349',
    image: daily,
  },
  {
    id: '13',
    name: 'Daily Product 3',
    description: 'Enhance Your Daily look with this Jewelry.',
    price: '399',
    image: daily,
  },
  {
    id: '14',
    name: 'Daily Product 4',
    description: 'Enhance Your Daily look with this Jewelry.',
    price: '449',
    image: daily,
  },
  {
    id: '15',
    name: 'Daily Product 5',
    description: 'Enhance Your Daily look with this Jewelry.',
    price: '499',
    image: daily,
  },
  {
    id: '16',
    name: 'Bridal Product 1',
    description: 'Bridal Jewelry for the Angels who live on Earth.',
    price: '1050',
    image: bridal,
  },
  {
    id: '17',
    name: 'Bridal Product 2',
    description: 'Bridal Jewelry for the Angels who live on Earth.',
    price: '1699',
    image: bridal,
  },
  {
    id: '18',
    name: 'Bridal Product 3',
    description: 'Bridal Jewelry for the Angels who live on Earth.',
    price: '1799',
    image: bridal,
  },
  {
    id: '19',
    name: 'Bridal Product 4',
    description: 'Bridal Jewelry for the Angels who live on Earth.',
    price: '1899',
    image: bridal,
  },
  {
    id: '20',
    name: 'Bridal Product 5',
    description: 'Bridal Jewelry for the Angels who live on Earth.',
    price: '1999',
    image: bridal,
  },
  {
    id: '21',
    name: 'Party Product 1',
    description: 'Party hard with elegance and beauty look.',
    price: '850',
    image: party,
  },
  {
    id: '22',
    name: 'Party Product 2',
    description: 'Party hard with elegance and beauty look.',
    price: '949',
    image: party,
  },
  {
    id: '23',
    name: 'Party Product 3',
    description: 'Party hard with elegance and beauty look.',
    price: '999',
    image: party,
  },
  {
    id: '24',
    name: 'Party Product 4',
    description: 'Party hard with elegance and beauty look.',
    price: '1049',
    image: party,
  },
  {
    id: '25',
    name: 'Party Product 5',
    description: 'Party hard with elegance and beauty look.',
    price: '1099',
    image: party,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Convert id to a string to match our product ids
    const productId = id.toString();
    const foundProduct = productsData.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-details-container">
          <h2>Product Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: Rs. {product.price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
