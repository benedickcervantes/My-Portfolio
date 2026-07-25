'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function HomeContent() {
  const { darkMode, ready } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  if (!ready) return null;

  return (
    <div
      className={`min-h-screen page-atmosphere transition-colors duration-300 ${
        darkMode ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
