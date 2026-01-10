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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'} ${darkMode ? 'bg-gray-900' : 'bg-white border-b border-gray-200'}`}>
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
            <span className="text-black dark:bg-gradient-to-r dark:from-[#2C98A0] dark:via-[#38B2A3] dark:to-[#4CC8A3] dark:bg-clip-text dark:text-transparent">
              <span className="hidden sm:inline">My Portfolio</span>
              <span className="sm:hidden">BC</span>
            </span>
            <motion.span 
              className="ml-2 text-xs px-2 py-1 rounded-full text-white bg-black dark:bg-gradient-to-r dark:from-[#2C98A0] dark:via-[#38B2A3] dark:to-[#4CC8A3] dark:text-white"
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
                    ? 'text-[#2C98A0] dark:text-[#4CC8A3] font-medium' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-[#4CC8A3]'}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.icon}
                  {link.label}
                </button>
                
                {(activeSection === link.id || hoveredLink === link.id) && (
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C98A0] dark:bg-[#4CC8A3]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    layoutId="underline"
                  />
                )}
              </div>
            ))}
            
            {/* Enhanced Dark Mode Toggle - Desktop */}
            <motion.button type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-8 rounded-full p-1 flex items-center transition-all duration-300 ${darkMode ? 'justify-end bg-gray-700' : 'justify-start bg-gray-300'}`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-[#4CC8A3]' : 'bg-white'}`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 text-black" />
                ) : (
                  <FiMoon className="w-4 h-4 text-gray-800" />
                )}
              </motion.div>
            </motion.button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Enhanced Mobile Dark Mode Toggle - Consistent with Desktop */}
            <motion.button type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-8 rounded-full p-1 flex items-center transition-all duration-300 ${darkMode ? 'justify-end bg-gray-700' : 'justify-start bg-gray-300'}`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-[#4CC8A3]' : 'bg-white'}`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 text-black" />
                ) : (
                  <FiMoon className="w-4 h-4 text-gray-800" />
                )}
              </motion.div>
            </motion.button>
            
            <motion.button type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMenu(); }}
              className={`p-2 transition-colors group hamburger-button ${isMenuOpen ? "menu-open" : ""}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="block w-6 h-0.5 group-hover:h-1 transition-all duration-200 mb-1.5 origin-center hamburger-line"
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: darkMode ? "white" : "black" }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 group-hover:h-1 transition-all duration-200 mb-1.5 hamburger-line middle-line"
                    animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: darkMode ? "white" : "black" }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 group-hover:h-1 transition-all duration-200 origin-center hamburger-line"
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: darkMode ? "white" : "black" }}
                  />
                </div>            </motion.button>
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
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-white border-b border-gray-200'}`}></div>
            <nav className="relative flex flex-col items-center space-y-4 py-6 px-4">
              {navLinks.map((link, index) => (
                <motion.button type="button"
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-lg px-6 py-4 rounded-lg transition-all flex items-center ${activeSection === link.id 
                    ? 'bg-[#e6f7f5] text-[#2C98A0] dark:bg-[#1a3a3f] dark:text-[#4CC8A3] font-medium' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`${activeSection === link.id ? 'text-[#2C98A0] dark:text-[#4CC8A3]' : 'text-gray-600 dark:text-gray-400'}`}>
                      {link.icon}
                    </span>
                    {link.label}
                  </div>
                </motion.button>
              ))}
            </nav>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C98A0] via-[#38B2A3] to-[#4CC8A3]"
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
