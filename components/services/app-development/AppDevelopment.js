"use client";

import { useEffect, useState, useRef } from "react";
import {
  FaRocket,
  FaUserCheck,
  FaChartLine,
  FaMobileAlt,
  FaLock,
  FaSyncAlt,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const benefitsData = [
  {
    Icon: FaRocket,
    title: "Expand Your Reach",
    description:
      "Custom mobile and web applications give your business presence across all devices, reaching customers wherever they are and however they prefer to connect.",
  },
  {
    Icon: FaUserCheck,
    title: "Enhanced User Experience",
    description:
      "Purpose-built applications deliver smoother, more intuitive experiences than generic solutions, increasing customer satisfaction and retention rates.",
  },
  {
    Icon: FaChartLine,
    title: "Scalable Business Growth",
    description:
      "Custom applications can evolve with your business needs, handling increased traffic and adding new features as your company expands and market demands change.",
  },
  {
    Icon: FaMobileAlt,
    title: "Competitive Advantage",
    description:
      "Stand out from competitors with tailored functionality that addresses your specific customer needs and showcases your unique business offerings.",
  },
  {
    Icon: FaLock,
    title: "Enhanced Security",
    description:
      "Custom development allows for implementation of robust security measures specifically designed to protect your business data and customer information.",
  },
  {
    Icon: FaSyncAlt,
    title: "Seamless Integration",
    description:
      "Connect your app with existing business systems and third-party services to streamline operations and create unified workflows across your organisation.",
  },
];

const BenefitCard = ({
  Icon,
  title,
  description,
  isVisible,
  index,
  shouldReduceMotion,
}) => (
  <article
    className={`group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] text-customGray shadow-lg transition-[border-color,box-shadow,opacity,transform] duration-700 ease-in-out hover:border-transparent hover:shadow-xl md:h-[440px] md:min-h-0 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div
      className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
        shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
      }`}
      aria-hidden="true"
    />
    <div className="relative z-10 flex h-full flex-col p-6 text-center sm:p-8">
      <Icon className="mx-auto mb-4 flex-shrink-0 text-6xl text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white" />
      <h3 className="mb-2 min-h-[4rem] text-2xl font-bold transition-colors duration-700 ease-in-out group-hover:text-white">
        {title}
      </h3>
      <p className="flex-grow text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-white/85">
        {description}
      </p>
    </div>
  </article>
);

export default function AppDevelopmentBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="py-12" ref={sectionRef}>
      <h2 className="mb-10 text-center text-3xl font-bold text-customGray">
        Why Choose Our App Development Service
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
              isVisible={isVisible}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
