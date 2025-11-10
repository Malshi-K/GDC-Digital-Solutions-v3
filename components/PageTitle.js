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
  const [isLoaded, setIsLoaded] = useState(false);

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
        behavior: "smooth",
      });
    }
  };


  return (
    <section className="relative flex items-center justify-center min-h-[600px] text-white overflow-hidden">
      {/* Purple Gradient Background */}
      <div
        className="absolute inset-0 z-10"        
      ></div>

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
            <h1 className="text-customPurple text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {pageTitle}
            </h1>
          </div>

          {/* Subtitle/Description */}
          <p className="text-customGray text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl">
            Transform your digital presence with our expert solutions tailored
            to your business needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-customPurple text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Contact Now
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
      `}</style>
    </section>
  );
};

export default PageTitle;
