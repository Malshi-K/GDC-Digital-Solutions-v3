"use client";
import React, { useState, useEffect, useRef } from "react";

const KeyAchievements = ({ data }) => {
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
    <section className="py-10 bg-customYellow" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2
          className={`text-3xl text-white md:text-4xl font-bold text-center mb-5 transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          KEY ACHIEVEMENTS
        </h2>

        <p
          className={`text-white mb-6 max-w-2xl mx-auto text-base md:text-lg transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {data.introduction}
        </p>

        {/* Achievements */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-10">
          {data.items.map((achievement, index) => (
            <div
              key={index}
              className={`flex-1 p-6 text-center hover:shadow-lg transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <h4 className="text-lg md:text-xl text-white font-semibold mb-4">
                {achievement.title}
              </h4>
              <p className="text-white text-sm md:text-base">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;