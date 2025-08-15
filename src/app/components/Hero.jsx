'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook, FiArrowRight } from 'react-icons/fi';

const Hero = ({ setActiveSection }) => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/benedickcervantes' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/benedick-cervantes-1375a9111/' },
    { icon: <FiFacebook />, url: 'https://www.facebook.com/Benedick.Cervantes/' },
    { icon: <FiMail />, url: 'mailto:example@email.com' },
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [typingPhase, setTypingPhase] = useState(0); // 0: greeting, 1: name, 2: complete
  
  const greeting = "Hi there, I'm";
  const fullName = "Benedick Cervantes";
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Tech Enthusiast',
    'Problem Solver'
  ];

  // Typing effect controller
  useEffect(() => {
    let timeout;
    
    if (typingPhase === 0) {
      // Typing greeting
      if (displayedGreeting.length < greeting.length) {
        timeout = setTimeout(() => {
          setDisplayedGreeting(greeting.substring(0, displayedGreeting.length + 1));
        }, 80);
      } else {
        // Brief pause before name starts typing
        timeout = setTimeout(() => setTypingPhase(1), 300);
      }
    } else if (typingPhase === 1) {
      // Typing name
      if (displayedName.length < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayedName(fullName.substring(0, displayedName.length + 1));
        }, 100);
      } else {
        // Brief pause before showing rest of content
        timeout = setTimeout(() => setTypingPhase(2), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingPhase, displayedGreeting, displayedName]);

  // Role rotation effect (only after typing complete)
  useEffect(() => {
    if (typingPhase < 2) return;
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [typingPhase]);

  // Split name into first and last for styling
  const [firstName, lastName] = displayedName.split(' ');

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: typingPhase >= 1 ? 0.05 : 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: typingPhase >= 1 ? 0.05 : 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col"
        >
          <div className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-4 h-6">
            {displayedGreeting}
            {typingPhase === 0 && (
              <motion.span
                className="inline-block w-2 h-5 bg-purple-600 dark:bg-purple-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight min-h-[1.5em]">
            {displayedName && (
              <>
                <span className="text-gray-800 dark:text-white">{firstName} </span>
                {lastName && (
                  <span className="text-purple-600 dark:text-purple-400">{lastName}</span>
                )}
                {typingPhase === 1 && (
                  <motion.span
                    className="inline-block w-2 h-12 bg-purple-600 dark:bg-purple-400 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                )}
              </>
            )}
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300 h-12">
            {typingPhase === 2 && (
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <TypewriterEffect text={roles[currentRole]} speed={50} />
              </motion.div>
            )}
          </div>
          
          <motion.p 
            className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: typingPhase === 2 ? 1 : 0 }}
            transition={{ delay: typingPhase === 2 ? 0.6 : 0 }}
          >
            I craft exceptional digital experiences with modern technologies and clean, user-centric design principles.
            Passionate about creating solutions that are both beautiful and functional.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typingPhase === 2 ? 1 : 0, y: typingPhase === 2 ? 0 : 20 }}
            transition={{ delay: typingPhase === 2 ? 0.8 : 0 }}
          >
            <motion.button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button 
              onClick={() => setActiveSection('contact')}
              className="flex items-center justify-center px-8 py-3.5 border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-gray-800/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Image/avatar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: typingPhase === 2 ? 1 : 0, y: typingPhase === 2 ? 0 : 50 }}
          transition={{ duration: 0.8, delay: typingPhase === 2 ? 0.2 : 0 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow effects */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full opacity-10 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Avatar container */}
            <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-6xl md:text-7xl">👨‍💻</span>
                </motion.div>
              </div>
              
              {/* Floating tech badges */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md text-xs font-medium"
                initial={{ scale: 0 }}
                animate={{ scale: typingPhase === 2 ? 1 : 0 }}
                transition={{ delay: typingPhase === 2 ? 1.2 : 0 }}
              >
                React.js
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md text-xs font-medium"
                initial={{ scale: 0 }}
                animate={{ scale: typingPhase === 2 ? 1 : 0 }}
                transition={{ delay: typingPhase === 2 ? 1.4 : 0 }}
              >
                Node.js
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Social links */}
      <motion.div 
        className="hidden md:flex fixed left-8 bottom-8 flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: typingPhase === 2 ? 1 : 0, y: typingPhase === 2 ? 0 : 20 }}
        transition={{ delay: typingPhase === 2 ? 1.6 : 0 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.div 
          className="w-px h-24 bg-gradient-to-b from-purple-500 to-blue-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: typingPhase === 2 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: typingPhase === 2 ? 1.8 : 0 }}
        />
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex flex-col items-center fixed right-8 bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: typingPhase === 2 ? 1 : 0 }}
        transition={{ delay: typingPhase === 2 ? 2 : 0 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-gray-500 dark:text-gray-400 mb-2"
        >
          Scroll down
        </motion.div>
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

// Typewriter effect component for roles
const TypewriterEffect = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

export default Hero;