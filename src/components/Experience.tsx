import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Briefcase, Film, CheckCircle2, GitBranch, Calendar } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  });

  // Parallax transforms
  const topFilmX = useTransform(smoothProgress, [0, 1], [-100, 100]);
  const bottomFilmX = useTransform(smoothProgress, [0, 1], [100, -100]);
  const watermarkY = useTransform(smoothProgress, [0, 1], [-60, 80]);
  const cardDepthY = useTransform(smoothProgress, [0, 1], [35, -35]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-24 bg-[#1f060b] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Parallax Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/4 right-12 md:right-28 text-[140px] sm:text-[200px] font-black font-editorial text-[#380b14]/20 select-none pointer-events-none z-0 tracking-tighter"
      >
        05
      </motion.div>

      {/* Top 35mm Film Sprockets with gliding track */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#120406] border-b border-[#360810] flex items-center justify-between px-4 opacity-70 select-none pointer-events-none overflow-hidden z-10">
        <motion.div
          style={{ x: topFilmX }}
          className="text-[10px] font-mono tracking-widest text-[#a82438] whitespace-nowrap"
        >
          ● AICTE INTERNSHIP TIMELINE // SLIDE 05 // FRAME 03B // VIRTUAL PROGRAM ● KODAK SAFETY 400
        </motion.div>
        <div className="flex gap-2">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-[2px] bg-[#22050b] border border-[#3d0d16]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Presentation Slide Motion Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Heading */}
          <div className="max-w-3xl mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#a82438]" />
              <span>SLIDE 05 // APPLIED EXPERIENCE</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
              >
                experience
              </motion.h2>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-editorial italic text-lg text-[#e6b8c0]"
              >
                — Industry internship &amp; collaborative engineering.
              </motion.span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 35mm FILM STRIP TIMELINE FRAME CONTAINER                       */}
          {/* ============================================================== */}
          <div className="relative rounded-2xl bg-[#140407] border-2 border-[#5c121f] p-4 sm:p-8 shadow-2xl overflow-hidden paper-card">
            
            {/* Top & Bottom Film Perforations inside container */}
            <div className="h-6 flex items-center justify-between px-2 mb-4 border-b border-[#360810]">
              <span className="text-[9px] font-mono text-[#a82438] tracking-widest">● KODAK 400 FILM NEGATIVE</span>
              <div className="flex gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-3 h-2 rounded-[1px] bg-[#2d070f] border border-[#4a0e17]" />
                ))}
              </div>
            </div>

            {/* Film Frame Content (Web Development Intern) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#25070d] rounded-xl p-6 sm:p-10 border border-[#4a0e17] relative">
              
              {/* Masking Tape Accent */}
              <div className="absolute -top-3 left-10 w-24 h-5 tape-strip rotate-2 hidden sm:block pointer-events-none" />

              {/* Left Film Details (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="lg:col-span-5 space-y-4"
              >
                
                <div className="inline-block px-2.5 py-1 rounded bg-[#380b14] border border-[#6b1422] text-[#faf6ee] text-xs font-mono font-bold">
                  VIRTUAL INTERNSHIP
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-[#faf6ee] tracking-tight">
                    Web Development Intern
                  </h3>
                  <div className="text-lg font-editorial text-[#c49a9e] mt-1 font-semibold">
                    AICTE Virtual Internship Program
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#190509] border border-[#3d0d16] text-xs font-mono text-[#e6b8c0] space-y-1">
                  <div><span className="text-[#a82438]">DOMAIN:</span> Web Technologies &amp; Responsive UI</div>
                  <div><span className="text-[#a82438]">MODE:</span> Virtual Collaborative Engineering</div>
                  <div><span className="text-[#a82438]">VERIFICATION:</span> AICTE Verified Certificate</div>
                </div>

                {/* Technologies Used Strip */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-[#a82438] uppercase tracking-wider mb-2 font-bold">
                    Technologies Practiced
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Responsive Design'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#170508] border border-[#4a0e17] text-xs font-mono text-[#faf6ee]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>

              {/* Right Film Highlights & Verified Deliverables (7 cols) with Parallax depth */}
              <motion.div
                style={{ y: cardDepthY }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:col-span-7 space-y-4"
              >
                
                <div className="p-6 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] paper-card space-y-4 relative">
                  
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8a1a2e] border-b border-[#ded3c1] pb-2">
                    <Film className="w-4 h-4" />
                    <span>KEY INTERNSHIP HIGHLIGHTS &amp; DELIVERABLES</span>
                  </div>

                  <div className="space-y-3 font-sans text-sm sm:text-base leading-relaxed text-[#2d080f]">
                    
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-[#f0e7d8] text-[#8a1a2e] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#1a060a]">Modular Frontend Components:</strong> Built efficient, reusable and responsive web components using HTML5, CSS3 and JavaScript, adhering to modern UI standards.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-[#f0e7d8] text-[#8a1a2e] shrink-0 mt-0.5">
                        <GitBranch className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#1a060a]">Version Control &amp; Collaboration:</strong> Collaborated with a development team using Git and GitHub for version control, debugging and feature delivery across multiple modules.
                      </div>
                    </div>

                  </div>

                  <div className="pt-2 border-t border-[#ded3c1] flex items-center justify-between text-xs font-mono text-[#7d1a2c]">
                    <span>AICTE VIRTUAL PROGRAM</span>
                    <span className="font-bold">COMPLETED &amp; CERTIFIED</span>
                  </div>

                </div>

              </motion.div>

            </div>

            {/* Bottom Film Perforations with Parallax glide */}
            <div className="h-6 flex items-center justify-between px-2 mt-4 border-t border-[#360810] overflow-hidden">
              <motion.span
                style={{ x: bottomFilmX }}
                className="text-[9px] font-mono text-[#a82438] tracking-widest whitespace-nowrap"
              >
                ● FRAME 03B END // 2026 ARCHIVE // CODE REVIEW VERIFIED // DEPLOYED
              </motion.span>
              <div className="flex gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-3 h-2 rounded-[1px] bg-[#2d070f] border border-[#4a0e17]" />
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
