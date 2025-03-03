import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        Her Cart - For Her
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
