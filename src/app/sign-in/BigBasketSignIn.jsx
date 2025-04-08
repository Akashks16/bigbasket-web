// BigBasketSignIn.jsx
import React, { useState, useEffect, useRef } from "react";
import "./BigBasketSignIn.css";
import { useNavigate } from "react-router-dom";

const BigBasketSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [otpValid, setOtpValid] = useState(false);

  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  // Validate phone number whenever it changes
  useEffect(() => {
    setPhoneValid(phoneNumber.length === 10);
  }, [phoneNumber]);

  // Validate OTP whenever it changes
  useEffect(() => {
    setOtpValid(otp.every((digit) => digit !== ""));
  }, [otp]);

  // Handle phone number input
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  // Handle backspace in OTP inputs
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpRefs[index - 1].current.focus();
    }
  };

  // Handle phone submission
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneValid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowOtp(true);
      }, 1000);
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otpValid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/orders");
      }, 1000);
    }
  };

  // Handle editing phone number
  const handleEditPhone = () => {
    setShowOtp(false);
    setOtp(["", "", "", ""]);
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("New OTP sent!");
    }, 1000);
  };

  return (
    <div className="bb-container">
      <div className="bb-card">
        {/* Logo */}
        <div className="bb-logo">
          <h1 className="bb-logo-text">Bigbasket</h1>
        </div>

        {!showOtp ? (
          // Phone Number Form
          <div className="bb-form-container">
            <form onSubmit={handlePhoneSubmit}>
              <div className="bb-form-header">
                <h2>Sign in / Sign up</h2>
                <p>Enter your phone number to continue</p>
              </div>

              <div className="bb-form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="bb-phone-input-group">
                  <div className="bb-country-code">+91</div>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10 digit number"
                    maxLength="10"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`bb-btn bb-btn-primary ${
                  !phoneValid || isLoading ? "bb-btn-disabled" : ""
                }`}
                disabled={!phoneValid || isLoading}
              >
                {isLoading ? "Sending OTP..." : "Continue"}
              </button>

              <div className="bb-terms-text">
                By continuing, you agree to our Terms of service and Privacy
                policy
              </div>
            </form>
          </div>
        ) : (
          // OTP Form
          <div className="bb-form-container">
            <form onSubmit={handleOtpSubmit}>
              <div className="bb-form-header">
                <h2>Verify Phone</h2>
                <p>
                  Enter the 4-digit code sent to <span>+91 {phoneNumber}</span>
                  <button
                    type="button"
                    className="bb-text-btn"
                    onClick={handleEditPhone}
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                </p>
              </div>

              <div className="bb-form-group">
                <label>Enter OTP</label>
                <div className="bb-otp-input-group">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={otpRefs[index]}
                      type="text"
                      className="bb-otp-input"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      maxLength="1"
                      disabled={isLoading}
                    />
                  ))}
                </div>
              </div>

              <div className="bb-resend-container">
                <span>Didn't receive code?</span>
                <button
                  type="button"
                  className="bb-text-btn"
                  onClick={handleResendOtp}
                  disabled={isLoading}
                >
                  Resend OTP
                </button>
              </div>

              <button
                type="submit"
                className={`bb-btn bb-btn-primary ${
                  !otpValid || isLoading ? "bb-btn-disabled" : ""
                }`}
                disabled={!otpValid || isLoading}
              >
                {isLoading ? "Verifying..." : "Verify & Proceed"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigBasketSignIn;
