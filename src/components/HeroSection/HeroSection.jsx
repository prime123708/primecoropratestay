import { useHeroSlider } from "@/hooks/useHeroSlider";
import { HeroSlider } from "./HeroSlider";
import { HeroFeatures } from "./HeroFeatures";
import { HeroInfoCards } from "./HeroInfoCards";

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop",
];

export function HeroSection() {
  const currentSlide = useHeroSlider(heroImages);

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:h-screen overflow-hidden mt-16 md:mt-20"
    >
      <HeroSlider images={heroImages} currentSlide={currentSlide} />

      <div className="absolute top-8 md:top-20 left-4 md:left-12 z-10">
        <h1 className="text-3xl md:text-6xl font-serif text-white mb-6 md:mb-12 slideInLeft">
          Our Restaurant
        </h1>
      </div>

      <HeroFeatures />
      <HeroInfoCards />
    </section>
  );
}
