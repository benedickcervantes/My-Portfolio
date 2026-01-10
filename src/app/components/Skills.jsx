'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayers, FiShield, FiCloud, FiSmartphone, FiMonitor, FiZap, FiGlobe, FiSettings, FiTrendingUp } from 'react-icons/fi';

const Skills = ({ setActiveSection }) => {
  const skillCategories = [
    {
      icon: <FiCode className="text-2xl" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3/SCSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "Vue.js", level: 65 },
      ]
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "GraphQL", level: 60 },
        { name: "Python", level: 65 },
        { name: "PHP", level: 70 },
        { name: "WordPress", level: 85 },
      ]
    },
    {
      icon: <FiDatabase className="text-2xl" />,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 70 },
      ]
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "User Research", level: 80 },
        { name: "Prototyping", level: 75 },
        { name: "Wireframing", level: 80 },
        { name: "Design Systems", level: 70 },
      ]
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "DevOps & Tools",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Docker", level: 60 },
        { name: "CI/CD", level: 65 },
        { name: "Testing", level: 70 },
        { name: "Performance Optimization", level: 75 },
        { name: "Security", level: 70 },
      ]
    },
    {
      icon: <FiSmartphone className="text-2xl" />,
      title: "Mobile & Other",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "PWA", level: 65 },
        { name: "React Native", level: 60 },
        { name: "Flutter", level: 55 },
        { name: "Cross-browser", level: 85 },
        { name: "Accessibility", level: 75 },
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "⏭️", category: "Frontend" },
    { name: "TypeScript", icon: "📝", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "Tailwind CSS", icon: "💨", category: "Styling" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Git", icon: "📚", category: "Tools" },
    { name: "JavaScript", icon: "⚡", category: "Language" },
    { name: "HTML5", icon: "🌐", category: "Frontend" },
    { name: "CSS3", icon: "🎭", category: "Styling" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "PHP", icon: "🐘", category: "Backend" },
    { name: "WordPress", icon: "📝", category: "CMS" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "GraphQL", icon: "🔗", category: "API" },
    { name: "Vue.js", icon: "��", category: "Frontend" },
    { name: "Express.js", icon: "🚀", category: "Backend" },
    { name: "MySQL", icon: "🗄️", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" }
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Language", "Styling", "Design", "Tools", "CMS", "Cloud", "DevOps", "API"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

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
            A comprehensive set of technical skills and modern tools I use to bring innovative ideas to life
          </p>
        </motion.div>

        {/* Enhanced Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3] mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
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
                      <span className="text-gray-900 dark:text-gray-200 font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] h-2 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Technologies with Filter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h3 className="text-3xl font-bold mb-4 md:mb-0 text-gray-900 dark:text-white">
              Technologies & <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Tools</span>
            </h3>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#2C98A0] dark:bg-[#4CC8A3] text-white'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            layout
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gray-50/80 dark:bg-gray-600/50 rounded-lg border border-gray-100 dark:border-gray-500 hover:bg-gray-100/80 dark:hover:bg-gray-600/70 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                <div className="flex-1">
                  <span className="text-gray-900 dark:text-gray-200 font-medium text-sm">{tech.name}</span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/90 dark:bg-gray-700/60 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600">
            <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">6+</div>
            <div className="text-gray-700 dark:text-gray-200 font-medium">Skill Categories</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Frontend, Backend, Database, Design, DevOps, Mobile</div>
          </div>
          <div className="text-center p-6 bg-white/90 dark:bg-gray-700/60 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600">
            <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">22+</div>
            <div className="text-gray-700 dark:text-gray-200 font-medium">Technologies</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Modern tools and frameworks</div>
          </div>
          <div className="text-center p-6 bg-white/90 dark:bg-gray-700/60 rounded-xl shadow-sm/30 border border-gray-200 dark:border-gray-600">
            <div className="text-4xl font-bold text-[#2C98A0] dark:text-[#4CC8A3] mb-2">9+</div>
            <div className="text-gray-700 dark:text-gray-200 font-medium">Years Experience</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Continuous learning and growth</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
