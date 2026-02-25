"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=600&fit=crop"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Contact Us</h1>
            <p className="text-xl">We're Here to Help</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fadeIn">
              <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:+917835000222"
                      className="text-gray-600 hover:text-[#EF4444] transition-colors"
                    >
                      +91 783 500 0222
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:info@atithihouse.com"
                      className="text-gray-600 hover:text-[#EF4444] transition-colors"
                    >
                      info@atithihouse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">
                      A-06, Block -A, Sector Phi-01, Greater Noida,
                      <br />
                      Gautambuddha Nagar, Uttar Pradesh, 201310
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>GST Number:</strong> 09AIPPA2245K1Z3
                </p>
              </div>
            </div>

            <div className="fadeIn" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
                    placeholder="Your message..."
                  />
                </div>

                <button className="w-full bg-[#EF4444] text-white py-4 font-bold rounded hover:bg-[#DC2626] transition-all transform hover:scale-105">
                  SEND MESSAGE
                </button>
              </form>
            </div>
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
