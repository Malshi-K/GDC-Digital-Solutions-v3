"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaLightbulb,
  FaUserFriends,
  FaPencilAlt,
  FaChartLine,
  FaArrowDown,
  FaBuilding,
  FaUsers,
  FaImages,
  FaVideo,
  FaChartBar
} from "react-icons/fa"; // Icons for each Facebook advertising service

export default function FacebookAdsProcessFlow() {
  // State to track which elements are in view
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  // Function to check if elements are in viewport
  const useElementOnScreen = (ref, threshold = 0.2) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
            }
          });
        },
        { threshold }
      );

      // Find all the elements with data-index attribute
      const elements = sectionRef.current?.querySelectorAll('[data-index]');
      if (elements) {
        elements.forEach(el => observer.observe(el));
      }

      return () => {
        if (elements) {
          elements.forEach(el => observer.unobserve(el));
        }
      };
    }, [threshold]);
  };

  // Apply the hook
  useElementOnScreen(sectionRef);

  // Steps array for the Facebook advertising services
  const services = [
    {
      icon: <FaLightbulb className="text-customPurple text-4xl mb-4" />,
      title: "Facebook Ad Strategy & Campaign Setup",
      description:
        "We create a customised Facebook Ads strategy based on your business goals, ensuring high engagement and lead generation.",
    },
    {
      icon: <FaUserFriends className="text-customPurple text-4xl mb-4" />,
      title: "Audience Targeting & Retargeting",
      description:
        "We help you reach the right people, including:",
      subItems: [
        {
          icon: <FaBuilding className="text-customPurple text-xl inline-block mr-2" />,
          text: "Local Business Ads NZ – Target customers based on location, demographics, and behaviour."
        },
        {
          icon: <FaUsers className="text-customPurple text-xl inline-block mr-2" />,
          text: "Lookalike Audiences – Expand your reach by targeting users similar to your best customers."
        }
      ]
    },
    {
      icon: <FaPencilAlt className="text-customPurple text-4xl mb-4" />,
      title: "Ad Creation & Optimisation",
      description:
        "From Facebook carousel ads to video marketing, we design eye-catching ads that increase clicks and conversions.",
      subItems: [
        {
          icon: <FaImages className="text-customPurple text-xl inline-block mr-2" />,
          text: "Carousel & Image Ads – Showcase multiple products or features in a single ad."
        },
        {
          icon: <FaVideo className="text-customPurple text-xl inline-block mr-2" />,
          text: "Video Ads – Engage your audience with compelling video content."
        }
      ]
    },
    {
      icon: <FaChartLine className="text-customPurple text-4xl mb-4" />,
      title: "Performance Tracking & Reporting",
      description:
        "We continuously monitor, analyse, and optimise your Facebook Ads for the best results.",
      subItems: [
        {
          icon: <FaChartBar className="text-customPurple text-xl inline-block mr-2" />,
          text: "Detailed analytics and insights to track ROI and campaign effectiveness."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          data-index="title"
          className={`text-center mb-12 transition-opacity duration-1000 ease-out ${
            visibleItems.has("title") ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-customGray">
            Our Facebook Advertising Services
          </h2>
          <p className="text-gray-600 mt-4">
            Comprehensive solutions to boost your brand&apos;s presence on Facebook
          </p>
        </div>

        {/* Process Flow Vertical Layout */}
        <div className="flex flex-col space-y-16 relative">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={`service-${index}`}
              className={`flex flex-col items-center text-center max-w-md mx-auto transform transition-all duration-800 ease-out ${
                visibleItems.has(`service-${index}`) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Icon */}
              {service.icon}

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Sub Items if any */}
              {service.subItems && (
                <div className="w-full text-left mt-2 space-y-3">
                  {service.subItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <span className="mr-2 mt-1">{item.icon}</span>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Arrow Between Services */}
              {index < services.length - 1 && (
                <div
                  data-index={`arrow-${index}`}
                  className={`mt-8 transition-opacity duration-500 ease-out ${
                    visibleItems.has(`arrow-${index}`) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 500 + 500}ms` }}
                >
                  <FaArrowDown className="text-gray-400 text-3xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}