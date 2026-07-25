'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiHome,
  FiSend,
  FiUser,
} from 'react-icons/fi';
import ThemeMenu from './ThemeMenu';
import Logo from './Logo';
import { scrollToSection as scrollToSectionId } from '../lib/scrollToSection';
import { SOCIAL_LINKS } from '../lib/socialLinks';

const NAV_LINKS = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'projects', label: 'Projects', icon: FiBriefcase },
  { id: 'skills', label: 'Skills', icon: FiCode },
  { id: 'contact', label: 'Contact', icon: FiSend },
];

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height ?? 72;
      const probe = window.scrollY + headerHeight + 24;

      let current = 'home';
      document.querySelectorAll('section[id]').forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (probe >= top) current = section.id;
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [setActiveSection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    // Focus first nav item when panel opens
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(t);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSectionId(sectionId, { onDone: () => setIsMenuOpen(false) });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md'
          : 'py-3 sm:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-3">
          <a
            href="#home"
            className="relative flex h-10 w-10 items-center justify-center shrink-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            aria-label="Ben — Home"
          >
            <Logo className="h-9 w-9" />
          </a>

          <nav className="hidden md:flex h-full items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative inline-flex h-10 items-center px-3.5 text-sm font-medium leading-none transition-colors ${
                  activeSection === link.id
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[var(--primary)]"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="ml-3 flex h-10 items-center">
              <ThemeMenu />
            </div>
          </nav>

          <div className="flex md:hidden h-10 items-center gap-1.5">
            <ThemeMenu />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-[5px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="md:hidden absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-100%)] flex-col overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 70% 45% at 100% 0%, rgba(var(--primary-rgb),0.16), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(var(--primary-rgb),0.1), transparent 50%)',
              }}
            />

            <nav className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-4 sm:px-6 pt-4 pb-6">
              <ul className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                    >
                      <button
                        ref={index === 0 ? firstLinkRef : undefined}
                        type="button"
                        onClick={() => scrollToSection(link.id)}
                        className={`group relative flex w-full items-center gap-3.5 rounded-2xl px-3.5 py-3.5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                          isActive
                            ? 'bg-[var(--accent)] text-[var(--primary)]'
                            : 'text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-active"
                            className="absolute left-0 top-2.5 bottom-2.5 w-1 rounded-full bg-[var(--primary)]"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span
                          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                            isActive
                              ? 'border-[var(--primary)]/30 bg-[var(--surface)] text-[var(--primary)]'
                              : 'border-[var(--border)] bg-[var(--surface)]/60 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <span className="flex-1 font-display text-xl font-semibold tracking-tight">
                          {link.label}
                        </span>
                        <FiArrowRight
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            isActive
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                          }`}
                          aria-hidden
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                className="mt-auto space-y-5 border-t border-[var(--border)] pt-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn-primary w-full justify-center"
                >
                  <FiSend className="h-4 w-4" />
                  Let&apos;s talk
                  <FiArrowRight className="h-4 w-4" />
                </a>

                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Find me on
                  </p>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      const isExternal = social.url.startsWith('http');
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          aria-label={social.label}
                          title={social.label}
                          data-brand={social.brand}
                          className="social-icon-link inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] outline-none transition-[color,transform,box-shadow,background-color,border-color] duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
