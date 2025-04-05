"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Check icon component with outlined design
const CheckIcon = ({ className }) => (
  <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-sm border-2 border-amber-400 mr-2">
    <svg
      className={`h-3 w-3 sm:h-4 sm:w-4 text-amber-400 ${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 13.5L4 10L3 11L7.5 15.5L17.5 5.5L16.5 4.5L7.5 13.5Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const ServiceCard = ({ title, items, iconSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl p-4 sm:p-6 transition-all duration-300 h-full shadow-md ${
        isHovered ? "bg-customGray text-white" : "bg-white text-gray-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-3 relative">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      </div>

      <ul className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.link} 
              className="flex items-start hover:opacity-80 transition-opacity group"
            >
              <CheckIcon
                className={isHovered ? "text-amber-400" : "text-amber-400"}
              />
              <span className={`text-xs sm:text-sm group-hover:underline ${isHovered ? "text-white" : "text-gray-800"}`}>
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-tl-lg"></div>
    </div>
  );
};

const ServicesSection = () => {
  const serviceCards = [
    {
      title: "Digital Marketing",
      items: [
        { text: "Google & Facebook Ads", link: "/services/google-ads" },
        { text: "SEO / Copywriting", link: "/services/seo" }
      ],
      iconSrc: "/assets/images/icons/2.png",
    },
    {
      title: "Consulting & Strategy",
      items: [
        { text: "Business Strategy & Consulting", link: "/services/business-consulting" }
      ],
      iconSrc: "/assets/images/icons/3.png",
    },
    {
      title: "Web & App Development",
      items: [
        { text: "Website Development", link: "/services/development" },
        { text: "App Development", link: "/services/app-development" }
      ],
      iconSrc: "/assets/images/icons/4.png",
    },
  ];

  return (
    <section className="bg-white">
      {/* Main Services Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-8 sm:py-12 md:py-16">
        {/* First Row: Title + Description and First Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left Column: Text Content */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customGray mb-4 sm:mb-6">
              Explore unique digital solutions service
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Crafting compelling digital experiences that captivate audiences
              and drive meaningful connections. Our digital solutions combines
              innovation, strategy, and expertise to fuel your online success.
            </p>
          </div>

          {/* Right Column: First Card */}
          <div>
            <ServiceCard
              title={serviceCards[0].title}
              items={serviceCards[0].items}
              iconSrc={serviceCards[0].iconSrc}
            />
          </div>
        </div>

        {/* Second Row: Two Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {serviceCards.slice(1).map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              items={card.items}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;