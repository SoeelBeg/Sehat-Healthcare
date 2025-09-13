'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';

const Timings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const timings = [
    { days: 'Monday - Friday', hours: '2:00 AM - 8:00 PM', isWeekday: true },
    { days: 'Saturday - Sunday', hours: '8:00 AM - 8:00 PM', isWeekday: false },
  ];

  return (
    <section id="timings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hospital <span className="text-blue-600">Timings</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here when you need us most. Check our operating hours and plan your visit accordingly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {timings.map((timing, index) => (
              <motion.div
                key={timing.days}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl shadow-xl p-8 ${
                  timing.isWeekday 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' 
                    : 'bg-gradient-to-br from-green-600 to-green-700 text-white'
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 border-2 border-current rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-current rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">{timing.days}</h3>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 mr-3" />
                    <span className="text-xl font-semibold">{timing.hours}</span>
                  </div>

                  <div className="text-sm opacity-90">
                    {timing.isWeekday ? 'Extended weekday hours' : 'Weekend availability'}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-16 h-16 border-2 border-current rounded-full opacity-20"
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Appointment Booking</h4>
              <p className="text-gray-600 text-sm">Book appointments during working hours</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone Consultation</h4>
              <p className="text-gray-600 text-sm">Available during operating hours</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Holiday Hours</h4>
              <p className="text-gray-600 text-sm">Special timings on public holidays</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timings;