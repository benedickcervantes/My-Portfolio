'use client';
import { motion } from 'framer-motion';
import {
  FiDownload,
  FiCode,
  FiUsers,
  FiShield,
  FiZap,
  FiBriefcase,
  FiTrendingUp,
} from 'react-icons/fi';

const About = () => {
  const milestones = [
    {
      year: 'Feb 2016 – Feb 2021',
      title: 'IT Supervisor',
      company: 'Philsurv Geodetic Services',
      location: 'Mandaluyong City',
      description:
        'Supervised day-to-day IT operations, network infrastructure, and system administration. Oversaw asset management and equipment upgrades that reduced maintenance costs, while supporting growth through web analytics and digital marketing.',
      achievements: ['Network & Systems Admin', 'IT Asset Management', 'Team Leadership'],
    },
    {
      year: 'Feb 2021 – Feb 2025',
      title: 'Business Founder',
      company: 'Blue Switch PC',
      location: 'San Juan City',
      description:
        'Built and operated a tech retail business covering sales, marketing, and support. Identified market needs, formed growth partnerships, and managed social channels and technical support to protect brand trust.',
      achievements: ['Business Growth', 'Market Expansion', 'Partnership Development'],
    },
    {
      year: 'Feb 2025 – Aug 2026',
      title: 'IT Consultant — Part Time',
      company: 'Federal Pioneer Development Corporation',
      location: 'Mandaluyong City',
      description:
        'Built multi-year IT plans and led implementations including Microsoft 365 migrations and CRM. Delivered IT Asset Management and helpdesk systems, custom software, cybersecurity frameworks, and retainer support with user training.',
      achievements: ['Strategic IT Planning', 'Custom Systems', 'Cybersecurity Frameworks'],
    },
    {
      year: 'Feb 2025 – Present',
      title: 'Software Developer — Team Lead',
      company: 'Inspire Holdings Inc. / Inspire Alliance Fund Group',
      location: 'Taguig City',
      description:
        'Lead full-stack delivery across wallet (mobile + API gateway) and corporate web apps. Build React Native/Expo, NestJS/Express, and Next.js/TypeScript systems with Prisma/PostgreSQL, Docker, and cloud deployments on Vercel, Google Cloud Run, and AWS.',
      achievements: ['Full-Stack Leadership', 'Mobile & API Delivery', 'Cloud Deployments'],
    },
  ];

  const values = [
    {
      icon: <FiCode className="text-xl" />,
      title: 'Strategic Development',
      description: 'End-to-end system implementation and custom solutions',
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: 'Client-Centric',
      description: 'Trusted technical advisor with comprehensive support',
    },
    {
      icon: <FiShield className="text-xl" />,
      title: 'Security First',
      description: 'Robust cybersecurity frameworks and compliance',
    },
    {
      icon: <FiZap className="text-xl" />,
      title: 'Innovation',
      description: 'Cutting-edge technologies and modern solutions',
    },
  ];

  const achievements = [
    { number: '10+', label: 'Years Experience' },
    { number: '4', label: 'Major Roles' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Business Success' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/pdf/Benedick_Cervantes_Resume.pdf';
    link.download = 'Benedick_Cervantes_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-pad section-atmosphere relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">
            My <span>Journey</span>
          </h2>
          <div className="section-underline" />
          <p className="section-lead">
            10+ years across IT operations, software development, and consulting — leading infrastructure, support, and systems that serve real business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-[var(--primary)] mb-1">
                {item.number}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8">
            Professional <span className="text-[var(--primary)]">Experience</span>
          </h3>

          <div className="relative max-w-3xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--primary-light)] opacity-40" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-10 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[var(--primary)] border-[3px] border-[var(--background)]" />
                <div className="text-sm font-medium text-[var(--primary)] mb-1">{milestone.year}</div>
                <h4 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                  {milestone.title}
                </h4>
                <p className="text-sm text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                  {milestone.title === 'Business Founder' ? (
                    <FiTrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <FiBriefcase className="w-3.5 h-3.5" />
                  )}
                  {milestone.company} · {milestone.location}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                  {milestone.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {milestone.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="text-xs text-[var(--primary)] bg-[var(--accent)] px-2.5 py-1 rounded"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center md:text-left">
            Professional <span className="text-[var(--primary)]">Values</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                <div className="text-[var(--primary)]">{value.icon}</div>
                <h4 className="font-semibold text-[var(--text-primary)]">{value.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button type="button" onClick={handleDownloadResume} className="btn-primary">
            Download Full Resume
            <FiDownload className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
