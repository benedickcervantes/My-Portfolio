'use client';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiSmartphone,
} from 'react-icons/fi';

const Skills = () => {
  const coreStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Tailwind CSS',
    'PostgreSQL',
    'AWS',
    'React Native',
    'Figma',
  ];

  const skillCategories = [
    {
      icon: <FiCode className="text-lg" />,
      title: 'Frontend',
      skills: [
        'HTML5',
        'CSS3/SCSS',
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'Vue.js',
      ],
    },
    {
      icon: <FiCpu className="text-lg" />,
      title: 'Backend',
      skills: [
        'Node.js',
        'NestJS',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Python',
        'PHP',
        'WordPress',
      ],
    },
    {
      icon: <FiDatabase className="text-lg" />,
      title: 'Database & Cloud',
      skills: [
        'MongoDB',
        'Firebase',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'GCP',
        'Vercel',
      ],
    },
    {
      icon: <FiLayers className="text-lg" />,
      title: 'UI/UX Design',
      skills: [
        'Figma',
        'Adobe XD',
        'User Research',
        'Prototyping',
        'Wireframing',
        'Design Systems',
      ],
    },
    {
      icon: <FiShield className="text-lg" />,
      title: 'DevOps & Tools',
      skills: [
        'Git/GitHub',
        'Docker',
        'NAS Container Manager',
        'CI/CD',
        'Testing',
        'Performance',
        'Security',
      ],
    },
    {
      icon: <FiSmartphone className="text-lg" />,
      title: 'Mobile & Other',
      skills: [
        'Responsive Design',
        'PWA',
        'React Native',
        'Flutter',
        'Cross-browser',
        'Accessibility',
      ],
    },
  ];

  return (
    <section id="skills" className="section-pad section-atmosphere relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="section-heading">
            My <span>Skills</span>
          </h2>
          <div className="section-underline" />
          <p className="section-lead">
            Tools and technologies I use to design, build, and ship products.
          </p>
        </motion.div>

        {/* Core stack spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--primary)] text-center mb-4">
            Core Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {coreStack.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-3.5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--primary-foreground)] shadow-[0_6px_16px_-8px_rgba(var(--primary-rgb),0.55)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Category rows — tag chips, no fake % bars */}
        <div className="space-y-0 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(categoryIndex * 0.05, 0.25) }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] md:grid-cols-[12rem_1fr] gap-3 sm:gap-6 py-6 sm:py-7"
            >
              <div className="flex items-center gap-2.5 text-[var(--text-primary)]">
                <span className="text-[var(--primary)] shrink-0">{category.icon}</span>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 content-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border)] rounded-md transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
