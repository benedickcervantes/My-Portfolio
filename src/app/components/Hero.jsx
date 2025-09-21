'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook, FiArrowRight, FiCamera, FiX, FiSend, FiBriefcase } from 'react-icons/fi';
import Image from 'next/image';

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
  const [typingPhase, setTypingPhase] = useState(0);
  const [avatarOption, setAvatarOption] = useState(0);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  
  const greeting = "Hi there, I'm";
  const fullName = "Benedick Cervantes";
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'IT Consultant',
    'Tech Enthusiast',
    'Problem Solver'
  ];

  // Avatar options with different styles
  const avatarOptions = [
    {
      id: 0,
      name: "Developer",
      emoji: "👨‍💻",
      color: "from-[#2C98A0] to-[#4CC8A3]",
      badges: ["React.js", "Node.js"]
    },
    {
      id: 1,
      name: "Designer",
      emoji: "🎨",
      color: "from-[#38B2A3] to-[#4CC8A3]",
      badges: ["Figma", "UI/UX"]
    },
    {
      id: 2,
      name: "Consultant",
      emoji: "📊",
      color: "from-[#2C98A0] to-[#38B2A3]",
      badges: ["IT Strategy", "Solutions"]
    },
    {
      id: 3,
      name: "Professional",
      emoji: "👔",
      color: "from-[#2C98A0] via-[#38B2A3] to-[#4CC8A3]",
      badges: ["Leadership", "Management"]
    }
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Typing effect controller
  useEffect(() => {
    let timeout;
    
    if (typingPhase === 0) {
      if (displayedGreeting.length < greeting.length) {
        timeout = setTimeout(() => {
          setDisplayedGreeting(greeting.substring(0, displayedGreeting.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTypingPhase(1), 300);
      }
    } else if (typingPhase === 1) {
      if (displayedName.length < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayedName(fullName.substring(0, displayedName.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTypingPhase(2), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingPhase, displayedGreeting, displayedName]);

  // Role rotation effect
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
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2C98A0] filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: typingPhase >= 1 ? 0.05 : 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#4CC8A3] filter blur-3xl"
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
          <div className="text-sm font-mono text-[#2C98A0] dark:text-[#4CC8A3] mb-4 h-6">
            {displayedGreeting}
            {typingPhase === 0 && (
              <motion.span
                className="inline-block w-2 h-5 bg-[#2C98A0] dark:bg-[#4CC8A3] ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight min-h-[1.5em]">
            {displayedName && (
              <>
                <span className="name-text-light font-extrabold">{firstName} </span>
                {lastName && (
                  <span className="text-[#2C98A0] dark:text-[#4CC8A3]">{lastName}</span>
                )}
                {typingPhase === 1 && (
                  <motion.span
                    className="inline-block w-2 h-12 bg-[#2C98A0] dark:bg-[#4CC8A3] ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                )}
              </>
            )}
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-300 min-h-[3rem] flex items-center">
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
            className="text-lg mb-8 text-gray-800 dark:text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: typingPhase === 2 ? 1 : 0 }}
            transition={{ delay: typingPhase === 2 ? 0.6 : 0 }}
          >
            I craft exceptional digital experiences with modern technologies and clean, user-centric design principles.
            Passionate about creating solutions that are both beautiful and functional.
          </motion.p>
          
          {/* Buttons with consistent sizing and glow effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typingPhase === 2 ? 1 : 0, y: typingPhase === 2 ? 0 : 20 }}
            transition={{ delay: typingPhase === 2 ? 0.8 : 0 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="group relative px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] rounded-lg transition-all duration-300 text-center shadow-[0_4px_20px_-5px_rgba(44,152,160,0.5)] hover:shadow-[0_4px_25px_-2px_rgba(44,152,160,0.6)] overflow-hidden font-[Inter] cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiBriefcase className="h-4 w-4 flex-shrink-0" />
                <span>View My Work</span>
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </span>
              <span className="absolute inset-0 bg-[#2C98A0] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="group relative px-6 py-3.5 text-sm sm:text-base font-medium text-[#2C98A0] dark:text-[#4CC8A3] backdrop-blur-sm bg-white dark:bg-gray-800/80 border-2 border-[#2C98A0] dark:border-[#4CC8A3] rounded-lg transition-all duration-300 text-center shadow-[0_4px_20px_-5px_rgba(44,152,160,0.3)] hover:shadow-[0_4px_25px_-2px_rgba(44,152,160,0.4)] overflow-hidden font-[Inter] cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
              whileHover={{
                y: -4,
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{
                scale: 0.98,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiSend className="h-4 w-4 flex-shrink-0" />
                <span>Contact Me</span>
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </span>
              <span className="absolute inset-0 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>

          {/* Mobile Social links - visible on small screens */}
          <motion.div 
            className="flex md:hidden justify-center space-x-6 mt-8"
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
                className="text-2xl text-gray-800 dark:text-gray-300 hover:text-[#2C98A0] dark:hover:text-[#4CC8A3] transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${social.url}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Professional Photo */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: typingPhase === 2 ? 1 : 0, y: typingPhase === 2 ? 0 : 50 }}
          transition={{ duration: 0.8, delay: typingPhase === 2 ? 0.2 : 0 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow effects */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#2C98A0] to-[#4CC8A3] rounded-full opacity-20 blur-xl"
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
              className="absolute inset-0 bg-gradient-to-br from-[#2C98A0] to-[#4CC8A3] rounded-full opacity-10 blur-xl"
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
            
            {/* Professional Photo Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
              <Image
                src="/images/developer-photo.png"
                alt="Benedick Cervantes - Full Stack Developer"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback content if image doesn't exist */}
              <div className="w-full h-full bg-gradient-to-br from-[#e6f7f5] to-[#d1f2ef] dark:from-gray-800 dark:to-gray-900 flex items-center justify-center" style={{ display: 'none' }}>
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
            </div>
            
            {/* Floating tech badges */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md text-xs font-medium text-[#2C98A0] dark:text-[#4CC8A3]"
              initial={{ scale: 0 }}
              animate={{ scale: typingPhase === 2 ? 1 : 0 }}
              transition={{ delay: typingPhase === 2 ? 1.2 : 0 }}
            >
              React.js
            </motion.div>
            <motion.div 
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md text-xs font-medium text-[#2C98A0] dark:text-[#4CC8A3]"
              initial={{ scale: 0 }}
              animate={{ scale: typingPhase === 2 ? 1 : 0 }}
              transition={{ delay: typingPhase === 2 ? 1.4 : 0 }}
            >
              Next.js
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Desktop Social links - visible on medium screens and up */}
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
            className="text-2xl text-gray-800 dark:text-gray-300 hover:text-[#2C98A0] dark:hover:text-[#4CC8A3] transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Visit ${social.url}`}
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.div 
          className="w-px h-24 bg-gradient-to-b from-[#2C98A0] to-[#4CC8A3]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: typingPhase === 2 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: typingPhase === 2 ? 1.8 : 0 }}
        />
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
