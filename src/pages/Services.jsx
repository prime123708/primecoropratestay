import React from 'react';
import Hero from '../components/Hero';
import '../styles/Services.css';
import { Wifi, Shield, Car, Bell, Coffee, Utensils, Clock, Users } from 'lucide-react';
import servicesHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg'; // Reusing an image for hero

const Services = () => {
  const services = [
    { name: 'Daily Housekeeping', icon: <Bell size={40} />, description: 'Daily Housekeeping ensures a clean, comfortable, and welcoming environment every single day. Our trained staff takes care of regular cleaning, tidying, and essential upkeep to maintain high standards of hygiene and freshness.' },
    { name: '24/7 Security', icon: <Shield size={40} />, description: 'Security ensures a safe and protected environment around the clock. Our trained security personnel monitor the premises, manage access, and respond promptly to any concerns to maintain peace of mind.' },
    { name: 'Free High-Speed WiFi', icon: <Wifi size={40} />, description: 'Stay connected with our complimentary high-speed internet access throughout the hotel.' },
    { name: 'Complimentary Parking', icon: <Car size={40} />, description: 'Convenient and secure parking facilities for all our guests.' },
    { name: '24/7 Support', icon: <Clock size={40} />, description: 'Our dedicated team is available around the clock to assist you with any needs or concerns during your stay.' },
    { name: 'Personalized Hospitality', icon: <Users size={40} />, description: 'Experience warm, homely hospitality designed for travelers who appreciate elegant spaces and peaceful stays.' },
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
