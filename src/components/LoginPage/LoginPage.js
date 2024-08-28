import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import OTPVerification from '../OTPVerification/OTPVerification';
import HomePage from '../HomePage/HomePage';
import './LoginPage.scss';

const LoginPage = () => {
    const [mobileNumber, setMobileNumber] = useState('9489027448');
    const [showOTPVerification, setShowOTPVerification] = useState(false);
  
    const handleRequestOTP = (number) => {
      setMobileNumber(number);
      setShowOTPVerification(true);
    };
  
    return (
      <div className="app-wrapper">
        {!showOTPVerification ? (
          <Login onRequestOTP={handleRequestOTP} />
        ) : (
          <OTPVerification mobileNumber={mobileNumber} />
        )}
      </div>
    );
  };


export default LoginPage;
