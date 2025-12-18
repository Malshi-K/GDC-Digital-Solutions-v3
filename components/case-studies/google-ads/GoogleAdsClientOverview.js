"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaWrench,
  FaWater,
  FaBolt,
  FaCogs,
  FaClipboardList,
  FaGlobe,
  FaExternalLinkAlt,
  FaIndustry
} from "react-icons/fa";
import Link from "next/link";

const GoogleAdsClientOverview = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Detect when section is in viewport
  useEffect(() => {
    // Mobile-safe: if IntersectionObserver is missing/flaky (some mobile webviews),
    // don't leave the UI stuck at opacity-0.
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Define services with icons and labels
  const services = [
    {
      icon: FaBuilding,
      label: "Structural Engineering",
    },
    {
      icon: FaWater,
      label: "3 Waters & Contamination",
    },
    {
      icon: FaCogs,
      label: "Geotechnical Engineering",
    },
    {
      icon: FaBolt,
      label: "Seismic Engineering",
    },
    {
      icon: FaWrench,
      label: "Electrical Engineering",
    },
    {
      icon: FaClipboardList,
      label: "Civil Engineering",
    },
    {
      icon: FaGlobe,
      label: "R&D Solutions",
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-customPurple/5 to-customLightPurple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-customLightPurple/5 to-customPurple/5 rounded-full blur-3xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-customPurple/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-customLightPurple/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-customPurple/30 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-customPurple bg-clip-text text-transparent">
              CLIENT OVERVIEW
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive overview of our client partnership and delivered solutions
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Left Side - Enhanced Services Cards */}
          <div className="w-full xl:w-3/5">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-customPurple/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-customPurple rounded-lg flex items-center justify-center">
                  <FaCogs className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Services Provided</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-customPurple/30 transform cursor-pointer ${
                        isInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      } ${hoveredCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          hoveredCard === index 
                            ? 'bg-gradient-to-br from-customPurple to-customLightPurple shadow-lg' 
                            : 'bg-gradient-to-br from-customPurple/10 to-customLightPurple/10'
                        }`}>
                          <IconComponent 
                            size={24} 
                            className={`transition-colors duration-300 ${
                              hoveredCard === index ? 'text-white' : 'text-customPurple'
                            }`} 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-base leading-tight group-hover:text-customPurple transition-colors duration-300">
                            {service.label}
                          </h4>
                          <div className={`w-0 h-0.5 bg-customPurple transition-all duration-300 mt-2 ${
                            hoveredCard === index ? 'w-full' : 'group-hover:w-8'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Company Details */}
          <div
            className={`w-full xl:w-2/5 transition-all duration-700 transform ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-customPurple/10 overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-customPurple p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaBuilding className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Company Details</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  {/* Company Info Cards */}
                  <div className="bg-gradient-to-r from-customPurple/5 to-customLightPurple/5 rounded-lg p-4 border-l-4 border-customPurple">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBuilding className="text-customPurple" />
                      <span className="font-semibold text-customPurple">Company</span>
                    </div>
                    <span className="text-gray-800 font-medium">GDC Consultants Ltd</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-customLightPurple/5 to-customPurple/5 rounded-lg p-4 border-l-4 border-customLightPurple">
                    <div className="flex items-center gap-3 mb-2">
                      <FaIndustry className="text-customLightPurple" />
                      <span className="font-semibold text-customLightPurple">Industry</span>
                    </div>
                    <span className="text-gray-800 font-medium">Engineering Consultancy</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-customPurple/5 to-customLightPurple/5 rounded-lg p-4 border-l-4 border-customPurple">
                    <div className="flex items-center gap-3 mb-2">
                      <FaGlobe className="text-customPurple" />
                      <span className="font-semibold text-customPurple">Website</span>
                    </div>
                    <Link
                      href="https://www.gdcgroup.co.nz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-customPurple hover:text-customLightPurple font-medium transition-colors duration-200 group"
                    >
                      www.gdcgroup.co.nz
                      <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-customPurple rounded-full"></div>
                    About the Client
                  </h4>
                  <div className="text-gray-700 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-customLightPurple">
                    GDC Consultants is a full-service engineering consultancy offering
                    various specialised services across New Zealand. With a need to boost
                    their online presence and generate high-quality leads, GDC Consultants
                    partnered with its in-house digital marketing team,{" "}
                    <span className="font-semibold text-customPurple">GDC Digital Solutions</span>, to
                    manage Google Ads campaigns and drive inquiries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsClientOverview;