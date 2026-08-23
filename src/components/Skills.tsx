import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Code2, Database, Cpu, CheckCircle } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'web' | 'core' | 'aiml';
  rotation: string;
  badge?: string;
  note?: string;
}

export const Skills: React.FC = () => {
  const webSkills: SkillItem[] = [
    { name: 'HTML5', category: 'web', rotation: '-rotate-2', badge: 'Semantic Web', note: 'SEO & Accessible DOM' },
    { name: 'CSS3', category: 'web', rotation: 'rotate-1', badge: 'Flex & Grid', note: 'Modern layouts & styling' },
    { name: 'JavaScript', category: 'web', rotation: '-rotate-1', badge: 'ES6+ Core', note: 'Async, DOM & Event Loop' },
    { name: 'Responsive Design', category: 'web', rotation: 'rotate-2', badge: 'Fluid Views', note: 'Mobile-first layout precision' },
    { name: 'Reusable UI Components', category: 'web', rotation: '-rotate-2', badge: 'Modular Architecture', note: 'Component composition' },
    { name: 'FastAPI', category: 'web', rotation: 'rotate-1', badge: 'Python Backend', note: 'High performance REST APIs' },
    { name: 'REST APIs', category: 'web', rotation: '-rotate-1', badge: 'API Design', note: 'HTTP status, JSON payloads' },
    { name: 'Node.js', category: 'web', rotation: 'rotate-2', badge: 'Runtime', note: 'Server-side fundamentals' },
    { name: 'MySQL', category: 'web', rotation: '-rotate-2', badge: 'Relational DB', note: 'Queries, schema & indexing' },
    { name: 'MongoDB', category: 'web', rotation: 'rotate-1', badge: 'Document DB', note: 'NoSQL collections & CRUD' },
    { name: 'Git', category: 'web', rotation: '-rotate-1', badge: 'Version Control', note: 'Branching, merging & commits' },
    { name: 'GitHub', category: 'web', rotation: 'rotate-2', badge: 'Collaboration', note: 'PRs & project workflows' },
  ];

  const coreSkills: SkillItem[] = [
    { name: 'DSA', category: 'core', rotation: '-rotate-1', badge: 'Structures', note: 'Problem solving fundamentals' },
    { name: 'OOP', category: 'core', rotation: 'rotate-2', badge: 'Paradigms', note: 'Encapsulation & polymorphism' },
    { name: 'DBMS', category: 'core', rotation: '-rotate-2', badge: 'Databases', note: 'Transactions & normalization' },
    { name: 'Operating Systems', category: 'core', rotation: 'rotate-1', badge: 'Systems', note: 'Processes & memory models' },
    { name: 'Computer Networks', category: 'core', rotation: '-rotate-1', badge: 'Protocols', note: 'TCP/IP, HTTP & networking' },
  ];

  const aimlSkills: SkillItem[] = [
    { name: 'Python', category: 'aiml', rotation: 'rotate-1', badge: 'Language', note: 'Core scripting & tooling' },
    { name: 'Scikit-learn', category: 'aiml', rotation: '-rotate-2', badge: 'Pipelines', note: 'Classification & regression' },
    { name: 'Pandas', category: 'aiml', rotation: 'rotate-2', badge: 'Data Wrangling', note: 'DataFrame analysis' },
    { name: 'NumPy', category: 'aiml', rotation: '-rotate-1', badge: 'Computation', note: 'Matrix & array math' },
    { name: 'TensorFlow', category: 'aiml', rotation: 'rotate-1', badge: 'Deep Learning', note: 'CNN & neural models' },
    { name: 'Keras', category: 'aiml', rotation: '-rotate-2', badge: 'Framework', note: 'Model architecture' },
    { name: 'OpenCV', category: 'aiml', rotation: 'rotate-2', badge: 'Vision', note: 'Image processing pipelines' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 bg-[#180609] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* 35mm film border track */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#0f0305] border-b border-[#360810] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
        <div className="text-[9px] font-mono text-[#a82438] tracking-wider">
          SLIDE 04 // TECHNICAL TOOLKIT &amp; SCRAPBOOK SKILLS BOARD
        </div>
        <div className="flex gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-[#22050b]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Presentation Slide Outer Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Editorial Section Header */}
          <div className="max-w-3xl mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3"
            >
              <Layers className="w-3.5 h-3.5 text-[#a82438]" />
              <span>SLIDE 04 // SCRAPBOOK TOOLKIT</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
              >
                skills
              </motion.h2>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-editorial italic text-lg text-[#e6b8c0]"
              >
                — Pinned cards &amp; full-stack capabilities.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-sm text-[#e6dcce]/80 mt-2 max-w-2xl font-normal leading-relaxed"
            >
              Hover over any sticker or paper card to straighten it. Every tool listed reflects hands-on application in coursework, internship delivery, or self-directed project development.
            </motion.p>
          </div>

          {/* ============================================================== */}
          {/* MAIN SCRAPBOOK BOARD: WEB DEVELOPMENT HUB                     */}
          {/* ============================================================== */}
          <div className="mb-10 rounded-2xl bg-[#28070e] border-2 border-[#5c121f] p-6 sm:p-10 shadow-2xl relative paper-card">
            
            {/* Masking tape on board */}
            <div className="absolute -top-3 left-12 w-28 h-6 tape-strip -rotate-1 hidden sm:block pointer-events-none" />
            <div className="absolute -top-3 right-16 w-24 h-6 tape-strip rotate-2 hidden sm:block pointer-events-none" />

            {/* Central Highlight Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[#4a0e17]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#8a1a2e] text-[#faf6ee] flex items-center justify-center font-bold font-editorial text-lg shadow-md">
                  WD
                </div>
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf6ee] tracking-tight">
                    WEB DEVELOPMENT
                  </h3>
                  <div className="text-xs font-mono text-[#e6b8c0]">
                    Core focus area: Semantic frontend &amp; high-performance APIs
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#170508] border border-[#5c121f] text-[11px] font-mono text-[#faf6ee]">
                <span className="text-[#a82438]">● 12</span> ACTIVE CAPABILITIES
              </div>
            </div>

            {/* Scrapbook Paper Stickers Grid with Staggered Entrance */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {webSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.25 + idx * 0.04, duration: 0.4 }}
                  whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
                  className={`relative p-4 sm:p-5 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#d8cabb] paper-card ${skill.rotation} transition-all duration-200 cursor-default group`}
                >
                  {/* Washi tape at top of each sticker */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 tape-strip rotate-1 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="text-[10px] font-mono font-bold text-[#8a1a2e] uppercase tracking-wider mb-1">
                    {skill.badge}
                  </div>

                  <div className="font-editorial text-base sm:text-lg font-bold text-[#1a060a] group-hover:text-[#8a1a2e] transition-colors leading-tight mb-2">
                    {skill.name}
                  </div>

                  <div className="text-xs text-[#522931] font-sans leading-snug">
                    {skill.note}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ============================================================== */}
          {/* SECONDARY BOARDS: CORE CS & AI/ML                             */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Core Computer Science Board (6 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-6 rounded-2xl bg-[#28070e] border border-[#4a0e17] p-6 sm:p-8 shadow-xl relative paper-card"
            >
              <div className="absolute -top-3 left-10 w-20 h-5 tape-strip-dark rotate-2" />
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#4a0e17]">
                <div>
                  <span className="font-handwriting text-2xl text-[#c49a9e] block">
                    fundamentals
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#faf6ee]">
                    core computer science
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#a82438] bg-[#170508] px-2.5 py-1 rounded border border-[#3d0d16]">
                  5 DISCIPLINES
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.45 + idx * 0.05, duration: 0.4 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className={`p-3.5 rounded-lg bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] ${skill.rotation} transition-all duration-200 paper-card`}
                  >
                    <div className="text-[9px] font-mono text-[#8a1a2e] font-bold uppercase">
                      {skill.badge}
                    </div>
                    <div className="font-editorial text-sm sm:text-base font-bold text-[#1a060a]">
                      {skill.name}
                    </div>
                    <div className="text-[11px] text-[#522931] font-sans mt-0.5">
                      {skill.note}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI / Machine Learning Board (6 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-6 rounded-2xl bg-[#28070e] border border-[#4a0e17] p-6 sm:p-8 shadow-xl relative paper-card"
            >
              <div className="absolute -top-3 right-10 w-20 h-5 tape-strip-dark -rotate-2" />
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#4a0e17]">
                <div>
                  <span className="font-handwriting text-2xl text-[#c49a9e] block">
                    specialization
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#faf6ee]">
                    AI / ML toolkit
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#a82438] bg-[#170508] px-2.5 py-1 rounded border border-[#3d0d16]">
                  7 LIBRARIES
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {aimlSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.55 + idx * 0.04, duration: 0.4 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className={`p-3 rounded-lg bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] ${skill.rotation} transition-all duration-200 paper-card`}
                  >
                    <div className="text-[9px] font-mono text-[#8a1a2e] font-bold uppercase">
                      {skill.badge}
                    </div>
                    <div className="font-editorial text-sm font-bold text-[#1a060a]">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-[#522931] font-sans mt-0.5 line-clamp-1">
                      {skill.note}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
