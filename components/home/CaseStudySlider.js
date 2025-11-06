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
            "text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transform transition-all duration-800"
          }
        >
          Our Success Stories
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

  <div className="relative w-full overflow-hidden">
        {/* Full-width image without cropping or distortion */}
          {/* Use a single responsive image: mobile uses mobileImagePath, desktop uses imagePath. */}
          <picture>
            {/* Match header hamburger breakpoint: use desktop image only at xl and above */}
            <source media="(min-width: 1280px)" srcSet={currentStudy.imagePath} />
            {/* Use object-contain so the full image is visible without cropping */}
            <img
              src={currentStudy.mobileImagePath || currentStudy.imagePath}
              alt={currentStudy.heading}
              className="w-full block object-contain brightness-[.8]"
              style={{ height: 'auto' }}
            />
          </picture>

        {/* Content Layer */}
        <div className="relative xl:absolute xl:inset-0 z-10 px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="xl:h-full flex items-center">
            {/* Card Container with Animation - Positioned Left */}
            <div className="w-full max-w-xl lg:max-w-lg mx-auto xl:mx-0 mt-4 xl:mt-0">
              {/* Navigation Arrows - Above Card */}
              <div className="flex gap-3 mb-4 sm:mb-6 justify-center xl:justify-start">
                <button
                  onClick={previousSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>

              {/* White Card */}
              <div
                key={currentStudy.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 ease-in-out transform"
                style={{
                  animation: "slideIn 0.5s ease-out",
                }}
              >
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {currentStudy.heading}
                </h2>

                {/* Statistic */}
                <p className="text-purple-600 font-semibold text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                  {currentStudy.statistic}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  {currentStudy.description}
                </p>

                {/* CTA Button */}
                <a
                  href={currentStudy.caseStudyPath}
                  className="inline-block bg-customPurple hover:bg-customPurple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  {currentStudy.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 xl:bottom-8 left-1/2 -translate-x-1/2 xl:left-8 xl:translate-x-0 sm:left-16 lg:left-20 flex gap-2 sm:gap-3 z-20">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 sm:w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button
          className="hidden xl:flex absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center hover:bg-white/30 transition-colors z-20"
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
