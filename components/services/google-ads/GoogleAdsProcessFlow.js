"use client";

import { useRef, useState, useEffect } from "react";
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
  // State to track visible elements
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  // Setup intersection observer for the title
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const titleElement = document.getElementById('process-title');
    if (titleElement) {
      titleObserver.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        titleObserver.unobserve(titleElement);
      }
    };
  }, []);

  // Setup intersection observer for each step
  useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.dataset.step);
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    stepsRef.current.forEach(step => {
      if (step) {
        stepObserver.observe(step);
      }
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) {
          stepObserver.unobserve(step);
        }
      });
    };
  }, []);

  // Steps array for the Google Ads process
  const steps = [
    {
      icon: <FaSearch className="text-customYellow text-4xl mb-4" />,
      title: "Planning & Research",
      description:
        "Defining clear campaign objectives, market research, understanding the target audience, and analyzing competitors.",
    },
    {
      icon: <FaPencilAlt className="text-customYellow text-4xl mb-4" />,
      title: "Keyword Research",
      description:
        "Identifying relevant keywords using tools like Google Keyword Planner and categorizing them into campaigns and ad groups.",
    },
    {
      icon: <FaLaptopCode className="text-customYellow text-4xl mb-4" />,
      title: "Campaign & Ad Group Structure",
      description:
        "Selecting the appropriate campaign type (Search, Display, etc.) and organizing campaigns by objectives or product categories.",
    },
    {
      icon: <FaFileAlt className="text-customYellow text-4xl mb-4" />,
      title: "Ad Creation",
      description:
        "Writing compelling ad copy that includes relevant keywords and clear calls to action, as well as designing visuals for display and video ads.",
    },
    {
      icon: <FaBullseye className="text-customYellow text-4xl mb-4" />,
      title: "Targeting Setup",
      description:
        "Defining audience demographics, geographic regions, and device preferences for ad targeting.",
    },
    {
      icon: <FaPlay className="text-customYellow text-4xl mb-4" />,
      title: "Campaign Launch",
      description:
        "Activating the ads and ensuring all elements, such as ad copy, extensions, and keywords, are properly set up.",
    },
    {
      icon: <FaChartLine className="text-customYellow text-4xl mb-4" />,
      title: "Tracking & Monitoring",
      description:
        "Setting up conversion tracking to measure user actions and monitoring key metrics like CTR, CPC, and conversion rates.",
    },
    {
      icon: <FaTools className="text-customYellow text-4xl mb-4" />,
      title: "Optimisation",
      description:
        "Refining bids, targeting, and ad elements based on performance data, such as adjusting for high-converting keywords and improving ad relevance.",
    },
    {
      icon: <FaChartPie className="text-customYellow text-4xl mb-4" />,
      title: "Reporting & Analysis",
      description:
        "Reviewing campaign performance data to assess key metrics such as impressions, clicks, and conversions. This analysis leads to generating regular reports for stakeholders.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          id="process-title"
          className={`text-center mb-12 transition-opacity duration-1000 ease-out ${
            titleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
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
              ref={el => stepsRef.current[index] = el}
              data-step={index}
              className={`flex flex-col items-center text-center max-w-md mx-auto transform transition-all duration-800 ease-out ${
                visibleSteps.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Icon */}
              {step.icon}

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block mt-8 transition-opacity duration-500 ease-out ${
                    visibleSteps.has(index) ? "opacity-100" : "opacity-0"
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