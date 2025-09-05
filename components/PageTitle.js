"use client";

import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { serviceDetails } from "@/data/serviceData";

const PageTitle = ({
  title, // Accept title as prop (can be overridden)
  nextSectionId = "next-section", // ID of the next section to scroll to
  customImage, // Optional custom image path
}) => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState(title || "");

  // Determine page title and image based on current route
  useEffect(() => {
    if (title) {
      // If title prop is explicitly provided, use it
      setPageTitle(title);
    } else {
      // Extract the service key from the pathname
      const path = pathname || "";
      const servicePath = path.split("/").pop();

      // Find matching service in serviceDetails
      if (serviceDetails[servicePath]) {
        setPageTitle(serviceDetails[servicePath].heading);
      } else if (path.includes("/about")) {
        setPageTitle(serviceDetails["about"].heading);
      } else if (path.includes("/contact-us")) {
        setPageTitle(serviceDetails["contact-us"].heading);
      } else if (path.includes("/case-studies/web-development")) {
        setPageTitle(serviceDetails["case-studies/web-development"].heading);
      } else {
        // Default fallback
        setPageTitle("GDC Digital Solutions");
      }
    }
  }, [pathname, title, customImage]);

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
    <section className="relative flex items-center justify-center min-h-[600px] text-white overflow-hidden">
      {/* Purple Gradient Background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 7, 200, 0.3), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(194, 3, 157, 0.3), transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 7, 200, 0.4), transparent 50%),
            linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #6d28d9 50%, #8b5cf6 75%, #a855f7 100%)
          `,
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-15">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-lg opacity-15 transform rotate-12 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 rounded-full opacity-20 animate-bounce"
          style={{
            background: "linear-gradient(135deg, #c2039d 0%, #7407c8 100%)",
          }}
        ></div>
        <div
          className="absolute top-1/3 right-10 w-16 h-16 rounded-lg opacity-25 transform -rotate-12"
          style={{
            background: "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {animateText(pageTitle)}
          </h1>

          {/* Subtitle/Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Transform your digital presence with our expert solutions tailored
            to your business needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-customPurple text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
      >
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-110 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
          }}
        >
          <ChevronDoubleDownIcon className="h-6 w-6 text-customPurple group-hover:text-customLightPurple transition-colors" />
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <div className="absolute bottom-6 left-6 md:left-20 z-20">
        <div className="flex items-center space-x-4 text-white/60">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Trusted by 100+ businesses</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Expert digital solutions</span>
          </div>
        </div>
      </div>

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
