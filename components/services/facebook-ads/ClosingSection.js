import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import TrackedPhoneLink from '@/components/TrackedPhoneLink';

export default function FBClosingSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-customYellow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-customYellow opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Left content */}
            <motion.div 
              className="md:w-2/3 md:pr-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Started with <span className="text-customYellow">GDC Digital Solutions Today!</span>
              </h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Ready to scale your business with Facebook Ads? Let&apos;s create a high-performance ad campaign that drives sales, leads, and brand awareness in New Zealand.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed md:mb-0 mb-8">
                Contact Us today to grow your business with expert Facebook advertising in NZ!
              </p>
            </motion.div>
            
            {/* Right content with CTA */}
            <motion.div 
              className="md:w-1/3 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-gray-800/70 rounded-xl p-6 backdrop-blur-sm border border-gray-700 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Ready for more leads?</h3>
                <p className="text-gray-300 mb-6">Our Facebook Ads experts are ready to help your business reach its full potential.</p>
                <a 
                  href="/contact-us" 
                  className="group inline-flex items-center justify-center gap-2 bg-customYellow hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Campaign Now
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="flex justify-center mt-6">
                  <span className="text-sm text-gray-400">Or call us: </span>
                  <TrackedPhoneLink 
                    phoneNumber="0212463988"
                    className="text-sm text-customYellow ml-2 hover:underline"
                  >
                    021 246 3988
                  </TrackedPhoneLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}