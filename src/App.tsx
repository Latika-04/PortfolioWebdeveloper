import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CertificationsCompetitions } from './components/CertificationsCompetitions';
import { GitHubSection } from './components/GitHubSection';
import { DeveloperMindset } from './components/DeveloperMindset';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EasterEggModal } from './components/EasterEggModal';
import { SlideNavigator } from './components/SlideNavigator';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut `Ctrl + Shift + K` or `~` to trigger easter egg
      if (e.key === '`' || (e.ctrlKey && e.shiftKey && e.key === 'K')) {
        setIsEasterEggOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#12080a] text-[#f5efe4] relative selection:bg-[#7a1828] selection:text-[#ffffff]">
      {/* Top 35mm Burgundy Film Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8a1a2e] via-[#c44558] to-[#faf6ee] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Bar */}
      <Navbar onSecretTrigger={() => setIsEasterEggOpen(true)} />

      {/* Presentation Slide Navigator HUD */}
      <SlideNavigator />

      {/* Main Editorial Presentation Sequence */}
      <main>
        <Hero />
        <TableOfContents />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CertificationsCompetitions />
        <GitHubSection />
        <DeveloperMindset />
        <Contact />
      </main>

      {/* Footer Colophon */}
      <Footer />

      {/* Secret Cut Modal */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
}
