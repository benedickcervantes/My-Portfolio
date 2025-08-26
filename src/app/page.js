'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  // Initialize with undefined to prevent hydration mismatch
  const [darkMode, setDarkMode] = useState(undefined);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Only run on client side after hydration
    const savedMode = localStorage.getItem('darkMode');
    const initialMode = savedMode ? JSON.parse(savedMode) : true;
    setDarkMode(initialMode);
  }, []);

  useEffect(() => {
    if (darkMode === undefined) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Don't render until we know the dark mode preference
  if (darkMode === undefined) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}