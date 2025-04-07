"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const NFCIntroductionSection = () => {
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
            className={`text-customYellow text-xl md:text-3xl font-bold text-left mb-6 transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            SEAMLESS CONNECTIVITY WITH NFC CARDS
          </h2>

          {/* Description */}
          <p
            className={`text-gray-800 leading-relaxed mb-8 max-w-3xl transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            As NFC (Near Field Communication) technology gains momentum in New
            Zealand, GDC Digital Solutions is at the forefront of this exciting
            innovation. NFC cards are transforming the way businesses and
            individuals interact, offering a seamless and secure way to share
            information and conduct transactions with just a tap.
          </p>

          {/* Subheading */}
          <h3
            className={`text-2xl font-semibold text-customGray mb-4 transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            What are NFC Cards?
          </h3>

          {/* NFC Card Description */}
          <p
            className={`text-gray-800 leading-relaxed mb-8 max-w-3xl transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            NFC cards utilise cutting-edge technology to enable quick,
            contactless communication between devices. They are ideal for a
            variety of applications, including contactless payments, event
            ticketing, digital business cards, and more. With the rise of NFC
            technology in New Zealand, businesses have the opportunity to
            enhance customer experiences and streamline operations.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div
            className={`transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Image
              src="/assets/images/nfc/nfc-bg.webp" // Replace with the actual image path
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

export default NFCIntroductionSection;