"use client";

import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const PageTitle = ({
  nextSectionId = "next-section", // ID of the next section to scroll to
}) => {
  // Hardcoded values for the quote page
  const pageTitle = "Get a Free Quote for Your Business";
  const imageUrl = "/assets/images/services/Call us.jpg";

  // Handle scroll down functionality
  const handleScrollDown = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll down by viewport height if next section not found
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Text animation helper
  const animateText = (text, startDelay = 0) => {
    return text.split("").map((char, index) => {
      const display = char === " " ? "\u00A0" : char;
      return (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `fadeIn 0.05s ease forwards`,
            animationDelay: `${(index + startDelay) * 0.1}s`,
            opacity: 0,
          }}
        >
          {display}
        </span>
      );
    });
  };

  return (
    <section className="relative flex items-center justify-center min-h-[500px] text-white">
      {/* Darker Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Get a Free Quote for Your Business"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content - Centered */}
      <div className="container relative z-20 mx-auto px-6 md:px-10 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {animateText(pageTitle)}
          </h1>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
      >
        <div className="flex items-center justify-center w-20 h-20 bg-customPurple rounded-full">
          <ChevronDoubleDownIcon className="h-8 w-8 text-black" />
        </div>
      </motion.div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
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
    </section>
  );
};

export default PageTitle;