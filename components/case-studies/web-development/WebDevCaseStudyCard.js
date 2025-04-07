import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WebDevCaseStudyCard = ({
  heading,
  statistic,
  description,
  buttonLabel,
  imagePath,
  caseStudyPath,
}) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Set initial animation on mount
    setIsVisible(true);

    // Setup intersection observer for when scrolling into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    router.push(caseStudyPath);
  };

  return (
    <div 
      ref={cardRef}
      className={`py-16 flex justify-center items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="container max-w-6xl mx-auto border border-customYellow rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center md:gap-x-10 relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        style={{
          backgroundImage: "url(/assets/images/google-ads-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content with Width Adjustment */}
        <div
          className={`flex-1 md:pr-8 mb-6 md:mb-0 z-10 max-w-md transform transition-all duration-800 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h2>
          <p className="text-7xl font-extrabold text-customYellow mb-4">
            {statistic}
          </p>
          <p className="text-lg font-medium text-gray-700 mb-6">
            {description}
          </p>
          <button
            className="text-customYellow hover:text-white border border-customYellow hover:bg-customGray hover:border-none rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-110 transform"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </button>
        </div>

        {/* Right Image Section */}
        <div
          className={`flex-1 transform transition-all duration-800 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Image
            src={imagePath}
            alt={`${heading} Success Screenshot`}
            width={400}
            height={400}
            className="w-full max-w-[400px] mx-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevCaseStudyCard;