"use client";

import React from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaLaptopCode,
  FaArrowDown,
  FaFileAlt,
  FaBullseye,
  FaPlay,
  FaChartLine,
  FaTools,
  FaChartPie
} from "react-icons/fa"; // Icons for each step

export default function GoogleAdsProcessFlow() {
  // This component no longer uses intersection observers or animated reveals.
  // All content renders immediately to avoid flicker caused by show/hide logic.

  // Steps array for the Google Ads process
  const steps = [
    {
      icon: <FaSearch className="text-customPurple text-4xl mb-4" />,
      title: "Planning & Research",
      description:
        "Defining clear campaign objectives, market research, understanding the target audience, and analyzing competitors.",
    },
    {
      icon: <FaPencilAlt className="text-customPurple text-4xl mb-4" />,
      title: "Keyword Research",
      description:
        "Identifying relevant keywords using tools like Google Keyword Planner and categorizing them into campaigns and ad groups.",
    },
    {
      icon: <FaLaptopCode className="text-customPurple text-4xl mb-4" />,
      title: "Campaign & Ad Group Structure",
      description:
        "Selecting the appropriate campaign type (Search, Display, etc.) and organizing campaigns by objectives or product categories.",
    },
    {
      icon: <FaFileAlt className="text-customPurple text-4xl mb-4" />,
      title: "Ad Creation",
      description:
        "Writing compelling ad copy that includes relevant keywords and clear calls to action, as well as designing visuals for display and video ads.",
    },
    {
      icon: <FaBullseye className="text-customPurple text-4xl mb-4" />,
      title: "Targeting Setup",
      description:
        "Defining audience demographics, geographic regions, and device preferences for ad targeting.",
    },
    {
      icon: <FaPlay className="text-customPurple text-4xl mb-4" />,
      title: "Campaign Launch",
      description:
        "Activating the ads and ensuring all elements, such as ad copy, extensions, and keywords, are properly set up.",
    },
    {
      icon: <FaChartLine className="text-customPurple text-4xl mb-4" />,
      title: "Tracking & Monitoring",
      description:
        "Setting up conversion tracking to measure user actions and monitoring key metrics like CTR, CPC, and conversion rates.",
    },
    {
      icon: <FaTools className="text-customPurple text-4xl mb-4" />,
      title: "Optimisation",
      description:
        "Refining bids, targeting, and ad elements based on performance data, such as adjusting for high-converting keywords and improving ad relevance.",
    },
    {
      icon: <FaChartPie className="text-customPurple text-4xl mb-4" />,
      title: "Reporting & Analysis",
      description:
        "Reviewing campaign performance data to assess key metrics such as impressions, clicks, and conversions. This analysis leads to generating regular reports for stakeholders.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title (render immediately, no animation) */}
        <div id="process-title" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Creating Google Ads
          </h2>
          <p className="text-gray-600 mt-4">
            We follow a structured approach to deliver high-quality campaigns.
          </p>
        </div>

        {/* Process Flow Vertical Layout */}
        <div className="flex flex-col space-y-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center max-w-md mx-auto`}
            >
              {step.icon}

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block mt-8">
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