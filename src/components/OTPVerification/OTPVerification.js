import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.scss';
import VerifyBg from "../../assets/verifybg.png";

const OTPVerification = ({ mobileNumber }) => {
  const [otpArray, setOtpArray] = useState(new Array(5).fill(''));
  const navigate = useNavigate();

  const handleOTPChange = (event, index) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const newOtpArray = [...otpArray];
      newOtpArray[index] = value;
      setOtpArray(newOtpArray);

      // Move focus to next input
      if (value && index < 4) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyOTP = () => {
    const otp = otpArray.join('');
    if (otp === '12345') {
      // Navigate to home page
      navigate('/home');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="d-flex loginsection">
      <div className='loginbg-content'>
        <img src={VerifyBg} alt="LoginBg" />
      </div>
      <div className="otp-verification-wrapper">
        <div className="login-content">OTP Verification</div>
        <div className="form-group">
          <div className="otp-content" htmlFor="otp">We sent you an OTP to your mobile number <br/>
          {mobileNumber}</div>
          <div className="otp-inputs">
            {otpArray.map((_, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                className="otpenter-content"
                value={otpArray[index]}
                onChange={(e) => handleOTPChange(e, index)}
                maxLength="1"
              />
            ))}
          </div>
        </div>
        <button className="otpbtn-content" onClick={handleVerifyOTP}>Verify OTP</button>
      </div>
    </div>
  );
};

export default OTPVerification;
