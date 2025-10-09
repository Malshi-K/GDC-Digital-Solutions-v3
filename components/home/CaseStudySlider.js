"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CaseStudySlider = ({ caseStudies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2
          className={
            "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transform transition-all duration-800"
          }
        >
          <span className="text-customGray">Our </span>
          <span className="bg-gradient-to-r from-customPurple to-customLightPurple bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        <p
          className={
            "text-lg text-customLightGray text-center max-w-3xl mx-auto transform transition-all duration-800 delay-200"
          }
        >
          Discover how we&apos;ve helped businesses achieve remarkable growth
          and digital transformation
        </p>
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Transition */}
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              zIndex: currentIndex === index ? 1 : 0,
            }}
          >
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${study.imagePath})`,
                filter: "brightness(0.8)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Content Layer */}
        <div className="relative z-10 h-full px-4 sm:px-8 lg:px-40">
          <div className="h-full flex items-center">
            {/* Card Container with Animation - Positioned Left */}
            <div className="w-full max-w-xl lg:max-w-lg">
              {/* Navigation Arrows - Above Card */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={previousSlide}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* White Card */}
              <div
                key={currentStudy.id}
                className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transition-all duration-500 ease-in-out transform"
                style={{
                  animation: "slideIn 0.5s ease-out",
                }}
              >
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  {currentStudy.heading}
                </h2>

                {/* Statistic */}
                <p className="text-purple-600 font-semibold text-lg sm:text-xl mb-6">
                  {currentStudy.statistic}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {currentStudy.description}
                </p>

                {/* CTA Button */}
                <a
                  href={currentStudy.caseStudyPath}
                  className="inline-block bg-customPurple hover:bg-customPurple text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  {currentStudy.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-8 sm:left-16 lg:left-40 flex gap-3 z-20">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button
          className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-20"
          aria-label="Scroll to top"
        >
          <ChevronRight className="w-5 h-5 text-white rotate-[-90deg]" />
        </button>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CaseStudySlider;
