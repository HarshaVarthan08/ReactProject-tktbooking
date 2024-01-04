// PaymentPage.js
import React, { useState } from 'react';
import './Payment.css'; // Import your CSS file

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

  

    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      alert('Payment processed successfully!');
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2 style={{color:'white'}}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label className="card-label">
          Card Number
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </label>

        <label className="card-label">
          Expiry Date
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </label>

        <label className="card-label">
          CVC
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="CVC"
            required
          />
        </label>

        <button type="submit" disabled={loading} className="pay-button">
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
