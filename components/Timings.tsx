'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';

const Timings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            We&apos;re here when you need us most. Check our operating hours and plan your visit accordingly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timings;
