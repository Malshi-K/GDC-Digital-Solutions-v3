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
} from "react-icons/fa";
import Link from "next/link";

const GoogleAdsClientOverview = () => {
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
      { threshold: 0.5 }
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

  // Define services with icons and labels
  const services = [
    {
      icon: <FaBuilding size={24} className="text-customPurple" />,
      label: "Structural Engineering",
    },
    {
      icon: <FaWater size={24} className="text-customPurple" />,
      label: "3 Waters & Contamination",
    },
    {
      icon: <FaCogs size={24} className="text-customPurple" />,
      label: "Geotechnical Engineering",
    },
    {
      icon: <FaBolt size={24} className="text-customPurple" />,
      label: "Seismic Engineering",
    },
    {
      icon: <FaWrench size={24} className="text-customPurple" />,
      label: "Electrical Engineering",
    },
    {
      icon: <FaClipboardList size={24} className="text-customPurple" />,
      label: "Civil Engineering",
    },
    {
      icon: <FaGlobe size={24} className="text-customPurple" />,
      label: "R&D Solutions",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col md:flex-row items-start justify-center py-16 px-6 md:px-20"
    >
      {/* Left Side - Services */}
      <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 items-start justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border-2 border-customPurple rounded-full shadow-md p-2 mx-auto transition-all duration-500 ease-out"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-center justify-center w-15 h-15">
              {service.icon}
            </div>
            <div className="pb-6">
              <p className="text-center font-semibold text-gray-800 text-sm mt-2">
                {service.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Overview Details */}
      <div
        className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start space-y-4 mt-8 md:mt-0 transition-all duration-800 ease-out"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(30px)',
          transitionDelay: '0.3s'
        }}
      >
        <h2 className="text-2xl font-bold text-customPurple mb-4">
          CLIENT OVERVIEW
        </h2>
        <p>
          <span className="font-semibold">Company:</span> GDC Consultants Ltd
        </p>
        <p>
          <span className="font-semibold">Industry:</span> Engineering
          Consultancy
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <Link
            href="https://www.gdcgroup.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            www.gdcgroup.co.nz
          </Link>
        </p>
        <p className="text-gray-700 leading-relaxed">
          GDC Consultants is a full-service engineering consultancy offering
          various specialised services across New Zealand. With a need to boost
          their online presence and generate high-quality leads, GDC Consultants
          partnered with its in-house digital marketing team,
          <span className="font-semibold"> GDC Digital Solutions</span>, to
          manage Google Ads campaigns and drive inquiries.
        </p>
      </div>
    </section>
  );
};

export default GoogleAdsClientOverview;