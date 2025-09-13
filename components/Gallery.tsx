'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/images/2.jpeg', alt: 'Hospital', title: 'Hospital' },
    { src: '/images/1.jpeg', alt: 'Bed Facility', title: 'Bed Facility' },
    { src: '/images/4.jpeg', alt: 'Medical', title: 'Medical' },
    { src: '/images/5.jpeg', alt: 'Expert Consultation', title: 'Expert Consultation' },
    { src: '/images/8.jpeg', alt: 'Hospital Corridor', title: 'Clean Facilities' },
    { src: '/images/7.jpeg', alt: 'Lab', title: 'Lab' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern healthcare facility designed for your comfort and care.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(image.src)}
                    className="flex items-center text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                  >
                    <ZoomIn className="w-4 h-4 mr-1" />
                    View Full
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full Image View */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-96">
                <Image
                  src={selectedImage}
                  alt="Full size view"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
