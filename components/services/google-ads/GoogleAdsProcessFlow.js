"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaLaptopCode,
  FaFileAlt,
  FaBullseye,
  FaPlay,
  FaChartLine,
  FaTools,
  FaChartPie,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const steps = [
  {
    Icon: FaSearch,
    title: "Planning & Research",
    description:
      "Defining clear campaign objectives, market research, understanding the target audience, and analyzing competitors.",
  },
  {
    Icon: FaPencilAlt,
    title: "Keyword Research",
    description:
      "Identifying relevant keywords using tools like Google Keyword Planner and categorizing them into campaigns and ad groups.",
  },
  {
    Icon: FaLaptopCode,
    title: "Campaign & Ad Group Structure",
    description:
      "Selecting the appropriate campaign type (Search, Display, etc.) and organizing campaigns by objectives or product categories.",
  },
  {
    Icon: FaFileAlt,
    title: "Ad Creation",
    description:
      "Writing compelling ad copy that includes relevant keywords and clear calls to action, as well as designing visuals for display and video ads.",
  },
  {
    Icon: FaBullseye,
    title: "Targeting Setup",
    description:
      "Defining audience demographics, geographic regions, and device preferences for ad targeting.",
  },
  {
    Icon: FaPlay,
    title: "Campaign Launch",
    description:
      "Activating the ads and ensuring all elements, such as ad copy, extensions, and keywords, are properly set up.",
  },
  {
    Icon: FaChartLine,
    title: "Tracking & Monitoring",
    description:
      "Setting up conversion tracking to measure user actions and monitoring key metrics like CTR, CPC, and conversion rates.",
  },
  {
    Icon: FaTools,
    title: "Optimisation",
    description:
      "Refining bids, targeting, and ad elements based on performance data, such as adjusting for high-converting keywords and improving ad relevance.",
  },
  {
    Icon: FaChartPie,
    title: "Reporting & Analysis",
    description:
      "Reviewing campaign performance data to assess key metrics such as impressions, clicks, and conversions. This analysis leads to generating regular reports for stakeholders.",
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

export default function GoogleAdsProcessFlow() {
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
        <div id="process-title" className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Creating Google Ads
          </h2>
          <p className="mt-4 text-gray-600">
            We follow a structured approach to deliver high-quality campaigns.
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
