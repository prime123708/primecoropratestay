import { useState, useEffect } from "react";

export function useTestimonialSlider(testimonials, interval = 6000) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return { currentTestimonial, setCurrentTestimonial };
}
