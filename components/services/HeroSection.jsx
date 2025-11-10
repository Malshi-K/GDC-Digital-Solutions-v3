"use client";

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

  // Title now uses the same fade-up + underline animation used in shared PageTitle

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
    const heading = service.heading || "";

    // Check for special cases first
    const specialCase = handleSpecialCases(heading);
    if (specialCase) {
      return specialCase;
    }

    // Keep short two-word titles on a single line (e.g., "Google Ads", "Facebook Ads")
    const wordCount = heading.trim().split(/\s+/).length;
    if (wordCount <= 2 && heading.length <= 18 && !heading.includes("&")) {
      return {
        firstLine: heading,
        secondLine: "",
      };
    }

    // For headings with " & ", split at the "&"
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
   <section className="relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] text-white overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 z-10" />


      {/* Decorative Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute bottom-28 right-6 sm:right-20 w-20 h-20 rounded-full opacity-20 animate-bounce"
          style={{ background: "linear-gradient(135deg, #c2039d 0%, #6e377d 100%)" }}
        />
        <div
          className="absolute top-1/3 right-6 sm:right-10 w-14 h-14 rounded-lg opacity-25 transform -rotate-12"
          style={{ background: "linear-gradient(135deg, #6e377d 0%, #c2039d 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="w-full text-center md:text-left">
    <motion.h1
            className="text-customPurple text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block">{firstLine}</span>
            {secondLine && <span className="block">{secondLine}</span>}
          </motion.h1>

          <motion.div
            className="h-1 w-20 sm:w-24 md:w-28 bg-customPurple rounded mb-6 mx-auto md:mx-0"
            initial={{ opacity: 0, scaleX: 0, y: 8 }}
            animate={{ opacity: 1, scaleX: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "left center" }}
          />
          <p className="text-base sm:text-lg md:text-xl text-customGray mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {service.description}
          </p>

          {/* Enhanced Contact Now Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="group inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-customPurple text-white text-lg md:text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-customPurple/50"
            >
              <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="tracking-wide">CONTACT NOW</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div
        className="hidden lg:flex absolute bottom-10 right-10 z-20 cursor-pointer group"
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