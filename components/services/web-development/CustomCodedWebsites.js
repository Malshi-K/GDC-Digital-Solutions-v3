"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const featurePoints = [
  "Tailored Uniquely to Your Needs",
  "Superior Security",
  "Enhanced Speed & Performance",
  "Optimised SEO & Clean Code",
  "Scalability & Longevity",
  "Total Control & Ownership",
];

export default function CustomCodedWebsites() {
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
    <section
      className="relative overflow-hidden py-20 text-white md:py-28"
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/services/6.webp')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-customPurpleDark/95 via-[#3f0f54]/90 to-customPurple/85"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-customPurple/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-0 opacity-0 md:-translate-x-8"
            }`}
          >
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Custom Development
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-white/90">Custom-coded websites: </span>
              Unlock the power of flexibility and performance
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Manage your business with a mature marketing strategy, develop your
              business so that it grows rapidly.
            </p>
            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-white/70 to-white/20" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featurePoints.map((point, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-700 ease-out hover:border-white/30 hover:bg-white/15 hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: shouldReduceMotion
                    ? "0ms"
                    : `${200 + index * 100}ms`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white transition-colors duration-700 group-hover:bg-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-white transition-colors duration-700 group-hover:text-white sm:text-base">
                    {point}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
