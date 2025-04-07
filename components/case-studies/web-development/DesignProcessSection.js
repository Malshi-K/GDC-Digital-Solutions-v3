"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, 
  FaSitemap, 
  FaPalette, 
  FaCode, 
  FaRocket,
  FaLightbulb,
  FaUserFriends,
  FaClipboardCheck,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

// Icon mapping
const iconComponents = {
  FaSearch: FaSearch,
  FaSitemap: FaSitemap,
  FaPalette: FaPalette,
  FaCode: FaCode,
  FaRocket: FaRocket,
  FaLightbulb: FaLightbulb,
  FaUserFriends: FaUserFriends,
  FaClipboardCheck: FaClipboardCheck,
  FaCogs: FaCogs,
  FaChartLine: FaChartLine
};

const DesignProcessSection = ({ data }) => {
  // Always declare hooks at the top level, before any conditional logic
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only run the observer logic if we have data to display
    if (!data || !data.steps || data.steps.length === 0) {
      return;
    }

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
    };
  }, [data]);

  // If no design process data is available, return early
  if (!data || !data.steps || data.steps.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-500 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-customYellow mb-6">
            Our Design Process
          </h2>
          {data.introduction && (
            <p className="text-gray-700 max-w-3xl mx-auto">
              {data.introduction}
            </p>
          )}
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.steps.map((step, index) => {
            // Get the icon component or default to FaLightbulb
            const IconComponent = iconComponents[step.icon] || FaLightbulb;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-8 flex flex-col items-start hover:shadow-lg transition-all duration-500 transform ${
                  isContentVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-4xl font-bold text-customYellow opacity-30">
                    {step.number}
                  </span>
                  <div className="bg-customYellow bg-opacity-10 p-3 rounded-full">
                    <IconComponent className="text-customYellow text-xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;