import { useState, useEffect, useRef } from "react";

export default function CustomCodedWebsites() {
  // Array of hexagon points
  const hexagonPoints = [
    "Tailored Uniquely to Your Needs",
    "Superior Security",
    "Enhanced Speed & Performance",
    "Optimised SEO & Clean Code",
    "Scalability & Longevity",
    "Total Control & Ownership",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative bg-black py-12 text-white" ref={sectionRef}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/services/6.webp')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-customPurple opacity-40"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div 
          className={`md:w-1/2 transform transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-white">Custom-coded websites: </span>
            Unlock the power of flexibility and performance
          </h2>
          <p className="text-lg text-white mb-6">
            Manage your business with a mature marketing strategy, develop your
            business so that it grows rapidly.
          </p>
        </div>

        {/* Right Side: Hexagon Grid */}
        <div
          className={`mt-8 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-6 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-80"
          }`}
          style={{ 
            transitionDelay: "400ms" 
          }}
        >
          {/* Dynamically render hexagons */}
          {hexagonPoints.map((point, index) => (
            <div
              key={index}
              className={`hexagon-container flex items-center justify-center transition-all duration-600 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ 
                transitionDelay: `${400 + (index * 200)}ms` 
              }}
            >
              <div className="hexagon-content text-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}