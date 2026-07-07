"use client";

import { useRef, useState, useEffect } from "react";
import {
  PaintBrushIcon,
  ChartBarIcon,
  CheckCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useReducedMotion } from "framer-motion";

const brandingFeatures = [
  {
    icon: LightBulbIcon,
    title: "Strategic Thinking",
    description: "Creative concepts that align with your business goals",
  },
  {
    icon: PaintBrushIcon,
    title: "Creative Design",
    description: "Memorable visuals that capture your brand essence",
  },
  {
    icon: UserGroupIcon,
    title: "Audience Connection",
    description: "Designs that resonate with your target market",
  },
  {
    icon: ChartBarIcon,
    title: "Business Growth",
    description: "Brand identity that drives real results",
  },
];

const brandingServices = [
  "Logo Design",
  "Social Media Promotional Design",
  "Flyers & Leaflets",
  "Signboard & Signage Design",
  "Business Cards",
  "Letterheads",
  "Complete Digital & Print Branding Kits",
];

const FeatureCard = ({ icon: Icon, title, description, index, isVisible, shouldReduceMotion }) => (
  <article
    className={`group relative overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] shadow-md transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div
      className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
        shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
      }`}
      aria-hidden="true"
    />
    <div className="relative z-10 p-5">
      <Icon className="mb-3 h-8 w-8 text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
      <h4 className="mb-1 text-sm font-semibold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-white">
        {title}
      </h4>
      <p className="text-xs leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
        {description}
      </p>
    </div>
  </article>
);

export default function BrandingSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-customPurple/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-customPurple/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`rounded-3xl border border-customPurple/10 bg-customPurpleLight px-6 py-10 shadow-md transition-all duration-700 ease-out sm:px-10 sm:py-12 md:px-14 md:py-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-14 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Branding{" "}
              <span className="bg-customPurple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              From Concept to Cohesion: Your Brand, Our Expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5">
              <div
                className={`rounded-2xl border border-[#e8d9ef] bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
                  <span className="mr-3 h-8 w-1 rounded-full bg-ds-gradient" />
                  More Than Just a Logo
                </h2>
                <p className="leading-relaxed text-gray-700">
                  Your brand is the story you tell, the impression you leave, and the promise you keep.
                  We craft powerful, cohesive brands that resonate with people — whether you&apos;re a small,
                  medium, or large business connecting with customers right here in Hamilton or reaching
                  audiences across New Zealand.
                </p>
              </div>

              <div
                className={`relative overflow-hidden rounded-2xl bg-customPurple p-8 text-white shadow-lg transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="mb-4 text-xl font-bold">What We Create</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {brandingServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-customPurpleLight" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div
                className={`rounded-2xl border border-[#e8d9ef] bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Building Strong Foundations
                </h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  A strong brand is the foundation of every successful business. It builds trust,
                  creates recognition, and helps you stand out from the competition. Our branding
                  services give your business a visual identity that is consistent, memorable,
                  and true to who you are.
                </p>
                <p className="leading-relaxed text-gray-700">
                  We blend strategic thinking with creative design to craft branding materials that
                  not only look great but also connect with your audience. The result? A brand with
                  a clear voice and a visual style that resonates with your customers and supports
                  real business growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {brandingFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                    isVisible={isVisible}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
