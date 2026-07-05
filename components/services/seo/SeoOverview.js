"use client";

import {
  FaSearch,
  FaChartLine,
  FaCogs,
  FaLink,
  FaUsers,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const seoOverviewData = [
  {
    Icon: FaSearch,
    title: "In-Depth Keyword Research",
    description:
      "Uncover high-value search terms that align with your business goals. Our strategic research ensures your site targets the right keywords to boost visibility.",
  },
  {
    Icon: FaCogs,
    title: "On-Page Optimisation",
    description:
      "Optimise site structure, content, and keywords for better rankings. We enhance your site's performance to capture search engine attention effectively.",
  },
  {
    Icon: FaChartLine,
    title: "Technical SEO",
    description:
      "Improve website performance, speed, and mobile optimisation to provide a seamless user experience across devices.",
  },
  {
    Icon: FaLink,
    title: "Off-Page SEO Strategies",
    description:
      "Enhance your domain authority through strategic link building, social signals, and online reputation management.",
  },
  {
    Icon: FaUsers,
    title: "Customer-Centric Engagement",
    description:
      "Ensure improved user experience and engagement with our optimised SEO tactics, leading to higher conversions and ROI.",
  },
];

const BenefitCard = ({
  Icon,
  title,
  description,
  isVisible,
  index,
  shouldReduceMotion,
}) => (
  <article
    className={`group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] text-customGray shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl md:h-[440px] md:min-h-0 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div
      className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
        shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
      }`}
      aria-hidden="true"
    />
    <div className="relative z-10 flex h-full flex-col p-6 text-center sm:p-8">
      <Icon className="mx-auto mb-4 flex-shrink-0 text-6xl text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
      <h3 className="mb-2 min-h-[4rem] text-2xl font-bold transition-colors duration-700 ease-in-out group-hover:text-white">
        {title}
      </h3>
      <p className="flex-grow text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
        {description}
      </p>
    </div>
  </article>
);

export default function SeoOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
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
    <section className="py-12" ref={sectionRef}>
      <h2 className="mb-10 text-center text-3xl font-bold text-customGray">
        Why Choose GDC Digital Solutions for SEO Services?
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {seoOverviewData.map((benefit, index) => (
            <BenefitCard
              key={index}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
              isVisible={isVisible}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
