import React from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';
import heroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg';
// import restaurantImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg';
import guesthouseImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg';
import { Star, Award, Users, Clock, Coffee, Wine, Utensils, Wifi, Shield, Car, Bell, Info, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      <Hero
        title="Welcome to Prime Corporate Stay"
        subtitle="Where comfort meets convenience in a warm, homely environment. Designed for travelers who appreciate personalized hospitality and elegant spaces."
        backgroundImage={heroImg}
      >
        <div className="hero-btns">
         <a href='/rooms'><button className="btn btn-primary">Book Your Stay</button></a> 
         <a href='/contact'><button className="btn btn-secondary">Contact Us</button></a>
        </div>
      </Hero>

      {/* Info Cards Section */}
      <section className="info-cards">
        <div className="info-cards-grid">
          <div className="info-card">
            <div className="info-card-icon"><Calendar size={24} strokeWidth={2.5} /></div>
            <h3>Make Reservation</h3>
            <p>Experience an unforgettable journey at Prime Corporate Stay.</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon"><Shield size={24} /></div>
            <h3>Hassle Free Booking</h3>
            <p>Book your stay without any complications or stress.</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon"><Star size={24} /></div>
            <h3>Top Reviews</h3>
            <p>Creating memorable experiences for all our valued guests.</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon"><Clock size={24} /></div>
            <h3>24/7 Support</h3>
            <p>Our team is available around the clock for your needs.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-header">
          <span className="badge"><Star size={14} /> Premium Services</span>
          <h2>Our Best Ministrations</h2>
          <p>Discover our world-class services designed for your comfort</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-image">
              <img src={guesthouseImg} alt="Daily Housekeeping" />
              <span className="card-tag"><Bell size={14} /> Housekeeping</span>
            </div>
            <div className="card-content">
              <h3>Daily Housekeeping</h3>
              <p>Daily Housekeeping ensures a clean, comfortable, and welcoming environment every single day. Our trained staff takes care of regular cleaning, tidying, and essential upkeep.</p>
              <div className="card-features">
                <span><Clock size={14} /> Daily Cleaning</span>
                <span><Users size={14} /> Trained Staff</span>
                <span><Shield size={14} /> High Standards</span>
                <span><Award size={14} /> Quality Care</span>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="card-image">
              <img src={heroImg} alt="Security" />
              <span className="card-tag"><Shield size={14} /> Security</span>
            </div>
            <div className="card-content">
              <h3>24/7 Security</h3>
              <p>Security ensures a safe and protected environment around the clock. Our trained security personnel monitor the premises and manage access to maintain peace of mind.</p>
              <div className="card-features">
                <span><Shield size={14} /> 24/7 Monitoring</span>
                <span><Users size={14} /> Trained Guards</span>
                <span><Clock size={14} /> Fast Response</span>
                <span><Award size={14} /> Peace of Mind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-header">
          <h2>About Prime Corporate Stay</h2>
          <p>Welcome to Prime Corporate Stay, where comfort meets convenience in a warm, homely environment. Located in a serene neighborhood with easy access to major city hubs, Prime Corporate Stay is designed for travelers who appreciate personalized hospitality, elegant spaces, and peaceful stays.</p>
        </div>
        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon"><Star /></div>
            <h4>Premium</h4>
            <p>Luxury Service</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Award /></div>
            <h4>Excellence</h4>
            <p>Award Winning</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Users /></div>
            <h4>Personal</h4>
            <p>Dedicated Staff</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Clock /></div>
            <h4>24/7</h4>
            <p>Always Available</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="why-box">
          <h2>Why Choose Prime Corporate Stay?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h4>Our Restaurant</h4>
              <p>Experience culinary excellence with our trained chefs who craft memorable dishes using the finest local and imported ingredients.</p>
            </div>
            <div className="why-item">
              <h4>Our Guesthouse</h4>
              <p>Enjoy comfortable and elegant accommodations designed with modern amenities and traditional hospitality to ensure your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
