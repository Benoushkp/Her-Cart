import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { mockLogin } = useAuth(); // Use mockLogin instead of login
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    // For demo purposes, these test credentials are used:
    if (email === 'test@example.com' && password === 'password') {
      mockLogin(); // Call mockLogin for development
      navigate('/'); // Redirect to home page after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Welcome Again!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <Link to="/forgot-password">Forgot Password?</Link>
          <button type="submit">LOGIN</button>
        </form>
        <p>Don't Have an Account?</p>
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default Login;