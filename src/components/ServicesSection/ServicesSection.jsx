import { ServiceCard } from "./ServiceCard";

export function ServicesSection({ isVisible, addToRefs }) {
  const services = [
    {
      title: "Our Banquet",
      description:
        "Our Banquet Hall is the perfect venue for hosting gatherings, celebrations, and life's special milestones. With elegant interiors, customizable setups, and dedicated event support, it's designed to make every occasion memorable.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800&h=600&fit=crop",
      buttonText: "VIEW MORE",
      imageFirst: true,
      section: "banquet",
    },
    {
      title: "Our Restaurant",
      description:
        "We serve emotions, traditions, and memories. With every dish, we aim to preserve culinary legacies while creating new experiences worth remembering. We bring the best of Tasya (North Indian), Adige (South Indian), and MOA (Pan Asian) cuisines to your special occasion.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      buttonText: "VIEW MENU",
      imageFirst: false,
      section: "restaurant",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
            SERVICES
          </p>
          <h2 className="text-5xl font-serif">Our Best Ministrations</h2>
        </div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            isVisible={isVisible}
            addToRefs={addToRefs}
            isLast={index === services.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
