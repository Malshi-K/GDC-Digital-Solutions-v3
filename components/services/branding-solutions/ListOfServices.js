"use client";
import { useRef, useState, useEffect } from "react";
import {
  PaintBrushIcon,
  HashtagIcon,
  DocumentTextIcon,
  RectangleStackIcon,
  CreditCardIcon,
  DocumentIcon,
  BriefcaseIcon,
  NewspaperIcon,
  MegaphoneIcon,
  CubeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ExpertiseSection() {
  // State to track visibility
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

  // Array of expertise items with more suitable icons
  const expertiseItems = [
    {
      title: "Logo Design",
      description:
        "A professional logo is the cornerstone of your brand. Our team designs unique, impactful logos that not only look great but also reflect your values and mission. Whether you're a small business in Hamilton or a growing company across New Zealand, we'll create a logo that sets you apart and stands the test of time.",
      icon: PaintBrushIcon, // Paint brush for logo design
    },
    {
      title: "Social Media Promotional Design",
      description:
        "From eye-catching Instagram posts to bold Facebook banners, we design social media graphics that keep your brand consistent, engaging, and memorable. Our designs are tailored for New Zealand audiences, helping your business stand out online and connect with the right people.",
      icon: HashtagIcon, // Hashtag represents social media
    },
    {
      title: "Flyers & Leaflets",
      description:
        "We create professionally designed flyers and leaflets that grab attention and clearly communicate your message — perfect for local marketing campaigns in Hamilton and throughout New Zealand.",
      icon: NewspaperIcon, // Newspaper icon for printed materials
    },
    {
      title: "Signboard & Signage Design",
      description:
        "We design powerful, high-impact signboards and signage that make your brand visible and inviting whether on busy Hamilton streets or anywhere across New Zealand.",
      icon: RectangleStackIcon, // Stacked rectangles representing signboards
    },
    {
      title: "Business Cards",
      description:
        "Your business card is often the first physical connection you share with a client. We design professional, memorable cards that leave a positive impression and help build trust and credibility in Hamilton and across New Zealand.",
      icon: CreditCardIcon, // Credit card shape represents business cards
    },
    {
      title: "Letterheads",
      description:
        "A well-designed letterhead is more than just stationery; it's a mark of professionalism. We create custom letterheads that strengthen your brand identity and add credibility to every official document.",
      icon: DocumentIcon, // Document icon for letterheads
    },
    {
      title: "Complete Digital & Print Branding Kits",
      description:
        "Consistency is key to a strong brand. We offer complete branding kits covering brochures, letterheads, business cards, digital ads, and email signatures — a one-stop-shop for all branding needs.",
      icon: BriefcaseIcon, // Briefcase represents complete kit/package
    },
  ];

  return (
    <section className="relative bg-black py-12 text-white" ref={sectionRef}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/services/6.webp')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-customPurple opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          } transition-all duration-800 ease-out`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            List of Services
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Unlock the power of flexibility and performance. Manage your
            business with a mature strategy, develop your business so that it
            grows rapidly.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:opacity-100 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDuration: "600ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: `${index * 100}ms`,
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Icon with background */}
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                    <item.icon className="h-10 w-10 text-customPurple group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a CTA button at the bottom */}
        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customPurple hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started with Your Branding Project
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}