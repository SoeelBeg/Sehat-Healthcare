'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 80786 00379',
      subtitle: '24/7 Emergency Line',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'L-26,Mulla Talai, Kalbailai, Udaipur, Rajasthan',
      subtitle: 'Easy to reach location',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 2AM-8PM',
      subtitle: 'Sat-Sun: 8AM-8PM',
      color: 'purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take care of your health? Contact us today to schedule an appointment or for any inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help you with all your healthcare needs. Reach out to us through any of the following methods.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-2xl shadow-lg border-2 border-${info.color}-100 bg-${info.color}-50/50 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-12 h-12 bg-${info.color}-600 rounded-full flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                  <p className={`text-${info.color}-700 font-medium mb-1`}>{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of Udaipur, we&apos;re easily accessible from all parts of the city.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.172688810521!2d73.66498597647912!3d24.58456978413587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e59088eb381d%3A0xa881b00127dcb8f0!2sSehat%20Hospital%20Udaipur!5e0!3m2!1sen!2sin!4v1694600000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center text-blue-600">
                  <Navigation className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">Sehat Healthcare</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to prioritize your health?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don&apos;t wait when it comes to your health. Contact Sehat Healthcare today and take the first step 
            towards better healthcare.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
