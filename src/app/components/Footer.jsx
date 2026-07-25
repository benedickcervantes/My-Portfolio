'use client';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { scrollToSection as scrollToSectionId } from '../lib/scrollToSection';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id) => {
    scrollToSectionId(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        controls.start('visible');
      } else {
        setIsVisible(false);
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [controls]);

  return (
    <footer className="py-12 border-t border-[var(--border)] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isVisible && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-[var(--primary-foreground)] flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
          >
            <FiArrowUp className="text-lg" />
          </motion.button>
        )}

        <div className="flex flex-col items-center gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="relative flex items-center justify-center"
            aria-label="Ben — Home"
          >
            <Logo className="h-11 w-11" />
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p className="text-sm text-[var(--text-muted)] text-center">
            © {currentYear} Benedick Cervantes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
