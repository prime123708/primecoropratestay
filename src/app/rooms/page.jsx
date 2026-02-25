"use client";

import { useState, useEffect, useRef } from "react";

export default function RoomsPage() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  const rooms = [
    {
      title: "Luxury Rooms",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      description:
        "Experience ultimate comfort in our premium luxury rooms with modern amenities and elegant interiors.",
      features: ["King Size Bed", "Air Conditioning", "Free WiFi", "Smart TV"],
      price: "₹5,000",
    },
    {
      title: "Superior Room",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
      description:
        "Elegant spaces designed for your perfect stay with all modern conveniences.",
      features: [
        "Queen Size Bed",
        "Work Desk",
        "Mini Bar",
        "Premium Toiletries",
      ],
      price: "₹4,000",
    },
    {
      title: "Corporate Twin Room",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      description:
        "Ideal for business travelers and colleagues with twin bed configuration.",
      features: [
        "Twin Beds",
        "Work Station",
        "Coffee Maker",
        "High-Speed Internet",
      ],
      price: "₹4,500",
    },
    {
      title: "Residences Room",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      description:
        "Your home away from home with extended stay comfort and spacious living.",
      features: [
        "Living Area",
        "Kitchenette",
        "Dining Space",
        "Separate Bedroom",
      ],
      price: "₹6,500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
                  atithi
                </span>
                <span className="block text-[#F7931E] -mt-1 md:-mt-2">
                  house
                </span>
              </div>
            </a>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                HOME
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="/hotels"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                HOTELS
              </a>
              <a
                href="/rooms"
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
              >
                ROOMS
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                SERVICES
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                GALLERY
              </a>
              <a
                href="/menu"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                MENU
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                CONTACT US
              </a>
            </div>

            <button className="bg-[#EF4444] text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
              RESERVATION →
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-[400px] mt-16 md:mt-20">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=600&fit=crop"
          alt="Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Rooms</h1>
            <p className="text-xl">Comfort & Luxury Combined</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <div
                key={index}
                ref={addToRefs}
                data-section={`room${index}`}
                className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 ${isVisible[`room${index}`] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {room.title}
                    </h3>
                    <span className="text-2xl font-bold text-[#EF4444]">
                      {room.price}
                      <span className="text-sm text-gray-500">/night</span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#EF4444] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#EF4444] text-white py-3 rounded-lg font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
