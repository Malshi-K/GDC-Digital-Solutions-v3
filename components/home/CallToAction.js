
// ConsultationCTA.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
const ConsultationCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 overflow-hidden">
      {/* Purple Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 7, 200, 0.3), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(194, 3, 157, 0.3), transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 7, 200, 0.4), transparent 50%),
            linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #6d28d9 50%, #8b5cf6 75%, #a855f7 100%)
          `
        }}
      ></div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-10 left-10 w-20 h-20 rounded-lg opacity-20 transform rotate-12"
          style={{ background: "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)" }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ background: "linear-gradient(135deg, #c2039d 0%, #7407c8 100%)" }}
        ></div>
        <div 
          className="absolute top-1/3 right-10 w-12 h-12 rounded-lg opacity-25 transform -rotate-12"
          style={{ background: "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)" }}
        ></div>
      </div>
      {/* Content Container */}
      <div className="container text-center mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with gradient text effect */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-white">Let&apos;s Discuss Your </span>
            <span 
              className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Business Goals
            </span>
            <span className="text-white"> & Schedule A </span>
            <span 
              className="bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent"
            >
              Free Consultation
            </span>
            <span className="text-white"> Today</span>
          </h2>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your digital presence with our expert guidance. Get personalized strategies tailored to your business needs.
          </p>
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA Button */}
            <Link href="/schedule-consultation">
              <span 
                className="inline-flex items-center px-8 py-4 text-customPurple text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50 group"
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
              <span className="inline-flex items-center px-8 py-4 text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm group">
                Contact Us
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-110"
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
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Expert Guidance</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Personalized Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConsultationCTA;
