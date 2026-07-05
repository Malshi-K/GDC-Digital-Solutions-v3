"use client";

import { useEffect, useState } from "react";

export default function AboutHeader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-transparent px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <div
          className={`rounded-3xl border border-customPurple/10 bg-customPurpleLight px-8 py-10 shadow-md sm:px-12 sm:py-12 md:px-16 md:py-14 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } text-center transition-all duration-700 ease-out`}
        >
          <h3 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            We are the experts in driving digital growth through innovative
            solutions
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 md:text-lg">
            From web development and SEO to targeted ad campaigns and
            cutting-edge technology, our team crafts strategies that empower
            businesses to thrive in the digital landscape.
          </p>

          <div className="mt-12">
            <h2 className="inline-block border-b-2 border-black pb-2 text-xl font-bold md:text-2xl">
              Who We Are
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm text-gray-600 md:text-base">
              At GDC Digital Solutions, we help businesses grow through
              innovative digital strategy, software development, and operational
              technology. What began as a specialist web development company
              evolved into a broader digital solutions partner as we expanded
              our capabilities across marketing, consulting, and delivery
              systems. As our projects scaled, we developed Projex — our
              internal project delivery and workflow management platform — to
              streamline communication, collaboration, and operational efficiency
              across teams and clients. Today, GDC Digital combines technical
              expertise with proprietary technology to deliver scalable digital
              experiences that drive long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
