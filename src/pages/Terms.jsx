import React from 'react';
import Hero from '../components/Hero';
import '../styles/Terms.css';
import termsHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg'; // Reusing an image for hero

const Terms = () => {
  return (
    <div className="terms-page">
      <Hero
        title="Terms & Conditions"
        subtitle="Your stay with us is governed by these terms and conditions"
        backgroundImage={termsHeroImg}
      />
      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Hotel Orange International. By booking a stay with us, you agree to comply with and be bound by the following terms and conditions.</p>
        </section>
        <section className="terms-section">
          <h2>2. Reservation and Cancellation</h2>
          <p>Reservations are subject to availability. Cancellations must be made at least 24 hours prior to the check-in time to avoid any charges.</p>
        </section>
        <section className="terms-section">
          <h2>3. Check-in and Check-out</h2>
          <p>Check-in time is from 2:00 PM onwards, and check-out time is before 12:00 PM noon.</p>
        </section>
        <section className="terms-section">
          <h2>4. Guest Responsibility</h2>
          <p>Guests are responsible for any damage caused to the hotel property during their stay.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
