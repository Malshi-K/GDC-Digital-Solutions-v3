"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import caseStudiesData from "@/data/homeCaseStudiesData"; // Import the data array

const CaseStudies = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  // Set initial animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <section className="py-16">
      {/* Centered Title with customYellow color */}
      <h2
        className={`text-6xl font-bold text-customYellow text-center mb-12 transform transition-all duration-800 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        Our Success Stories
      </h2>

      {/* Case Studies Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {caseStudiesData.map((caseStudy, index) => (
            <div
              key={index}
              className="rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-102 transition-all duration-500 flex flex-col h-full"
              
            >
              {/* Case Study Image - Consistent height */}
              <div className="pt-6 px-6 flex justify-center">
                <Image
                  src={caseStudy.imagePath}
                  alt={`${caseStudy.heading} Success Screenshot`}
                  width={300}
                  height={200}
                  className="w-full h-[180px] object-contain mx-auto"
                />
              </div>
              
              {/* Consistent structure with fixed heights and positioning */}
              <div className="p-6 flex-grow flex flex-col text-center">
                {/* Company Name - Always at the top */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 h-10">
                  {caseStudy.heading}
                </h3>
                
                {/* Statistics - Consistent position with fixed height */}
                <div className="mb-3">
                  <p className="text-2xl font-extrabold text-customYellow">
                    {caseStudy.statistic}
                  </p>
                </div>
                
                {/* Statistics Label - Always the same position */}
                <h4 className="text-xl font-bold text-customYellow mb-3">
                  Increase in Engagement
                </h4>
                
                {/* Description - Flexible height but minimum height set */}
                <p className="text-md font-medium text-gray-700 mb-6 flex-grow min-h-[80px]">
                  {caseStudy.description}
                </p>
                
                {/* Button - Always at the bottom */}
                <div className="mt-auto">
                  <button
                    className="w-full text-center text-customYellow hover:text-white border border-customYellow hover:bg-customYellow hover:border-none rounded-full px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 transform"
                    onClick={() => handleButtonClick(caseStudy.caseStudyPath)}
                  >
                    View Success Story
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