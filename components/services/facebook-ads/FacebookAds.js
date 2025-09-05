"use client";
import { useRef, useState, useEffect } from "react";
import {
  FaUserCog,
  FaBullseye,
  FaChartLine,
  FaStore,
} from "react-icons/fa"; // Importing relevant icons

// Data for the Facebook Ads benefits
const benefitsData = [
  {
    icon: <FaUserCog className="mx-auto mb-4 text-6xl text-customPurple" />, // Expert management icon
    title: "Expert Facebook Ad Management",
    description:
      "We specialise in Meta Ads to ensure your brand reaches the right audience. Our experienced team leverages platform-specific features to create campaigns that drive engagement and conversions.",
  },
  {
    icon: <FaBullseye className="mx-auto mb-4 text-6xl text-customPurple" />, // Targeting icon
    title: "Targeted Facebook Advertising",
    description:
      "We use precise targeting strategies to connect with NZ businesses, local customers, and e-commerce shoppers. Our detailed audience segmentation ensures your ads reach the most relevant potential customers.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />, // ROI optimization icon
    title: "Optimised Facebook Ads for ROI",
    description:
      "Our team focuses on conversion-driven ads to maximise your marketing budget. We continuously monitor performance metrics and make data-driven adjustments to improve your return on investment.",
  },
  {
    icon: <FaStore className="mx-auto mb-4 text-6xl text-customPurple" />, // Business focus icon
    title: "Small Business & E-Commerce Focused",
    description:
      "Whether you run a local business in Auckland or an online store in Wellington, we tailor strategies to suit your needs. Our specialised approach considers your unique business model and target market.",
  },
];

export default function FacebookAdsBenefits() {
  // State to track if section is in view
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup intersection observer
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

  // Split "Facebook Ads" for letter animation
  const titleText = "Facebook Ads";
  const titleLetters = titleText.split("");

  return (
    <section className="py-12" ref={sectionRef}>
      <h2
        className={`text-3xl font-bold text-center text-customGray mb-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {"Why Choose Our "}
        {titleLetters.map((letter, index) => (
          letter === " " ? 
            <span key={index} className="inline-block w-2" /> : 
            <span
              key={index}
              className={`text-customPurple inline-block transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
        ))}
        {" Services"}
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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