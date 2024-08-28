import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Login from './Login';

describe('Login Component', () => {
  test('renders the login form with default mobile number', () => {
    render(<Login onRequestOTP={jest.fn()} />);
    
    const mobileInput = screen.getByLabelText(/Mobile number/i);
    const otpButton = screen.getByText(/Get OTP/i);

    expect(mobileInput).toBeInTheDocument();
    expect(mobileInput.value).toBe('9489027448');
    expect(otpButton).toBeInTheDocument();
  });

  test('calls onRequestOTP with the correct mobile number when button is clicked', () => {
    const mockOnRequestOTP = jest.fn();
    render(<Login onRequestOTP={mockOnRequestOTP} />);

    const mobileInput = screen.getByLabelText(/Mobile number/i);
    const otpButton = screen.getByText(/Get OTP/i);

    // Change the mobile number value
    fireEvent.change(mobileInput, { target: { value: '1234567890' } });
    expect(mobileInput.value).toBe('1234567890');

    // Click the button to request OTP
    fireEvent.click(otpButton);

    expect(mockOnRequestOTP).toHaveBeenCalledWith('1234567890');
  });

  test('updates the mobile number value when changed', () => {
    render(<Login onRequestOTP={jest.fn()} />);

    const mobileInput = screen.getByLabelText(/Mobile number/i);

    // Change the mobile number value
    fireEvent.change(mobileInput, { target: { value: '9876543210' } });
    expect(mobileInput.value).toBe('9876543210');
  });
});
