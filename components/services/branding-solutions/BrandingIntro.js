"use client";
import { useState } from "react";
import { 
  SparklesIcon, 
  PaintBrushIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function BrandingSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const brandingFeatures = [
    {
      icon: LightBulbIcon,
      title: "Strategic Thinking",
      description: "Creative concepts that align with your business goals"
    },
    {
      icon: PaintBrushIcon,
      title: "Creative Design",
      description: "Memorable visuals that capture your brand essence"
    },
    {
      icon: UserGroupIcon,
      title: "Audience Connection",
      description: "Designs that resonate with your target market"
    },
    {
      icon: ChartBarIcon,
      title: "Business Growth",
      description: "Brand identity that drives real results"
    }
  ];

  const brandingServices = [
    "Logo Design",
    "Social Media Promotional Design",
    "Flyers & Leaflets",
    "Signboard & Signage Design",
    "Business Cards",
    "Letterheads",
    "Complete Digital & Print Branding Kits"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Branding{" "}
            <span className="bg-customPurple bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Concept to Cohesion: Your Brand, Our Expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full mr-3"></span>
                More Than Just a Logo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your brand is the story you tell, the impression you leave, and the promise you keep. 
                We craft powerful, cohesive brands that resonate with people — whether you&apos;re a small, 
                medium, or large business connecting with customers right here in Hamilton or reaching 
                audiences across New Zealand.
              </p>
            </div>

            {/* Services List */}
            <div className="bg-customPurple rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">What We Create</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {brandingServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features & CTA */}
          <div className="space-y-6">
            {/* Strategy Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Strong Foundations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A strong brand is the foundation of every successful business. It builds trust, 
                creates recognition, and helps you stand out from the competition. Our branding 
                services give your business a visual identity that is consistent, memorable, 
                and true to who you are.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We blend strategic thinking with creative design to craft branding materials that 
                not only look great but also connect with your audience. The result? A brand with 
                a clear voice and a visual style that resonates with your customers and supports 
                real business growth.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {brandingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Icon 
                      className={`h-8 w-8 mb-3 transition-colors duration-300 ${
                        hoveredCard === index ? 'text-purple-600' : 'text-gray-400'
                      }`} 
                    />
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}