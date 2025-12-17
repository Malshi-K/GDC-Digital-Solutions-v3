"use client";
import React, { useState } from "react";
import Link from "next/link";

// (Removed boxed check icon - lists will use native bullet points)

const ServiceCard = ({ title, description, items, iconSrc, maxItems = Infinity }) => {
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

      {/* Title - Centered on small, left on md+ so bullets align */}
      <h3 className={`text-xl sm:text-2xl font-bold text-center md:text-left mb-3 text-gray-900`}>{title}</h3>

      {/* Description - Centered on small, left on md+ */}
      <p className={`text-sm text-center md:text-left mb-6 text-gray-600`}>
        {description}
      </p>

  {/* Items List - Left aligned with slightly larger custom-colored bullets */}
  <ul className="list-none md:list-disc pl-0 md:pl-10 lg:pl-12 xl:pl-14 space-y-2 sm:space-y-3 text-center md:text-left md:marker:text-customPurple md:marker:text-lg">
        {(showAll ? items : items.slice(0, maxItems)).map((item, index) => (
          <li key={index}>
            <Link 
              href={item.link} 
              className="text-sm sm:text-base text-gray-600 hover:text-customPurple transition-colors duration-200"
            >
              {item.text}
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
      iconSrc: "/assets/images/icons/2.png",
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