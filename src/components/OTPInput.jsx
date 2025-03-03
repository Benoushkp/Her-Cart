import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const OTPInput = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  // Define a renderInput function that returns a standard input element
  const renderInput = (props) => <input {...props} />;

  return (
    <form onSubmit={handleSubmit}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderInput={renderInput}  // Pass the renderInput function explicitly
        separator={<span>-</span>}
        inputStyle={{
          width: '1.65rem',
          margin: '0 0.5rem',
          fontSize: '1.5rem',
        }}
      />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPInput;
