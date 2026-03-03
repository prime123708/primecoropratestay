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
          <p>Welcome to Prime Corporate Stay. These terms and conditions outline the rules and regulations for the use of our services and facilities. By making a reservation and staying with us, you accept these terms in full.</p>
        </section>
        <section className="terms-section">
          <h2>2. Booking and Payment</h2>
          <ul>
            <li>A valid ID proof (Aadhar Card, Voter ID, Passport, or Driving License) is mandatory for all guests during check-in.</li>
            <li>Full payment is required at the time of check-in or as per the agreed booking terms.</li>
            <li>We accept various payment methods, including credit/debit cards, UPI, and bank transfers.</li>
          </ul>
        </section>
        <section className="terms-section">
          <h2>3. Check-in and Check-out</h2>
          <p>Standard check-in time is 2:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.</p>
        </section>
        <section className="terms-section">
          <h2>4. Cancellation Policy</h2>
          <p>Cancellations made 48 hours or more before the check-in date are eligible for a full refund. Cancellations made within 48 hours of check-in will incur a charge of one night's stay. No-shows will be charged the full amount of the reservation.</p>
        </section>
        <section className="terms-section">
          <h2>5. Guest Conduct</h2>
          <ul>
            <li>Guests are expected to maintain a peaceful and respectful environment for others.</li>
            <li>Smoking is strictly prohibited inside the rooms. Designated smoking areas are available.</li>
            <li>Any damage to property or facilities caused by guests will be charged to the guest's account.</li>
            <li>Pets are not allowed on the premises.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;
