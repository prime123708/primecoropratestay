export function ServiceCard({
  title,
  description,
  image,
  buttonText,
  imageFirst,
  section,
  isVisible,
  addToRefs,
  isLast,
}) {
  const animationClass = imageFirst
    ? "translate-x-0 opacity-100"
    : "translate-x-0 opacity-100";
  const hiddenClass = imageFirst
    ? "-translate-x-10 opacity-0"
    : "translate-x-10 opacity-0";

  return (
    <div
      ref={addToRefs}
      data-section={section}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isLast ? "mb-20" : ""} transform transition-all duration-700 ${isVisible[section] ? animationClass : hiddenClass}`}
    >
      {imageFirst ? (
        <>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-4">{title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <button className="bg-[#EF4444] text-white px-8 py-3 font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
              {buttonText}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">
            <h3 className="text-4xl font-serif mb-4">{title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <button className="bg-[#EF4444] text-white px-8 py-3 font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
              {buttonText}
            </button>
          </div>
          <div className="relative group overflow-hidden rounded-lg order-1 lg:order-2">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </>
      )}
    </div>
  );
}
