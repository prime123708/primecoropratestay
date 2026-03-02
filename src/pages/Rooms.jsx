import React from 'react';
import Hero from '../components/Hero';
import '../styles/Rooms.css';
import room1 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg';
import room2 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (1).jpeg';
import room3 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (2).jpeg';
import roomsHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg'; // Reusing a room image for hero

const Rooms = () => {
  const rooms = [
    { name: 'Deluxe Room', image: room1, price: '$120/night', features: ['King Size Bed', 'Free WiFi', 'City View'] },
    { name: 'Executive Suite', image: room2, price: '$200/night', features: ['Living Area', 'Mini Bar', 'Premium Amenities'] },
    { name: 'Family Room', image: room3, price: '$180/night', features: ['Two Queen Beds', 'Spacious', 'Kid Friendly'] },
  ];

  return (
    <div className="rooms-page">
      <Hero
        title="Our Rooms"
        subtitle="Comfort and luxury in every detail"
        backgroundImage={roomsHeroImg}
      />
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="price">{room.price}</p>
              <ul className="features">
                {room.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
