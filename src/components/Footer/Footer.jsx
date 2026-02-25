import { Phone, Mail, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold leading-tight mb-6">
                <span className="block text-[#EF4444]">atithi</span>
                <span className="block text-[#F7931E] -mt-2">house</span>
              </div>
            </div>

            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </a>
            </div>

            <button className="bg-[#EF4444] text-white px-8 py-3 font-bold hover:bg-[#DC2626] transition-all">
              RESERVE NOW
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="/"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                About
              </a>
              <a
                href="/rooms"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                Rooms
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                Gallery
              </a>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Amenities
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Attractions
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Events
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                FAQs
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Privacy Policy
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Terms & Conditions
              </div>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Refund Policy
              </div>
              <a
                href="/contact"
                className="text-gray-700 hover:text-[#EF4444] transition-colors"
              >
                Contact Us
              </a>
              <div className="text-gray-700 hover:text-[#EF4444] transition-colors cursor-pointer">
                Pay Now
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">
              GET IN TOUCH
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#EF4444] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+917835000222"
                    className="text-gray-700 hover:text-[#EF4444] transition-colors"
                  >
                    +91 783 500 0222
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#EF4444] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@atithihouse.com"
                    className="text-gray-700 hover:text-[#EF4444] transition-colors"
                  >
                    info@atithihouse.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#EF4444] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    A-06, Block -A, Sector Phi-01, Greater Noida,
                    <br />
                    Gautambuddha Nagar, Uttar Pradesh, 201310
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700">
                  <strong>GST:</strong> 09AIPPA2245K1Z3
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <span className="text-sm font-bold">G+</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#EF4444] hover:text-white transition-all"
              >
                <Star className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>Atithi House © 2026. All Rights Reserved</p>
          <p className="mt-2 md:mt-0">
            Website developed by eZee -{" "}
            <span className="text-[#EF4444]">
              Best Website Builder for Hotels
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
