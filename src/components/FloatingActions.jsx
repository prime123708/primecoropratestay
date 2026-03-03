import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import '../styles/FloatingActions.css';

const FloatingActions = () => {
  const phoneNumber = '+919528544057';
  const whatsappNumber = '9528544057';

  return (
    <div className="floating-actions">
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        className="floating-btn chat-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span>Chat With Us</span>
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-btn call-btn"
      >
        <Phone size={20} fill="currentColor" />
        <span>Call Us</span>
      </a>
    </div>
  );
};

export default FloatingActions;
