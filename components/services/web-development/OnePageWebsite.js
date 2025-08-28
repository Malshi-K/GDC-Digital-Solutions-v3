"use client";

import { useState, useEffect } from "react";

const OnePageWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible on component mount with a small delay
    // This simulates the initial animation that was in the Framer Motion version
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
      {/* Left Content Section */}
      <div
        className={`flex-1 px-20 z-10 transform transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <h2 className="text-4xl font-bold text-customYellow mb-4">
          ONE-PAGE WEBSITES
        </h2>
        <p className="text-md font-medium text-gray-800 mb-6 leading-relaxed">
          Simplify your online presence with a visually appealing, fast-loading,
          and user-friendly one-page website. Our expert design team ensures
          that each section of your one-page site tells a compelling story about
          your business, driving engagement and conversions. Ideal for startups,
          events, or product launches, our one-page websites are 100%
          mobile-optimised and SEO-ready to help you effectively reach your
          audience.
        </p>
        <a
          href="/schedule-consultation"
          className="inline-block text-customYellow hover:text-white border border-customYellow hover:bg-customGray
                     hover:border-none rounded-full px-6 py-3 font-semibold transition-all duration-300 ease-in-out 
                     hover:scale-110 transform"
        >
          Book Free Consultation
        </a>
      </div>

      {/* Right Background Image Section */}
      <div className="flex-1 relative h-[400px] md:h-[500px] w-full md:w-1/2">
        <div
          className="absolute inset-0 bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/images/website-dev/one-page-site.gif')", // Replace with actual image path
          }}
        ></div>
      </div>
    </section>
  );
};

export default OnePageWebsite;