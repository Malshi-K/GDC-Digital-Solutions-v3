"use client";
import { useRef, useState, useEffect } from "react";
import {
  FaBullseye,
  FaChartLine,
  FaRegHandshake,
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaTrophy,
} from "react-icons/fa";
import { useReducedMotion } from "framer-motion";

const benefitsData = [
  {
    Icon: FaBullseye,
    title: "Customised Strategy for Your Success",
    description:
      "We begin by deeply understanding your business goals, target audience, and industry. This allows us to tailor a Google Ads strategy that aligns perfectly with your objectives, whether it's driving traffic, generating leads, or increasing brand visibility.",
  },
  {
    Icon: FaChartLine,
    title: "Targeting the Right Audience",
    description:
      "With advanced audience segmentation and targeting based on demographics, interests, keywords, and location, we ensure your ads reach the right people at the right time. We focus on intent-based targeting to display ads to potential customers actively searching for your products or services.",
  },
  {
    Icon: FaRegHandshake,
    title: "High-Performing Ad Campaigns",
    description:
      "Our experienced team creates compelling ad copy and designs that capture attention and drive conversions. We emphasise your unique value proposition, ensuring your ads stand out and attract clicks.",
  },
  {
    Icon: FaSyncAlt,
    title: "Data-Driven Optimisation",
    description:
      "We use real-time analytics and continuous A/B testing to monitor and improve campaign performance. By making data-driven adjustments, we ensure your campaigns consistently deliver better results.",
  },
  {
    Icon: FaFileInvoiceDollar,
    title: "Transparent Reporting and Pricing",
    description:
      "We provide detailed monthly reports that track the performance of your ads. Our transparent pricing ensures that you know exactly where your investment is going, with no hidden fees.",
  },
  {
    Icon: FaTrophy,
    title: "Proven Success",
    description:
      "Our Google Ads campaigns have a track record of delivering measurable results, improving key metrics such as conversion rates and return on ad spend (ROAS).",
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

export default function GoogleAdsBenefits() {
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
        Why Choose Our Google Ads Service
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
