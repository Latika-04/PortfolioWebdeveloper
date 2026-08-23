import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, Compass, Eye, Sparkles } from 'lucide-react';

interface Slide {
  id: string;
  number: string;
  title: string;
  shortName: string;
}

const slides: Slide[] = [
  { id: 'hero', number: '01', title: 'Cover // Web Developer', shortName: 'Cover' },
  { id: 'toc', number: '02', title: 'Table of Contents // Index', shortName: 'Index' },
  { id: 'about', number: '03', title: 'About Me // Academic & Bio', shortName: 'About' },
  { id: 'skills', number: '04', title: 'Skills Board // Full-Stack', shortName: 'Skills' },
  { id: 'experience', number: '05', title: 'Experience // AICTE Internship', shortName: 'Experience' },
  { id: 'project-1', number: '06', title: 'Project 01 // Portfolio Website', shortName: 'Project 01' },
  { id: 'project-2', number: '07', title: 'Project 02 // Healthcare Risk AI', shortName: 'Project 02' },
  { id: 'certifications', number: '08', title: 'Certifications // Verified Badges', shortName: 'Credentials' },
  { id: 'competitions', number: '09', title: 'Competitions // National Hackathons', shortName: 'Hackathons' },
  { id: 'github', number: '10', title: 'Open The Source // Developer Desk', shortName: 'GitHub' },
  { id: 'contact', number: '11', title: 'Back Cover // Get In Touch', shortName: 'Contact' },
];

export const SlideNavigator: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = slides.length - 1; i >= 0; i--) {
        const el = document.getElementById(slides[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSlideIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const target = slides[index];
    const el = document.getElementById(target.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeSlideIndex > 0) {
      scrollToSlide(activeSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeSlideIndex < slides.length - 1) {
      scrollToSlide(activeSlideIndex + 1);
    }
  };

  return (
    <>
      {/* Desktop Floating Slide Deck HUD */}
      <nav
        aria-label="Slide presentation navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2 pointer-events-auto"
      >
        <div className="p-2 rounded-2xl bg-[#140407]/90 border border-[#5c121f] backdrop-blur-md shadow-2xl flex flex-col items-center gap-1.5 paper-card">
          
          {/* Deck Header */}
          <div className="px-2 py-1 text-[9px] font-mono text-[#a82438] font-bold border-b border-[#360810] flex items-center justify-between w-full">
            <span>SLIDE</span>
            <span className="text-[#faf6ee]">{slides[activeSlideIndex].number}/11</span>
          </div>

          {/* Up button */}
          <button
            onClick={handlePrev}
            disabled={activeSlideIndex === 0}
            aria-label="Previous slide"
            className="p-1.5 rounded-lg text-[#c49a9e] hover:text-[#faf6ee] hover:bg-[#28070e] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Numbered Slide Bullets */}
          <div className="flex flex-col gap-1 py-1">
            {slides.map((slide, idx) => {
              const isActive = activeSlideIndex === idx;
              const isHovered = hoveredIndex === idx;

              return (
                <div key={slide.id} className="relative flex items-center justify-center">
                  <button
                    onClick={() => scrollToSlide(idx)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={`Jump to slide ${slide.number}: ${slide.title}`}
                    className={`w-7 h-7 rounded-lg text-[10px] font-mono font-bold transition-all duration-200 flex items-center justify-center relative ${
                      isActive
                        ? 'bg-[#8a1a2e] text-[#faf6ee] shadow-lg scale-110 border border-[#c44558]'
                        : 'text-[#e6dcce]/60 hover:text-[#faf6ee] hover:bg-[#25070d]'
                    }`}
                  >
                    {slide.number}
                  </button>

                  {/* Tooltip on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-10 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#28070e] border border-[#5c121f] text-xs font-mono text-[#faf6ee] shadow-xl pointer-events-none z-50 flex items-center gap-2"
                      >
                        <span className="text-[#a82438] font-bold">{slide.number}</span>
                        <span>{slide.title}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Down button */}
          <button
            onClick={handleNext}
            disabled={activeSlideIndex === slides.length - 1}
            aria-label="Next slide"
            className="p-1.5 rounded-lg text-[#c49a9e] hover:text-[#faf6ee] hover:bg-[#28070e] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Bottom Slide Indicator Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden max-w-[92vw] px-4 py-2 rounded-full bg-[#180509]/95 border border-[#5c121f] backdrop-blur-md shadow-2xl flex items-center justify-between gap-3 text-xs font-mono text-[#faf6ee]">
        <button
          onClick={handlePrev}
          disabled={activeSlideIndex === 0}
          className="p-1 text-[#c49a9e] disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ChevronUp className="w-4 h-4 -rotate-90" />
        </button>

        <div className="flex items-center gap-2 truncate text-[11px]">
          <span className="px-1.5 py-0.5 rounded bg-[#8a1a2e] text-[#faf6ee] font-bold">
            {slides[activeSlideIndex].number}
          </span>
          <span className="truncate max-w-[150px] sm:max-w-[220px]">
            {slides[activeSlideIndex].shortName}
          </span>
          <span className="text-[#a82438]">/ 11</span>
        </div>

        <button
          onClick={handleNext}
          disabled={activeSlideIndex === slides.length - 1}
          className="p-1 text-[#c49a9e] disabled:opacity-30"
          aria-label="Next slide"
        >
          <ChevronDown className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </>
  );
};
