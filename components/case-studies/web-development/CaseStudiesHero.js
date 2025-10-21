"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesHero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleWords = data.title.split(" ");
  
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

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen w-full flex items-center text-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-40 py-16 sm:py-20 md:py-24"
    >
      {/* Clean Purple Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      ></div>

      {/* Content */}
      <div
        id="move-down"
        className="relative z-10 w-full container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 pt-12 md:pt-20"
      >
        {/* Left Content */}
        <div
          className={`flex flex-col items-center md:items-start max-w-full md:max-w-xl space-y-6 text-center md:text-left my-8 sm:my-10 md:my-0 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h5 className="text-xs sm:text-sm md:text-md uppercase tracking-widest font-semibold text-black">
            {data.subtitle}
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-x-2">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`transform transition-all duration-700 delay-${
                  index * 100
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
          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed text-customGray">
            {data.description}
          </p>
          
          {/* Clean Button */}
          <div className="flex gap-4 sm:gap-6 mt-8 justify-center md:justify-start">
            <Link href="/schedule-consultation">
              <button
                className="bg-customPurple text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {data.ctaText}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div
          className={`flex justify-center md:justify-end mt-6 md:mt-0 w-full md:w-auto mb-8 sm:mb-10 md:mb-0 transform transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="animate-float">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              className="h-64 sm:h-80 md:h-96 w-auto object-contain"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>

      {/* Clean CSS Styles */}
      <style jsx>{`
        /* Clean Purple Background Animation */
        @keyframes cleanPurple {
          0% {
            background-position: 0px 0px, 0px 0px, 0px 0px;
            background-color: #6e377d;
          }
          50% {
            background-color: #c2039d;
          }
          100% {
            background-position: 500px 1000px, 400px 400px, 300px 300px;
            background-color: #6e377d;
          }
        }

        #clean-purple-bg {
          background: linear-gradient(135deg, #6e377d 0%, #c2039d 50%, #6e377d 100%);
          background-image: 
            url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="7" cy="7" r="1"/><circle cx="50" cy="50" r="1"/><circle cx="20" cy="30" r="1"/></g></svg>'),
            url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.02"><circle cx="40" cy="40" r="2"/></g></svg>');
          background-size: 60px 60px, 80px 80px;
          animation: cleanPurple 25s linear infinite;
          position: absolute;
          height: 100vh;
          width: 100%;
        }

        /* Simple Float Animation */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesHero;