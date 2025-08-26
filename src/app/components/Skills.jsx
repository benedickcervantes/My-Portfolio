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
    { name: "GraphQL", icon: "📊" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Figma", icon: "✏️" },
    { name: "Git", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-[#2C98A0] filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-[#4CC8A3] filter blur-3xl"
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
            My <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Skills</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            The tools, technologies, and expertise I've mastered to create exceptional digital experiences
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-lg text-[#2C98A0] dark:text-[#4CC8A3]">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-lg text-[#2C98A0] dark:text-[#4CC8A3]">
                  <FiLayers className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Technologies I Use</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 text-2xl mb-2 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;