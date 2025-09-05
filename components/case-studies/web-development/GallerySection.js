"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const GallerySection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-customPurple text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {/* Animated "SUCCESS STORY" */}
          {"SUCCESS".split("").map((letter, index) => (
            <span
              key={`success-${index}`}
              className={`transform transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {letter}
            </span>
          ))}
          <span
            className={`mx-1 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${7 * 100}ms` }}
          >
            &nbsp;
          </span>
          {"STORY".split("").map((letter, index) => (
            <span
              key={`story-${index}`}
              className={`transform transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${(7 + index) * 100}ms` }}
            >
              {letter}
            </span>
          ))}
          <span 
            className={`ml-2 text-customGray transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${(7 + 5) * 100}ms` }}
          >
            OVERVIEW
          </span>
        </h2>

        {/* Masonry Grid for Images */}
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {data.images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg break-inside-avoid transform transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;