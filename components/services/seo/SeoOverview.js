import { FaSearch, FaChartLine, FaCogs, FaLink, FaUsers } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// Data for the SEO overview benefits
const seoOverviewData = [
  {
    icon: <FaSearch className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "In-Depth Keyword Research",
    description:
      "Uncover high-value search terms that align with your business goals. Our strategic research ensures your site targets the right keywords to boost visibility.",
  },
  {
    icon: <FaCogs className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "On-Page Optimisation",
    description:
      "Optimise site structure, content, and keywords for better rankings. We enhance your site's performance to capture search engine attention effectively.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Technical SEO",
    description:
      "Improve website performance, speed, and mobile optimisation to provide a seamless user experience across devices.",
  },
  {
    icon: <FaLink className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Off-Page SEO Strategies",
    description:
      "Enhance your domain authority through strategic link building, social signals, and online reputation management.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Customer-Centric Engagement",
    description:
      "Ensure improved user experience and engagement with our optimised SEO tactics, leading to higher conversions and ROI.",
  },
];

export default function SeoOverview() {
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

  return (
    <section className="py-12" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center text-customGray mb-10">
        Why Choose GDC Digital Solutions for SEO Services?
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render the SEO overview benefits */}
          {seoOverviewData.map((benefit, index) => (
            <div
              key={index}
              className={`text-center text-customGray transition-all duration-600 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
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