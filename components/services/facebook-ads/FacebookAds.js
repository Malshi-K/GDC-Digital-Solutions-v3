"use client";
import { useRef, useState, useEffect } from "react";
import {
  FaUserCog,
  FaBullseye,
  FaChartLine,
  FaStore,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const benefitsData = [
  {
    Icon: FaUserCog,
    title: "Expert Facebook Ad Management",
    description:
      "We specialise in Meta Ads to ensure your brand reaches the right audience. Our experienced team leverages platform-specific features to create campaigns that drive engagement and conversions.",
  },
  {
    Icon: FaBullseye,
    title: "Targeted Facebook Advertising",
    description:
      "We use precise targeting strategies to connect with NZ businesses, local customers, and e-commerce shoppers. Our detailed audience segmentation ensures your ads reach the most relevant potential customers.",
  },
  {
    Icon: FaChartLine,
    title: "Optimised Facebook Ads for ROI",
    description:
      "Our team focuses on conversion-driven ads to maximise your marketing budget. We continuously monitor performance metrics and make data-driven adjustments to improve your return on investment.",
  },
  {
    Icon: FaStore,
    title: "Small Business & E-Commerce Focused",
    description:
      "Whether you run a local business in Auckland or an online store in Wellington, we tailor strategies to suit your needs. Our specialised approach considers your unique business model and target market.",
  },
];

const BenefitCard = ({ Icon, title, description, isVisible, index, shouldReduceMotion }) => (
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

export default function FacebookAdsBenefits() {
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
      {
        threshold: 0.2,
      }
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
        Why Choose Our Facebook Ads Services
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
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
