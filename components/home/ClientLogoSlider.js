"use client";
import React from "react";
import Image from "next/image";

const ClientLogoSlider = () => {
  // Animation speed variable 
  const animationDuration = "25s";

  // Client logo paths 
  const logos = [
    {
      src: "/assets/images/Copy of peak. (Website) - Black 1.png",
      alt: "Peak Logo"
    },
    {
      src: "/assets/images/Final logo -  kandy mechanical -org.png",
      alt: "Kandy Mechanical & Transport Logo"
    },
    {
      src: "/assets/images/footer logo.png",
      alt: "Footer Logo"
    },
    {
      src: "/assets/images/logo 1.png",
      alt: "Logo 1"
    },
    {
      src: "/assets/images/logo.webp",
      alt: "Logo"
    },
    {
      src: "/assets/images/Digital Solution.png",
      alt: "Digital Solution Logo"
    },
    {
      src: "/assets/images/GDC LOGOS 2024 BLUE.webp",
      alt: "GDC Logos 2024 Blue"
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional: Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to partner with innovative companies across industries
          </p>
        </div>

        {/* Slider Container with Fade Gradients */}
        <div className="relative overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 z-10 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 z-10 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />

          {/* Slider Track Wrapper */}
          <div className="overflow-hidden">
            {/* Slider Track */}
            <div
              className="flex gap-8 md:gap-12 lg:gap-16"
              style={{
                animation: `slide ${animationDuration} linear infinite`,
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
            >
              {/* First Set - All 7 Logos */}
              {logos.map((logo, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-300 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}

              {/* Second Set - Duplicate of All 7 Logos for Seamless Loop */}
              {logos.map((logo, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-300 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSlider;

