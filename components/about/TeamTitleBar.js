"use client";
import React, { useEffect, useRef } from "react";

const TeamTitleBar = () => {
  // Content with words only - separators will be added as images
  const titleParts = ["Our", "Core", "Team"];

  const scrollContainerRef = useRef(null);

  // Create duplicated title array for continuous scrolling
  const scrollContent = [...titleParts, ...titleParts, ...titleParts];

  return (
    <div
      className="w-full py-6 md:py-8 lg:py-10 overflow-hidden"
      ref={scrollContainerRef}
    >
      {/* CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scrollTitle {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move by 1/3 for complete cycle */
          }
        }

        .scroll-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scrollTitle 15s linear infinite;
          align-items: center;
        }

        .title-item {
          font-weight: bold;
          padding: 0 30px;
          letter-spacing: 0.05em;
        }

        .image-separator {
          padding: 0 10px;
          display: flex;
          align-items: center;
        }
      `}</style>

      {/* Scrolling content container */}
      <div className="flex justify-center">
        <div className="overflow-hidden max-w-full">
          <div className="scroll-content">
            {scrollContent.map((part, index) => (
              <React.Fragment key={index}>
                <span className="title-item text-black text-3xl md:text-5xl lg:text-7xl font-bold">
                  {part}
                </span>

                <span className="image-separator">
                  <div className="relative h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16">
                    <img
                      src="/assets/images/icons/separator.png"
                      alt="Separator"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTitleBar;
