'use client';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';

const Skills = ({ setActiveSection }) => {
  const skillCategories = [
    {
      icon: <FiCode className="text-2xl" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS/SCSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "REST APIs", level: 80 },
      ]
    },
    {
      icon: <FiDatabase className="text-2xl" />,
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "Git", level: 80 },
      ]
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "User Research", level: 80 },
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📝" },
    { name: "Next.js", icon: "⏭️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "📚" },
    { name: "Figma", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎭" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            My <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Skills</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3] mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Technologies & <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Tools</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gray-50/80 dark:bg-gray-600/50 rounded-lg border border-gray-100 dark:border-gray-500 hover:bg-gray-100/80 dark:hover:bg-gray-600/70 transition-colors"
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                <span className="text-gray-900 dark:text-gray-200 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
