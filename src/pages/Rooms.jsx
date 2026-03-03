import React from 'react';
import Hero from '../components/Hero';
import '../styles/Rooms.css';
import room1 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg';
import room2 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (1).jpeg';
import room3 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (2).jpeg';
import roomsHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg'; // Reusing a room image for hero

const Rooms = () => {
  const rooms = [
    {
      name: 'Luxury Rooms',
      image: room1,
      price: '₹5,000/night',
      features: ['King Size Bed', 'Air Conditioning', 'Free WiFi', 'Smart TV'],
      description: 'Experience ultimate comfort in our premium luxury rooms with modern amenities and elegant interiors.'
    },
    {
      name: 'Superior Room',
      image: room2,
      price: '₹4,000/night',
      features: ['Queen Size Bed', 'Work Desk', 'Mini Bar', 'Premium Toiletries'],
      description: 'Elegant spaces designed for your perfect stay with all modern conveniences.'
    },
    {
      name: 'Corporate Twin Room',
      image: room3,
      price: '₹4,500/night',
      features: ['Twin Beds', 'Work Station', 'Coffee Maker', 'High-Speed Internet'],
      description: 'Ideal for business travelers and colleagues with twin bed configuration.'
    },
  ];

  return (
    <div className="rooms-page">
      <Hero
        title="Our Rooms"
        subtitle="Comfort and luxury in every detail. Your home away from home."
        backgroundImage={roomsHeroImg}
      />
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="description">{room.description}</p>
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
