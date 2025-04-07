"use client";

import { useState, useEffect, useRef } from "react";
import { FaSearch, FaPencilAlt, FaLaptopCode, FaCheckCircle, FaArrowRight } from "react-icons/fa"; // Icons for each step

export default function ProcessFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
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

  // Steps array for the website-building process
  const steps = [
    {
      icon: <FaSearch className="text-customYellow text-4xl mb-4" />,
      title: "Discovery & Research",
      description: "We start by understanding your business goals, target audience, and competitors to develop a clear strategy.",
    },
    {
      icon: <FaPencilAlt className="text-customYellow text-4xl mb-4" />,
      title: "Design & Planning",
      description: "Next, we create wireframes and design concepts that align with your brand's identity.",
    },
    {
      icon: <FaLaptopCode className="text-customYellow text-4xl mb-4" />,
      title: "Development & Coding",
      description: "Our development team brings your design to life by coding the website using modern technologies.",
    },
    {
      icon: <FaCheckCircle className="text-customYellow text-4xl mb-4" />,
      title: "Testing & Launch",
      description: "After thorough testing for performance and usability, we launch your website and ensure everything runs smoothly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Building Websites
          </h2>
          <p className="text-gray-600 mt-4">
            We follow a structured approach to deliver high-quality websites.
          </p>
        </div>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Step Animation */}
              <div
                className={`flex flex-col items-center text-center max-w-xs transform transition-all duration-800 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                {/* Icon */}
                {step.icon}

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:flex items-center justify-center transition-opacity duration-500 ease-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 500 + 500}ms` }}
                >
                  <FaArrowRight className="text-gray-400 text-3xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}