import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img
              src="src\images\logo.png"
              alt="Prime Corporate Stay logo"
              className="h-4 w-18 md:h-14 md:w-18  object-contain"
            />
            <div className="text-2xl md:text-3xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-[#222325] to-[#222325] me-2 bg-clip-text text-transparent">
                Prime Corporate Stay
              </span>
              {/* <span className="block text-[#F7931E] -mt-1 md:-mt-2">house</span> */}
            </div>
          </a>

          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#EF4444] transition-colors"
            >
              ABOUT US
            </a>
            {/* <a
              href="/hotels"
              className="text-gray-700 hover:text-[#EF4444] transition-colors"
            >
              HOTELS
            </a> */}
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
            {/* <a
              href="/menu"
              className="text-gray-700 hover:text-[#EF4444] transition-colors"
            >
              MENU
            </a> */}
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#EF4444] transition-colors "
            >
              CONTACT US
            </a>
          </div>

          <div className="hidden lg:block md:px-1">
            <button className="bg-[#EF4444] text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
              RESERVATION →
            </button>
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#EF4444] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open ? (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="px-4 py-3 flex flex-col space-y-3">
                <a href="/" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  HOME
                </a>
                <a href="/about" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  ABOUT US
                </a>
                {/* <a href="/hotels" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  HOTELS
                </a> */}
                <a href="/rooms" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  ROOMS
                </a>
                <a href="/services" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  SERVICES
                </a>
                <a href="/gallery" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  GALLERY
                </a>
                {/* <a href="/menu" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  MENU
                </a> */}
                <a href="/contact" className="text-gray-700 hover:text-[#EF4444] transition-colors">
                  CONTACT US
                </a>
                <button className="w-full bg-[#EF4444] text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#DC2626] transition-all">
                  RESERVATION →
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
