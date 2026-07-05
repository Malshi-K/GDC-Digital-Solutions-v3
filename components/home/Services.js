"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0.1,
    },
  },
};

const cardContentVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ServiceCard = ({
  title,
  description,
  items,
  imageSrc,
  maxItems = Infinity,
  shouldReduceMotion,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, maxItems);

  const cardInner = (
    <>
      <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 font-serif text-xl leading-tight text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-customGray transition-colors duration-700 ease-in-out group-hover:text-white/80">
          {description}
        </p>

        <div className="flex-grow">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-customPurple transition-colors duration-700 ease-in-out group-hover:text-white/55">
            Includes:
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-customGray transition-colors duration-700 ease-in-out group-hover:text-white/85">
            {visibleItems.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-customPurple transition-colors duration-700 ease-in-out group-hover:bg-white/70" />
                <Link
                  href={item.link}
                  className="transition-colors duration-700 ease-in-out hover:text-customPurple group-hover:text-white group-hover:hover:text-white"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {items.length > maxItems && (
            <button
              onClick={() => setShowAll((current) => !current)}
              className="mt-3 text-sm font-medium text-customPurple transition-colors duration-700 ease-in-out hover:text-customPurpleDark group-hover:text-white/80 group-hover:hover:text-white"
              aria-expanded={showAll}
            >
              {showAll ? "View less" : `View more (${items.length - maxItems})`}
            </button>
          )}
        </div>
      </div>
    </>
  );

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8d9ef] bg-[#f7f1fa] text-gray-900 shadow-lg transition-[border-color,box-shadow] duration-700 ease-in-out hover:border-transparent hover:shadow-xl">
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-ds-gradient opacity-0 transition-opacity group-hover:opacity-100 ${
          shouldReduceMotion ? "duration-0" : "duration-700 ease-in-out"
        }`}
        aria-hidden="true"
      />
      {shouldReduceMotion ? (
        <div className="relative z-10 flex h-full flex-col">{cardInner}</div>
      ) : (
        <motion.div
          variants={cardContentVariants}
          className="relative z-10 flex h-full flex-col"
        >
          {cardInner}
        </motion.div>
      )}
    </article>
  );
};

const ServicesSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const serviceCards = [
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with our expert digital marketing services.",
      items: [
        { text: "Google & Facebook Ads", link: "/services/google-ads" },
        { text: "SEO / Copywriting", link: "/services/seo" },
      ],
      imageSrc: "/assets/images/services/Google Ads.jpg",
    },
    {
      title: "Web & App Development",
      description:
        "Transform your ideas into reality with our web and app development services.",
      items: [
        { text: "Website Development", link: "/services/development" },
        { text: "App Development", link: "/services/app-development" },
      ],
      imageSrc: "/assets/images/services/Web development.png",
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      items: [
        { text: "Software & Platforms", link: "/software-platforms/projex" },
      ],
      imageSrc: "/assets/images/services/Mobile development.jpg",
    },
    {
      title: "Branding Solutions",
      description:
        "Elevate your brand with our comprehensive branding solutions.",
      items: [
        { text: "Logo Design", link: "/services/branding-solutions" },
        {
          text: "Social Media Promotional Designs",
          link: "/services/branding-solutions",
        },
        { text: "Flyers & Leaflets", link: "/services/branding-solutions" },
        {
          text: "Signboard & Signage Design",
          link: "/services/branding-solutions",
        },
        { text: "Business Cards", link: "/services/branding-solutions" },
        { text: "Letterheads", link: "/services/branding-solutions" },
        {
          text: "Complete Digital & Print Branding Kits",
          link: "/services/branding-solutions",
        },
      ],
      imageSrc: "/assets/images/services/AboutUs.jpg",
      maxItems: 2,
    },
  ];

  return (
    <section className="bg-transparent pb-4 pt-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          className="mb-12 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-4 font-serif text-2xl text-customPurple sm:mb-6 sm:text-3xl md:text-4xl">
            Explore unique digital solutions service
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-customGray sm:text-base">
            Crafting compelling digital experiences that captivate audiences
            and drive meaningful connections. Our digital solutions combines
            innovation, strategy, and expertise to fuel your online success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={shouldReduceMotion ? undefined : containerVariants}
        >
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              items={card.items}
              imageSrc={card.imageSrc}
              maxItems={card.maxItems}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
