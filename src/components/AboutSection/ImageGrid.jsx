import { ExperienceBadge } from "./ExperienceBadge";

export function ImageGrid() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      alt: "Room",
      caption: "Where Guests Feel Home",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      alt: "Dining",
      caption: "Dine. Relax. Rejoice",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      alt: "Hospitality",
      caption: "Hospitality. Heart. Home",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      alt: "Elegant",
      caption: "Elegant Stays, Grand Experiences",
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-12">
          {images.slice(2, 4).map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExperienceBadge />
    </div>
  );
}
