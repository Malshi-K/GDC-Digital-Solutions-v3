"use client";
import React, { useState, useEffect, useRef } from "react";

const ChallengesSection = () => {
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
    <section className="py-12 px-6 md:px-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Section Title */}
        <h2 className="text-customPurple text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {"CHALLENGES".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-300 ease-out"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {letter}
            </span>
          ))}
        </h2>

        {/* Content */}
        <p
          className="text-gray-700 leading-relaxed text-center text-base md:text-lg transition-all duration-600 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '0.2s'
          }}
        >
          Before the September campaign launch,{" "}
          <span className="font-semibold">GDC Consultants Ltd</span> faced
          challenges with underperformance in certain ad groups and audience
          segments. Previous campaigns were not performing well and not properly
          optimised in terms of keywords and audiences. The engineering and
          consultancy services industry is highly competitive, so optimizing the
          targeting and ad copy was crucial to ensuring GDC Consultant&apos;s
          ads appeared in front of the right prospects at the right time.
        </p>
      </div>
    </section>
  );
};

export default ChallengesSection;