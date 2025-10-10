
// ConsultationCTA.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const ConsultationCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Container with rounded corners and gradient */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #8B5CF6 0%, #A855F7 25%, #C084FC 50%, #E879F9 75%, #F472B6 100%)`
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute top-10 right-20 w-24 h-24 rounded-lg opacity-10 transform rotate-12"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)" }}
            ></div>
            <div
              className="absolute bottom-20 left-10 w-20 h-20 rounded-full opacity-15"
              style={{ background: "linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)" }}
            ></div>
            <div
              className="absolute top-1/3 left-20 w-16 h-16 rounded-lg opacity-12 transform -rotate-12"
              style={{ background: "linear-gradient(135deg, #A855F7 0%, #F472B6 100%)" }}
            ></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Let's Discuss Your Business Goals & Schedule A Free Consultation Today
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with our expert guidance. Get personalized strategies tailored to your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* Primary CTA Button */}
              <Link href="/schedule-consultation">
                <span
                  className="inline-flex items-center px-8 py-4 text-purple-700 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50 group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Book Free Consultation
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              {/* Secondary CTA Button */}
              <Link href="/contact-us">
                <span
                  className="inline-flex items-center px-8 py-4 text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm group"
                  onMouseEnter={() => setIsContactHovered(true)}
                  onMouseLeave={() => setIsContactHovered(false)}
                >
                  Contact Us
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      isContactHovered ? "scale-110" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Personalized Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
