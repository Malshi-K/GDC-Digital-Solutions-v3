"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const KeyAchievements = () => {
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

  const achievements = [
    {
      value: 21.5,
      unit: "%",
      title: "Increase in AdWords Traffic",
      description:
        "Compared to previous months, AdWords traffic surged due to optimised keywords and better audience targeting.",
    },
    {
      value: 94.4,
      unit: "%",
      title: "Increase in Trackable Website Conversions",
      description:
        '332.75 conversions were achieved, with a conversion rate of 7.89%. Most conversions came from the "Contact" and "Services" sections of the website.',
    },
    {
      value: 47,
      unit: "%",
      title: "Decrease in Cost Per Acquisition (CPA)",
      description:
        "GDC Consultants successfully lowered its CPA by focusing on high-quality leads through search ads.",
    },
    {
      value: 41.8,
      unit: "%",
      title: "Decrease in Average CPC",
      description:
        "With targeted ads, GDC Consultants reduced its CPC, making each dollar spent more efficient.",
    },
    {
      value: 94.4,
      unit: "%",
      title: "Increase in Conversions",
      description:
        "Driven by a well-optimised combination of search and display ads, showing a strong return on investment.",
    },
  ];

  return (
    <section className="py-10 bg-customYellow" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2
          className={`text-3xl text-white md:text-4xl font-bold text-center mb-5 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          KEY ACHIEVEMENTS
        </h2>

        <p
          className={`text-customGray mb-6 max-w-2xl mx-auto text-base md:text-lg transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Discover our key performance metrics that highlight the success of our
          strategic campaigns.
        </p>

        {/* Achievements */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-1 p-6 text-center transition-all duration-700 ease-out"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${0.3 + index * 0.2}s`,
              }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {/* CountUp Animation */}
                <CountUp
                  start={0}
                  end={achievement.value}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
                  scrollSpyDelay={0}
                />
                {achievement.unit}
              </h3>
              <h4 className="text-lg md:text-xl text-white font-semibold mb-4">
                {achievement.title}
              </h4>
              <p className="text-customGray text-sm md:text-base">
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