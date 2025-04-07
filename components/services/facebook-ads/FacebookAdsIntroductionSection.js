"use client";

import { useEffect, useState } from "react";

export default function FacebookAdsIntroductionSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect on background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-stretch w-full py-12">
      {/* Left yellow accent bar */}
      <div className="w-16 bg-customYellow hidden md:block"></div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Content section - takes 2/3 on desktop */}
        <div className="w-full md:w-2/3 p-6 md:p-12">
          <div
            className={`transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Boost Your Business with Expert Facebook Ads Management
            </h1>

            <div className="text-gray-600 mb-12">
              <p className="mb-4">
                We help businesses across New Zealand grow with powerful,
                data-driven Facebook Ads. If you are aiming to generate leads,
                increase sales, or enhance brand awareness, our Facebook ad
                experts can design high-converting campaigns that deliver real
                results.
              </p>
            </div>
          </div>
        </div>

        {/* Image section - takes 1/3 on desktop */}
        <div className="w-full md:w-1/3">
          <div className="h-full relative">
            <img
              src="/assets/images/services/Facebook Ads.jpg"
              alt="Facebook Ads Management"
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Simple parallax effect
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right accent block */}
      <div className="hidden md:block">
        <div className="bg-gray-400 w-16 h-16 absolute right-0 top-0"></div>
        <div className="bg-customYellow w-16 h-16 absolute right-0 top-16"></div>
      </div>
    </div>
  );
}