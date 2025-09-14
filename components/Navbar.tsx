'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#timings', label: 'Timings' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // to avoid double toggle when both touch and click fire
  const touchRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // prevent body scroll while menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  // close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  // close on outside click/touch
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      // if clicking outside nav, close
      if (!target.closest?.('nav')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('touchstart', handler);
      document.addEventListener('mousedown', handler);
    }
    return () => {
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);

  // handlers to avoid double toggle on some mobile browsers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current = true;
    setIsOpen((s) => !s);
    setTimeout(() => {
      touchRef.current = false;
    }, 700);
    console.log('touchstart fired - toggling menu');
  };

  const handleClick = (e: React.MouseEvent) => {
    // ignore click if it directly followed a touch
    if (touchRef.current) {
      console.log('click ignored because touch just occurred');
      return;
    }
    setIsOpen((s) => !s);
    console.log('click fired - toggling menu');
  };

  const handleNavLinkClick = (href: string) => {
    // close menu and allow anchor navigation
    // small timeout to ensure SPA/scroll works reliably on mobile
    setTimeout(() => setIsOpen(false), 50);
    console.log('nav link clicked:', href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      } z-[9999]`} // very high z to avoid overlays
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <Heart className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-blue-600">Sehat Healthcare</span>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => handleNavLinkClick(link.href)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile button */}
          <div className="md:hidden relative z-[10000]"> {/* button above everything */}
            <button
              onTouchStart={handleTouchStart}
              onClick={handleClick}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md block"
              // explicit pointer events
              style={{ pointerEvents: 'auto' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - fixed so nothing can overlay it */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden fixed left-0 right-0 top-16 bg-white border-t border-gray-200 shadow-lg z-[9998]"
            style={{ WebkitOverflowScrolling: 'touch', pointerEvents: 'auto' }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                  style={{ pointerEvents: 'auto' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
