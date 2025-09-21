'use client';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCode, FiLayers, FiUsers, FiGlobe, FiBriefcase, FiShield, FiTrendingUp } from 'react-icons/fi';

const About = ({ setActiveSection }) => {
  const milestones = [
    { 
      year: '2016-2021', 
      title: 'IT Supervisor', 
      company: 'Philsurv Geodetic Services',
      location: 'Mandaluyong City',
      description: 'Network Engineering, System Administration, Technical Support, Web Analytics, Digital Marketing, Asset Management, and IT Supervisory works. Optimized hardware infrastructure with strategic equipment upgrades, reducing maintenance costs.',
      icon: <FiShield className="text-xl" />
    },
    { 
      year: '2021-2025', 
      title: 'Business Founder', 
      company: 'Blue Switch PC',
      location: 'San Juan City',
      description: 'Established successful business by identifying market needs and developing innovative solutions. Managed Sales & Marketing, Technical Support, Social Media, and developed strong partnerships for growth opportunities.',
      icon: <FiTrendingUp className="text-xl" />
    },
    { 
      year: 'Feb-Sep 2025', 
      title: 'System Developer', 
      company: 'Inspire Holdings Inc.',
      location: 'Taguig City',
      description: 'Conducted usability tests, collaborated with stakeholders, designed database solutions, implemented new systems and enhancements, and enhanced system functionality by identifying and rectifying software bugs.',
      icon: <FiCode className="text-xl" />
    },
    { 
      year: 'Sep 2025-Present', 
      title: 'IT Consultant (Part-Time)', 
      company: 'Federal Pioneer Development Corporation',
      location: 'Mandaluyong City',
      description: 'Strategic IT planning, project leadership, custom software development, client advisory services, cybersecurity frameworks, and operational support with retainer-based maintenance.',
      icon: <FiBriefcase className="text-xl" />
    }
  ];

  const values = [
    { icon: <FiCode className="text-2xl" />, title: 'Strategic Development', description: 'End-to-end system implementation and custom solutions' },
    { icon: <FiUsers className="text-2xl" />, title: 'Client-Centric', description: 'Trusted technical advisor with comprehensive support' },
    { icon: <FiShield className="text-2xl" />, title: 'Security First', description: 'Robust cybersecurity frameworks and compliance' }
  ];

  const achievements = [
    { number: '9+', label: 'Years Experience', description: 'From IT Supervisor to Strategic Consultant' },
    { number: '4', label: 'Major Roles', description: 'Technical, Entrepreneurial, Development, Consulting' },
    { number: '100%', label: 'Business Success', description: 'Founded and grew Blue Switch PC' },
    { number: '50+', label: 'Projects Delivered', description: 'Custom solutions and system implementations' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
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
            My <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Journey</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
            From IT Supervisor to Strategic Consultant - A journey of technical excellence and business innovation
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-12">
          {/* Professional Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Experience</span>
            </h3>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-8"
                >
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#2C98A0] dark:bg-[#4CC8A3] border-4 border-white dark:border-gray-700 flex items-center justify-center">
                    {milestone.icon}
                  </div>
                  <div className="text-sm font-medium text-[#2C98A0] dark:text-[#4CC8A3]">{milestone.year}</div>
                  <h4 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">{milestone.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{milestone.company} • {milestone.location}</p>
                  <p className="text-gray-700 dark:text-gray-200 mt-2">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Values</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/90 dark:bg-gray-600/50 rounded-lg border border-gray-100 dark:border-gray-500"
                >
                  <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3] w-max mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h4>
                  <p className="text-gray-700 dark:text-gray-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Career <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Highlights</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">{achievement.number}</div>
                  <div className="text-gray-700 dark:text-gray-200 font-medium">{achievement.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setActiveSection('contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] text-white rounded-lg font-medium overflow-hidden shadow-[0_4px_20px_-5px_rgba(44,152,160,0.5)] hover:shadow-[0_4px_25px_-2px_rgba(44,152,160,0.6)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download Full Resume <FiDownload className="transition-transform group-hover:translate-y-1" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#2C98A0] to-[#38B2A3] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
