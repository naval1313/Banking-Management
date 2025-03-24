import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              We are committed to providing safe, reliable, and customer-centric
              banking solutions to help you achieve your financial goals.
            </p>
          </div>

          {/* Branch Office Section */}
          <div className="footer-section branch">
            <h3>Branch Office</h3>
            <p>
              <FaMapMarkerAlt className="footer-icon" /> 123 Bank Street,
              Mumbai, India
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" /> +91 98765 43210
            </p>
            <p>
              <FaEnvelope className="footer-icon" /> support@banking.com
            </p>
          </div>

          {/* Contact & Social Media Section */}
          <div className="footer-section contact">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Email Subscription Section */}
          <div className="footer-section subscribe">
            <h3>Subscribe</h3>
            <p>Stay updated with the latest banking news.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Your Bank. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
