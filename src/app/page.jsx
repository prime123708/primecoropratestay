
"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Navigation } from "@/components/Navigation/Navigation";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";
import { Footer } from "@/components/Footer/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { PageAnimations } from "@/components/PageAnimations/PageAnimations";

export default function HomePage() {
  const { isVisible, addToRefs } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection isVisible={isVisible} addToRefs={addToRefs} />
      <ServicesSection isVisible={isVisible} addToRefs={addToRefs} />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <PageAnimations />
    </div>
  );
}
