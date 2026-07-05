"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({
  title,
  description,
  items,
  imageSrc,
  ctaLink,
  featured = false,
  maxItems = Infinity,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, maxItems);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "bg-ds-gradient text-white"
          : "border border-[#e8d9ef] bg-[#f7f1fa] text-gray-900"
      }`}
    >
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
        <h3
          className={`mb-3 font-serif text-xl leading-tight sm:text-2xl ${
            featured ? "text-white" : "text-customPurple"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mb-5 text-sm leading-relaxed ${
            featured ? "text-white/80" : "text-customGray"
          }`}
        >
          {description}
        </p>

        <div className="mb-6 flex-grow">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
              featured ? "text-white/55" : "text-customPurple"
            }`}
          >
            Includes:
          </p>
          <ul
            className={`space-y-2 text-sm leading-relaxed ${
              featured ? "text-white/85" : "text-customGray"
            }`}
          >
            {visibleItems.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span
                  className={`mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                    featured ? "bg-white/70" : "bg-customPurple"
                  }`}
                />
                <Link
                  href={item.link}
                  className={`transition-colors duration-200 ${
                    featured
                      ? "hover:text-white"
                      : "hover:text-customPurple"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {items.length > maxItems && (
            <button
              onClick={() => setShowAll((current) => !current)}
              className={`mt-3 text-sm font-medium transition-colors ${
                featured
                  ? "text-white/80 hover:text-white"
                  : "text-customPurple hover:text-customPurpleDark"
              }`}
              aria-expanded={showAll}
            >
              {showAll ? "View less" : `View more (${items.length - maxItems})`}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

const ServicesSection = () => {
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
      ctaLink: "/services/google-ads",
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
      ctaLink: "/services/development",
      featured: true,
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      items: [
        { text: "Software & Platforms", link: "/software-platforms/projex" },
      ],
      imageSrc: "/assets/images/services/Mobile development.jpg",
      ctaLink: "/software-platforms/projex",
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
      ctaLink: "/services/branding-solutions",
      maxItems: 2,
    },
  ];

  return (
    <section className="bg-[#faf8fc]">
      <div className="container mx-auto px-4 pb-4 pt-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16 xl:px-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-2xl text-customPurple sm:mb-6 sm:text-3xl md:text-4xl">
            Explore unique digital solutions service
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-customGray sm:text-base">
            Crafting compelling digital experiences that captivate audiences
            and drive meaningful connections. Our digital solutions combines
            innovation, strategy, and expertise to fuel your online success.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              items={card.items}
              imageSrc={card.imageSrc}
              ctaLink={card.ctaLink}
              featured={card.featured}
              maxItems={card.maxItems}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
