"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Banner = ({ isServicesOpen, isAboutOpen }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // Content for the banner
  const content = [
    { highlighted: "Websites" },
    { highlighted: "Google/ Facebook Ads" },
    { highlighted: "SEO" },
    { highlighted: "Business Analysis" },
  ];

  const marqueeContainerRef = useRef(null);

  useEffect(() => {
    // Function to update screen size state
    const updateScreenSize = (width) => {
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Initial size detection
    updateScreenSize(window.innerWidth);

    // Set up resize observer for responsive adjustments
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? window.innerWidth;
      updateScreenSize(width);
    });

    resizeObserver.observe(document.body);

    // Function to determine which word is most visible
    const checkVisibleWord = () => {
      if (!marqueeContainerRef.current) return;

      const containerRect = marqueeContainerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const words = document.querySelectorAll(".scroll-word");
      let closestWord = null;
      let closestDistance = Infinity;

      words.forEach((word, index) => {
        const wordRect = word.getBoundingClientRect();
        const wordCenter = wordRect.left + wordRect.width / 2;
        const distance = Math.abs(containerCenter - wordCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestWord = word;
        }
      });

      if (closestWord) {
        const newIndex = parseInt(closestWord.dataset.index, 10);
        if (!isNaN(newIndex) && newIndex !== visibleIndex) {
          setVisibleIndex(newIndex);
        }
      }
    };

    // Set up interval to check visible word
    const visibilityInterval = setInterval(checkVisibleWord, 100);

    return () => {
      resizeObserver.disconnect();
      clearInterval(visibilityInterval);
    };
  }, [visibleIndex]);

  // Updated heading sizes with larger font sizes
  const getHeadingSize = () => {
    if (screenSize.isMobile) return "text-5xl";
    if (screenSize.isTablet) return "text-6xl sm:text-7xl";
    return "text-7xl sm:text-8xl md:text-9xl";
  };

  // Determine banner height based on screen size
  const getBannerHeight = () => {
    if (screenSize.isMobile) return "min-h-[80vh]";
    if (screenSize.isTablet) return "min-h-[85vh]";
    return "min-h-[90vh]";
  };

  // Create duplicated content for continuous scrolling
  const scrollWords = [...content, ...content, ...content];

  return (
    <section
      className={`relative transition-all duration-300 ${getBannerHeight()} bg-black bg-opacity-70 overflow-hidden`}
      style={{
        backgroundImage: "url('/assets/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <style jsx>{`
        @keyframes scrollWords {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move by 1/3 for complete cycle */
          }
        }

        .scroll-container {
          position: relative;
          background-color: #7407c8;
          border-radius: 9999px;
          overflow: hidden;
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scrollWords 40s linear infinite;
          align-items: center;
        }

        .scroll-word {
          color: #ffffff;
          font-weight: 500;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        /* Custom responsive font size with better vertical alignment */
        @media (max-width: 640px) {
          .scroll-word {
            font-size: 2.5rem;
            height: 70px;
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .scroll-word {
            font-size: 3.25rem;
            height: 90px;
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        @media (min-width: 1024px) {
          .scroll-word {
            font-size: 4.25rem;
            height: 110px;
            /* Specifically adjust vertical position for desktop */
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
          }
        }

        /* Rotating text animation */
        @keyframes rotateText {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .circular-text-container {
          position: absolute;
          width: 120px;
          height: 120px;
          z-index: 20;
        }

        .rotating-text {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotateText 20s linear infinite;
        }

        .circular-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          background-color: #7407c8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          z-index: 2;
          padding: 10px; /* Add padding around the icon */
        }

        .circular-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* Add responsive styles for the circular button */
        @media (max-width: 640px) {
          .circular-text-container {
            width: 100px;
            height: 100px;
            top: -10px !important;
            right: -10px !important;
          }

          .circular-button {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .circular-text-container {
            width: 90px;
            height: 90px;
          }

          .circular-button {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 
          ${isServicesOpen || isAboutOpen ? "mt-16" : ""}
          ${
            screenSize.isMobile
              ? "pt-16"
              : screenSize.isTablet
              ? "pt-20"
              : "pt-24 lg:py-32 pb-5"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full min-h-[70vh] relative">
          <div className="w-full max-w-4xl mx-auto text-center">
            {/* Using the dynamic heading size function */}
            <h1
              className={`${getHeadingSize()} font-bold leading-none text-white text-center`}
            >
              <span>We do</span>
              {/* Single yellow container with scrolling words */}
              <div className="my-3">
                <div
                  className="scroll-container mx-auto"
                  ref={marqueeContainerRef}
                >
                  <div className="scroll-content">
                    {scrollWords.map((item, index) => (
                      <span
                        key={index}
                        className="scroll-word"
                        data-index={index % content.length}
                      >
                        {item.highlighted}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </h1>

            {/* Description text with circular button positioned to the right */}
            <div className="mt-8 mb-10 text-left max-w-xl mx-auto relative">
              <p className="text-white text-xl sm:text-2xl leading-relaxed pr-14 pr-16 sm:pr-20 md:pr-28">
                We make exceptional digital marketing, web & app development,
                consulting, for startups and enterprises.
              </p>

              {/* Circular text button with more responsive positioning */}
              <div className="circular-text-container absolute top-0 right-0 sm:top-1/2 sm:-translate-y-1/2 transform scale-75 sm:scale-90 md:scale-100 origin-top-right">
                <Link href="/contact-us" className="block w-full h-full">
                  <div className="rotating-text">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <defs>
                        <path
                          id="circle-path"
                          d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        />
                      </defs>
                      <text
                        fontSize="12"
                        fontWeight="600"
                        fill="white"
                        letterSpacing="1"
                      >
                        <textPath xlinkHref="#circle-path" textLength="250">
                          • GDC DIGITAL SOLUTIONS AGENCY
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="circular-button">
                    {/* Phone icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-24 sm:h-24 md:w-26 md:h-26"
                    >                      
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
