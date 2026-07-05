"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaLightbulb,
  FaUserFriends,
  FaPencilAlt,
  FaChartLine,
  FaBuilding,
  FaUsers,
  FaImages,
  FaVideo,
  FaChartBar,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const services = [
  {
    Icon: FaLightbulb,
    title: "Facebook Ad Strategy & Campaign Setup",
    description:
      "We create a customised Facebook Ads strategy based on your business goals, ensuring high engagement and lead generation.",
  },
  {
    Icon: FaUserFriends,
    title: "Audience Targeting & Retargeting",
    description: "We help you reach the right people, including:",
    subItems: [
      {
        Icon: FaBuilding,
        text: "Local Business Ads NZ – Target customers based on location, demographics, and behaviour.",
      },
      {
        Icon: FaUsers,
        text: "Lookalike Audiences – Expand your reach by targeting users similar to your best customers.",
      },
    ],
  },
  {
    Icon: FaPencilAlt,
    title: "Ad Creation & Optimisation",
    description:
      "From Facebook carousel ads to video marketing, we design eye-catching ads that increase clicks and conversions.",
    subItems: [
      {
        Icon: FaImages,
        text: "Carousel & Image Ads – Showcase multiple products or features in a single ad.",
      },
      {
        Icon: FaVideo,
        text: "Video Ads – Engage your audience with compelling video content.",
      },
    ],
  },
  {
    Icon: FaChartLine,
    title: "Performance Tracking & Reporting",
    description:
      "We continuously monitor, analyse, and optimise your Facebook Ads for the best results.",
    subItems: [
      {
        Icon: FaChartBar,
        text: "Detailed analytics and insights to track ROI and campaign effectiveness.",
      },
    ],
  },
];

const ProcessStepCard = ({
  Icon,
  title,
  description,
  subItems,
  stepNumber,
  isVisible,
  index,
  shouldReduceMotion,
  isLast,
}) => (
  <div className="relative flex w-full flex-col items-center">
    <article
      className={`group relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl ${
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
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
          {description}
        </p>

        {subItems && (
          <div className="mt-4 w-full space-y-3 text-left">
            {subItems.map((item, itemIndex) => {
              const SubIcon = item.Icon;
              return (
                <div key={itemIndex} className="flex items-start gap-2">
                  <SubIcon className="mt-1 flex-shrink-0 text-xl text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
                  <p className="text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}
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

export default function FacebookAdsProcessFlow() {
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
            Our Facebook Advertising Services
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive solutions to boost your brand&apos;s presence on Facebook
          </p>
        </div>

        <div className="relative mx-auto flex max-w-lg flex-col items-center">
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-customPurple/20 via-customPurple/35 to-customPurple/20 md:block"
            aria-hidden="true"
          />

          {services.map((service, index) => (
            <ProcessStepCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              subItems={service.subItems}
              stepNumber={index + 1}
              isVisible={isVisible}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
