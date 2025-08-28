// ConsultationCTA.jsx
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ConsultationCTA = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/assets/images/hero-bg.jpg")',
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="container text-center mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Let&apos;s Discuss Your Business Goals & Schedule A Free Consultation
            Today
          </h2>

          {/* CTA Button */}
          <Link href="/schedule-consultation">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-customYellow text-white text-sm sm:text-base font-medium rounded-full hover:bg-customLightYellow transition-colors duration-300">
              Book Free Consultation
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;