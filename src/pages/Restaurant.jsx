import React from 'react';
import Hero from '../components/Hero';
import '../styles/Restaurant.css';
import restaurantHero from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg';
import dish1 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.13 PM (1).jpeg';
import dish2 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.13 PM (2).jpeg';

const Restaurant = () => {
  return (
    <div className="restaurant-page">
      <Hero
        title="Ziyafat Restaurant"
        subtitle="A culinary journey of flavors and elegance"
        backgroundImage={restaurantHero}
      />
      <div className="page-content">
        <section className="restaurant-intro">
          <h2>Fine Dining Experience</h2>
          <p>Savor exquisite cuisine prepared by our expert chefs using the finest ingredients. Our restaurant offers a sophisticated dining atmosphere perfect for any occasion.</p>
        </section>
        <div className="menu-preview">
          <h2>Our Specialties</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src={dish1} alt="Signature Dish 1" />
              <div className="menu-info">
                <h3>International Platter</h3>
                <p>A selection of the finest international cuisines, perfectly balanced for the gourmet palate.</p>
              </div>
            </div>
            <div className="menu-item">
              <img src={dish2} alt="Signature Dish 2" />
              <div className="menu-info">
                <h3>Chef's Special Delight</h3>
                <p>Our chef's daily creation using fresh seasonal ingredients to surprise and delight you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
