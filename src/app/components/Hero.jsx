'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiBriefcase, FiSend } from 'react-icons/fi';
import Image from 'next/image';
import { scrollToSection as scrollToSectionId } from '../lib/scrollToSection';
import { SOCIAL_LINKS } from '../lib/socialLinks';

const ROLES = [
  'Full Stack Developer',
  'UI/UX Designer',
  'IT Consultant',
  'Tech Enthusiast',
];

const iconLinkClass =
  'social-icon-link group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--text-secondary)] outline-none backdrop-blur-sm transition-[color,transform,box-shadow,background-color,border-color] duration-200 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]';

function SocialIconLink({ social, index }) {
  const Icon = social.icon;
  const isExternal = social.url.startsWith('http');

  return (
    <motion.a
      href={social.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={social.label}
      title={social.label}
      data-brand={social.brand}
      className={iconLinkClass}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 + index * 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
    </motion.a>
  );
}

const Hero = ({ setActiveSection }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSectionId(sectionId);
  };

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 78% 42%, rgba(var(--primary-rgb),0.14), transparent 62%), radial-gradient(ellipse 40% 35% at 12% 80%, rgba(var(--primary-rgb),0.08), transparent 55%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start"
          >
            <p className="text-sm font-medium tracking-wide text-[var(--primary)] mb-3 sm:mb-4">
              Hi there, I&apos;m
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-4 sm:mb-5 text-[var(--text-primary)]">
              Benedick{' '}
              <span className="text-[var(--primary)] block sm:inline">Cervantes</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-secondary)] mb-5 sm:mb-6 h-7 sm:h-8 overflow-hidden">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {ROLES[currentRole]}
              </motion.span>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md leading-relaxed mb-7 sm:mb-9">
              I craft exceptional digital experiences with modern technologies and clean,
              user-centric design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="btn-primary"
              >
                <FiBriefcase className="h-4 w-4" />
                View My Work
                <FiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn-secondary"
              >
                <FiSend className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            {/* Social row under CTAs — avoids fixed-rail overlap with hero content */}
            <nav
              className="mt-8 flex flex-col items-center gap-3 md:items-start"
              aria-label="Social links"
            >
              <p className="text-xs font-medium tracking-wide text-[var(--text-muted)] uppercase">
                Find me on
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialIconLink key={social.label} social={social} index={index} />
                ))}
              </div>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-full opacity-40 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[var(--primary)]/40 shadow-xl">
                <Image
                  src="/images/developer-photo.png"
                  alt="Benedick Cervantes - Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
