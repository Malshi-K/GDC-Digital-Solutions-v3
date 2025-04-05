"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getAllCaseStudies } from "@/data/caseStudiesData";

const CaseStudiesList = () => {
  const caseStudies = getAllCaseStudies();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Get current case study
  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <div className="py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Card Slider */}
        <div className="relative w-full max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "tween",
                duration: 0.5,
              }}
              className="w-full"
            >
              {/* Card designed to match the UI in the image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  {/* Left content area */}
                  <div className="p-8 md:w-1/2 flex flex-col">
                    <div className="mb-2 text-sm text-gray-600 uppercase">
                      {currentCaseStudy.clientOverview.companyName}
                    </div>
                    <h3 className="text-4xl font-bold text-customYellow mb-4">
                      {currentCaseStudy.achievements?.items?.[0]?.title ||
                        "Increase in Engagement"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {currentCaseStudy.hero.description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/case-studies/web-development/${currentCaseStudy.id}`}
                      >
                        <button className="px-6 py-2 rounded-full border border-customYellow text-customYellow hover:bg-customYellow hover:text-white transition-colors text-sm font-medium">
                          View Success Story
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Right image area with yellow background */}
                  <div className="relative md:w-1/2 bg-amber-100 p-6 flex items-center justify-center rounded-bl-lg md:rounded-bl-none md:rounded-r-xl">
                    <div className="relative h-60 md:h-72 w-full">
                      <Image
                        src={currentCaseStudy.hero.imageSrc}
                        alt={currentCaseStudy.hero.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-customYellow" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-customYellow text-white hover:bg-amber-500 transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-customYellow text-white hover:bg-amber-500 transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesList;
