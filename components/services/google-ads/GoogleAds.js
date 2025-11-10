"use client";
import { useRef, useState, useEffect } from "react";
import {
  FaBullseye,
  FaChartLine,
  FaRegHandshake,
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaTrophy,
} from "react-icons/fa"; // Importing relevant icons

// Data for the Google Ads benefits
const benefitsData = [
  {
    icon: <FaBullseye className="mx-auto mb-4 text-6xl text-customPurple" />, // A target icon to represent the goal-oriented strategy
    title: "Customised Strategy for Your Success",
    description:
      "We begin by deeply understanding your business goals, target audience, and industry. This allows us to tailor a Google Ads strategy that aligns perfectly with your objectives, whether it's driving traffic, generating leads, or increasing brand visibility.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />, // A chart icon to symbolize audience targeting and segmentation
    title: "Targeting the Right Audience",
    description:
      "With advanced audience segmentation and targeting based on demographics, interests, keywords, and location, we ensure your ads reach the right people at the right time. We focus on intent-based targeting to display ads to potential customers actively searching for your products or services.",
  },
  {
    icon: (
      <FaRegHandshake className="mx-auto mb-4 text-6xl text-customPurple" />
    ), // A handshake icon to signify building connections with customers
    title: "High-Performing Ad Campaigns",
    description:
      "Our experienced team creates compelling ad copy and designs that capture attention and drive conversions. We emphasise your unique value proposition, ensuring your ads stand out and attract clicks.",
  },
  {
    icon: <FaSyncAlt className="mx-auto mb-4 text-6xl text-customPurple" />, // A sync icon to represent continuous optimization and improvement
    title: "Data-Driven Optimisation",
    description:
      "We use real-time analytics and continuous A/B testing to monitor and improve campaign performance. By making data-driven adjustments, we ensure your campaigns consistently deliver better results.",
  },
  {
    icon: (
      <FaFileInvoiceDollar className="mx-auto mb-4 text-6xl text-customPurple" />
    ), // An invoice icon for transparent reporting and pricing
    title: "Transparent Reporting and Pricing",
    description:
      "We provide detailed monthly reports that track the performance of your ads. Our transparent pricing ensures that you know exactly where your investment is going, with no hidden fees.",
  },
  {
    icon: <FaTrophy className="mx-auto mb-4 text-6xl text-customPurple" />, // A trophy icon to indicate proven success and results
    title: "Proven Success",
    description:
      "Our Google Ads campaigns have a track record of delivering measurable results, improving key metrics such as conversion rates and return on ad spend (ROAS).",
  },
];

export default function GoogleAdsBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Animation will trigger when 20% of the element is visible
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

  return (
    <section className="py-12" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center text-customGray mb-10">
        Why Choose Our Google Ads Service
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically render the benefits */}
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`text-center text-customGray transform transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {benefit.icon}
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}