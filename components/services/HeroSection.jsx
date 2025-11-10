"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HeroSection = ({
  service,
  nextSectionId = "next-section", // ID of the next section to scroll to
}) => {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle scroll down functionality
  const handleScrollDown = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll down by viewport height if next section not found
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  // Special case handling for "Business Analysis & Consulting"
  const handleSpecialCases = (heading) => {
    // Check for special case with "&" that needs specific handling
    if (heading === "Business Analysis & Consulting") {
      return {
        firstLine: "Business",
        secondLine: "Analysis & Consulting",
      };
    }

    return null; // Not a special case
  };

  // Dynamically generate title parts based on the heading
  const getTitleParts = () => {
    const heading = service.heading;

    // Check for special cases first
    const specialCase = handleSpecialCases(heading);
    if (specialCase) {
      return specialCase;
    }

    // For headings with "&", split at the "&"
    if (heading.includes(" & ")) {
      const parts = heading.split(" & ");
      return {
        firstLine: parts[0],
        secondLine: "& " + parts[1],
      };
    }

    // For other multi-word titles, put the first word on one line and the rest on the second
    if (heading.includes(" ")) {
      const words = heading.split(" ");

      // If it's a long title, find a better break point
      if (words.length > 2) {
        // Try to balance the lines better
        const midpoint = Math.ceil(words.length / 2);
        return {
          firstLine: words.slice(0, midpoint).join(" "),
          secondLine: words.slice(midpoint).join(" "),
        };
      }

      return {
        firstLine: words[0],
        secondLine: words.slice(1).join(" "),
      };
    }

    // For single-word titles, use the service description to create a second line
    return {
      firstLine: heading,
      secondLine: service.description || "services",
    };
  };

  const { firstLine, secondLine } = getTitleParts();

  return (
    <section 
      ref={scrollRef}
      className="relative flex items-center justify-center min-h-[600px] text-white"
    >

    

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-15">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-lg opacity-15 transform rotate-12 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #6e377d 0%, #c2039d 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 rounded-full opacity-20 animate-bounce"
          style={{
            background: "linear-gradient(135deg, #c2039d 0%, #6e377d 100%)",
          }}
        ></div>
        <div
          className="absolute top-1/3 right-10 w-16 h-16 rounded-lg opacity-25 transform -rotate-12"
          style={{
            background: "linear-gradient(135deg, #6e377d 0%, #c2039d 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-40">
        <div className="max-w-4xl">
          <div 
            className={`fade-in-up ${isLoaded ? 'is-visible' : ''}`}
          >
            <h1 className="text-customPurple text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent">
              <div className="text-customPurple whitespace-nowrap">{firstLine} {secondLine}</div>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-customGray mb-10 max-w-2xl leading-relaxed">
            {service.description}
          </p>

          {/* Enhanced Contact Now Button */}
          <Link
            href="/contact-us"
            className="group inline-flex items-center px-10 py-4 bg-customPurple text-white text-xl font-semibold rounded-full hover:from-customPurple hover:to-customLightPurple hover:shadow-2xl hover:shadow-customPurple/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="tracking-wide">CONTACT NOW</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center w-20 h-20 bg-customPurple rounded-full shadow-lg hover:shadow-2xl hover:shadow-customPurple/50 transition-all duration-300">
          <ChevronDoubleDownIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
        </div>
      </motion.div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;