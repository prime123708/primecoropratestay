"use client";

import {
  Utensils,
  PartyPopper,
  Wifi,
  Car,
  Dumbbell,
  Briefcase,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Utensils,
      title: "Restaurant",
      description:
        "Multi-cuisine restaurant serving authentic North Indian, South Indian, and Pan-Asian delicacies.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      icon: PartyPopper,
      title: "Banquet Hall",
      description:
        "Elegant event spaces perfect for weddings, birthdays, corporate events, and celebrations.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800&h=600&fit=crop",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description:
        "High-speed complimentary WiFi throughout the property for all guests.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    },
    {
      icon: Car,
      title: "Parking",
      description: "Ample secure parking space available for all our guests.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Modern gym equipped with state-of-the-art equipment.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a33?w=800&h=600&fit=crop",
    },
    {
      icon: Briefcase,
      title: "Business Center",
      description:
        "Fully equipped business center with meeting rooms and conference facilities.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
  ];

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
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                ROOMS
              </a>
              <a
                href="/services"
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          src="https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1600&h=600&fit=crop"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Our Services
            </h1>
            <p className="text-xl">Excellence in Every Detail</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fadeIn">
            <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
              WHAT WE OFFER
            </p>
            <h2 className="text-4xl font-serif">Our Best Ministrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
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
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}
