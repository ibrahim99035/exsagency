import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import '../../CSS/EmailSubscription.css';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Simulate an API call
  const subscribeToNewsletter = async (email) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Simulate a random response (either success or failure)
    const success = Math.random() > 0.5;

    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      if (success) {
        setIsSubscribed(true);
        setSuccessMessage('You have successfully subscribed!');
        setEmail('');
      } else {
        setErrorMessage('Oops! Something went wrong. Please try again.');
      }
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Call the simulated subscribe function
    subscribeToNewsletter(email);
  };

  return (
    <div className="subscription-container">
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="subscription-form">
          <h2 className="form-title">Subscribe to Our Newsletter</h2>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="email-input"
            />
          </div>
          <button type="submit" className="subscribe-btn">
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
          {errorMessage && (
            <p className="error-message">
              <FaExclamationCircle className="error-icon" />
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="success-message">
              <FaCheckCircle className="success-icon" />
              {successMessage}
            </p>
          )}
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>{successMessage}</h2>
        </div>
      )}
    </div>
  );
};

export default EmailSubscription;