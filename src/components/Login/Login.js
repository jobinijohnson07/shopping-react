import React, { useState } from 'react';
import './Login.scss';
import LoginBg from "../../assets/loginbg.png";

const Login = ({ onRequestOTP }) => {
  const [mobileNumber, setMobileNumber] = useState('9489027448');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleGetOTP = () => {
    onRequestOTP(mobileNumber);
  };

  return (
    <div className="d-flex loginsection">
      <div className='loginbg-content'>
        <img src={LoginBg} alt="LoginBg" />
      </div>
      <div className="login-wrapper">
        <div className="login-content">Log In Using OTP</div>
        <div className="form-group">
          <label className="mobile-content" htmlFor="mobile-number">Mobile number</label>
          <input
            type="text"
            id="mobile-number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </div>
        <button className="otpbtn-content" onClick={handleGetOTP}>Get OTP</button>
      </div>
    </div>
  );
};

export default Login;
