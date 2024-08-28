import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '../LoginPage/LoginPage';
import Login from '../Login/Login';
import OTPVerification from '../OTPVerification/OTPVerification';

jest.mock('../Login/Login', () => jest.fn(() => <div>Login Component</div>));
jest.mock('../OTPVerification/OTPVerification', () => jest.fn(() => <div>OTP Verification Component</div>));

describe('LoginPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Login component initially', () => {
    render(<LoginPage />);

    expect(screen.getByText('Login Component')).toBeInTheDocument();
    expect(screen.queryByText('OTP Verification Component')).not.toBeInTheDocument();
  });

  test('renders OTPVerification component after requesting OTP', () => {
    render(<LoginPage />);

    const loginComponent = screen.getByText('Login Component');
    expect(loginComponent).toBeInTheDocument();

    // Simulate requesting OTP
    const handleRequestOTP = Login.mock.calls[0][0].onRequestOTP;
    handleRequestOTP('9489027448');

    expect(screen.getByText('OTP Verification Component')).toBeInTheDocument();
    expect(screen.queryByText('Login Component')).not.toBeInTheDocument();
  });

  test('passes mobile number to OTPVerification component', () => {
    render(<LoginPage />);

    // Simulate requesting OTP
    const handleRequestOTP = Login.mock.calls[0][0].onRequestOTP;
    handleRequestOTP('9489027448');

    // Check if OTPVerification component received the correct prop
    expect(OTPVerification).toHaveBeenCalledWith(
      { mobileNumber: '9489027448' },
      {}
    );
  });
});
