"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import caseStudiesData from "@/data/homeCaseStudiesData"; // Import the data array

const CaseStudies = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = caseStudiesData[activeIndex];

  const handleButtonClick = (path) => {
    router.push(path);
  };

  const handleNextCase = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === caseStudiesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCase = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? caseStudiesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16">
      {/* Centered Title with customYellow color */}
      <motion.h2 
        className="text-6xl font-bold text-customYellow text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Success Stories
      </motion.h2>
      
      {/* Case Study Container with External Navigation */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Navigation Controls OUTSIDE the card */}
        <button
          onClick={handlePrevCase}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full shadow-md border border-gray-200"
          aria-label="Previous case study"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          onClick={handleNextCase}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full shadow-md border border-gray-200"
          aria-label="Next case study"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="container mx-auto border border-customYellow rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center md:gap-x-10 relative"
            style={{
              backgroundImage: "url(/assets/images/google-ads-bg.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Content with Width Adjustment */}
            <motion.div
              className="flex-1 md:pr-8 mb-6 md:mb-0 z-10 max-w-md" // Set max width here
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={`content-${activeIndex}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {activeCase.heading}
              </h2>
              <p className="text-3xl font-extrabold text-customYellow mb-4">
                {activeCase.statistic}
              </p>
              <p className="text-md font-medium text-gray-700 mb-6">
                {activeCase.description}
              </p>
              <motion.button
                className="text-customYellow hover:text-white border border-customYellow hover:bg-customGray hover:border-none rounded-full px-8 py-3 font-semibold transition duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleButtonClick(activeCase.caseStudyPath)}
              >
                {activeCase.buttonLabel}
              </motion.button>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={`image-${activeIndex}`}
            >
              <Image
                src={activeCase.imagePath}
                alt={`${activeCase.heading} Success Screenshot`}
                width={400}
                height={400}
                className="w-full max-w-[400px] mx-auto transform hover:scale-105 transition duration-300"
              />
            </motion.div>

            {/* Case Study Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {caseStudiesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === activeIndex ? "bg-customYellow" : "bg-gray-300"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;