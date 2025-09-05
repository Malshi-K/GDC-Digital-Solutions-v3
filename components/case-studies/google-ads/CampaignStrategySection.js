"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaSearch, FaUsers, FaAd, FaDollarSign, FaGlobe } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampaignStrategySection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Carousel settings
  const carouselSettings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Carousel points data
  const strategyPoints = [
    {
      icon: <FaSearch className="text-5xl text-customPurple mb-4" />,
      title: "Optimised Search and Display Ads",
      description:
        "Focused on engineering-related keywords, utilizing a mix of broad and exact match keywords. Key negative keywords were added to prevent irrelevant clicks.",
    },
    {
      icon: <FaUsers className="text-5xl text-customPurple mb-4" />,
      title: "Targeted Audiences",
      description:
        "Segmented audiences based on affinities and personalised behavior, such as project managers, architectural service seekers, and consulting services.",
    },
    {
      icon: <FaAd className="text-5xl text-customPurple mb-4" />,
      title: "Improved Ad Extensions",
      description:
        "Ad extensions were utilised to enhance the visibility of GDC's contact information, special offers, and service highlights.",
    },
    {
      icon: <FaDollarSign className="text-5xl text-customPurple mb-4" />,
      title: "Cost Efficiency",
      description:
        "Regularly monitored the campaigns to reduce CPC and CPA while ensuring high visibility in competitive regions like Auckland, Wellington, and Hamilton.",
    },
    {
      icon: <FaGlobe className="text-5xl text-customPurple mb-4" />,
      title: "Website Improvements",
      description:
        "The website's performance was improved with better alignment between page content and search queries, faster load times, and enhanced user experience.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div
          className={`w-full md:w-1/2 pr-8 text-center transition-all duration-800 ease-out ${
            isInView 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-customPurple text-3xl md:text-4xl font-bold mb-4 flex flex-wrap justify-center">
            {/* Split letters with animation delay */}
            {"CAMPAIGN".split("").map((letter, index) => (
              <span
                key={`campaign-${index}`}
                className={`transition-all duration-300 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  display: 'inline-block'
                }}
              >
                {letter}
              </span>
            ))}
            <span
              className={`mx-1 transition-all duration-300 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                transitionDelay: `${8 * 100}ms`,
                display: 'inline-block'
              }}
            >
              &nbsp;
            </span>
            {"STRATEGY".split("").map((letter, index) => (
              <span
                key={`strategy-${index}`}
                className={`transition-all duration-300 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ 
                  transitionDelay: `${(9 + index) * 100}ms`,
                  display: 'inline-block'
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          <p 
            className={`text-gray-700 leading-relaxed transition-opacity duration-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: '1.7s' }}
          >
            Based on an in-depth analysis of the market, GDC Digital Solutions
            implemented the following strategies:
          </p>
        </div>

        {/* Right Content - Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Slider {...carouselSettings}>
            {strategyPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6 py-8 bg-gray-100 rounded-xl shadow-lg"
              >
                {/* Icon Wrapper */}
                <div className="flex m-auto items-center justify-center w-24 h-24">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-customPurple mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Add custom CSS for transitions that are difficult with just Tailwind */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CampaignStrategySection;