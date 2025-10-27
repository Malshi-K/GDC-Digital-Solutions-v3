"use client";

import { useEffect, useState } from "react";

export default function AboutHeader() {
  const [isLoaded, setIsLoaded] = useState(false);

  // trigger fade-in animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Decorative left full-height accent (visible on md+) */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-14 bg-customPurple" aria-hidden="true" />

      {/* Decorative right stacked blocks (visible on md+) */}
      <div className="hidden md:block absolute right-0 top-8 flex flex-col items-end space-y-4 pr-2" aria-hidden="true">
        <div className="bg-gray-400 w-14 h-14" />
        <div className="bg-customPurple w-14 h-14" />
      </div>

      {/* Centered constrained content container */}
      <div className="max-w-8xl mx-auto px-6 md:px-8 py-8 md:py-10">
        <div className={`fade-in-up ${isLoaded ? "is-visible" : ""} text-center`}> 
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 max-w-4xl mx-auto">
            We are the experts in driving digital growth
            <span className="hidden md:inline"> through innovative solutions</span>
          </h3>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From web development and SEO to targeted ad campaigns and cutting-edge
            technology, our team crafts strategies that empower businesses to
            thrive in the digital landscape.
          </p>

          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold inline-block border-b-2 border-black pb-2">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              At GDC Digital Solutions, we are dedicated to empowering businesses
              through innovative digital strategies. Our team specialises in
              solutions that enhance communication, streamline operations, and
              drive growth. With over a decade of experience and a global network
              of partners, we are committed to delivering excellence at every step.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-in-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}