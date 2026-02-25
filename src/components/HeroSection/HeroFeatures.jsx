export function HeroFeatures() {
  const features = [
    {
      title: "Elegant Celebrations",
      icon: (
        <svg
          className="w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 30 L24 20 L28 30 M32 30 L36 20 L40 30" />
          <circle cx="24" cy="35" r="3" />
          <circle cx="36" cy="35" r="3" />
        </svg>
      ),
      delay: "0.2s",
    },
    {
      title: "Celebrat Grand",
      icon: (
        <svg
          className="w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M32 20 L28 32 L36 32 Z" />
          <path d="M20 32 L25 40 L30 32" />
          <path d="M34 32 L39 40 L44 32" />
        </svg>
      ),
      delay: "0.4s",
    },
    {
      title: "Party Perfect",
      icon: (
        <svg
          className="w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="20" y="28" width="24" height="16" rx="2" />
          <path d="M26 24 L28 28 M32 20 L32 28 M38 24 L36 28" />
        </svg>
      ),
      delay: "0.6s",
    },
    {
      title: "Royal Gatherings",
      icon: (
        <svg
          className="w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="24" cy="20" r="3" />
          <circle cx="32" cy="20" r="3" />
          <circle cx="40" cy="20" r="3" />
          <path d="M24 23 L24 35 M32 23 L32 35 M40 23 L40 35" />
          <ellipse cx="32" cy="38" rx="10" ry="4" />
        </svg>
      ),
      delay: "0.8s",
    },
  ];

  return (
    <div className="absolute bottom-32 md:bottom-32 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center text-white fadeInUp"
            style={{ animationDelay: feature.delay, animationFillMode: "both" }}
          >
            <div className="mb-2 md:mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-sm md:text-xl font-semibold">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
