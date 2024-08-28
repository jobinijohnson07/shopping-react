import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OTPVerification from '../OTPVerification';
import { useNavigate } from 'react-router-dom';

// Mock the useNavigate function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('OTPVerification Component', () => {
  beforeEach(() => {
    useNavigate.mockReset();
  });

  test('renders OTPVerification component correctly', () => {
    render(<OTPVerification mobileNumber="9489027448" />);

    expect(screen.getByText(/OTP Verification/i)).toBeInTheDocument();
    expect(screen.getByText(/We sent you an OTP to your mobile number/i)).toBeInTheDocument();
    expect(screen.getByText(/9489027448/i)).toBeInTheDocument();
  });

  test('allows user to enter OTP', () => {
    render(<OTPVerification mobileNumber="9489027448" />);

    const otpInputs = screen.getAllByRole('textbox');
    expect(otpInputs).toHaveLength(5);

    fireEvent.change(otpInputs[0], { target: { value: '1' } });
    fireEvent.change(otpInputs[1], { target: { value: '2' } });
    fireEvent.change(otpInputs[2], { target: { value: '3' } });
    fireEvent.change(otpInputs[3], { target: { value: '4' } });
    fireEvent.change(otpInputs[4], { target: { value: '5' } });

    expect(otpInputs[0].value).toBe('1');
    expect(otpInputs[1].value).toBe('2');
    expect(otpInputs[2].value).toBe('3');
    expect(otpInputs[3].value).toBe('4');
    expect(otpInputs[4].value).toBe('5');
  });

  test('displays alert for incorrect OTP', () => {
    window.alert = jest.fn(); // Mock window alert
    render(<OTPVerification mobileNumber="9489027448" />);

    const otpInputs = screen.getAllByRole('textbox');
    fireEvent.change(otpInputs[0], { target: { value: '1' } });
    fireEvent.change(otpInputs[1], { target: { value: '2' } });
    fireEvent.change(otpInputs[2], { target: { value: '3' } });
    fireEvent.change(otpInputs[3], { target: { value: '4' } });
    fireEvent.change(otpInputs[4], { target: { value: '0' } });

    const verifyButton = screen.getByText(/Verify OTP/i);
    fireEvent.click(verifyButton);

    expect(window.alert).toHaveBeenCalledWith('Invalid OTP. Please try again.');
  });

  test('navigates to home page on correct OTP', () => {
    const mockNavigate = useNavigate;
    render(<OTPVerification mobileNumber="9489027448" />);

    const otpInputs = screen.getAllByRole('textbox');
    fireEvent.change(otpInputs[0], { target: { value: '1' } });
    fireEvent.change(otpInputs[1], { target: { value: '2' } });
    fireEvent.change(otpInputs[2], { target: { value: '3' } });
    fireEvent.change(otpInputs[3], { target: { value: '4' } });
    fireEvent.change(otpInputs[4], { target: { value: '5' } });

    const verifyButton = screen.getByText(/Verify OTP/i);
    fireEvent.click(verifyButton);

    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });
});
