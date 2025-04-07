"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FaMobileAlt,
  FaLock,
  FaLightbulb,
  FaExchangeAlt,
} from "react-icons/fa"; // Importing relevant icons

// Data for NFC card benefits
const benefitsData = [
  {
    icon: <FaMobileAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Convenience",
    description:
      "NFC cards make interactions faster and more efficient. Whether you're processing transactions, checking in at events, or sharing contact information, NFC technology simplifies the process with effortless taps.",
  },
  {
    icon: <FaLock className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Security",
    description:
      "Our NFC cards are designed with advanced encryption to ensure secure data transfer, protecting both your information and your customers' privacy.",
  },
  {
    icon: <FaLightbulb className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Innovation",
    description:
      "As NFC technology becomes more prevalent in New Zealand, adopting these smart solutions positions your business as a forward-thinking leader in your industry.",
  },
  {
    icon: <FaExchangeAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Versatility",
    description:
      "From enhancing customer service to offering new digital experiences, NFC cards can be customised to meet a wide range of needs and applications.",
  },
];

export default function NFCBenefits() {
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

  // Split "NFC Cards" for letter animation
  const titleText = "NFC Cards";
  const titleLetters = titleText.split("");

  return (
    <section className="py-12" ref={sectionRef}>
      <h2
        className={`text-3xl font-bold text-center text-customGray mb-10 transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {"Why Choose "}
        {titleLetters.map((letter, index) =>
          letter === " " ? (
            <span key={index} className="inline-block w-2" />
          ) : (
            <span
              key={index}
              className={`text-customYellow inline-block transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
          )
        )}
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Render the benefits */}
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`text-center text-customGray transform transition-all duration-600 ease-out ${
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