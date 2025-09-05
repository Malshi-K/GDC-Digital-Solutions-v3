import { FaGlobe, FaChartLine, FaCode, FaLaptop } from "react-icons/fa"; // Importing the necessary icons
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn Button
import { GiCheckMark } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

export default function Packages() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initial animation on component mount
    setIsVisible(true);

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
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

  // Package data array
  const packages = [
    {
      title: "One Page Website",
      features: [
        "Single Scrollable Page",
        "Essential SEO Setup",
        "Fully Mobile Responsive Design",
        "Custom Contact Form",
        "1 Revision Round",
        "Choose from: WordPress, HTML/CSS",
      ],
      description:
        "Ideal for small businesses, startups, or personal projects looking for a quick and professional online presence. This package offers a sleek, single-scroll website that captures essential information and is fully optimised for mobile.",
      buttonColor: "bg-yellow-400 hover:bg-gray-400",
      lineColor: "bg-yellow-400", // Top line color for Starter
      icon: <FaLaptop className="w-12 h-12 text-customLightGray m-4" />,
      buttonText: "From NZD $300.00",
    },
    {
      title: "Starter",
      features: [
        "Up to 5 Pages",
        "Basic SEO Setup",
        "Mobile Responsive",
        "Contact Form",
        "1 Round of Revisions",
        "Standard Template Design",
        "Choose: WordPress, Static HTML/CSS, or Simple PHP",
      ],
      buttonColor: "bg-customPurple hover:bg-customGray",
      lineColor: "bg-customPurple", // Top line color for Starter
      icon: <FaGlobe className="w-12 h-12 text-customLightGray m-4" />, // Globe icon
      buttonText: "From NZD $500.00",
    },
    {
      title: "Business",
      features: [
        "Up to 10 Pages",
        "Advanced SEO Setup",
        "Mobile Responsive",
        "Blog Integration",
        "Social Media Integration",
        "2 Rounds of Revisions",
        "Basic Analytics Setup",
      ],
      buttonColor: "bg-customGray hover:bg-customLightPurple",
      lineColor: "bg-customGray", // Top line color for Business
      icon: <FaChartLine className="w-12 h-12 text-customLightGray m-4" />, // Chart icon
      buttonText: "Contact us for pricing",
    },
    {
      title: "Custom",
      features: [
        "Custom Design & Development",
        "Unlimited Pages",
        "Advanced Functionalities",
        "Comprehensive SEO",
        "Ongoing Support & Maintenance",
        "Dedicated Project Manager",
        "Unlimited Revisions During Development",
        "Full Integration with 3rd-Party Services",
      ],
      buttonColor: "bg-customLightPurple hover:bg-customPurple",
      lineColor: "bg-customLightPurple", // Top line color for Custom
      icon: <FaCode className="w-12 h-12 text-customLightGray m-4" />, // Code icon
      buttonText: "Contact us for pricing",
    },
  ];

  return (
    <section className="py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-customGray">
            Find the{" "}
            <span className="text-customPurple">Website Development Plan</span>{" "}
            that&apos;s Right for You
          </h2>
          <p className="text-gray-600 mt-4">
            Join the thousands of businesses who trust our website development
            services to grow their online presence.
          </p>
        </div>

        {/* Packages Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg flex flex-col justify-between items-center cursor-pointer
                        transform transition-all duration-800 ease-out hover:scale-105 hover:shadow-xl
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Top Color Line */}
              <div className={`w-full h-2 ${pkg.lineColor} rounded-t-lg`} />

              {/* Icon, Title, and Features Section */}
              <div className="flex flex-col items-center flex-grow">
                {/* Icon */}
                {pkg.icon}

                {/* Package Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {pkg.title}
                </h3>

                {/* Package Features List */}
                <ul className="space-y-2 mb-6 text-left p-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <GiCheckMark className="text-customLightGray mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy/Contact Button */}
              <div className="w-full p-6">
                <Button
                  className={`w-full py-3 text-white font-bold rounded ${pkg.buttonColor}`}
                  onClick={() => window.location.href = '/contact-us'}
                >
                  {pkg.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}