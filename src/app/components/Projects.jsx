'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const Projects = ({ setActiveSection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "🛒",
      stats: { stars: 128, forks: 42 }
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "✅",
      stats: { stars: 89, forks: 23 }
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast and location-based recommendations.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      github: "#",
      live: "#",
      image: "☀️",
      stats: { stars: 56, forks: 18 }
    },
    {
      title: "AI Recipe Generator",
      description: "Machine learning powered recipe suggestion engine based on available ingredients.",
      tags: ["Python", "TensorFlow", "Flask"],
      github: "#",
      live: "#",
      image: "🍳",
      stats: { stars: 210, forks: 67 }
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first workout tracker with exercise database and progress charts.",
      tags: ["React Native", "GraphQL", "MongoDB"],
      github: "#",
      live: "#",
      image: "🏋️",
      stats: { stars: 145, forks: 38 }
    },
    {
      title: "Code Collaboration Tool",
      description: "Real-time collaborative coding environment with syntax highlighting.",
      tags: ["TypeScript", "WebSockets", "Node.js"],
      github: "#",
      live: "#",
      image: "👨‍💻",
      stats: { stars: 178, forks: 52 }
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-6xl relative overflow-hidden">
                  {project.image}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  >
                    <div className="flex space-x-4 text-white">
                      <span className="flex items-center text-sm">
                        <FiStar className="mr-1" /> {project.stats.stars}
                      </span>
                      <span className="flex items-center text-sm">
                        <FiGitBranch className="mr-1" /> {project.stats.forks}
                      </span>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + tagIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => setActiveSection('contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium overflow-hidden"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            initial={false}
          >
            {/* Animated background elements */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0"
              variants={{
                hover: { opacity: 1 },
                tap: { opacity: 0.8 }
              }}
            />
            
            {/* Floating dots animation */}
            {isButtonHovered && (
              <>
                <motion.span
                  className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0, 0.7, 0],
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.2
                    }
                  }}
                />
                <motion.span
                  className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-70"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0, 0.7, 0],
                    transition: { 
                      duration: 1.8,
                      repeat: Infinity,
                      delay: 0.4
                    }
                  }}
                />
              </>
            )}

            {/* Button content with enhanced animation */}
            <motion.span 
              className="relative z-10 flex items-center justify-center gap-2"
              variants={{
                hover: { 
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  } 
                },
                tap: { 
                  scale: 0.95 
                }
              }}
            >
              View More Projects
              <motion.span
                animate={{
                  x: isButtonHovered ? [0, 4, 0] : 0,
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
              >
                <FiArrowRight className="text-lg" />
              </motion.span>
            </motion.span>

            {/* Ripple effect on click */}
            <motion.span
              className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-full"
              initial={{ scale: 0.5, opacity: 0 }}
              whileTap={{
                scale: 2,
                opacity: 0.2,
                transition: { duration: 0.5 }
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;