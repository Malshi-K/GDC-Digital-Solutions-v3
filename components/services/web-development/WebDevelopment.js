import { FaBullhorn, FaUsers, FaQuestionCircle } from "react-icons/fa"; // Using react-icons for icons
import { useState, useEffect, useRef } from "react";

// Data for the web development benefits
const benefitsData = [
  {
    icon: <FaBullhorn className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "First Impressions Matter",
    description:
      "A professional website establishes credibility and helps build trust from the moment a visitor lands on your page.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Reach More Customers",
    description:
      "Your website makes you accessible to a larger audience. It's your digital storefront, attracting visitors whether they're across the street or across the world.",
  },
  {
    icon: <FaQuestionCircle className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Convert Visitors to Customers",
    description:
      "Your website can turn interest into action, providing valuable information and guiding visitors to make purchases, book services, or contact you directly.",
  },
];

export default function WebDevelopmentBenefits() {
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
      <h2
        className={`text-3xl font-bold text-center text-customGray mb-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {"Why Choose Our "}
        {[..."Website Development".split('')].map((letter, index) => ( 
          letter === ' ' ? 
          <span key={index} className="inline-block w-2" /> :
          <span
            key={index}
            className={`text-customPurple inline-block transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {letter}
          </span>
        ))}
        {" Service"}
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically render the benefits */}
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`text-center text-customGray transition-all duration-600 transform ${
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