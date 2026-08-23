import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onSecretTrigger?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSecretTrigger }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setLogoClicks(0);
      if (onSecretTrigger) onSecretTrigger();
    }
  };

  const navLinks = [
    { label: '00 — index', href: '#toc' },
    { label: '01 — about', href: '#about' },
    { label: '02 — skills', href: '#skills' },
    { label: '03 — experience', href: '#experience' },
    { label: '04 — work', href: '#projects' },
    { label: '05 — credentials', href: '#certifications' },
    { label: '06 — contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#18060a]/95 backdrop-blur-md border-b border-[#3d0d16] py-3 shadow-lg shadow-[#000000]/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Editorial Brand Tag */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              title="Click 5 times for developer easter egg"
              className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
            >
              <div className="h-9 w-9 rounded-md bg-[#4a0e17] border border-[#7a1828] flex items-center justify-center text-[#faf6ee] font-editorial font-bold text-sm shadow-inner group-hover:scale-105 transition-transform">
                <span>LP</span>
              </div>
              <div className="leading-tight">
                <div className="font-editorial text-sm font-bold text-[#faf6ee] tracking-wide flex items-center gap-1.5">
                  <span>M. S. LAXMI PRALATIKA</span>
                  <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#3b0811] text-[#e6b8c0] border border-[#5e131d]">
                    ISSUE #26
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#c49a9e]">
                  WEB DEVELOPER • HYDERABAD
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-[#e6dcce]/80 hover:text-[#faf6ee] transition-colors relative py-1 hover:border-b hover:border-[#a82438]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / GitHub Quick link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-github-link"
              href={personalInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-md bg-[#2d080f] hover:bg-[#430c16] text-[#faf6ee] border border-[#5c121f] text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#e6b8c0]" />
            </a>

            <a
              id="nav-contact-cta"
              href="#contact"
              className="px-3.5 py-1.5 rounded-md bg-[#faf6ee] hover:bg-[#ffffff] text-[#2c070e] font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#2d080f] border border-[#5c121f] text-[#faf6ee] hover:bg-[#430c16]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-dropdown"
            className="lg:hidden mt-4 p-5 rounded-xl bg-[#1c060a] border border-[#4a0e17] space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#a82438] pb-1 border-b border-[#3b0811]">
              Table of Contents
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md bg-[#25070d] text-sm font-mono text-[#f5efe4] hover:bg-[#3d0d16] hover:text-[#ffffff] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#a82438]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#3b0811] flex gap-2">
              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded bg-[#3b0811] text-center text-xs font-mono text-[#faf6ee] flex items-center justify-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 rounded bg-[#faf6ee] text-center text-xs font-mono font-bold text-[#2c070e]"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
