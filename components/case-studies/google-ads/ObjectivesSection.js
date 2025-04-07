"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaTrafficLight,
  FaUserCheck,
  FaBullseye,
  FaGlobe,
  FaChartLine,
  FaMoneyBillWave,
  FaArrowUp,
} from "react-icons/fa";

const ObjectivesSection = () => {
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

  const objectives = [
    {
      icon: <FaTrafficLight size={40} className="text-customGray" />,
      title: "Increase Website Traffic",
      description:
        "Drive more relevant visitors to the GDC website through Google Ads.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaUserCheck size={40} className="text-customYellow" />,
      title: "Lead Generation",
      description:
        "Attract qualified leads for their engineering consultancy services.",
      bgColor: "bg-white",
    },
    {
      icon: <FaBullseye size={40} className="text-customGray" />,
      title: "Optimise Cost Efficiency",
      description:
        "Lower the average cost per click (CPC) and cost per acquisition (CPA).",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaGlobe size={40} className="text-customYellow" />,
      title: "Brand Awareness",
      description:
        "Reach a wider audience with Display Ads to reinforce brand presence in key locations.",
      bgColor: "bg-white",
    },
  ];

  const keyObjectives = [
    {
      icon: <FaChartLine size={40} className="text-customGray" />,
      title: "Increase CTR",
      description:
        "Increase click-through rate (CTR) on search and display campaigns.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-customYellow" />,
      title: "Lower CPC & CPA",
      description:
        "Lower the cost-per-click (CPC) and cost-per-acquisition (CPA).",
      bgColor: "bg-white",
    },
    {
      icon: <FaArrowUp size={40} className="text-customGray" />,
      title: "Improve Conversion Rates",
      description:
        "Improve overall conversion rates by targeting relevant audiences in engineering, construction, and architectural services.",
      bgColor: "bg-customYellow",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          {"OBJECTIVES".split("").map((letter, index) => (
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

        {/* Introduction Paragraph */}
        <p
          className={`text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto transition-all duration-600 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          GDC Consultants aimed to expand its reach by attracting more potential
          clients to its website through both organic search results and
          targeted Google Ads campaigns. In the fast-paced engineering
          consultancy space, clients often need quick solutions, whether for
          architectural design, civil engineering, or project management.
        </p>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${objective.bgColor}`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${0.4 + index * 0.2}s`
              }}
            >
              <div className="bg-white p-4 rounded-full mb-4">
                {objective.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  objective.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {objective.title}
              </h3>
              <p
                className={`text-center ${
                  objective.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {objective.description}
              </p>
            </div>
          ))}
        </div>

        {/* Primary Goal */}
        <p
          className={`text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto transition-all duration-600 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          The primary goal of GDC Consultant&apos;s Google Ads campaigns was to
          increase website traffic, improve lead generation through search and
          display ads, and ensure that every advertising dollar spent resulted
          in meaningful customer interactions.
        </p>

        {/* Key Objectives Grid */}
        <h2
          className={`text-3xl font-bold text-customGray mb-6 transition-all duration-600 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          Key Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {keyObjectives.map((keyObj, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${keyObj.bgColor}`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${1.6 + index * 0.2}s`
              }}
            >
              <div className="bg-white p-4 rounded-full mb-4">
                {keyObj.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  keyObj.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {keyObj.title}
              </h3>
              <p
                className={`text-center ${
                  keyObj.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {keyObj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;