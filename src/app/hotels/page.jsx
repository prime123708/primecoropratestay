"use client";

export default function HotelsPage() {
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
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          alt="Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Atithi House
            </h1>
            <p className="text-xl">Your Premium Stay in Greater Noida</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fadeIn">
            <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
              OUR PROPERTY
            </p>
            <h2 className="text-4xl font-serif mb-6">
              Atithi House, Greater Noida
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Located in the heart of Greater Noida, Atithi House offers modern
              amenities, exceptional hospitality, and convenient access to major
              attractions and business hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "100ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
                alt="Exterior"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                <p className="text-gray-600">
                  Centrally located with easy access to India Expo Mart, Pari
                  Chowk, and major business districts.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                alt="Restaurant"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fine Dining</h3>
                <p className="text-gray-600">
                  Multi-cuisine restaurant serving North Indian, South Indian,
                  and Pan-Asian delicacies.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "300ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=600&h=400&fit=crop"
                alt="Banquet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Event Spaces</h3>
                <p className="text-gray-600">
                  Elegant banquet halls perfect for weddings, conferences, and
                  celebrations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#EF4444] text-white px-12 py-4 text-lg font-bold rounded hover:bg-[#DC2626] transition-all transform hover:scale-105"
            >
              CONTACT US FOR BOOKINGS
            </a>
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
