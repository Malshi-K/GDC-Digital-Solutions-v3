"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import caseStudiesData from "@/data/homeCaseStudiesData"; // Import the data array

const CaseStudies = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Set initial animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Centered Title with gradient effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 transform transition-all duration-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <span className="text-customGray">Our </span>
          <span 
            className="bg-gradient-to-r from-customPurple to-customLightPurple bg-clip-text text-transparent"
          >
            Success Stories
          </span>
        </h2>
        <p className={`text-lg text-customLightGray text-center max-w-3xl mx-auto transform transition-all duration-800 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          Discover how we&apos;ve helped businesses achieve remarkable growth and digital transformation
        </p>
      </div>

      {/* Case Studies Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {caseStudiesData.map((caseStudy, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 flex flex-col h-full border-2 ${
                hoveredCard === index 
                  ? "shadow-2xl scale-105 border-transparent" 
                  : "shadow-lg border-gray-100 hover:border-customLightPurple"
              }`}
              style={{
                background: hoveredCard === index 
                  ? "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)"
                  : "white"
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Case Study Image - Consistent height */}
              <div className="pt-6 px-6 flex justify-center">
                <div className={`w-full h-[180px] rounded-lg overflow-hidden transition-all duration-300 ${
                  hoveredCard === index ? "bg-white/10 backdrop-blur-sm" : "bg-gray-50"
                }`}>
                  <Image
                    src={caseStudy.imagePath}
                    alt={`${caseStudy.heading} Success Screenshot`}
                    width={300}
                    height={200}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              
              {/* Content with improved styling */}
              <div className="p-6 flex-grow flex flex-col text-center">
                {/* Company Name */}
                <h3 className={`text-2xl font-bold mb-3 h-auto transition-colors duration-300 ${
                  hoveredCard === index ? "text-white" : "text-customGray"
                }`}>
                  {caseStudy.heading}
                </h3>
                
                {/* Statistics with enhanced styling */}
                <div className="mb-4 p-4 rounded-lg transition-all duration-300" style={{
                  background: hoveredCard === index 
                    ? "rgba(255, 255, 255, 0.15)" 
                    : "#ffffff"
                }}>
                  <p className={`text-3xl font-extrabold transition-colors duration-300 ${
                    hoveredCard === index ? "text-white" : "text-customPurple"
                  }`}>
                    {caseStudy.statistic}
                  </p>
                </div>
                
                {/* Description */}
                <p className={`text-md font-medium mb-6 flex-grow min-h-[80px] leading-relaxed transition-colors duration-300 ${
                  hoveredCard === index ? "text-white/90" : "text-customLightGray"
                }`}>
                  {caseStudy.description}
                </p>
                
                {/* Enhanced Button */}
                <div className="mt-auto">
                  <button
                    className={`w-full text-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 transform ${
                      hoveredCard === index
                        ? "text-customPurple bg-white hover:bg-gray-50"
                        : "text-white border-2 border-transparent hover:border-white"
                    }`}
                    style={{
                      background: hoveredCard === index 
                        ? "white"
                        : "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)"
                    }}
                    onClick={() => handleButtonClick(caseStudy.caseStudyPath)}
                  >
                    View Success Story
                    <svg 
                      className={`inline-block ml-2 w-4 h-4 transition-transform duration-300 ${
                        hoveredCard === index ? "translate-x-1" : ""
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;