"use client";
import React, { useState, useEffect, useRef } from "react";

const ChallengesSection = ({ data }) => {
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
    <section className="py-12 px-6 md:px-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Section Title */}
        <h2 className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {"CHALLENGES".split("").map((letter, index) => (
            <span
              key={index}
              className={`transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {letter}
            </span>
          ))}
        </h2>

        {/* Challenge Description */}
        <p
          className={`text-gray-700 leading-relaxed text-center text-base md:text-lg mb-8 transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {data.introduction}
        </p>

        {/* Key Challenges */}
        <ul className="text-justify list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed space-y-4 pl-6 md:pl-12">
          {data.items.map((challenge, index) => (
            <li
              key={index}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <span className="font-semibold">{challenge.title}:</span>{" "}
              {challenge.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChallengesSection;