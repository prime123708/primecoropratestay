"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      title: "Hotel Exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      title: "Luxury Room",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      title: "Restaurant",
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800&h=600&fit=crop",
      title: "Banquet Hall",
    },
    {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      title: "Superior Room",
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      title: "Residences",
    },
    {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      title: "Lobby",
    },
    {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
      title: "Deluxe Room",
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
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                SERVICES
              </a>
              <a
                href="/gallery"
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=600&fit=crop"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Gallery</h1>
            <p className="text-xl">Explore Our Beautiful Spaces</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-screen">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#EF4444] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

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
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
