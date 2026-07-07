"use client";

import { useRef, useState, useEffect } from "react";
import {
  PaintBrushIcon,
  HashtagIcon,
  RectangleStackIcon,
  CreditCardIcon,
  DocumentIcon,
  BriefcaseIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const expertiseItems = [
  {
    title: "Logo Design",
    description:
      "A professional logo is the cornerstone of your brand. Our team designs unique, impactful logos that not only look great but also reflect your values and mission. Whether you're a small business in Hamilton or a growing company across New Zealand, we'll create a logo that sets you apart and stands the test of time.",
    icon: PaintBrushIcon,
  },
  {
    title: "Social Media Promotional Design",
    description:
      "From eye-catching Instagram posts to bold Facebook banners, we design social media graphics that keep your brand consistent, engaging, and memorable. Our designs are tailored for New Zealand audiences, helping your business stand out online and connect with the right people.",
    icon: HashtagIcon,
  },
  {
    title: "Flyers & Leaflets",
    description:
      "We create professionally designed flyers and leaflets that grab attention and clearly communicate your message — perfect for local marketing campaigns in Hamilton and throughout New Zealand.",
    icon: NewspaperIcon,
  },
  {
    title: "Signboard & Signage Design",
    description:
      "We design powerful, high-impact signboards and signage that make your brand visible and inviting whether on busy Hamilton streets or anywhere across New Zealand.",
    icon: RectangleStackIcon,
  },
  {
    title: "Business Cards",
    description:
      "Your business card is often the first physical connection you share with a client. We design professional, memorable cards that leave a positive impression and help build trust and credibility in Hamilton and across New Zealand.",
    icon: CreditCardIcon,
  },
  {
    title: "Letterheads",
    description:
      "A well-designed letterhead is more than just stationery; it's a mark of professionalism. We create custom letterheads that strengthen your brand identity and add credibility to every official document.",
    icon: DocumentIcon,
  },
  {
    title: "Complete Digital & Print Branding Kits",
    description:
      "Consistency is key to a strong brand. We offer complete branding kits covering brochures, letterheads, business cards, digital ads, and email signatures — a one-stop-shop for all branding needs.",
    icon: BriefcaseIcon,
  },
];

const ServiceCard = ({ item, index, isVisible, shouldReduceMotion }) => {
  const Icon = item.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
          shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
        }`}
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-customPurple/10 text-sm font-bold text-customPurple transition-colors duration-700 ease-in-out group-hover:bg-white/20 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="inline-flex rounded-xl bg-white/70 p-3 shadow-sm transition-colors duration-700 ease-in-out group-hover:bg-white/15">
            <Icon className="h-8 w-8 text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-white">
          {item.title}
        </h3>
        <p className="flex-grow leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default function ExpertiseSection() {
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
    <section ref={sectionRef} className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-customPurple/10 bg-customPurpleLight px-6 py-12 shadow-md sm:px-8 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "url('/assets/images/services/6.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-customPurpleLight via-customPurpleLight/95 to-customPurple/10" />

          <div className="relative z-10">
            <div
              className={`mb-12 transform text-center transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
              }`}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                List of Services
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-700">
                Unlock the power of flexibility and performance. Manage your
                business with a mature strategy, develop your business so that it
                grows rapidly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {expertiseItems.map((item, index) => (
                <ServiceCard
                  key={index}
                  item={item}
                  index={index}
                  isVisible={isVisible}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            <div
              className={`mt-12 text-center transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <Link
                href="/contact-us"
                className="group inline-flex transform items-center rounded-xl bg-customPurple px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-customPurpleDark hover:shadow-lg hover:shadow-customPurple/30"
              >
                Get Started with Your Branding Project
                <svg
                  className="-mr-1 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
