'use client';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiHome, FiUser, FiCode, FiLayers, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ darkMode = true, setDarkMode, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FiHome className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <FiUser className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FiLayers className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <FiCode className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-2xl font-bold flex items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            aria-label="Home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              <span className="hidden sm:inline">My Portfolio</span>
              <span className="sm:hidden">BC</span>
            </span>
            <motion.span 
              className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ben
            </motion.span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <div 
                key={link.id}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 transition-all flex items-center gap-1 ${activeSection === link.id 
                    ? 'text-purple-600 dark:text-purple-400 font-medium' 
                    : 'text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-300'}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.icon}
                  {link.label}
                </button>
                
                {(activeSection === link.id || hoveredLink === link.id) && (
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    layoutId="underline"
                  />
                )}
              </div>
            ))}
            
            {/* Enhanced Dark Mode Toggle - Default to dark */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-8 rounded-full p-1 flex items-center ${darkMode ? 'justify-end bg-gray-700' : 'justify-start bg-gray-300'}`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center ${darkMode ? 'bg-yellow-300' : 'bg-white'}`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 text-yellow-600" />
                ) : (
                  <FiMoon className="w-4 h-4 text-gray-600" />
                )}
              </motion.div>
            </motion.button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Enhanced Mobile Dark Mode Toggle - Default to dark */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full p-1 flex items-center ${darkMode ? 'justify-end bg-gray-700' : 'justify-start bg-gray-300'}`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`absolute w-5 h-5 rounded-full shadow-md flex items-center justify-center ${darkMode ? 'bg-yellow-300' : 'bg-white'}`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                {darkMode ? (
                  <FiSun className="w-3 h-3 text-yellow-600" />
                ) : (
                  <FiMoon className="w-3 h-3 text-gray-600" />
                )}
              </motion.div>
            </motion.button>
            
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Solid Background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ top: '80px' }}
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}></div>
            <nav className="relative flex flex-col items-center space-y-4 py-6 px-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-lg px-6 py-4 rounded-lg transition-all flex items-center ${activeSection === link.id 
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`${activeSection === link.id ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {link.icon}
                    </span>
                    {link.label}
                  </div>
                </motion.button>
              ))}
            </nav>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;