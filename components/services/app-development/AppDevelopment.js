import { useEffect, useState, useRef } from 'react';
import { FaRocket, FaUserCheck, FaChartLine, FaMobileAlt, FaLock, FaSyncAlt } from 'react-icons/fa';

// Data for the web development benefits
const benefitsData = [
  {
    icon: <FaRocket className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Expand Your Reach",
    description:
      "Custom mobile and web applications give your business presence across all devices, reaching customers wherever they are and however they prefer to connect.",
  },
  {
    icon: <FaUserCheck className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Enhanced User Experience",
    description:
      "Purpose-built applications deliver smoother, more intuitive experiences than generic solutions, increasing customer satisfaction and retention rates.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Scalable Business Growth",
    description:
      "Custom applications can evolve with your business needs, handling increased traffic and adding new features as your company expands and market demands change.",
  },
  {
    icon: <FaMobileAlt className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Competitive Advantage",
    description:
      "Stand out from competitors with tailored functionality that addresses your specific customer needs and showcases your unique business offerings.",
  },
  {
    icon: <FaLock className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Enhanced Security",
    description:
      "Custom development allows for implementation of robust security measures specifically designed to protect your business data and customer information.",
  },
  {
    icon: <FaSyncAlt className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Seamless Integration",
    description:
      "Connect your app with existing business systems and third-party services to streamline operations and create unified workflows across your organisation.",
  },
];

export default function AppDevelopmentBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when section becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when out of view for re-animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
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
      <h2 className={`text-3xl font-bold text-center text-customGray mb-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {"Why Choose Our "}
        {[..."App Development".split('')].map((letter, index) => (
          letter === ' ' ? (
            <span key={index} className="inline-block w-2" />
          ) : (
            <span
              key={index}
              className={`text-customPurple inline-block transition-all duration-300 ${
                isVisible 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
          )
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
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
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