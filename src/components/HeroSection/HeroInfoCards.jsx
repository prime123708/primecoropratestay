import { Star } from "lucide-react";

export function HeroInfoCards() {
  const cards = [
    {
      title: "Make Reservation",
      description:
        "Experience an unforgettable dining journey at Atithi House.",
      bgColor: "bg-[#EF4444]",
      textColor: "text-white",
      delay: "0.2s",
    },
    {
      title: "Hassle Free Booking",
      description: "Book hotels without any hassle.",
      icon: (
        <svg
          className="w-4 h-4 md:w-6 md:h-6 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-blue-100",
      bgColor: "bg-white",
      delay: "0.4s",
    },
    {
      title: "Reviews",
      description: "Creating memorable experiences for guests.",
      icon: <Star className="w-4 h-4 md:w-6 md:h-6 text-orange-600" />,
      iconBg: "bg-orange-100",
      bgColor: "bg-white",
      delay: "0.6s",
    },
    {
      title: "24/7 Support",
      description: "Your needs may arise at any time.",
      icon: (
        <svg
          className="w-4 h-4 md:w-6 md:h-6 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-green-100",
      bgColor: "bg-white",
      delay: "0.8s",
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-8 pb-4 md:pb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-4 md:p-6 ${card.textColor || ""} slideInUp`}
            style={{ animationDelay: card.delay, animationFillMode: "both" }}
          >
            {card.icon && (
              <div className="flex items-start mb-1 md:mb-2">
                <div className={`${card.iconBg} p-2 rounded mr-3`}>
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base">
                    {card.title}
                  </h4>
                </div>
              </div>
            )}
            {!card.icon && (
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {card.title}
              </h3>
            )}
            <p
              className={`text-xs md:text-sm ${card.icon ? "text-gray-600" : ""}`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
