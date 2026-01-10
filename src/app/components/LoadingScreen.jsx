'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiTerminal, FiCpu, FiZap, FiGitBranch, FiServer, 
         FiDatabase, FiCloud, FiCpu as FiChip, FiBox } from 'react-icons/fi';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const codeSnippets = [
    `const portfolio = {\n  name: "Benedick",\n  role: "Software Developer",\n  skills: ["React", "Next.js", "Node.js", "TypeScript"],\n  status: "Building amazing experiences"\n};`,
    `function deployPortfolio() {\n  const code = craftWithCare();\n  const tests = runTestSuite();\n  return deployToCloud(code);\n}`,
    `class Developer {\n  constructor() {\n    this.passion = "Problem Solving";\n    this.focus = "User Experience";\n  }\n  build() {\n    return "Clean, efficient code";\n  }\n}`,
    `// Loading awesome content...\nawait import('./portfolio');\nconsole.log("🚀 Ready to inspire!");`
  ];

  const binaryParticles = ['0', '1', '{', '}', '<', '>', '/', '*', '#', '@'];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isLoading || !isClient) return;

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        const increment = prev < 80 ? Math.random() * 8 + 4 : Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 180);

    // Code typing animation
    const codeInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= codeSnippets[currentCode].length) {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCode(prev => (prev + 1) % codeSnippets.length);
            setCurrentLine(0);
            setIsTyping(true);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, isTyping ? 30 : 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(codeInterval);
    };
  }, [isLoading, onComplete, isClient, currentCode, isTyping]);

  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Binary Rain Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-green-400/10 font-mono text-lg font-bold"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: -50,
                  opacity: 0
                }}
                animate={{
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              >
                {binaryParticles[Math.floor(Math.random() * binaryParticles.length)]}
              </motion.span>
            ))}
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(44,152,160,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(44,152,160,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

          {/* Main Content Container */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Animated Logo/Name */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 100
              }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] rounded-full blur-lg opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <h1 className="relative text-5xl md:text-7xl font-black text-white">
                  <span className="bg-gradient-to-r from-[#2C98A0] via-[#38B2A3] to-[#4CC8A3] bg-clip-text text-transparent">
                    BENEDICK
                  </span>
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-gray-300 font-light mt-4 tracking-wider"
              >
                FULL-STACK DEVELOPER
              </motion.p>
            </motion.div>

            {/* Animated Tech Sphere */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="relative w-48 h-48 mx-auto mb-12"
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#2C98A0]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {[
                { icon: <FiCode />, color: "text-blue-400", angle: 0 },
                { icon: <FiTerminal />, color: "text-green-400", angle: 60 },
                { icon: <FiChip />, color: "text-purple-400", angle: 120 },
                { icon: <FiDatabase />, color: "text-yellow-400", angle: 180 },
                { icon: <FiCloud />, color: "text-cyan-400", angle: 240 },
                { icon: <FiGitBranch />, color: "text-orange-400", angle: 300 },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute text-2xl ${tech.color}`}
                  style={{
                    transform: `rotate(${tech.angle}deg) translate(6rem) rotate(-${tech.angle}deg)`
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Code Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 mb-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">portfolio.js</span>
                <div className="flex-1" />
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-gray-500 text-xs font-mono">LIVE</span>
              </div>
              
              <div className="bg-black/50 rounded-lg p-4 font-mono text-left">
                <motion.code
                  className="text-green-300 text-sm md:text-base block whitespace-pre-wrap"
                >
                  {codeSnippets[currentCode].slice(0, currentLine)}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-white ml-1"
                  >
                    █
                  </motion.span>
                </motion.code>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isTyping ? 0 : 1 }}
                  className="text-blue-300 text-sm mt-2"
                >
                  $ Ready in {Math.round(100 - progress)}s...
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300 font-mono">
                  INITIALIZING_SYSTEM{dots(progress)}
                </span>
                <span className="text-gray-300 font-mono bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] bg-clip-text text-transparent font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#2C98A0] via-[#38B2A3] to-[#4CC8A3] rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-gray-400 text-sm font-light"
              >
                {getLoadingMessage(progress)}
              </motion.p>
            </motion.div>
          </div>

          {/* Animated Corner Accents */}
          <CornerAccent position="top-left" />
          <CornerAccent position="top-right" />
          <CornerAccent position="bottom-left" />
          <CornerAccent position="bottom-right" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper component for animated corners
const CornerAccent = ({ position }) => {
  const positions = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6'
  };

  return (
    <motion.div
      className={`absolute w-12 h-12 border-2 border-[#2C98A0]/30 ${positions[position]}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      whileHover={{ scale: 1.2, opacity: 0.8 }}
    />
  );
};

// Helper function for loading messages
const getLoadingMessage = (progress) => {
  const messages = [
    "Compiling components...",
    "Optimizing bundles...",
    "Running tests...",
    "Deploying to cloud...",
    "Almost there...",
    "Ready to inspire! 🚀"
  ];
  
  const index = Math.floor((progress / 100) * (messages.length - 1));
  return messages[index];
};

// Helper function for animated dots
const dots = (progress) => {
  const count = Math.floor((progress / 25) % 4);
  return '.'.repeat(count);
};

export default LoadingScreen;