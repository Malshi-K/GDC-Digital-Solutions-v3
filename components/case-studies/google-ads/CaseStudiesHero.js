"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesHero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after component mounts for animation
    setIsVisible(true);
    
    // Setup intersection observer for viewport detection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.5 });
    
    const section = document.querySelector('#hero-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Fixed the title with proper spacing
  const title = "GDC Consultants Case Study";
  const titleWords = title.split(" ");

  return (
    <section
      id="hero-section"
      className="relative w-full flex items-center text-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
    >

      {/* Content */}
      <div
        id="move-down"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 pt-6 md:pt-12"
      >
        {/* Left Content */}
        <div
          className={`flex flex-col items-center md:items-start w-full md:w-1/2 max-w-full md:max-w-2xl space-y-6 text-center md:text-left transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h5 className="text-xs sm:text-sm md:text-md uppercase tracking-widest font-semibold text-black">
            Driving Results for Engineering Excellence
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-x-2">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${
                  word === "Consultants" ? "whitespace-nowrap" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${word === "Consultants" ? "whitespace-nowrap" : ""} ${
                  word === "Study" ? "text-customPurple" : "text-customPurple"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed text-customGray max-w-xl mx-auto md:mx-0">
            Discover how GDC Consultants, a leading engineering consultancy in
            New Zealand, leveraged Google Ads to boost their online presence,
            attract high-quality leads, and optimise advertising costs.
          
          </p>

          {/* Clean Button */}
          <div className="flex gap-4 sm:gap-6 mt-8 justify-center md:justify-start">
            <Link href="/request-quote">
              <button
                className="bg-customPurple text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Request a Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div
          className={`flex justify-center md:justify-end mt-6 md:mt-0 w-full md:w-1/2 mb-6 md:mb-0 transform transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "0.35s" }}
        >
          <div className="animate-float w-full flex justify-center md:justify-end">
            <div className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px]">
              <Image
                src="/assets/images/google-ads/gdc-ads.webp"
                alt="Google Ads Success"
                className="w-full h-auto object-contain"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Float animation only (no background/color changes) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default CaseStudiesHero;