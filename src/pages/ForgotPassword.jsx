import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from '../components/OTPInput';
import Background from '../assets/images/Background.png';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleVerifyOTP = (otp) => {
    navigate('/reset-password');
  };

  return (
    <div className="forgot-password-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="form-container">
        <h2>Enter Mail ID</h2>
        {!showOTP ? (
          <form onSubmit={handleSendOTP}>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <OTPInput onVerify={handleVerifyOTP} />
        )}
        <p>Remember your password? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default ForgotPassword;