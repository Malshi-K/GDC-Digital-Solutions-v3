import {
  FaUserCog,
  FaBullseye,
  FaChartLine,
  FaStore,
} from "react-icons/fa"; // Importing relevant icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the Facebook Ads benefits
const benefitsData = [
  {
    icon: <FaUserCog className="mx-auto mb-4 text-6xl text-customYellow" />, // Expert management icon
    title: "Expert Facebook Ad Management",
    description:
      "We specialise in Meta Ads to ensure your brand reaches the right audience. Our experienced team leverages platform-specific features to create campaigns that drive engagement and conversions.",
  },
  {
    icon: <FaBullseye className="mx-auto mb-4 text-6xl text-customYellow" />, // Targeting icon
    title: "Targeted Facebook Advertising",
    description:
      "We use precise targeting strategies to connect with NZ businesses, local customers, and e-commerce shoppers. Our detailed audience segmentation ensures your ads reach the most relevant potential customers.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customYellow" />, // ROI optimization icon
    title: "Optimised Facebook Ads for ROI",
    description:
      "Our team focuses on conversion-driven ads to maximise your marketing budget. We continuously monitor performance metrics and make data-driven adjustments to improve your return on investment.",
  },
  {
    icon: <FaStore className="mx-auto mb-4 text-6xl text-customYellow" />, // Business focus icon
    title: "Small Business & E-Commerce Focused",
    description:
      "Whether you run a local business in Auckland or an online store in Wellington, we tailor strategies to suit your needs. Our specialised approach considers your unique business model and target market.",
  },
];

export default function FacebookAdsBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
    threshold: 0.2, // Animation will trigger when 20% of the element is visible
  });

  return (
    <section className="py-12" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-center text-customGray mb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {"Why Choose Our "}
        {[..."Facebook Ads".split('')].map((letter, index) => ( letter === ' ' ? <span key={index} className="inline-block w-2" /> :
          <motion.span
            key={index}
            className="text-customYellow inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.05, delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
        {" Services"}
      </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dynamically render the benefits */}
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center text-customGray"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animations
            >
              {benefit.icon}
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}