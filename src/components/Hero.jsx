import React from 'react';
import '../styles/Hero.css';

const Hero = ({ title, subtitle, backgroundImage, children }) => {
  const heroStyle = {
    backgroundImage: backgroundImage ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${backgroundImage}")` : 'none',
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
