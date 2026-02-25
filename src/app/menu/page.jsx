"use client";

import { useState } from "react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("north-indian");

  const menuCategories = {
    "north-indian": {
      name: "Tasya - North Indian",
      items: [
        {
          name: "Butter Chicken",
          price: "₹450",
          desc: "Creamy tomato-based curry with tender chicken pieces",
        },
        {
          name: "Dal Makhani",
          price: "₹320",
          desc: "Rich black lentils cooked in butter and cream",
        },
        {
          name: "Paneer Tikka Masala",
          price: "₹380",
          desc: "Grilled cottage cheese in spicy gravy",
        },
        {
          name: "Tandoori Roti",
          price: "₹40",
          desc: "Whole wheat bread baked in clay oven",
        },
        {
          name: "Naan",
          price: "₹50",
          desc: "Soft leavened bread from the tandoor",
        },
        {
          name: "Biryani",
          price: "₹420",
          desc: "Fragrant basmati rice with aromatic spices",
        },
      ],
    },
    "south-indian": {
      name: "Adige - South Indian",
      items: [
        {
          name: "Masala Dosa",
          price: "₹180",
          desc: "Crispy crepe filled with spiced potato filling",
        },
        {
          name: "Idli Sambhar",
          price: "₹150",
          desc: "Steamed rice cakes with lentil soup",
        },
        {
          name: "Uttapam",
          price: "₹160",
          desc: "Thick pancake topped with vegetables",
        },
        {
          name: "Vada",
          price: "₹120",
          desc: "Crispy lentil donuts served with chutney",
        },
        {
          name: "Hyderabadi Biryani",
          price: "₹380",
          desc: "Aromatic rice layered with spiced meat",
        },
        {
          name: "Filter Coffee",
          price: "₹80",
          desc: "Traditional South Indian coffee",
        },
      ],
    },
    "pan-asian": {
      name: "MOA - Pan Asian",
      items: [
        {
          name: "Pad Thai",
          price: "₹420",
          desc: "Stir-fried rice noodles with tamarind sauce",
        },
        {
          name: "Sushi Platter",
          price: "₹650",
          desc: "Assorted fresh sushi rolls",
        },
        {
          name: "Ramen Bowl",
          price: "₹480",
          desc: "Japanese noodle soup with rich broth",
        },
        {
          name: "Spring Rolls",
          price: "₹280",
          desc: "Crispy vegetable spring rolls",
        },
        {
          name: "Thai Green Curry",
          price: "₹440",
          desc: "Spicy coconut curry with vegetables",
        },
        {
          name: "Fried Rice",
          price: "₹320",
          desc: "Wok-tossed rice with vegetables",
        },
      ],
    },
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
                className="text-[#EF4444] font-semibold border-b-2 border-[#EF4444] pb-1"
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
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=600&fit=crop"
          alt="Menu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Menu</h1>
            <p className="text-xl">Taste the Traditions</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-[#EF4444] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {menuCategories[category].name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">
              {menuCategories[activeCategory].name}
            </h2>
            <div className="space-y-6">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-[#EF4444]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
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
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
