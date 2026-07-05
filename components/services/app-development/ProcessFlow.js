"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaLaptopCode,
  FaBug,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const steps = [
  {
    Icon: FaSearch,
    title: "Discovery & Requirements Analysis",
    description:
      "We begin by understanding your business objectives, target users, and technical requirements to create a comprehensive app strategy.",
  },
  {
    Icon: FaPencilAlt,
    title: "UI Design & Prototyping",
    description:
      "We create visually appealing interfaces and interactive prototypes that align with your brand and enhance usability.",
  },
  {
    Icon: FaLaptopCode,
    title: "Development & Integration",
    description:
      "We builds your application using modern frameworks, implementing backend systems and third-party integrations.",
  },
  {
    Icon: FaBug,
    title: "Quality Assurance & Testing",
    description:
      "We conduct thorough testing across multiple devices and platforms to ensure functionality, performance, and security.",
  },
  {
    Icon: FaRocket,
    title: "Deployment & Launch",
    description:
      "After final approval, we deploy your application to the appropriate platforms and app stores, ensuring a smooth release.",
  },
  {
    Icon: FaTools,
    title: "Maintenance & Evolution",
    description:
      "We provide ongoing support, monitor performance, and implement updates to keep your application secure and competitive.",
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
  isLast,
}) => (
  <div className="relative flex w-full flex-col items-center">
    <article
      className={`group relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl md:min-h-[240px] ${
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

    {!isLast && (
      <div className="my-8 flex flex-col items-center" aria-hidden="true">
        <div className="h-12 w-px bg-gradient-to-b from-customPurple/70 via-customPurple/40 to-customPurple/15" />
        <div className="mt-2 h-3.5 w-3.5 rounded-full border-2 border-customPurple bg-white shadow-sm" />
      </div>
    )}
  </div>
);

export default function AppProcessFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Building Apps
          </h2>
          <p className="mt-4 text-gray-600">
            We follow a structured approach to deliver high-quality applications.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-lg flex-col items-center">
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-customPurple/20 via-customPurple/35 to-customPurple/20 md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <ProcessStepCard
              key={index}
              Icon={step.Icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
              isVisible={isVisible}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
