import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar2.css';
import Logo from '../assets/images/Logo.jpg';

const Navbar2 = () => {
  const { isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar2">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        Her Cart - For Her
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {isAuthenticated ? (
          <li className="account-section" onClick={toggleDropdown}>
            Account
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={logout}>Logout</li>
              </ul>
            )}
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar2;
