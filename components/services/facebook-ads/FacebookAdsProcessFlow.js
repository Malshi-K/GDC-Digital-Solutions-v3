"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUserFriends,
  FaPencilAlt,
  FaChartLine,
  FaArrowDown,
  FaBuilding,
  FaUsers,
  FaImages,
  FaVideo,
  FaChartBar
} from "react-icons/fa"; // Icons for each Facebook advertising service

export default function FacebookAdsProcessFlow() {
  // Steps array for the Facebook advertising services
  const services = [
    {
      icon: <FaLightbulb className="text-customYellow text-4xl mb-4" />,
      title: "Facebook Ad Strategy & Campaign Setup",
      description:
        "We create a customised Facebook Ads strategy based on your business goals, ensuring high engagement and lead generation.",
    },
    {
      icon: <FaUserFriends className="text-customYellow text-4xl mb-4" />,
      title: "Audience Targeting & Retargeting",
      description:
        "We help you reach the right people, including:",
      subItems: [
        {
          icon: <FaBuilding className="text-customYellow text-xl inline-block mr-2" />,
          text: "Local Business Ads NZ – Target customers based on location, demographics, and behaviour."
        },
        {
          icon: <FaUsers className="text-customYellow text-xl inline-block mr-2" />,
          text: "Lookalike Audiences – Expand your reach by targeting users similar to your best customers."
        }
      ]
    },
    {
      icon: <FaPencilAlt className="text-customYellow text-4xl mb-4" />,
      title: "Ad Creation & Optimisation",
      description:
        "From Facebook carousel ads to video marketing, we design eye-catching ads that increase clicks and conversions.",
      subItems: [
        {
          icon: <FaImages className="text-customYellow text-xl inline-block mr-2" />,
          text: "Carousel & Image Ads – Showcase multiple products or features in a single ad."
        },
        {
          icon: <FaVideo className="text-customYellow text-xl inline-block mr-2" />,
          text: "Video Ads – Engage your audience with compelling video content."
        }
      ]
    },
    {
      icon: <FaChartLine className="text-customYellow text-4xl mb-4" />,
      title: "Performance Tracking & Reporting",
      description:
        "We continuously monitor, analyse, and optimise your Facebook Ads for the best results.",
      subItems: [
        {
          icon: <FaChartBar className="text-customYellow text-xl inline-block mr-2" />,
          text: "Detailed analytics and insights to track ROI and campaign effectiveness."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-customGray">
            Our Facebook Advertising Services
          </h2>
          <p className="text-gray-600 mt-4">
            Comprehensive solutions to boost your brand&apos;s presence on Facebook
          </p>
        </motion.div>

        {/* Process Flow Vertical Layout */}
        <div className="flex flex-col space-y-16 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              {/* Icon */}
              {service.icon}

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Sub Items if any */}
              {service.subItems && (
                <div className="w-full text-left mt-2 space-y-3">
                  {service.subItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <span className="mr-2 mt-1">{item.icon}</span>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Arrow Between Services */}
              {index < services.length - 1 && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.5 + 0.5, duration: 0.5 }}
                >
                  <FaArrowDown className="text-gray-400 text-3xl" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}