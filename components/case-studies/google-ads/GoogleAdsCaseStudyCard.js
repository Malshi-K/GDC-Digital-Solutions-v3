"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const GoogleAdsCaseStudyCard = ({
  heading,
  statistic,
  description,
  buttonLabel,
  imagePath,
  caseStudyPath,
}) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleButtonClick = () => {
    router.push(caseStudyPath);
  };

  return (
    <div 
      className={`py-16 flex justify-center items-center transition-opacity duration-1000 ease-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`container max-w-6xl mx-auto border border-customYellow rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center md:gap-x-10 relative transition-all duration-500 ease-out ${
          isHovered ? "scale-105 shadow-2xl" : ""
        }`}
        style={{
          backgroundImage: "url(/assets/images/google-ads-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Content with Width Adjustment */}
        <div
          className={`flex-1 md:pr-8 mb-6 md:mb-0 z-10 max-w-md transition-all duration-800 ease-out ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h2>
          <p className="text-7xl font-extrabold text-customYellow mb-4">
            {statistic}
          </p>
          <p className="text-lg font-medium text-gray-700 mb-6">
            {description}
          </p>
          <button
            className="text-customYellow hover:text-white border border-customYellow hover:bg-customGray hover:border-none rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-110"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </button>
        </div>

        {/* Right Image Section */}
        <div
          className={`flex-1 transition-all duration-800 ease-out ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <Image
            src={imagePath}
            alt={`${heading} Success Screenshot`}
            width={400}
            height={400}
            className="w-full max-w-[400px] mx-auto transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsCaseStudyCard;