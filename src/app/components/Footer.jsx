'use client';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Get current year safely (won't cause hydration mismatch)
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'July 2023'; // Static date to avoid hydration issues

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        controls.start("visible");
      } else {
        setIsVisible(false);
        controls.start("hidden");
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [controls]);

  const arrowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      y: -5,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300 relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background elements - removed dynamic opacity to prevent hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#2C98A0] opacity-5 filter blur-3xl dark:opacity-[0.03]"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#4CC8A3] opacity-5 filter blur-3xl dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to top button - now only renders on client side */}
        {typeof window !== 'undefined' && isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            initial="hidden"
            animate={controls}
            variants={arrowVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Back to top"
          >
            <div className="p-4 bg-gradient-to-br from-[#2C98A0] to-[#4CC8A3] rounded-full shadow-lg group-hover:shadow-xl transition-all">
              <FiArrowUp className="text-xl text-white" />
            </div>
          </motion.button>
        )}

        <div className="flex flex-col items-center gap-8">
          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = link.href.substring(1);
                  scrollToSection(sectionId);
                }}
                className="hover:text-[#2C98A0] dark:hover:text-[#4CC8A3] transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C98A0] dark:bg-[#4CC8A3] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Logo and copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-4"
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-3xl font-bold bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] dark:from-[#2C98A0] dark:to-[#4CC8A3] bg-clip-text text-transparent inline-block mb-2"
            >
              Benedick Cervantes
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              © {currentYear} All Rights Reserved
            </p>
          </motion.div>

          {/* Footer bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center w-full"
          >
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Designed and built with <span className="text-[#2C98A0] dark:text-[#4CC8A3]">❤️</span> using Next.js
            </p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;