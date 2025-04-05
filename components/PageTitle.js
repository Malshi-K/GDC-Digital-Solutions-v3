"use client";

import Image from "next/image";
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
  const [imageUrl, setImageUrl] = useState("/assets/images/hero.jpeg"); // Default image

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

        // Set image if available in serviceDetails
        if (serviceDetails[servicePath].image) {
          setImageUrl(serviceDetails[servicePath].image);
        }
      } else if (path.includes("/about")) {
        setPageTitle(serviceDetails["about"].heading);
        setImageUrl(serviceDetails["about"].image);
      } else if (path.includes("/contact-us")) {
        setPageTitle(serviceDetails["contact-us"].heading);
        setImageUrl(serviceDetails["contact-us"].image);
      } else if (path.includes("/case-studies/web-development")) {
        setPageTitle(serviceDetails["case-studies/web-development"].heading);
        setImageUrl(serviceDetails["case-studies/web-development"].image);
      } else {
        // Default fallback
        setPageTitle("GDC Digital Solutions");
      }
    }

    // If a custom image is provided, use it instead
    if (customImage) {
      setImageUrl(customImage);
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
    <section className="relative flex items-center justify-center min-h-[500px] text-white">
      {/* Darker Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={`${pageTitle} page title`}
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
            {animateText(pageTitle)}
          </h1>

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

export default PageTitle;
