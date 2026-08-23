import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { User, CheckCircle2, GitBranch, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
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
  const topFilmX = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const watermarkY = useTransform(smoothProgress, [0, 1], [-50, 70]);
  const browserMockupY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const polaroidY = useTransform(smoothProgress, [0, 1], [50, -50]);
  const quoteCardY = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-24 bg-[#21070c] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Slide Number Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/4 left-10 md:left-24 text-[140px] sm:text-[200px] font-black font-editorial text-[#380b14]/20 select-none pointer-events-none z-0 tracking-tighter"
      >
        03
      </motion.div>

      {/* 35mm Film Strip Perforations Header with Parallax glide */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#170508] border-b border-[#3d0d16] flex items-center justify-between px-4 opacity-70 select-none pointer-events-none overflow-hidden z-10">
        <motion.div
          style={{ x: topFilmX }}
          className="text-[9px] font-mono text-[#a82438] tracking-wider whitespace-nowrap flex items-center gap-4"
        >
          <span>SLIDE 03 // EDITORIAL PROFILE &amp; ACADEMIC FOUNDATIONS</span>
          <span>● KODAK SAFETY FILM</span>
          <span>● HYDERABAD ISSUE</span>
        </motion.div>
        <div className="flex gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-[#2a0810]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Main Burgundy Presentation Slide Panel with Spring Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#360810] border-2 border-[#5c121f] p-6 sm:p-10 md:p-14 shadow-2xl relative paper-card"
        >
          
          {/* Masking Tape Accents with Staggered Snap */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 6 }}
            whileInView={{ opacity: 0.9, y: 0, rotate: 2 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute -top-3 left-16 w-24 h-6 tape-strip hidden sm:block pointer-events-none z-20"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            whileInView={{ opacity: 0.9, y: 0, rotate: -1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -top-3 right-16 w-24 h-6 tape-strip hidden sm:block pointer-events-none z-20"
          />

          {/* Section Header: "about" then "me" offset reveal */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e0509] border border-[#4a0e17] text-[#e6b8c0] text-xs font-mono mb-3"
            >
              <User className="w-3.5 h-3.5 text-[#a82438]" />
              <span>SLIDE 03 // BIOGRAPHY &amp; EDUCATION</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
              <div className="flex items-baseline gap-2">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
                >
                  about
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.38, duration: 0.6 }}
                  className="font-editorial text-4xl sm:text-5xl font-black text-[#a82438] italic"
                >
                  me
                </motion.span>
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-editorial italic text-base sm:text-lg text-[#e6b8c0]"
              >
                — Crafting clean web interfaces &amp; backend APIs.
              </motion.span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Authentic Statements & Educational Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Primary Verified Quote Paragraphs with slide from left & subtle parallax */}
              <motion.div
                style={{ y: quoteCardY }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="p-6 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#d8cabb] space-y-4 shadow-md relative"
              >
                <div className="absolute -top-3 left-8 w-16 h-5 tape-strip -rotate-2" />

                <p className="text-sm sm:text-base leading-relaxed text-[#2d080f] font-sans">
                  <strong className="font-bold text-[#8a1a2e]">Final-year B.Tech Computer Science (AI/ML)</strong> student with a <strong className="font-bold text-[#8a1a2e]">CGPA of 8.88/10</strong> and no backlogs, graduating in 2027 from <strong className="text-[#1a060a]">AVN Institute of Engineering and Technology, Ibrahimpatnam</strong>.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#2d080f] font-sans">
                  I build responsive and reusable web components using <strong className="text-[#8a1a2e]">HTML5, CSS3 and JavaScript</strong>, with experience in REST API development using <strong className="text-[#8a1a2e]">Python and FastAPI</strong>.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#2d080f] font-sans">
                  I also have working knowledge of <strong className="text-[#8a1a2e]">Node.js, MySQL, MongoDB</strong> and <strong className="text-[#8a1a2e]">Git/GitHub</strong>, along with a strong foundation in <strong className="text-[#1a060a]">DSA, OOP and core computer science fundamentals</strong>.
                </p>
              </motion.div>

              {/* Verified Metrics Strip with staggered pop-up */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '8.88', sub: '/10', label: 'CGPA Score' },
                  { value: '2027', sub: '', label: 'Graduation' },
                  { value: '0', sub: '', label: 'Backlogs' },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.45 + idx * 0.1, duration: 0.5 }}
                    className="p-3.5 rounded-lg bg-[#25070d] border border-[#4a0e17] text-center"
                  >
                    <div className="font-editorial text-2xl font-bold text-[#faf6ee]">
                      {stat.value}{stat.sub && <span className="text-xs text-[#a82438]">{stat.sub}</span>}
                    </div>
                    <div className="text-[10px] font-mono text-[#c49a9e] uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Core Engineering Disciplines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="p-4 rounded-lg bg-[#25070d] border border-[#4a0e17] space-y-2"
              >
                <div className="text-xs font-mono text-[#e6b8c0] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a82438]" />
                  <span>Verified Computer Science Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'].map((subj) => (
                    <span key={subj} className="px-2.5 py-1 rounded bg-[#170508] border border-[#3d0d16] text-[#e6dcce]">
                      {subj}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Scrapbook Collage (6 cols) flying in from right */}
            <div className="lg:col-span-6 relative space-y-4">
              
              {/* Element 1: Browser Window Mockup with Parallax */}
              <motion.div
                style={{ y: browserMockupY }}
                initial={{ opacity: 0, x: 50, rotate: 3 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="rounded-xl bg-[#170508] border border-[#4a0e17] shadow-xl overflow-hidden paper-card"
              >
                <div className="px-4 py-2.5 bg-[#25070d] border-b border-[#3d0d16] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8a1a2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5c121f]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3d0d16]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#c49a9e]">latika.dev/architecture.html</span>
                  <div className="w-10" />
                </div>

                <div className="p-4 font-mono text-xs text-[#faf6ee] space-y-2">
                  <div className="text-[#a82438]">// Component Hierarchy</div>
                  <p className="text-[#c49a9e]">&lt;<span className="text-[#faf6ee]">main</span> className="editorial-canvas"&gt;</p>
                  <p className="pl-4 text-[#c49a9e]">&lt;<span className="text-[#faf6ee]">Header</span> title="M. S. Laxmi Pralatika" role="Web Developer" /&gt;</p>
                  <p className="pl-4 text-[#c49a9e]">&lt;<span className="text-[#faf6ee]">FrontendStack</span> tech=&#123;['HTML5', 'CSS3', 'JS']&#125; /&gt;</p>
                  <p className="pl-4 text-[#c49a9e]">&lt;<span className="text-[#faf6ee]">BackendAPI</span> framework="FastAPI" runtime="Python" /&gt;</p>
                  <p className="text-[#c49a9e]">&lt;/<span className="text-[#faf6ee]">main</span>&gt;</p>
                </div>
              </motion.div>

              {/* Element 2 & 3: GitHub Card & Polaroid Scrapbook Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* GitHub-style Card with tape */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="p-4 rounded-xl bg-[#25070d] border border-[#5c121f] relative paper-card"
                >
                  <div className="absolute -top-2 left-6 w-14 h-4 tape-strip-dark rotate-3" />
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#e6b8c0]">
                    <GitBranch className="w-3.5 h-3.5 text-[#a82438]" />
                    <span>Latika-04 / repos</span>
                  </div>
                  <div className="text-xs font-bold text-[#faf6ee] mb-1 font-mono">
                    portfolio-system
                  </div>
                  <div className="text-[11px] text-[#c49a9e] line-clamp-2">
                    Responsive web modules, clean semantic HTML5 markup &amp; CSS layout standards.
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#a82438]">
                    <span>● JavaScript</span>
                    <span>Verified Source</span>
                  </div>
                </motion.div>

                {/* Polaroid Developer Card with parallax rotation & drift */}
                <motion.div
                  style={{ y: polaroidY }}
                  initial={{ opacity: 0, scale: 0.85, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  className="p-3 bg-[#faf6ee] text-[#1a060a] rounded-lg border border-[#d8cabb] polaroid-card cursor-default"
                >
                  <div className="bg-[#1a060a] rounded p-3 text-center text-[#faf6ee] space-y-1">
                    <div className="w-8 h-8 rounded-full bg-[#8a1a2e] text-[#faf6ee] flex items-center justify-center font-bold text-xs mx-auto font-editorial">
                      LP
                    </div>
                    <div className="font-editorial text-xs font-bold">
                      Laxmi Pralatika
                    </div>
                    <div className="text-[9px] font-mono text-[#c49a9e]">
                      HYDERABAD, IN
                    </div>
                  </div>
                  <div className="mt-2 text-center font-handwriting text-sm text-[#8a1a2e] font-semibold">
                    Developer Snapshot // 2026
                  </div>
                </motion.div>

              </div>

              {/* Element 4: Paper Note with tape at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="p-4 rounded-lg bg-[#faf5ec] text-[#2d080f] border border-[#d8cabb] relative paper-card"
              >
                <div className="absolute -top-2.5 right-10 w-20 h-5 tape-strip -rotate-1" />
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8a1a2e] mb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>PHILOSOPHY IN ONE LINE</span>
                </div>
                <p className="text-xs text-[#2d080f] font-sans italic">
                  "Iterative engineering: write semantic code, validate with real test cases, debug systematically, and optimize for users."
                </p>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
