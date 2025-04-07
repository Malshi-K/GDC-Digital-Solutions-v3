"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const ConsultingIntroductionSection = () => {
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

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* Section Title */}
          <h2
            className={`text-customYellow text-xl md:text-3xl font-bold text-left mb-6 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            } transition-all duration-800 ease-out`}
          >
            GDC Digital Solutions - Business Analysis Expertise
          </h2>

          {/* Description */}
          <p
            className={`text-gray-800 leading-relaxed mb-8 max-w-3xl transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            } transition-all duration-800 ease-out delay-300`}
            style={{ transitionDelay: "300ms" }}
          >
            At GDC Digital Solutions, we recognise that effective business
            analysis is key to achieving successful transformation. Our team of
            highly skilled Business Analysts works as an extension of your
            organisation, delivering actionable insights, optimising processes,
            and driving strategic growth. With a deep understanding of both
            technology and business needs, we ensure that every project we
            support not only meets but exceeds expectations, creating lasting
            value for your business.
          </p>

          {/* Description */}
          <p
            className={`text-gray-800 leading-relaxed mb-8 max-w-3xl transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            } transition-all duration-800 ease-out delay-300`}
            style={{ transitionDelay: "300ms" }}
          >
            Our experts bring extensive experience across a variety of
            industries, including finance, healthcare, retail, and more. We
            specialise in uncovering inefficiencies, mitigating risks, and
            designing solutions that enhance performance, improve service
            delivery, and support long-term business objectives. Whether you are
            undergoing a digital transformation, enhancing operational
            processes, or aligning your IT strategy with business goals, we are
            here to guide you through every phase of your journey.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div
            className={`transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            } transition-all duration-800 ease-out`}
          >
            <Image
              src="/assets/images/business-analysis/business-bg.png" // Replace with the actual image path
              alt="NFC Card Illustration"
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingIntroductionSection;