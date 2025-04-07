"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const services = [
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
  ];

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
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-10 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h1
          className={`text-5xl font-semibold mb-8 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our clients say <span className="text-customYellow">we rock</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              description={service.description}
              isVisible={isVisible}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, isVisible, delay }) {
  return (
    <div
      className={`relative group w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-50 transform transition-all duration-600 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Hidden Content - Appears on Hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-customLightYellow to-customYellow text-white 
        flex flex-col justify-center items-center p-4 transform transition-transform 
        duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
      
      {/* Visible Content - Hidden on Hover */}
      <div
        className="absolute inset-0 flex justify-center items-center bg-white transition-transform 
        duration-500 ease-in-out transform group-hover:-translate-y-full"
      >
        <Image
          src="/assets/images/feedback.webp"
          alt={title || "Testimonial"}
          width={120}
          height={120}
          quality={95}
          className="object-contain max-w-[150px] h-auto"
        />
      </div>
    </div>
  );
}