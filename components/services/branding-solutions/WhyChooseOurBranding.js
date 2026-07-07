"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPalette,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const benefitsData = [
  {
    Icon: FaMapMarkerAlt,
    title: "Local Insight, Global Standards",
    description:
      "Based right here in Hamilton, we understand the needs of Kiwi businesses and the nuances of the local market. At the same time, we bring global design standards to ensure your branding looks sharp and professional anywhere in New Zealand or beyond.",
  },
  {
    Icon: FaPalette,
    title: "End-to-End Branding Partner",
    description:
      "From digital strategies to print materials, we cover it all. Whether you need a new logo, social media graphics, business cards, or signage, we’re your one-stop-shop for branding services in Hamilton and throughout New Zealand. No need to juggle multiple vendors, we’ve got you covered.",
  },
  {
    Icon: FaChartLine,
    title: "Proven Digital Expertise",
    description:
      "As specialists in digital marketing, SEO, and web development, we make sure your brand works consistently across every channel. From online visibility to offline impact, our branding services are built to support your business growth in New Zealand’s competitive market.",
  },
  {
    Icon: FaHandshake,
    title: "Collaborative & Client-Centric",
    description:
      "We believe the best results come from working together. That’s why we listen closely to your vision and bring it to life with designs that feel authentic to your brand whether you’re a start-up in Hamilton or an established business anywhere in New Zealand.",
  },
];

const BenefitCard = ({ Icon, title, description, isVisible, index, shouldReduceMotion }) => (
  <article
    className={`group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] text-customGray shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl md:min-h-[420px] ${
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

export default function WhyChooseOurBranding() {
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
      { threshold: 0.2 }
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
    <section className="px-4 py-12 sm:px-6 lg:px-8" ref={sectionRef}>
      <div
        className={`mx-auto mb-10 max-w-4xl text-center transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-6 text-3xl font-bold text-customGray sm:text-4xl">
          Why Choose GDC Digital Solutions for Your Branding?
        </h2>
        <p className="text-gray-600">
          Choosing a local partner means choosing someone who truly understands
          your business and the New Zealand market. We don&apos;t just create
          designs, we build long-term partnerships that help your brand grow. With
          a proven track record in Hamilton, the wider Waikato region, and across
          New Zealand, we deliver branding solutions that are not only creative
          but also effective in driving real results.
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {benefitsData.map((benefit, index) => (
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
