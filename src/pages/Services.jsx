import React from 'react';
import Hero from '../components/Hero';
import '../styles/Services.css';
import { Wifi, Shield, Car, Bell, Coffee, Utensils, Clock, Users } from 'lucide-react';
import servicesHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg'; // Reusing an image for hero

const Services = () => {
  const services = [
    { name: 'Free High-Speed WiFi', icon: <Wifi size={40} />, description: 'Stay connected with our complimentary high-speed internet access throughout the hotel.' },
    { name: '24/7 Security', icon: <Shield size={40} />, description: 'Your safety is our priority with around-the-clock security and monitoring.' },
    { name: 'Complimentary Parking', icon: <Car size={40} />, description: 'Convenient and secure parking facilities for all our guests.' },
    { name: 'Room Service', icon: <Bell size={40} />, description: 'Enjoy delicious meals and refreshments in the comfort of your room.' },
    { name: 'All Day Dining', icon: <Utensils size={40} />, description: 'Savor a variety of international and local cuisines at our restaurant.' },
    { name: 'Concierge Service', icon: <Users size={40} />, description: 'Our dedicated staff is here to assist with all your travel and activity needs.' },
  ];

  return (
    <div className="services-page">
      <Hero
        title="Our Premium Services"
        subtitle="Everything you need for a comfortable and memorable stay"
        backgroundImage={servicesHeroImg}
      />
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
