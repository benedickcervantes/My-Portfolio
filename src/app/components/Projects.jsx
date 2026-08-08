'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
import { scrollToSection } from '../lib/scrollToSection';

const projectActionButtonClass =
  'project-card-action flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 text-sm font-medium leading-none transition-colors';

const Projects = ({ setActiveSection }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'IT Asset Management — Hardware Inventory',
      description:
        'Enterprise IT hardware asset portal with audit register, inventory, maintenance, disposals, and role-based dashboards. Next.js admin on Vercel, NestJS API on GCP Cloud Run with Prisma and PostgreSQL.',
      tags: ['Next.js', 'NestJS', 'Prisma', 'GCP', 'PostgreSQL'],
      github: 'https://github.com/benedickcervantes/itam-admin.git',
      live: 'https://itam-topaz.vercel.app/',
      image: '/images/ITAM Screenshot.png',
      imageBg: 'bg-[#1E3A5F]',
      category: 'Enterprise',
      status: 'Live',
      year: '2026',
    },
    {
      title: 'FPDC Helpdesk Enterprise IT Support',
      description:
        'Enterprise IT helpdesk with role-based workspaces for users, agents, and admins. Real-time tickets and notifications via Socket.io, analytics and export reporting. Next.js on Vercel with NestJS API on GCP Cloud Run, Prisma, and Supabase PostgreSQL/Storage.',
      tags: ['Next.js', 'NestJS', 'Prisma', 'Socket.io', 'GCP'],
      github: 'https://github.com/benedickcervantes/helpdeskticketingsystem.git',
      live: 'https://helpdeskticketingsystem.vercel.app/',
      image: '/images/FPDC-Helpdesk.png',
      imageBg: 'bg-[#0B1220]',
      category: 'Enterprise',
      status: 'Live',
      year: '2026',
    },
    {
      title: 'Real Estate Website',
      description:
        'A modern property listing platform for browsing homes, condos, and commercial spaces. Built with Next.js and Tailwind CSS, powered by a Node.js REST API with MySQL and JWT authentication.',
      tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'JWT Auth'],
      github: '#',
      live: '#',
      image: '🏠',
      category: 'Web App',
      status: 'Ongoing',
      year: '2027',
    },
    {
      title: 'Inspire Wallet',
      description:
        'Full fintech platform — cross-platform mobile app for investment tracking, stocks, forex, and transactions. NestJS backend on AWS with admin dashboard. Live on Google Play and the App Store.',
      tags: ['Expo', 'React Native', 'TypeScript', 'NestJS', 'AWS'],
      github: 'https://github.com/EngrBrianDev/InspirewalletV3.git',
      live: 'https://apps.apple.com/ph/app/inspire-wallet/id6642689775',
      image: '/images/IW Sreenshot.png',
      imageBg: 'bg-[#F05A28]',
      category: 'FinTech',
      status: 'Live',
      year: '2026',
    },
    {
      title: "I'M Pay",
      description:
        'Secure digital wallet for the Philippines — KYC, P2P transfers, QR payments, and wallet management. NestJS on AWS with admin dashboard. Live on Google Play and the App Store.',
      tags: ['Expo', 'React Native', 'TypeScript', 'NestJS', 'AWS'],
      github: 'https://github.com/EngrBrianDev/iamIwallet.git',
      live: 'https://play.google.com/store/apps/details?id=com.inspire.impay&hl=en',
      image: '/images/IMPay Screenshot.png',
      category: 'FinTech',
      status: 'Live',
      year: '2026',
    },
    {
      title: 'CCTV Floor Planner',
      description:
        'Browser survey tool for placing cameras and NVRs on uploaded floor plans, aiming FOV coverage, linking units to recorders, and multi-page site layouts. Client-side autosave with JSON backup and one-page A4 audit PDF export per sheet — static deploy on Vercel.',
      tags: ['HTML', 'JavaScript', 'PDF Export', 'localStorage', 'Vercel'],
      github: 'https://github.com/benedickcervantes/cctv-floor-planner.git',
      live: 'https://cctv-floor-planner.vercel.app/',
      image: '/images/CCTV Floor Planner.png',
      imageBg: 'bg-[#E8ECF1]',
      category: 'Web App',
      status: 'Live',
      year: '2026',
    },
    {
      title: 'Inspire Hub - Co-working Space Platform',
      description:
        'Co-working reservation platform with office/room/desk booking, authentication, and workspace management for Inspire Holdings Inc.',
      tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/AmuroBrian/inspire-hub.git',
      live: 'https://inspire-hub-sigma.vercel.app/',
      image: '/images/inspirehub.png',
      category: 'Web App',
      status: 'Live',
      year: '2025',
    },
    {
      title: 'Inspire Holdings - Corporate Website',
      description:
        'Corporate WordPress site with member management, seminar scheduling, invoice requests, and multi-language support.',
      tags: ['WordPress', 'PHP', 'MySQL', 'Corporate'],
      github: 'https://wordpress.com/',
      live: 'https://inspireholdings.ph/',
      image: '/images/holdingsinc.png',
      category: 'Corporate',
      status: 'Live',
      year: '2025',
    },
    {
      title: 'Inspire Asset - Dynamic Web Platform',
      description:
        'Dynamic Next.js platform with real-time content loading and Firebase integration. Optimized for Vercel deployment.',
      tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/AmuroBrian/inspiregroup.git',
      live: 'https://inspire-asset.com',
      image: '/images/inspireasset.png',
      category: 'Web App',
      status: 'Live',
      year: '2025',
    },
    {
      title: 'Inspire Loopwork - Collaboration SaaS',
      description:
        'All-in-one collaboration SaaS with project management, Gantt charts, real-time collaboration, workflow automation, and analytics.',
      tags: ['Next.js 15', 'React 19', 'Firebase', 'Supabase'],
      github: 'https://github.com/jjgonzaga07/loopwork-saas.git',
      live: 'http://www.inspire-loopwork.com/',
      image: '/images/Loopwork Dashboard.png',
      category: 'Enterprise',
      status: 'Live',
      year: '2025',
    },
  ];

  const categories = ['All', 'FinTech', 'Enterprise', 'Web App', 'Corporate'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="section-pad section-atmosphere section-band relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            Featured <span>Projects</span>
          </h2>
          <div className="section-underline" />
          <p className="section-lead">
            Recent work across fintech, enterprise systems, and modern web applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-0.5 gap-y-1 sm:gap-x-1 sm:gap-y-2 mb-8 sm:mb-12 border-b border-[var(--border)]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`relative px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--primary)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
              viewport={{ once: true }}
              className="group flex h-full flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--primary)]/40 transition-colors"
            >
              <div
                className={`relative aspect-[2/1] w-full overflow-hidden ${
                  project.imageBg || 'bg-[var(--muted)]'
                }`}
              >
                {project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
                    {project.image}
                  </div>
                )}

                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded ${
                      project.status === 'Live'
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-black/40 text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-[var(--text-muted)] bg-[var(--muted)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2.5">
                  <a
                    href={project.github}
                    target={project.github === '#' ? undefined : '_blank'}
                    rel={project.github === '#' ? undefined : 'noopener noreferrer'}
                    aria-disabled={project.github === '#'}
                    onClick={(e) => {
                      if (project.github === '#') e.preventDefault();
                    }}
                    className={`${projectActionButtonClass} bg-[var(--muted)] text-[var(--text-secondary)] hover:bg-[var(--border)]${
                      project.github === '#' ? ' opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <FiGithub className="h-4 w-4 shrink-0" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target={project.live === '#' ? undefined : '_blank'}
                    rel={project.live === '#' ? undefined : 'noopener noreferrer'}
                    aria-disabled={project.live === '#'}
                    onClick={(e) => {
                      if (project.live === '#') e.preventDefault();
                    }}
                    className={`${projectActionButtonClass} bg-[var(--primary)] text-white hover:opacity-90${
                      project.live === '#' ? ' opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <FiExternalLink className="h-4 w-4 shrink-0" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            type="button"
            onClick={() => {
              setActiveSection('contact');
              scrollToSection('contact');
            }}
            className="btn-primary"
          >
            Let&apos;s Build Something
            <FiArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
