import React from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';
import heroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg';
import restaurantImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg';
import guesthouseImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg';
import { Star, Award, Users, Clock, Coffee, Wine, Utensils, Wifi, Shield, Car, Bell, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      <Hero
        title="Experience luxury hospitality with our exceptional restaurant and elegant guesthouse accommodations"
        backgroundImage={heroImg}
      >
        <div className="hero-btns">
          <button className="btn btn-primary">Book Your Stay</button>
          <button className="btn btn-secondary">View Ziyafat Restaurant</button>
        </div>
      </Hero>

      {/* Services Section */}
      <section className="services">
        <div className="section-header">
          <span className="badge"><Star size={14} /> Premium Services</span>
          <h2>Our Services</h2>
          <p>Discover our world-class restaurant and comfortable guesthouse facilities</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-image">
              <img src={restaurantImg} alt="Restaurant" />
              <span className="card-tag"><Utensils size={14} /> Restaurant</span>
            </div>
            <div className="card-content">
              <h3>Fine Dining Experience</h3>
              <p>Savor exquisite cuisine prepared by our expert chefs using the finest ingredients. Our restaurant offers a sophisticated dining atmosphere perfect for any occasion.</p>
              <div className="card-features">
                <span><Coffee size={14} /> All Day Dining</span>
                <span><Users size={14} /> Private Events</span>
                <span><Wine size={14} /> Juice Bar</span>
                <span><Award size={14} /> Award Winning</span>
              </div>
              <div className="card-footer-tags">
                <span className="tag">International Cuisine</span>
                <span className="tag">Private Dining</span>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="card-image">
              <img src={guesthouseImg} alt="Guesthouse" />
              <span className="card-tag"><Bell size={14} /> Guesthouse</span>
            </div>
            <div className="card-content">
              <h3>Luxury Accommodations</h3>
              <p>Relax in our elegantly appointed rooms featuring modern amenities and comfort. Each room is designed to provide a peaceful retreat with exceptional service.</p>
              <div className="card-features">
                <span><Wifi size={14} /> Free WiFi</span>
                <span><Clock size={14} /> 24/7 Service</span>
                <span><Car size={14} /> Free Parking</span>
                <span><Shield size={14} /> Secure Stay</span>
              </div>
              <div className="card-footer-tags">
                <span className="tag">Free WiFi</span>
                <span className="tag">24/7 Service</span>
                <span className="tag">Room Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-header">
          <h2>About Hotel Orange International</h2>
          <p>Established with a commitment to excellence, Hotel Orange International combines world-class hospitality with authentic dining experiences. Our dedication to service and attention to detail ensures every guest enjoys an unforgettable stay.</p>
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
          <h2>Why Choose Hotel Orange International?</h2>
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
