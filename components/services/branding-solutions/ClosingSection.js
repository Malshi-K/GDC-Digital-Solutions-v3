"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";

export default function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-customPurple opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-customPurple opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-customPurple/10 bg-customPurpleLight p-8 shadow-md md:p-12">
          <div className="flex flex-col md:flex-row md:items-center">
            <div
              className={`md:w-2/3 md:pr-8 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Achieve Success with{" "}
                <span className="text-customPurple">GDC Digital Solutions</span>
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Looking to refresh your logo, design new business cards, or
                launch a full branding campaign in Hamilton or anywhere across
                New Zealand? Let&apos;s talk about how we can make your brand
                stand out. We offer free consultations and creative insights to
                help you get started.
              </p>
            </div>

            <div
              className={`flex justify-center md:w-1/3 md:justify-end transition-all duration-700 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="rounded-xl border border-customPurple/20 bg-customPurple p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Ready to Elevate Your Brand?
                </h3>
                <p className="mb-6 text-gray-300">
                  Let&apos;s discuss how we can help your business succeed in today&apos;s competitive landscape.
                </p>
                <a
                  href="/contact-us"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-customPurple transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-customPurple/30"
                >
                  Contact Us Now
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="mt-6 flex justify-center">
                  <span className="text-sm text-gray-400">Or call us: </span>
                  <TrackedPhoneLink
                    phoneNumber="0278412236"
                    className="ml-2 text-sm text-white hover:underline"
                  >
                    027 841 2236
                  </TrackedPhoneLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
