'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Clock, IndianRupee, Stethoscope } from 'lucide-react';

const Doctors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,});

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Expert Doctors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our experienced medical professionals dedicated to your health and wellbeing.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full border border-blue-100"
          >
            {/* Doctor Image */}
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
              <img
                src="/images/9.jpg"
                alt="Dr. Adil Khan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                Available
              </motion.div>
            </div>

            {/* Doctor Info */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Adil Khan</h3>
                <div className="flex items-center text-blue-600 mb-4">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  <span className="font-medium">General Practitioner</span>
                </div>
              </motion.div>

              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3 mb-6"
              >
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                  <span>MBBS</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span>6 Years Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <IndianRupee className="w-5 h-5 mr-3 text-blue-600" />
                  <span>₹150 Consultation Fee</span>
                </div>
              </motion.div>

              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6"
              >
                <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {['General Medicine', 'Health Check-ups', 'Preventive Care', 'Family Medicine'].map((spec, index) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need to schedule an appointment or have questions about our services?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-blue-200"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;