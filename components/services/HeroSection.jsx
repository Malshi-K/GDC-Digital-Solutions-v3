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
      className="relative flex items-center justify-center min-h-[500px] text-white"
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.heading}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <div className="whitespace-nowrap">{animateText(firstLine)}</div>
            <div className="whitespace-nowrap">
              {animateText(secondLine, firstLine.length)}
            </div>
          </h1>

          <p className="text-2xl text-white mb-10 max-w-2xl">
            {service.description}
          </p>

          {/* Contact Now Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center px-10 py-4 bg-customYellow text-black text-xl font-semibold rounded-full hover:bg-customGray transition-all"
          >
            <span className="mr-2">←</span> CONTACT NOW
          </Link>
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
        <div className="flex items-center justify-center w-20 h-20 bg-customYellow rounded-full">
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

export default HeroSection;