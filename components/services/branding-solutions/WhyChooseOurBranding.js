import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPalette,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa"; // More suitable icons for the branding benefits

// Data for consulting benefits with unique icons for each
const benefitsData = [
  {
    icon: <FaMapMarkerAlt className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Local Insight, Global Standards",
    description:
      "Based right here in Hamilton, we understand the needs of Kiwi businesses and the nuances of the local market. At the same time, we bring global design standards to ensure your branding looks sharp and professional anywhere in New Zealand or beyond.",
  },
  {
    icon: <FaPalette className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "End-to-End Branding Partner",
    description:
      "From digital strategies to print materials, we cover it all. Whether you need a new logo, social media graphics, business cards, or signage, we’re your one-stop-shop for branding services in Hamilton and throughout New Zealand. No need to juggle multiple vendors, we’ve got you covered.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Proven Digital Expertise",
    description:
      "As specialists in digital marketing, SEO, and web development, we make sure your brand works consistently across every channel. From online visibility to offline impact, our branding services are built to support your business growth in New Zealand’s competitive market.",
  },
  {
    icon: <FaHandshake className="mx-auto mb-4 text-6xl text-customPurple" />,
    title: "Collaborative & Client-Centric",
    description:
      "We believe the best results come from working together. That’s why we listen closely to your vision and bring it to life with designs that feel authentic to your brand whether you’re a start-up in Hamilton or an established business anywhere in New Zealand.",
  },
];

export default function WhyChooseOurBranding() {
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
        Why Choose GDC Digital Solutions for Your Branding?
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 px-4">
        Choosing a local partner means choosing someone who truly understands
        your business and the New Zealand market. We don&apos;t just create
        designs, we build long-term partnerships that help your brand grow. With
        a proven track record in Hamilton, the wider Waikato region, and across
        New Zealand, we deliver branding solutions that are not only creative
        but also effective in driving real results.
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.slice(0, 4).map((benefit, index) => (
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

          {/* Second row - 3 cards centered */}
          <div className="flex justify-center">
            <div className="flex gap-8 max-w-5xl">
              {benefitsData.slice(4, 7).map((benefit, index) => (
                <div
                  key={index + 4}
                  className={`text-center bg-white p-6 rounded-lg shadow-lg text-customGray hover:shadow-xl transition-shadow duration-300 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  } transition-all duration-700`}
                  style={{
                    transitionDelay: `${(index + 4) * 200}ms`,
                    width: "300px",
                  }}
                >
                  {benefit.icon}
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
