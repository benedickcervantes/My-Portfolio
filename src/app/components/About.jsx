'use client';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCode, FiLayers, FiUsers, FiGlobe } from 'react-icons/fi';

const About = ({ setActiveSection }) => {
  const milestones = [
    { year: '2018', title: 'Started Coding Journey', description: 'Built first website using HTML/CSS' },
    { year: '2019', title: 'First Freelance Project', description: 'Developed e-commerce site for local business' },
    { year: '2020', title: 'Full-Stack Specialization', description: 'Mastered React, Node.js, and databases' },
    { year: '2022', title: 'UI/UX Certification', description: 'Completed advanced design training' },
    { year: '2023', title: 'Open Source Contributions', description: 'Published 3 popular React components' }
  ];

  const values = [
    { icon: <FiCode className="text-2xl" />, title: 'Clean Code', description: 'Readable, maintainable, and efficient' },
    { icon: <FiUsers className="text-2xl" />, title: 'User-Centric', description: 'Design with the end-user in mind' },
    { icon: <FiGlobe className="text-2xl" />, title: 'Accessibility', description: 'Build for everyone' }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Story</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            The journey of a passionate developer creating meaningful digital experiences
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-12">
          {/* Professional Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-6">
              Professional <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Journey</span>
            </h3>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-8"
                >
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#2C98A0] dark:bg-[#4CC8A3] border-4 border-white dark:border-gray-800"></div>
                  <div className="text-sm font-medium text-[#2C98A0] dark:text-[#4CC8A3]">{milestone.year}</div>
                  <h4 className="text-xl font-semibold mt-1">{milestone.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{milestone.description}</p>
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
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-6">
              Development <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Values</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3] w-max mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
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
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-6">
              By The <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Numbers</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
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