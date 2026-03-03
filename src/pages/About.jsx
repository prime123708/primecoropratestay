import React from 'react';
import Hero from '../components/Hero';
import '../styles/About.css';
import { Award, Clock, Star, Users, History, Target } from 'lucide-react';
import testimonialImg1 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.14 PM (1).jpeg';
import testimonialImg2 from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.14 PM (2).jpeg';
import aboutHeroImg from '../assets/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg'; // Reusing the home hero image

const About = () => {
  const testimonials = [
    {
      quote: "Prime Corporate Stay exceeded all my expectations! The service was impeccable, and the environment was so welcoming. A truly unforgettable experience.",
      author: "Kavita",
      title: "Frequent Traveler"
    },
    {
      quote: "The rooms are luxurious and comfortable, and the staff goes above and beyond to ensure your stay is perfect. Highly recommend for anyone visiting the city.",
      author: "Manish",
      title: "Business Executive"
    },
    {
      quote: "From the warm welcome to the dedicated service, every detail was perfect. It felt like a home away from home, but with all the luxuries.",
      author: "Manoj",
      title: "Vacationer"
    }
  ];

  return (
    <div className="page-container about-page">
      <Hero
        title="About Prime Corporate Stay"
        subtitle="Welcome to Prime Corporate Stay, where comfort meets convenience in a warm, homely environment. Designed for travelers who appreciate personalized hospitality, elegant spaces, and peaceful stays."
        backgroundImage={aboutHeroImg}
      />

      <div className="page-content">
        <section className="about-features-section">
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

        <section className="our-story">
          <div className="section-header">
            <h2>Our Story</h2>
          </div>
          <div className="story-content">
            <div className="story-block">
              <div className="story-icon"><History size={40} /></div>
              <h3>Since 2016</h3>
              <p>Welcome to Prime Corporate Stay, where comfort meets convenience in a warm, homely environment. Located in a serene neighborhood with easy access to major city hubs, Prime Corporate Stay is designed for travelers who appreciate personalized hospitality, elegant spaces, and peaceful stays. Whether you are here for business, leisure, or a quick transit, we offer a refined stay experience with well-appointed rooms, modern amenities, and a dedicated team committed to making you feel right at home. Experience hospitality that goes beyond just a stay—experience Prime Corporate Stay.</p>
            </div>
            <div className="story-block">
              <div className="story-icon"><Target size={40} /></div>
              <h3>Our Mission</h3>
              <p>To provide exceptional hospitality experiences that create lasting memories for our guests while maintaining the highest standards of service, comfort, and a homely environment.</p>
              <div className="story-stats">
                <div className="stat-item">
                  <h4>100+</h4>
                  <p>Happy Guests Monthly</p>
                </div>
                <div className="stat-item">
                  <h4>9+</h4>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-header">
            <h2>What Our Guests Say</h2>
            <p>Hear from our satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="quote">"{testimonial.quote}"</p>
                <div className="author-info">
                  <img src={index % 2 === 0 ? testimonialImg1 : testimonialImg2} alt={testimonial.author} className="author-img" />
                  <div>
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
