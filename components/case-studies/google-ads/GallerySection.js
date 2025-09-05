"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const GallerySection = () => {
  const [isSection1InView, setIsSection1InView] = useState(false);
  const [isSection2InView, setIsSection2InView] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1 = [
    { src: "/assets/images/google-ads/section1/1.webp", alt: "Ad Overview 1" },
    { src: "/assets/images/google-ads/section1/2.webp", alt: "Ad Overview 2" },
    { src: "/assets/images/google-ads/section1/3.webp", alt: "Ad Overview 3" },
    { src: "/assets/images/google-ads/section1/4.webp", alt: "Ad Overview 4" },
    { src: "/assets/images/google-ads/section1/5.webp", alt: "Ad Overview 5" },
    { src: "/assets/images/google-ads/section1/6.webp", alt: "Ad Overview 6" },
  ];

  const section2 = [
    { src: "/assets/images/google-ads/section2/1.webp", alt: "Ad Overview 1" },
    { src: "/assets/images/google-ads/section2/2.webp", alt: "Ad Overview 2" },
    { src: "/assets/images/google-ads/section2/3.webp", alt: "Ad Overview 3" },
    { src: "/assets/images/google-ads/section2/4.webp", alt: "Ad Overview 4" },
    { src: "/assets/images/google-ads/section2/5.webp", alt: "Ad Overview 5" },
    { src: "/assets/images/google-ads/section2/6.webp", alt: "Ad Overview 6" },
  ];

  // Detect when sections are in viewport
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const section1Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsSection1InView(true);
      }
    }, observerOptions);

    const section2Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsSection2InView(true);
      }
    }, observerOptions);

    if (section1Ref.current) {
      section1Observer.observe(section1Ref.current);
    }

    if (section2Ref.current) {
      section2Observer.observe(section2Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        section1Observer.unobserve(section1Ref.current);
      }
      if (section2Ref.current) {
        section2Observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="container mx-auto" ref={section1Ref}>
        {/* Section Title */}
        <h2 className="text-customPurple text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {/* Animated "SEARCH CAMPAIGN" */}
          {"SEARCH".split("").map((letter, index) => (
            <span
              key={`search-${index}`}
              className="inline-block transition-all duration-300 ease-out"
              style={{
                opacity: isSection1InView ? 1 : 0,
                transform: isSection1InView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {letter}
            </span>
          ))}
          <span
            className="mx-1 inline-block transition-all duration-300 ease-out"
            style={{
              opacity: isSection1InView ? 1 : 0,
              transitionDelay: `${6 * 100}ms`
            }}
          >
            &nbsp;
          </span>
          {"CAMPAIGN".split("").map((letter, index) => (
            <span
              key={`campaign-${index}`}
              className="inline-block transition-all duration-300 ease-out"
              style={{
                opacity: isSection1InView ? 1 : 0,
                transform: isSection1InView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(7 + index) * 100}ms`
              }}
            >
              {letter}
            </span>
          ))}
          <span 
            className="ml-2 text-customGray transition-opacity duration-300"
            style={{
              opacity: isSection1InView ? 1 : 0,
              transitionDelay: '1.5s'
            }}
          >
            ADS OVERVIEW
          </span>
        </h2>

        {/* Masonry Grid for Section 1 */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {section1.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid transition-all duration-600 ease-out"
              style={{
                opacity: isSection1InView ? 1 : 0,
                transform: isSection1InView 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(50px) scale(0.95)',
                transitionDelay: `${index * 150}ms`
              }}
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

      <div className="container mx-auto mt-16" ref={section2Ref}>
        {/* Section Title */}
        <h2 className="text-customPurple text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {"DISPLAY".split("").map((letter, index) => (
            <span
              key={`display-${index}`}
              className="inline-block transition-all duration-300 ease-out"
              style={{
                opacity: isSection2InView ? 1 : 0,
                transform: isSection2InView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {letter}
            </span>
          ))}
          <span
            className="mx-1 inline-block transition-all duration-300 ease-out"
            style={{
              opacity: isSection2InView ? 1 : 0,
              transitionDelay: `${7 * 100}ms`
            }}
          >
            &nbsp;
          </span>
          {"CAMPAIGN".split("").map((letter, index) => (
            <span
              key={`campaign-${index}`}
              className="inline-block transition-all duration-300 ease-out"
              style={{
                opacity: isSection2InView ? 1 : 0,
                transform: isSection2InView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(8 + index) * 100}ms`
              }}
            >
              {letter}
            </span>
          ))}
          <span 
            className="ml-2 text-customGray transition-opacity duration-300"
            style={{
              opacity: isSection2InView ? 1 : 0,
              transitionDelay: '1.7s'
            }}
          >
            ADS OVERVIEW
          </span>
        </h2>

        {/* Masonry Grid for Section 2 */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {section2.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid transition-all duration-600 ease-out"
              style={{
                opacity: isSection2InView ? 1 : 0,
                transform: isSection2InView 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(50px) scale(0.95)',
                transitionDelay: `${index * 150}ms`
              }}
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