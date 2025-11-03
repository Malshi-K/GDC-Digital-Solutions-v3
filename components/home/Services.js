"use client";
import React, { useState } from "react";
import Link from "next/link";

// Check icon component with outlined design
const CheckIcon = ({ className, isHovered }) => (
  <div className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 border-2 mr-2 transition-colors duration-300 ${
    isHovered ? "border-white" : "border-purple-600"
  }`}>
    <svg
      className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300 ${
        isHovered ? "text-white" : "text-customPurple"
      } ${className}`}
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

const ServiceCard = ({ title, description, items, iconSrc, maxItems = Infinity }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={"relative rounded-2xl p-2 transition-all duration-300 h-full"}
    >
      {/* Icon - Centered at top */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Title - Centered */}
      <h3 className={`text-xl sm:text-2xl font-bold text-center mb-3 transition-colors duration-300 ${
        isHovered ? "text-white" : "text-gray-900"
      }`}>{title}</h3>

      {/* Description - Now visible */}
      <p className={`text-sm text-center mb-6 transition-colors duration-300 ${
        isHovered ? "text-gray-100" : "text-gray-600"
      }`}>
        {description}
      </p>

      {/* Items List - Centered */}
      <ul className="space-y-2 sm:space-y-3">
        {(showAll ? items : items.slice(0, maxItems)).map((item, index) => (
          <li key={index} className="flex justify-center">
            <Link 
              href={item.link} 
              className="flex items-start hover:opacity-80 transition-opacity group"
            >
              <CheckIcon isHovered={isHovered} />
              <span className={`text-sm sm:text-base transition-colors duration-300 ${
                isHovered ? "text-white" : "text-gray-600"
              }`}>
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {items.length > maxItems && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="text-customPurple font-medium text-sm hover:underline"
            aria-expanded={showAll}
          >
            {showAll ? "View less" : `View more (${items.length - maxItems})`}
          </button>
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const serviceCards = [
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our expert digital marketing services.",
      items: [
        { text: "Google & Facebook Ads", link: "/services/google-ads" },
        { text: "SEO / Copywriting", link: "/services/seo" }
      ],
      iconSrc: "/assets/images/icons/2.png",
    },
    {
      title: "Consulting & Strategy",
      description: "Unlock your business potential with our strategic consulting services.",
      items: [
        { text: "Business Strategy & Consulting", link: "/services/business-consulting" }
      ],
      iconSrc: "/assets/images/icons/3.png",
    },
    {
      title: "Web & App Development",
      description: "Transform your ideas into reality with our web and app development services.",
      items: [
        { text: "Website Development", link: "/services/development" },
        { text: "App Development", link: "/services/app-development" }
      ],
      iconSrc: "/assets/images/icons/4.png",
    },
    {
      title: "Branding Solutions",
      description: "Elevate your brand with our comprehensive branding solutions.",
      items: [
        { text: "Logo Design", link: "/services/branding-solutions" },
        { text: "Social Media Promotional Designs", link: "/services/branding-solutions"},
        { text: "Flyers & Leaflets", link: "/services/branding-solutions"},
        { text: "Signboard & Signage Design", link: "/services/branding-solutions"},
        { text: "Business Cards", link: "/services/branding-solutions"},
        { text: "Letterheads", link: "/services/branding-solutions"},
        { text: "Complete Digital & Print Branding Kits", link: "/services/branding-solutions"}
      ],
      iconSrc: "/assets/images/icons/4.png",
      maxItems: 2,
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Main Services Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16">
        {/* Title and Description - Centered */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Explore unique digital solutions service
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Crafting compelling digital experiences that captivate audiences
            and drive meaningful connections. Our digital solutions combines
            innovation, strategy, and expertise to fuel your online success.
          </p>
        </div>
        
        {/* Responsive grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {serviceCards.map((card, index) => (
            <div key={index} className="h-full">
              <ServiceCard
                title={card.title}
                description={card.description}
                items={card.items}
                iconSrc={card.iconSrc}
                maxItems={card.maxItems}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;