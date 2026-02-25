import { ImageGrid } from "./ImageGrid";
import { ReservationForm } from "./ReservationForm";

export function AboutSection({ isVisible, addToRefs }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImageGrid />

          <div
            ref={addToRefs}
            data-section="booking"
            className={`transform transition-all duration-700 ${isVisible.booking ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
              DISCOVER COMFORT BEYOND STAY
            </p>
            <h2 className="text-5xl font-serif mb-6">Atithi House</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Welcome to Atithi House, where comfort meets convenience in a
              warm, homely environment. Located in a serene neighborhood with
              easy access to major city hubs, Atithi House is designed for
              travelers who appreciate personalized hospitality, elegant spaces,
              and peaceful stays...
            </p>

            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
