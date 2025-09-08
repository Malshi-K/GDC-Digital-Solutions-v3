"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRef } from "react";

const HeroSection = ({
  service,
  nextSectionId = "next-section", // ID of the next section to scroll to
}) => {
  const scrollRef = useRef(null);

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
      className="relative flex items-center justify-center min-h-[600px] text-white bg-gradient-to-br from-customPurple via-customLightPurple to-customPurple"
    >
      {/* Enhanced Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-customPurple/40 to-black/70"></div>

      {/* Background Image with enhanced blend mode */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.heading}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
          priority
        />
      </div>

      {/* Animated background particles/dots for visual interest */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-customLightPurple rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-customLightPurple rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-customLightPurple rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-20">
        <div className="max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-customLightPurple to-white bg-clip-text text-transparent">
            <div className="whitespace-nowrap">{animateText(firstLine)}</div>
            <div className="whitespace-nowrap">
              {animateText(secondLine, firstLine.length)}
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl leading-relaxed">
            {service.description}
          </p>

          {/* Enhanced Contact Now Button */}
          <Link
            href="/contact-us"
            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-customLightPurple to-customPurple text-white text-xl font-semibold rounded-full hover:from-customPurple hover:to-customLightPurple hover:shadow-2xl hover:shadow-customPurple/50 transition-all duration-300 transform hover:scale-105"
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
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-customLightPurple to-customPurple rounded-full shadow-lg hover:shadow-2xl hover:shadow-customPurple/50 transition-all duration-300">
          <ChevronDoubleDownIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
        </div>
      </motion.div>
      
      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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