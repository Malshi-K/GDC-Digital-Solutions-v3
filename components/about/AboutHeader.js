"use client";

import { useEffect, useState } from "react";

export default function AgencyHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax effect on background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set loaded state after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex items-stretch w-full">
      {/* Left yellow accent bar */}
      <div className="w-16 bg-customPurple hidden md:block"></div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Content section - takes 2/3 on desktop */}
        <div className="text-center p-6 md:p-12">
          <div 
            className={`fade-in-up ${isLoaded ? 'is-visible' : ''}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              We are the experts in driving digital growth through innovative
              solutions
            </h1>

            <div className="text-gray-600 mb-12">
              <p className="mb-4">
                From web development and SEO to targeted ad campaigns and
                cutting-edge technology, our team excels at crafting strategies
                that empower businesses to thrive in the digital landscape.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold border-b-2 border-black inline-block pb-2 mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600">
                At GDC Digital Solutions, we are dedicated to empowering
                businesses through innovative digital strategies. Our team of
                experts specialises in offering cutting-edge solutions that
                enhance communication, streamline operations, and drive growth.
                With over a decade of industry experience and a global network
                of partners, we are committed to delivering excellence at every
                step of the journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right accent block */}
      <div className="hidden md:block">
        <div className="bg-gray-400 w-16 h-16 absolute right-0 top-0"></div>
        <div className="bg-customPurple w-16 h-16 absolute right-0 top-16"></div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}