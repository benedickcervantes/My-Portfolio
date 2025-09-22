'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiArrowRight, FiUsers, FiShield, FiBarChart, FiGlobe, FiHome, FiCalendar } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

const Projects = ({ setActiveSection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const projects = [
    {
      title: "FCDC Helpdesk Enterprise IT Support",
      description: "A comprehensive enterprise helpdesk system with role-based dashboards for users, admins, and executives. Features real-time ticket management, advanced analytics, and professional reporting capabilities.",
      tags: ["Next.js 14", "Firebase", "Tailwind CSS", "Real-time", "Role-based Access"],
      github: "https://github.com/benedickcervantes/helpdeskticketingsystem.git",
      live: "https://helpdeskticketingsystem.vercel.app/",
      image: "/images/FCDC.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "Multi-role Dashboard System",
        "Real-time Ticket Management", 
        "Advanced Analytics & Reporting",
        "Firebase Authentication",
        "Professional Design System"
      ],
      icon: <FiUsers className="text-2xl" />
    },
    {
      title: "Inspire Hub - Co-working Space Platform",
      description: "A modern co-working space reservation platform built with Next.js, featuring office/room/desk booking system, user authentication, and comprehensive workspace management. Designed for Inspire Holdings Inc. to manage their flexible workspace offerings.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "Vercel"],
      github: "https://github.com/AmuroBrian/inspire-hub.git",
      live: "https://inspire-hub-sigma.vercel.app/",
      image: "/images/inspirehub.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "Office/Room/Desk Reservation System",
        "User Authentication & Management",
        "Flexible Workspace Booking",
        "Professional Co-working Platform",
        "Responsive Design & Mobile-First"
      ],
      icon: <FiCalendar className="text-2xl" />
    },
    {
      title: "Inspire Holdings - Corporate Website",
      description: "A professional corporate website built with WordPress, featuring member management, seminar scheduling, and business consulting services. Includes secure user authentication, invoice request system, and multi-language support for international operations.",
      tags: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "Corporate"],
      github: "https://wordpress.com/",
      live: "https://inspireholdings.ph/",
      image: "/images/holdingsinc.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "Member Management System",
        "Seminar & Event Scheduling",
        "Invoice Request Portal",
        "Multi-location Business Support",
        "Professional Corporate Design"
      ],
      icon: <FiHome className="text-2xl" />
    },
    {
      title: "Inspire Asset - Dynamic Web Platform",
      description: "A dynamic web platform built with Next.js featuring real-time content loading and modern user interface. Designed for scalability with Firebase integration and optimized deployment on Vercel. (Note: Requires VPN access - not available in Philippines)",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "Vercel"],
      github: "https://github.com/AmuroBrian/inspiregroup.git",
      live: "https://inspire-asset.com",
      image: "/images/inspireasset.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "High Performance & Scalability",
        "Real-time Content Loading",
        "Modern Web Technologies",
        "Firebase Database Integration",
        "Vercel Deployment"
      ],
      icon: <FiGlobe className="text-2xl" />
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "🛒",
      stats: { stars: 128, forks: 42 },
      features: [
        "Product Management",
        "Shopping Cart",
        "Secure Payments",
        "User Authentication"
      ],
      icon: <FiExternalLink className="text-2xl" />
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "✅",
      stats: { stars: 89, forks: 23 },
      features: [
        "Drag & Drop Interface",
        "Team Collaboration",
        "Real-time Updates",
        "Task Prioritization"
      ],
      icon: <FiBarChart className="text-2xl" />
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast and location-based recommendations.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      github: "#",
      live: "#",
      image: "☀️",
      stats: { stars: 56, forks: 18 },
      features: [
        "Real-time Weather Data",
        "5-Day Forecast",
        "Location Services",
        "Responsive Design"
      ],
      icon: <FiExternalLink className="text-2xl" />
    },
    {
      title: "AI Recipe Generator",
      description: "Machine learning powered recipe suggestion engine based on available ingredients.",
      tags: ["Python", "TensorFlow", "Flask"],
      github: "#",
      live: "#",
      image: "🍳",
      stats: { stars: 210, forks: 67 },
      features: [
        "AI-Powered Suggestions",
        "Ingredient Recognition",
        "Nutritional Analysis",
        "Recipe Database"
      ],
      icon: <FiShield className="text-2xl" />
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-50/30 dark:bg-gray-800/30">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#2C98A0] filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-[#4CC8A3] filter blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Projects</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
            A showcase of my recent work, from enterprise solutions to innovative applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/90 dark:bg-gray-700/60 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {project.image.startsWith('/') ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                      {project.image}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 p-2 bg-white/20 dark:bg-gray-800/20 rounded-lg backdrop-blur-sm">
                  {project.icon}
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#2C98A0] dark:group-hover:text-[#4CC8A3] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <FiStar className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <FiGitBranch className="w-4 h-4 mr-1" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div className="mb-4">
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-[#2C98A0] dark:text-[#4CC8A3] font-medium">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-[#2C98A0] dark:bg-[#4CC8A3] text-white rounded-lg hover:bg-[#38B2A3] dark:hover:bg-[#5DD3B4] transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => setActiveSection('contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] text-white rounded-lg font-medium overflow-hidden shadow-[0_4px_20px_-5px_rgba(44,152,160,0.5)] hover:shadow-[0_4px_25px_-2px_rgba(44,152,160,0.6)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#2C98A0] to-[#38B2A3] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
