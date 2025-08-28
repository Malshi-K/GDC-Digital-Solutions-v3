"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPinIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  UserGroupIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline";

const LocalBusinessTargeting = () => {
  const [activeIndustry, setActiveIndustry] = useState("real-estate");
  const [isVisible, setIsVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the tabs animation start
          setTimeout(() => {
            setTabsVisible(true);
          }, 600);
        }
      },
      {
        threshold: 0.1,
      }
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

  // Industry-specific data
  const industries = [
    {
      id: "real-estate",
      title: "Real Estate Facebook Ads NZ",
      description: "Maximise property exposure with effective Facebook ad campaigns that generate more enquiries and sales.",
      icon: <HomeIcon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/real-estate.jpg"
    },
    {
      id: "e-commerce",
      title: "E-commerce Facebook Ads NZ",
      description: "Increase online sales with targeted ads designed to drive traffic and conversions.",
      icon: <ShoppingBagIcon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/ecommerce.jpg"
    },
    {
      id: "hospitality",
      title: "Hospitality Facebook Ads NZ",
      description: "Boost bookings and brand awareness for restaurants, hotels, and bars with engaging Facebook ad campaigns.",
      icon: <BuildingStorefrontIcon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/hospitality.jpg"
    },
    {
      id: "tourism",
      title: "Tourism Marketing NZ",
      description: "Capture the attention of travellers and tourists with dynamic Facebook ads that showcase your destination or service.",
      icon: <GlobeAltIcon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/tourism.jpg"
    },
    {
      id: "finance",
      title: "Finance & Insurance Ads NZ",
      description: "We create tailored Facebook Ads that help financial and insurance companies connect with their audience and generate qualified leads.",
      icon: <CurrencyDollarIcon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/finance.jpg"
    },
    {
      id: "restaurant",
      title: "Restaurant Facebook Ads NZ",
      description: "Increase foot traffic and online orders with Facebook ads designed specifically for the restaurant industry.",
      icon: <BuildingOffice2Icon className="w-10 h-10 text-customYellow" />,
      image: "/assets/images/facebook/restaurant.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            Local Business Targeting in New Zealand
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-customYellow"></span>
          </h2>
        </div>

        {/* Main Content - Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div 
            className={`lg:col-span-7 transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-gray-700 text-lg mb-6">
              We understand the needs of NZ entrepreneurs and local businesses, which is why we offer local business ads NZ designed to build relationships within your community. Whether you are a restaurant in Auckland or a real estate agent in Wellington, we create social media ads for businesses in NZ that deliver results.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Business Facebook Ads</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-customYellow flex items-center justify-center">
                      <span className="text-black font-bold text-xs">•</span>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Small Business Marketing NZ:</span> We focus on boosting your local presence and attracting more customers to your business.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-customYellow flex items-center justify-center">
                      <span className="text-black font-bold text-xs">•</span>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Online Business Success NZ:</span> Expand your digital footprint and grow your online business through highly targeted Facebook advertising.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            className={`lg:col-span-5 transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[320px]">
              <Image
                src="/assets/images/facebook/fb.jpg" // Replace with your actual image
                alt="Local business in New Zealand"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                
                <h3 className="text-white text-xl font-bold">Connecting Local Businesses with Local Customers</h3>
                <div className="mt-3 flex items-center">
                  <MapPinIcon className="h-5 w-5 text-customYellow mr-2" />
                  <span className="text-white">Targeted Facebook Ads across New Zealand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry-Specific Section */}
        <div className="mb-16">
          <h3 
            className={`text-2xl font-bold text-center text-gray-900 mb-10 transition-all duration-500 ease-out transform ${
              tabsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Industry-Specific Facebook Ads
          </h3>
          
          <p 
            className={`text-center text-gray-700 max-w-3xl mx-auto mb-12 transition-all duration-500 ease-out transform ${
              tabsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            We have experience working with businesses across a range of industries in New Zealand, offering tailored Facebook Ads NZ strategies that meet the unique needs of each sector.
          </p>

          {/* Industry Tabs */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-500 ease-out ${
              tabsVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? "bg-customYellow text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveIndustry(industry.id)}
              >
                {industry.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Industry Content */}
          <div 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-out transform ${
              tabsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`transition-all duration-500 ${
                  activeIndustry === industry.id ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="bg-gray-100 p-3 inline-block rounded-full mb-4">
                      {industry.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h4>
                    <p className="text-gray-700 mb-6">{industry.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <UserGroupIcon className="h-5 w-5 text-customYellow" />
                        </div>
                        <div>
                          <h5 className="font-medium">Audience Targeting</h5>
                          <p className="text-sm text-gray-600">Precise audience segments specific to {industry.title.split(" ")[0].toLowerCase()} customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <ChevronDownIcon className="h-5 w-5 text-customYellow" />
                        </div>
                        <div>
                          <h5 className="font-medium">Lower Acquisition Costs</h5>
                          <p className="text-sm text-gray-600">Industry-optimised campaigns for better ROI</p>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="/contact-us" 
                      className="inline-flex items-center mt-8 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-customYellow hover:bg-customLightYellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customYellow transition-all duration-300"
                    >
                      Get Industry-Specific Strategy
                    </a>
                  </div>
                  
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={industry.image} // This would be the industry-specific image
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalBusinessTargeting;