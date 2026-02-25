"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Award, Users, Clock } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

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
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=600&fit=crop"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              About Atithi House
            </h1>
            <p className="text-xl">Where Hospitality Meets Heart</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={addToRefs}
            data-section="story"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 ${isVisible.story ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div>
              <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
                OUR STORY
              </p>
              <h2 className="text-4xl font-serif mb-6">
                15 Years of Excellence
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to Atithi House, where comfort meets convenience in a
                warm, homely environment. For over 15 years, we've been
                dedicated to providing our guests with exceptional hospitality
                and memorable experiences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Located in a serene neighborhood with easy access to major city
                hubs, Atithi House is designed for travelers who appreciate
                personalized hospitality, elegant spaces, and peaceful stays.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to excellence and attention to detail has made us
                a preferred choice for both business and leisure travelers
                seeking a home away from home.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
                alt="Hotel"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              ref={addToRefs}
              data-section="stat1"
              className={`text-center transform transition-all duration-700 ${isVisible.stat1 ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            >
              <Award className="w-12 h-12 text-[#EF4444] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#EF4444] mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            <div
              ref={addToRefs}
              data-section="stat2"
              className={`text-center transform transition-all duration-700 delay-100 ${isVisible.stat2 ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            >
              <Users className="w-12 h-12 text-[#EF4444] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#EF4444] mb-2">10K+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>

            <div
              ref={addToRefs}
              data-section="stat3"
              className={`text-center transform transition-all duration-700 delay-200 ${isVisible.stat3 ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            >
              <Star className="w-12 h-12 text-[#EF4444] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#EF4444] mb-2">
                4.8/5
              </div>
              <div className="text-gray-600">Guest Rating</div>
            </div>

            <div
              ref={addToRefs}
              data-section="stat4"
              className={`text-center transform transition-all duration-700 delay-300 ${isVisible.stat4 ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            >
              <Clock className="w-12 h-12 text-[#EF4444] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#EF4444] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={addToRefs}
            data-section="mission"
            className={`text-center max-w-3xl mx-auto transform transition-all duration-700 ${isVisible.mission ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
              OUR MISSION
            </p>
            <h2 className="text-4xl font-serif mb-6">
              Dedicated to Your Comfort
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Atithi House, our mission is to create a welcoming environment
              where every guest feels valued and cared for. We strive to exceed
              expectations through personalized service, attention to detail,
              and a commitment to excellence in everything we do. Whether you're
              here for business or pleasure, we're dedicated to making your stay
              truly memorable.
            </p>
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
