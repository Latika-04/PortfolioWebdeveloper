import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, Bookmark, Film, Layers } from 'lucide-react';

export const TableOfContents: React.FC = () => {
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

  // Parallax shifts
  const leftRailY = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const rightRailY = useTransform(smoothProgress, [0, 1], [80, -80]);
  const watermarkY = useTransform(smoothProgress, [0, 1], [-40, 60]);
  const recruiterNoteY = useTransform(smoothProgress, [0, 1], [25, -25]);

  const contents = [
    {
      num: '01',
      title: 'about me',
      subtitle: 'Academic background, core engineering principles & technical summary',
      href: '#about',
      tag: 'SLIDE 03',
    },
    {
      num: '02',
      title: 'skills board',
      subtitle: 'Web development hub, frontend architecture, backend APIs & core CS',
      href: '#skills',
      tag: 'SLIDE 04',
    },
    {
      num: '03',
      title: 'experience',
      subtitle: 'Web Development Internship at AICTE Virtual Internship Program',
      href: '#experience',
      tag: 'SLIDE 05',
    },
    {
      num: '04',
      title: 'project 01: portfolio',
      subtitle: 'Responsive portfolio website with semantic markup & modular components',
      href: '#project-1',
      tag: 'SLIDE 06',
    },
    {
      num: '05',
      title: 'project 02: healthcare risk ai',
      subtitle: 'FastAPI backend, Scikit-learn disease-risk model & feature pipelines',
      href: '#project-2',
      tag: 'SLIDE 07',
    },
    {
      num: '06',
      title: 'certifications & hackathons',
      subtitle: 'HackerRank SQL Silver, Python Bronze, SIH 2024 & MSME Ideathon 5.0',
      href: '#certifications',
      tag: 'SLIDE 08-09',
    },
    {
      num: '07',
      title: 'open the source & contact',
      subtitle: 'GitHub repository inspector, developer desk terminal & direct mail',
      href: '#github',
      tag: 'SLIDE 10-11',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="toc"
      className="min-h-screen py-24 bg-[#17070a] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/4 right-12 md:right-32 text-[140px] sm:text-[200px] font-black font-editorial text-[#380b14]/20 select-none pointer-events-none z-0 tracking-tighter"
      >
        02
      </motion.div>

      {/* 35mm film perforations running vertically on left and right with Parallax drift */}
      <motion.div
        style={{ y: leftRailY }}
        className="absolute top-0 bottom-0 left-2 w-4 flex flex-col justify-between py-4 opacity-50 hidden sm:flex pointer-events-none z-0"
      >
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-3 h-2 rounded-[2px] bg-[#360810] border border-[#5c121f]" />
        ))}
      </motion.div>
      <motion.div
        style={{ y: rightRailY }}
        className="absolute top-0 bottom-0 right-2 w-4 flex flex-col justify-between py-4 opacity-50 hidden sm:flex pointer-events-none z-0"
      >
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-3 h-2 rounded-[2px] bg-[#360810] border border-[#5c121f]" />
        ))}
      </motion.div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Presentation Slide Emergence: Motion Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          
          {/* Left Title Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e0910] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#a82438]" />
              <span>SLIDE 02 // PRESENTATION INDEX</span>
            </motion.div>

            <div className="space-y-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-handwriting text-3xl text-[#c49a9e] block"
              >
                presentation
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-5xl sm:text-6xl font-black font-editorial text-[#faf6ee] tracking-tight leading-none uppercase"
              >
                TABLE OF<br />
                <span className="text-[#a82438] italic">CONTENTS</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-sm text-[#e6dcce]/80 font-normal leading-relaxed"
            >
              A curated index through verified academic credentials, engineering projects, developer toolkit, and contact channels for M. S. Laxmi Pralatika.
            </motion.p>

            {/* Scrapbook Note with Tape and Parallax floating depth */}
            <motion.div
              style={{ y: recruiterNoteY }}
              initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="relative p-5 rounded-lg bg-[#faf6ee] text-[#1a060a] border border-[#d8cabb] paper-card hidden lg:block"
            >
              <div className="absolute -top-3 left-6 w-20 h-5 tape-strip -rotate-2 rounded-[1px] pointer-events-none" />
              <div className="font-handwriting text-xl font-bold text-[#8a1a2e] mb-1">
                Recruiter Quick Note:
              </div>
              <p className="text-xs text-[#2d080f] font-sans leading-relaxed">
                Click any chapter to jump directly to that presentation slide. All project code is directly inspectable on GitHub.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Numbered Chapter Rows (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            {contents.map((item, idx) => (
              <motion.a
                key={item.num}
                id={`toc-item-${item.num}`}
                href={item.href}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="group block p-4 sm:p-5 rounded-xl bg-[#24080e] hover:bg-[#380b14] border border-[#4a0e17] hover:border-[#8a1a2e] transition-all duration-200 paper-card"
              >
                <div className="flex items-center justify-between gap-4">
                  
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Chapter Number */}
                    <span className="font-mono text-base sm:text-lg font-bold text-[#8a1a2e] group-hover:text-[#faf6ee] transition-colors pt-0.5 sm:pt-0">
                      {item.num}
                    </span>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-3">
                        <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#faf6ee] group-hover:text-[#ffffff] tracking-wide transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#17070a] text-[#c49a9e] border border-[#3d0d16]">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#e6dcce]/70 line-clamp-1 sm:line-clamp-none">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Action */}
                  <div className="p-2 rounded-lg bg-[#1a060a] text-[#c49a9e] group-hover:text-[#faf6ee] group-hover:bg-[#8a1a2e] transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
