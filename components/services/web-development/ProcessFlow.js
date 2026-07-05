"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaLaptopCode,
  FaCheckCircle,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const steps = [
  {
    Icon: FaSearch,
    title: "Discovery & Research",
    description:
      "We start by understanding your business goals, target audience, and competitors to develop a clear strategy.",
  },
  {
    Icon: FaPencilAlt,
    title: "Design & Planning",
    description:
      "Next, we create wireframes and design concepts that align with your brand's identity.",
  },
  {
    Icon: FaLaptopCode,
    title: "Development & Coding",
    description:
      "Our development team brings your design to life by coding the website using modern technologies.",
  },
  {
    Icon: FaCheckCircle,
    title: "Testing & Launch",
    description:
      "After thorough testing for performance and usability, we launch your website and ensure everything runs smoothly.",
  },
];

const ProcessStepCard = ({
  Icon,
  title,
  description,
  stepNumber,
  isVisible,
  index,
  shouldReduceMotion,
}) => (
  <article
    className={`group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl md:min-h-[300px] ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div
      className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
        shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
      }`}
      aria-hidden="true"
    />
    <div className="relative z-10 flex h-full flex-col p-6 text-center sm:p-8">
      <span className="mx-auto mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-customPurple/10 text-sm font-bold text-customPurple transition-colors duration-700 ease-in-out group-hover:bg-white/20 group-hover:text-white">
        {String(stepNumber).padStart(2, "0")}
      </span>
      <Icon className="mx-auto mb-4 flex-shrink-0 text-4xl text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-white">
        {title}
      </h3>
      <p className="flex-grow text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
        {description}
      </p>
    </div>
  </article>
);

export default function ProcessFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="bg-transparent py-16" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Building Websites
          </h2>
          <p className="mt-4 text-gray-600">
            We follow a structured approach to deliver high-quality websites.
          </p>
        </div>

        {/* Desktop: row with arrows */}
        <div className="hidden items-stretch lg:flex lg:justify-between lg:gap-3">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="min-w-0 flex-1">
                <ProcessStepCard
                  Icon={step.Icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isVisible={isVisible}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
              {index < steps.length - 1 && (
                <div
                  className="flex flex-shrink-0 items-center px-1"
                  aria-hidden="true"
                >
                  <FaArrowRight className="text-3xl text-customPurple/35" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile / tablet: grid with down arrows */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-full max-w-md">
                <ProcessStepCard
                  Icon={step.Icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isVisible={isVisible}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
              {index < steps.length - 1 && (
                <FaArrowDown
                  className="text-2xl text-customPurple/35"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
