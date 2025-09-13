'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

  const features = [
    {
      icon: Award,
      title: 'Excellence in Care',
      description: 'Committed to providing the highest quality medical care'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled healthcare professionals dedicated to your wellbeing'
    },
    {
      icon: Heart,
      title: 'Compassionate Service',
      description: 'Treating every patient with care, respect, and dignity'
    },
    {
      icon: Shield,
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and clean, safe environment'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Sehat Healthcare</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services to the community of Udaipur and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Health, Our Priority
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Sehat Healthcare Hospital, we believe that quality healthcare should be accessible to everyone. 
              Our team of experienced medical professionals is committed to providing comprehensive medical care 
              in a comfortable and caring environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With modern facilities and a patient-centered approach, we strive to deliver the best possible 
              outcomes for our patients. From routine check-ups to specialized treatments, we are here to 
              support your health journey every step of the way.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg"
                >
                  <feature.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/2.jpeg"
                alt="Hospital Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-blue-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;