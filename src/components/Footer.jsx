import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Prime Corporate Stay</h3>
          <p className="footer-description">
            Experience luxury hospitality with our exceptional and elegant guesthouse accommodations.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>CM 85, Sector 144, Noida, Uttar Pradesh, 201310</span></li>
            <li><Phone size={18} /> <span>+91 9528544057</span></li>
            <li><Mail size={18} /> <span>primecorporatestay@gmail.com</span></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p>Join our newsletter for exclusive deals and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prime Corporate Stay. All rights reserved. | Designed & Developed by <Link to="https://www.adavenue.in">Adavenue Brand Labs</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
