import React from 'react';
import { ArrowUp, Film, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0204] border-t border-[#3d0d16] py-14 relative overflow-hidden">
      
      {/* 35mm Film Strip Perforations Track across footer */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-[#080102] border-b border-[#2d070f] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
        <div className="text-[9px] font-mono text-[#8a1a2e]">
          ● 35mm FILM ARCHIVE // END OF REEL // HYDERABAD 2026
        </div>
        <div className="flex gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-1.5 rounded-[1px] bg-[#1a0508]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2d070f]">
          
          {/* Colophon & Brand */}
          <div className="flex items-center gap-3 text-left">
            <div className="h-10 w-10 rounded-lg bg-[#360810] border border-[#5c121f] flex items-center justify-center text-[#faf6ee] font-editorial font-bold text-sm shadow-inner">
              LP
            </div>
            <div>
              <div className="font-editorial font-bold text-[#faf6ee] text-base">
                {personalInfo.name}
              </div>
              <div className="text-xs font-mono text-[#c49a9e]">
                Web Developer • Full-Stack Fundamentals
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-[#e6dcce]/70">
            <a href="#toc" className="hover:text-[#faf6ee] transition-colors">00-index</a>
            <a href="#about" className="hover:text-[#faf6ee] transition-colors">01-about</a>
            <a href="#skills" className="hover:text-[#faf6ee] transition-colors">02-skills</a>
            <a href="#experience" className="hover:text-[#faf6ee] transition-colors">03-experience</a>
            <a href="#projects" className="hover:text-[#faf6ee] transition-colors">04-work</a>
            <a href="#certifications" className="hover:text-[#faf6ee] transition-colors">05-credentials</a>
            <a href="#contact" className="hover:text-[#faf6ee] transition-colors">06-contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="px-3 py-2 rounded-lg bg-[#25070d] border border-[#4a0e17] text-[#e6b8c0] hover:text-[#faf6ee] hover:border-[#8a1a2e] transition-all flex items-center gap-1.5 text-xs font-mono"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8a1a2e]" />
          </button>
        </div>

        {/* Final Colophon Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#c49a9e]">
          <div>
            <span className="font-bold text-[#faf6ee]">DESIGNED + BUILT BY LAXMI PRALATIKA</span>
          </div>
          <div className="flex items-center gap-2">
            <span>&copy; 2026</span>
            <span>•</span>
            <span className="text-[#e6b8c0]">HTML5 • CSS3 • JavaScript • FastAPI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
