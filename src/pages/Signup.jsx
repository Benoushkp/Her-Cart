import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Signup.css';

const Signup = () => {
  const { mockLogin } = useAuth(); // Use mockLogin for development
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    // Simulate registration validation
    if (formData.email && formData.password) {
      // Simulate successful registration
      console.log('Registration successful:', formData);

      // Automatically log the user in after registration
      mockLogin(); // Call mockLogin for development
      navigate('/'); // Redirect to home page
    } else {
      setError('Please fill all the fields correctly');
    }
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h2>Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p>Already have an Account?</p>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;