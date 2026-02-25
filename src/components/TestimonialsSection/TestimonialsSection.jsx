import { Star } from "lucide-react";
import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";

const testimonials = [
  {
    name: "Kavita",
    text: "I recently stayed at Atithi House for three days during my friend's wedding, and I had a wonderful experience. All the pre-wedding events were so beautifully organized and managed.",
    rating: 5,
  },
  {
    name: "Manish",
    text: "Had an opportunity to stay at Atithi House while on a private visit. A centrally located and affordable. The staff are very friendly and indulging. The food was awesome.",
    rating: 5,
  },
  {
    name: "Manoj",
    text: "The hotel is really beautiful and the rooms are spacious. Some of the rooms have balcony which adds more space to relax and enjoy sunlight.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { currentTestimonial, setCurrentTestimonial } =
    useTestimonialSlider(testimonials);

  return (
    <section className="py-20 bg-[#8B4513] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-white/80 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-serif">Happy Customer Says</h2>
        </div>

        <div className="relative min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${currentTestimonial === index ? "opacity-100 translate-y-0" : "opacity-0 absolute inset-0 translate-y-10"}`}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-xl italic mb-6">"{testimonial.text}"</p>
              <h4 className="text-2xl font-bold">{testimonial.name}</h4>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? "bg-white w-8" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
