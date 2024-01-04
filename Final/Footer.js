import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
          Welcome to CineBooks, where we bring the magic of cinema to your fingertips, offering a seamless experience to book tickets and enjoy the latest blockbuster moments.
          </p>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@CINEBOOKS.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Stay connected on social media for updates and promotions:</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;Movie Ticket Reservatoin</p>
      </div>
    </footer>
  );
};

export default Footer;