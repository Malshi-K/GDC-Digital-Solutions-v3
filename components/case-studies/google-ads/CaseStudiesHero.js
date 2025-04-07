"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesHero = ({ isServicesOpen }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Fixed the title with proper spacing
  const title = "GDC Consultants Case Study";
  const titleWords = title.split(" ");

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center text-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24"
    >
      {/* Snow Animation Background */}
      <div
        id="snow"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      ></div>

      {/* Content */}
      <div
        id="move-down"
        className={`relative z-10 w-full container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 pt-12 md:pt-20 ${
          isServicesOpen ? "mt-20 md:mt-40" : ""
        }`}
      >
        {/* Left Content */}
        <div
          className={`flex flex-col items-center md:items-start max-w-full md:max-w-xl space-y-6 text-center md:text-left my-8 sm:my-10 md:my-0 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h5 className="text-xs sm:text-sm md:text-md uppercase tracking-widest font-semibold">
            Driving Results for Engineering Excellence
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-x-2">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${
                  word === "Consultants" ? "whitespace-nowrap" : ""
                } ${
                  isInView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p 
            className={`text-sm sm:text-base md:text-lg mt-4 leading-relaxed transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} 
            style={{ transitionDelay: "600ms" }}
          >
            Discover how GDC Consultants, a leading engineering consultancy in
            New Zealand, leveraged Google Ads to boost their online presence,
            attract high-quality leads, and optimise advertising costs.
          </p>

          <div 
            className={`flex gap-4 sm:gap-6 mt-8 justify-center md:justify-start transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            <Link href="/schedule-consultation">
              <button
                className="bg-white text-customYellow px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div
          className={`flex justify-center md:justify-end mt-6 md:mt-0 w-full md:w-auto mb-8 sm:mb-10 md:mb-0 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="floating-animation">
            <Image
              src="/assets/images/google-ads/gdc-ads.webp"
              alt="Google Ads Success"
              className="h-64 sm:h-80 md:h-96 w-auto object-contain"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .floating-animation {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesHero;