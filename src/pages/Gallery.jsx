import React from 'react';
import Hero from '../components/Hero';
import '../styles/Gallery.css';

// Importing multiple images from the assets
import img1 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg';
import img2 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.09 PM (2).jpeg';
import img3 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.10 PM (1).jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg';
import img5 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (1).jpeg';
import img6 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.12 PM (1).jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.14 PM.jpeg';
import galleryHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg'; // Reusing an image for hero

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="gallery-page">
      <Hero
        title="Our Gallery"
        subtitle="Glimpse into our world of luxury and comfort"
        backgroundImage={galleryHeroImg}
      />
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
