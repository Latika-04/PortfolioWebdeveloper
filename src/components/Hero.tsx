import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, MapPin, Sparkles, Terminal, FileCode } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Parallax layers for Hero section
  const filmTrackX = useTransform(smoothProgress, [0, 1], [0, -120]);
  const polaroidY = useTransform(smoothProgress, [0, 1], [0, -45]);
  const polaroidRotate = useTransform(smoothProgress, [0, 1], [1, 4]);
  const badgeY = useTransform(smoothProgress, [0, 1], [0, -75]);
  const badgeRotate = useTransform(smoothProgress, [0, 1], [-12, 10]);
  const bgWatermarkY = useTransform(smoothProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen pt-24 pb-16 bg-[#140608] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Slide Number Watermark */}
      <motion.div
        style={{ y: bgWatermarkY }}
        className="absolute top-1/3 left-8 md:left-24 text-[120px] sm:text-[180px] font-black font-editorial text-[#380b14]/25 select-none pointer-events-none z-0 tracking-tighter"
      >
        01
      </motion.div>

      {/* 35mm Film Strip Horizontal Header Line with scroll-driven parallax translation */}
      <div className="absolute top-16 left-0 right-0 h-9 bg-[#0d0406] border-y border-[#3d0d16] flex items-center justify-between px-4 opacity-80 select-none pointer-events-none z-10 overflow-hidden">
        <motion.div
          style={{ x: filmTrackX }}
          className="flex items-center gap-6 text-[10px] font-mono tracking-widest text-[#a82438] whitespace-nowrap"
        >
          <span>● 35mm KODAK SAFETY FILM</span>
          <span>● EXP 36</span>
          <span>● ISO 400</span>
          <span>● SLIDE 01: COVER // ISSUE 2026</span>
          <span>● M. S. LAXMI PRALATIKA</span>
          <span>● FRAME 01A</span>
          <span>● ARCHIVAL EDITION</span>
        </motion.div>
        <div className="flex gap-2">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-[2px] bg-[#1a060a] border border-[#4a0e17]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-6">
        
        {/* Presentation Slide Outer Cover: Deep Burgundy Border with Inner Cream Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-[#360810] p-3 sm:p-5 md:p-7 shadow-2xl border-2 border-[#5c121f] paper-card"
        >
          
          {/* Masking Tape in Corner (Scrapbook Accent with stagger drop) */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={{ opacity: 0.9, y: 0, rotate: -2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-3 left-10 w-28 h-6 tape-strip rounded-[2px] z-30 hidden sm:block pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 10 }}
            animate={{ opacity: 0.9, y: 0, rotate: 3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -top-3 right-12 w-24 h-6 tape-strip rounded-[2px] z-30 hidden sm:block pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0, rotate: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-3 left-1/3 w-28 h-6 tape-strip rounded-[2px] z-30 hidden sm:block pointer-events-none"
          />

          {/* Inner Cream Central Canvas */}
          <div className="relative rounded-xl bg-[#faf5ec] text-[#1a060a] p-6 sm:p-10 md:p-14 overflow-hidden border border-[#ded3c1] shadow-inner">
            
            {/* Editorial Top Bar / Issue Number & Location */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#ded3c1] text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#1a060a] text-[#faf5ec] font-bold text-[10px] tracking-wider">
                  SLIDE 01 // VOL. 2026
                </span>
                <span className="text-[#5c121f] font-semibold">
                  PORTFOLIO &amp; ARCHIVE
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#5c121f]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#a82438]" />
                  <span>{personalInfo.location}</span>
                </span>
                <span>•</span>
                <span className="font-semibold">B.Tech (AI &amp; ML)</span>
              </div>
            </motion.div>

            {/* Main Editorial Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Typography & Headings (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Author Name */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="space-y-1"
                >
                  <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#7d1a2c] font-bold">
                    PORTFOLIO OF
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-[#1a060a] tracking-tight">
                    {personalInfo.name}
                  </h1>
                </motion.div>

                {/* Big Bold Editorial Title with dramatic stagger */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="relative"
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-editorial tracking-tighter leading-[0.88] text-[#1a060a]">
                    WEB<br />
                    <span className="text-[#8a1a2e] italic">DEVELOPER</span>
                  </div>

                  {/* Handwritten Overlay Note */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, rotate: -6 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-2 font-handwriting text-xl sm:text-2xl text-[#8a1a2e] flex items-center gap-2 font-semibold"
                  >
                    <span>building things for the web</span>
                    <span className="text-2xl">→</span>
                  </motion.div>
                </motion.div>

                {/* Subtitle Pill / Fundamentals Bar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="p-3.5 rounded-lg bg-[#f0e7d8] border border-[#d8cabb] text-xs sm:text-sm font-mono font-medium text-[#2d080f]"
                >
                  <span className="font-bold text-[#8a1a2e]">CORE: </span>
                  HTML • CSS • JAVASCRIPT • FULL-STACK FUNDAMENTALS
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-3 pt-2"
                >
                  <a
                    href="#toc"
                    id="hero-explore-work-btn"
                    className="px-6 py-3 rounded-lg bg-[#1a060a] hover:bg-[#360810] text-[#faf5ec] font-mono text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>Table of Contents</span>
                    <ArrowDown className="w-4 h-4 text-[#e6b8c0]" />
                  </a>

                  <a
                    href="#project-1"
                    id="hero-projects-btn"
                    className="px-5 py-3 rounded-lg bg-transparent hover:bg-[#f0e7d8] text-[#1a060a] border border-[#8a1a2e] font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>View Projects</span>
                  </a>
                </motion.div>

              </div>

              {/* Right Column: Black-and-White Editorial Developer Collage (5 cols) */}
              <div className="lg:col-span-5 relative">
                
                {/* Layered Polaroid / Film Frame with Parallax Shift */}
                <motion.div
                  style={{ y: polaroidY }}
                  initial={{ opacity: 0, x: 80, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative mx-auto max-w-sm rounded-xl bg-[#ffffff] p-4 border border-[#d8cabb] polaroid-card cursor-default"
                >
                  
                  {/* Top Tape Strip */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 tape-strip rotate-1 rounded-[1px] z-20" />

                  {/* Black & White Workspace / Code Composition */}
                  <div className="rounded-lg bg-[#12080a] text-[#f5efe4] p-4 font-mono text-xs space-y-3 overflow-hidden border border-[#2d080f]">
                    
                    <div className="flex items-center justify-between pb-2 border-b border-[#2d080f]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8a1a2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#5c121f]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3d0d16]" />
                      </div>
                      <span className="text-[10px] text-[#8a1a2e] font-bold">latika.dev ~ editorial</span>
                    </div>

                    <div className="space-y-1 text-[11px] leading-relaxed text-[#c49a9e]">
                      <p><span className="text-[#faf5ec] font-bold">const</span> developer = &#123;</p>
                      <p className="pl-3">name: <span className="text-[#faf5ec]">"{personalInfo.name}"</span>,</p>
                      <p className="pl-3">role: <span className="text-[#faf5ec]">"Web Developer"</span>,</p>
                      <p className="pl-3">cgpa: <span className="text-[#faf5ec] font-bold">"8.88/10"</span>,</p>
                      <p className="pl-3">gradYear: <span className="text-[#faf5ec]">2027</span>,</p>
                      <p className="pl-3">specialization: <span className="text-[#faf5ec]">"CSE (AI &amp; ML)"</span>,</p>
                      <p className="pl-3">focus: <span className="text-[#faf5ec]">["HTML5", "CSS3", "JS", "FastAPI"]</span></p>
                      <p>&#125;;</p>
                    </div>

                    <div className="pt-2 border-t border-[#2d080f] flex items-center justify-between text-[10px] text-[#8a1a2e]">
                      <span>● STATUS: READY FOR PLACEMENT</span>
                      <span className="font-bold">0 BACKLOGS</span>
                    </div>
                  </div>

                  {/* Polaroid Label Caption */}
                  <div className="mt-3 flex items-center justify-between font-handwriting text-base text-[#1a060a]">
                    <span>Archival Plate #01 — Code &amp; Architecture</span>
                    <span className="text-xs font-mono text-[#8a1a2e]">HYD/2026</span>
                  </div>
                </motion.div>

                {/* Overlapping Stamp / Badge with counter-parallax float */}
                <motion.div
                  style={{ y: badgeY }}
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: -12 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 15 }}
                  className="absolute -bottom-4 -left-3 rounded-full w-20 h-20 bg-[#8a1a2e] border-2 border-[#faf5ec] text-[#faf5ec] flex flex-col items-center justify-center text-center p-1 shadow-xl select-none z-30"
                >
                  <span className="text-[8px] font-mono font-bold tracking-tighter uppercase">CGPA</span>
                  <span className="text-sm font-bold font-editorial">8.88</span>
                  <span className="text-[7px] font-mono">VERIFIED</span>
                </motion.div>

              </div>

            </div>

            {/* Subtle Scroll Indicator at Bottom of Cover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10 pt-6 border-t border-[#ded3c1] flex items-center justify-between text-xs font-mono text-[#7d1a2c]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8a1a2e] animate-ping" />
                <span>ISSUE: CAMPUS RECRUITMENT 2027</span>
              </div>
              <a
                href="#toc"
                className="flex items-center gap-1.5 animate-bounce hover:text-[#1a060a] transition-colors cursor-pointer"
              >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
