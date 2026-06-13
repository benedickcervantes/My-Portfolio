'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiArrowRight, FiUsers, FiBarChart, FiGlobe, FiHome, FiCalendar, FiSmartphone } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

const projectActionButtonClass =
  'project-card-action flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 text-sm font-medium leading-none transition-colors';

const Projects = ({ setActiveSection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Inspire Wallet",
      description: "Full fintech platform — cross-platform mobile app for investment tracking, stocks, forex, and transactions. Powered by a NestJS backend on AWS (SevenIWalletBackend) and an admin dashboard (inspireadmin2) for operations and analytics. Live on Google Play and the App Store.",
      tags: ["Expo", "React Native", "TypeScript", "NestJS", "AWS", "FinTech"],
      github: "https://github.com/EngrBrianDev/InspirewalletV3.git",
      live: "https://apps.apple.com/ph/app/inspire-wallet/id6642689775",
      image: "/images/IW Sreenshot.png",
      imageBg: "bg-[#F05A28]",
      stats: { stars: 0, forks: 0 },
      features: [
        "Investment tracking, stock management & forex converter",
        "Real-time sync via REST & WebSocket API",
        "Backend: NestJS · PostgreSQL · Redis · Docker on AWS",
        "Admin Dashboard: Next.js BFF · RSuite · Electron · Supabase",
        "Published on Google Play & App Store"
      ],
      icon: <FiSmartphone className="text-2xl" />,
      category: "FinTech",
      status: "Live",
      year: "2026"
    },
    {
      title: "I'M Pay",
      description: "Secure digital wallet built for the Philippines by Inspire Holdings Inc. Create your account, verify your identity, send and receive money with other I'M Pay users, pay via QR codes, and manage your wallet — all in one app. Core wallet services are live now; partner services such as bills payment, mobile load, bank transfer, savings, and lending will roll out in future updates. Powered by a NestJS backend on AWS, admin dashboard, and marketing landing pages. Live on Google Play and the App Store.",
      tags: ["Expo", "React Native", "TypeScript", "NestJS", "AWS", "FinTech"],
      github: "https://github.com/EngrBrianDev/iamIwallet.git",
      live: "https://play.google.com/store/apps/details?id=com.inspire.impay&hl=en",
      image: "/images/IMPay Screenshot.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "Secure wallet — passcode, Face ID & fingerprint login",
        "P2P transfers & QR payments — send, receive, and scan to pay",
        "KYC verification, transaction history & Refer & Earn rewards",
        "In-app support — Help Center, tickets & customer assistance",
        "Backend: NestJS · PostgreSQL · Redis · Docker on AWS",
        "Admin Dashboard · Website landing pages · Google Play & App Store"
      ],
      icon: <FiSmartphone className="text-2xl" />,
      category: "FinTech",
      status: "Live",
      year: "2026"
    },
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
      icon: <FiUsers className="text-2xl" />,
      category: "Enterprise",
      status: "Live",
      year: "2025"
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
      icon: <FiCalendar className="text-2xl" />,
      category: "Web App",
      status: "Live",
      year: "2025"
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
      icon: <FiHome className="text-2xl" />,
      category: "Corporate",
      status: "Live",
      year: "2025"
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
      icon: <FiGlobe className="text-2xl" />,
      category: "Web App",
      status: "Live",
      year: "2025"
    },
    {
      title: "Inspire Loopwork - All-in-One Collaboration SaaS Platform",
      description: "A comprehensive SaaS platform designed to streamline daily office operations with 14 powerful tools in one place. Features project management with Gantt charts, real-time collaboration, workflow automation, document management, video conferencing, and more. Built with Next.js 15, React 19, Firebase, and Supabase for modern, scalable enterprise solutions.",
      tags: ["Next.js 15", "React 19", "Firebase", "Supabase", "Tailwind CSS", "Material-UI", "Real-time"],
      github: "https://github.com/jjgonzaga07/loopwork-saas.git",
      live: "http://www.inspire-loopwork.com/",
      image: "/images/Loopwork Dashboard.png",
      stats: { stars: 0, forks: 0 },
      features: [
        "14 Essential Tools (Schedule, Timecard, Todo, Documents, etc.)",
        "Project Management with Gantt Charts & Workload Dashboard",
        "Real-time Collaboration & Video Conferencing (ChatZoom)",
        "Workflow Automation & Form Builder (AppEasy)",
        "Advanced Analytics & Reporting Dashboard"
      ],
      icon: <FiGlobe className="text-2xl" />,
      category: "Enterprise",
      status: "Live",
      year: "2025"
    }
  ];

  const categories = ['All', 'FinTech', 'Enterprise', 'Web App', 'Corporate'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#2C98A0] dark:bg-[#4CC8A3] text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex h-full flex-col bg-white/90 dark:bg-gray-700/60 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              {/* Project Image/Icon */}
              <div className={`relative aspect-[2/1] w-full overflow-hidden ${project.imageBg || 'bg-gray-100 dark:bg-gray-800'}`}>
                {project.image.startsWith('/') ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      {project.image}
                    </div>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    {project.year}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 p-2 bg-white/20 dark:bg-gray-800/20 rounded-lg backdrop-blur-sm">
                  {project.icon}
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
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
                <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${projectActionButtonClass} bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500`}
                  >
                    <FiGithub className="h-4 w-4 shrink-0" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${projectActionButtonClass} bg-[#2C98A0] text-white hover:bg-[#38B2A3] dark:bg-[#4CC8A3] dark:hover:bg-[#5DD3B4]`}
                  >
                    <FiExternalLink className="h-4 w-4 shrink-0" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
