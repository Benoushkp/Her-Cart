import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../assets/images/Background.png';
import './ResetPassword.css';
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="reset-password-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="form-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit">Reset Password</button>
        </form>
        <p>Remember your password? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default ResetPassword;