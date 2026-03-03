import React from 'react';
import Hero from '../components/Hero';
import '../styles/Contact.css';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import contactHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.10 PM (1).jpeg'; // Reusing an image for hero

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us for reservations, inquiries, or any assistance you may need"
        backgroundImage={contactHeroImg}
      />
      <div className="contact-content">
        <div className="contact-info-grid">
          <div className="info-card">
            <MapPin size={32} />
            <h3>Our Address</h3>
            <p>CM 85, Sector 144, Noida,</p>
            <p>Uttar Pradesh, 201310</p>
          </div>
          <div className="info-card">
            <Phone size={32} />
            <h3>Call Us</h3>
            <p>+91 9528544057</p>
          </div>
          <div className="info-card">
            <Mail size={32} />
            <h3>Email Us</h3>
            <p>primecorporatestay@gmail.com</p>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
