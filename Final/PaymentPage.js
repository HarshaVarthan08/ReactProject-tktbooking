import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      // Send the token to your server for further processing
      console.log(token);

      // For this example, just displaying a success message
      setPaymentSuccess('Payment successful!');
      setPaymentError(null);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Payment Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <label>
            Card details
            <CardElement />
          </label>

          <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
            Pay
          </Button>
        </form>

        {paymentError && <Typography color="error">{paymentError}</Typography>}
        {paymentSuccess && <Typography color="success">{paymentSuccess}</Typography>}
      </Paper>
    </Container>
  );
};

export default PaymentPage;
