import React, { useState, useEffect, useRef } from "react";
import {
  FaUserTie,
  FaUsers,
  FaTasks,
  FaRoad,
  FaChartLine,
  FaNetworkWired,
  FaSyncAlt,
} from "react-icons/fa"; // Importing unique icons for each benefit

// Data for consulting benefits with unique icons for each
const benefitsData = [
  {
    icon: <FaUserTie className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Bespoke Business Analysis",
    description:
      "We take the time to fully understand your unique business challenges and objectives, ensuring that the solutions we deliver are tailored to drive measurable results.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Effective Stakeholder Engagement",
    description:
      "We bridge the gap between business and IT teams, facilitating clear communication, alignment, and a shared vision across all stakeholders.",
  },
  {
    icon: <FaTasks className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Process Optimisation",
    description:
      "Through careful analysis of your existing processes, we identify opportunities for optimisation that streamline operations, reduce costs, and enhance productivity.",
  },
  {
    icon: <FaRoad className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Strategic Roadmapping",
    description:
      "Our analysts work alongside your team to develop a strategic roadmap, ensuring alignment of business goals with digital initiatives to keep you ahead in a competitive landscape.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Data-Driven Insights",
    description:
      "Leveraging advanced analytics, we empower you to make informed, data-driven decisions that drive growth and improve performance across your organisation.",
  },
  {
    icon: <FaNetworkWired className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Seamless Systems & Technology Integration",
    description:
      "We assist in selecting the right systems and technologies, ensuring they integrate seamlessly with your business processes to guarantee a smooth and effective transformation.",
  },
  {
    icon: <FaSyncAlt className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Continuous Improvement",
    description:
      "Our approach focuses on identifying long-term opportunities for growth and innovation, helping you stay agile in an ever-evolving market.",
  },
];

export default function ConsultingBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Split the text for the letter animation
  const consultingText = "Consulting & Strategy";
  const consultingTextArray = consultingText.split("");

  return (
    <section className="py-12 bg-gray-50" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center text-customGray mb-10">
        {"Why Choose GDC Digital Solutions for "}
        <span className="inline-block">
          {consultingTextArray.map((letter, index) =>
            letter === " " ? (
              <span key={index} className="inline-block w-2" />
            ) : (
              <span
                key={index}
                className={`text-customPurple inline-block transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                } transition-all duration-500`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {letter}
              </span>
            )
          )}
        </span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Render the benefits with unique icons */}
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`text-center bg-white p-6 rounded-lg shadow-lg text-customGray hover:shadow-xl transition-shadow duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } transition-all duration-700`}
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