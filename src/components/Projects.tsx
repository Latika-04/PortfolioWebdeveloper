import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Code2, Film, CheckCircle2, ArrowUpRight, Laptop, Activity, Server, Database, Smartphone, Tablet, Monitor } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="space-y-0">
      
      {/* ============================================================== */}
      {/* SLIDE 06: PROJECT 01 — RESPONSIVE PORTFOLIO WEBSITE            */}
      {/* ============================================================== */}
      <section
        id="project-1"
        className="min-h-screen py-24 bg-[#140508] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
      >
        {/* 35mm Film Top Track */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0c0304] border-b border-[#360810] flex items-center justify-between px-4 opacity-70 select-none pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
            ● SLIDE 06 // SELECTED WORK SPREAD 01 // OPEN SOURCE REPOSITORY
          </div>
          <div className="flex gap-2">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-3 h-2 rounded-[2px] bg-[#1a0508] border border-[#3d0d16]" />
            ))}
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Heading */}
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3">
                <FolderGit2 className="w-3.5 h-3.5 text-[#a82438]" />
                <span>SLIDE 06 // PROJECT 01 SPREAD</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <h2 className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide">
                  project 01
                </h2>
                <span className="font-editorial italic text-lg sm:text-xl text-[#e6b8c0]">
                  — Responsive portfolio website.
                </span>
              </div>
            </div>

            {/* Project 01 Presentation Slide Card */}
            <div className="rounded-2xl bg-[#28070e] border-2 border-[#5c121f] p-6 sm:p-10 shadow-2xl relative paper-card">
              
              {/* Masking tape on corners */}
              <div className="absolute -top-3 left-10 w-28 h-6 tape-strip rotate-2 hidden sm:block pointer-events-none" />
              <div className="absolute -top-3 right-12 w-24 h-6 tape-strip -rotate-1 hidden sm:block pointer-events-none" />

              {/* Project Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#4a0e17]">
                <div className="flex items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="font-mono text-3xl sm:text-4xl font-black text-[#8a1a2e]"
                  >
                    01
                  </motion.span>
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf6ee] tracking-tight">
                      RESPONSIVE PORTFOLIO WEBSITE
                    </h3>
                    <div className="text-xs font-mono text-[#c49a9e] mt-0.5">
                      Semantic UI • Modular Architecture • Cross-Device Optimization
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    id="project-01-view-source"
                    href="https://github.com/Latika-04/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#faf6ee] hover:bg-[#ffffff] text-[#1a060a] font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>VIEW SOURCE</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a1a2e]" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description Column (5 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="lg:col-span-5 space-y-5"
                >
                  
                  <div className="p-5 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] space-y-3 paper-card relative">
                    <div className="absolute -top-2.5 right-6 w-16 h-4 tape-strip rotate-1" />
                    
                    <div className="text-xs font-mono font-bold text-[#8a1a2e] uppercase">
                      Project Specification
                    </div>
                    
                    <p className="text-sm font-sans leading-relaxed text-[#2d080f]">
                      Designed and built a responsive, reusable portfolio website using HTML5, CSS3 and JavaScript, implementing interactive UI components for enhanced user engagement.
                    </p>
                    <p className="text-xs font-sans leading-relaxed text-[#522931]">
                      Optimized layout and styling for cross-device compatibility, improving usability across desktop, tablet, and mobile browsers with fluid grid styling.
                    </p>
                  </div>

                  {/* Technologies Pills */}
                  <div>
                    <div className="text-[10px] font-mono text-[#a82438] uppercase tracking-wider mb-2 font-bold">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Flexbox & CSS Grid', 'Responsive Breakpoints'].map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.35 + idx * 0.05, duration: 0.3 }}
                          className="px-3 py-1 rounded-md bg-[#170508] border border-[#4a0e17] text-xs font-mono text-[#faf6ee]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Code Snippet Scrapbook Note */}
                  <div className="p-4 rounded-xl bg-[#170508] border border-[#4a0e17] font-mono text-xs text-[#faf6ee] space-y-1">
                    <div className="text-[#a82438] text-[10px] pb-1 border-b border-[#2d080f]">
                      // Responsive Viewport Logic
                    </div>
                    <p className="text-[#c49a9e]">&lt;<span className="text-[#faf6ee]">meta</span> name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
                    <p className="text-[#c49a9e]">@media (max-width: 768px) &#123;</p>
                    <p className="pl-4 text-[#e6b8c0]">.nav-container &#123; flex-direction: column; &#125;</p>
                    <p className="text-[#c49a9e]">&#125;</p>
                  </div>

                </motion.div>

                {/* Right Visual Column: Browser Mockup with Viewport Switcher (7 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: 60, rotate: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7"
                >
                  <div className="rounded-xl bg-[#170508] border border-[#4a0e17] shadow-2xl overflow-hidden paper-card">
                    
                    {/* Browser Top Controls */}
                    <div className="px-4 py-2.5 bg-[#25070d] border-b border-[#3d0d16] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8a1a2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#5c121f]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3d0d16]" />
                      </div>

                      <div className="flex items-center gap-1 bg-[#170508] px-2 py-0.5 rounded border border-[#3d0d16] text-[10px] font-mono text-[#c49a9e]">
                        <span>https://github.com/Latika-04/PortfolioWebdeveloper</span>
                      </div>

                      {/* Device switcher */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setActiveDeviceView('desktop')}
                          className={`p-1 rounded ${activeDeviceView === 'desktop' ? 'bg-[#8a1a2e] text-white' : 'text-[#c49a9e] hover:text-white'}`}
                          title="Desktop View"
                        >
                          <Monitor className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setActiveDeviceView('tablet')}
                          className={`p-1 rounded ${activeDeviceView === 'tablet' ? 'bg-[#8a1a2e] text-white' : 'text-[#c49a9e] hover:text-white'}`}
                          title="Tablet View"
                        >
                          <Tablet className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setActiveDeviceView('mobile')}
                          className={`p-1 rounded ${activeDeviceView === 'mobile' ? 'bg-[#8a1a2e] text-white' : 'text-[#c49a9e] hover:text-white'}`}
                          title="Mobile View"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Simulated Browser Webpage View */}
                    <div className="p-6 bg-[#faf6ee] text-[#1a060a] transition-all duration-300 min-h-[300px] flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[#ded3c1]">
                          <div className="font-editorial font-bold text-base text-[#1a060a]">
                            M. S. Laxmi Pralatika
                          </div>
                          <div className="text-[10px] font-mono text-[#8a1a2e] flex gap-2">
                            <span>ABOUT</span>
                            <span>SKILLS</span>
                            <span>PROJECTS</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-[#f0e7d8] border border-[#d8cabb] space-y-2">
                          <div className="font-editorial text-lg sm:text-xl font-bold text-[#1a060a]">
                            Building Responsive &amp; Accessible Interfaces
                          </div>
                          <p className="text-xs text-[#2d080f]">
                            Interactive client-side experiences rendered with semantic HTML5 elements and fluid CSS Grid layouts.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div className="p-2.5 rounded bg-[#ffffff] border border-[#ded3c1]">
                            <div className="font-mono text-xs font-bold text-[#8a1a2e]">100%</div>
                            <div className="text-[10px] text-[#522931]">Mobile-First CSS</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#ffffff] border border-[#ded3c1]">
                            <div className="font-mono text-xs font-bold text-[#8a1a2e]">0 Dependencies</div>
                            <div className="text-[10px] text-[#522931]">Vanilla JS &amp; DOM</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#ded3c1] flex items-center justify-between text-[10px] font-mono text-[#7d1a2c]">
                        <span>STATUS: REPOSITORY COMPLETE</span>
                        <a
                          href="https://github.com/Latika-04/portfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline hover:text-[#1a060a]"
                        >
                          VIEW SOURCE ↗
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SLIDE 07: PROJECT 02 — HEALTHCARE RISK PREDICTION              */}
      {/* ============================================================== */}
      <section
        id="project-2"
        className="min-h-screen py-24 bg-[#180509] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
      >
        {/* 35mm Film Top Track */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0c0304] border-b border-[#360810] flex items-center justify-between px-4 opacity-70 select-none pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
            ● SLIDE 07 // SELECTED WORK SPREAD 02 // REST API &amp; MODEL PIPELINES
          </div>
          <div className="flex gap-2">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-3 h-2 rounded-[2px] bg-[#1a0508] border border-[#3d0d16]" />
            ))}
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Heading */}
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3">
                <FolderGit2 className="w-3.5 h-3.5 text-[#a82438]" />
                <span>SLIDE 07 // PROJECT 02 SPREAD</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <h2 className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide">
                  project 02
                </h2>
                <span className="font-editorial italic text-lg sm:text-xl text-[#e6b8c0]">
                  — Healthcare Risk Prediction API.
                </span>
              </div>
            </div>

            {/* Project 02 Presentation Slide Card */}
            <div className="rounded-2xl bg-[#28070e] border-2 border-[#5c121f] p-6 sm:p-10 shadow-2xl relative paper-card">
              
              {/* Masking tape on corners */}
              <div className="absolute -top-3 left-14 w-28 h-6 tape-strip -rotate-2 hidden sm:block pointer-events-none" />
              <div className="absolute -top-3 right-10 w-24 h-6 tape-strip rotate-3 hidden sm:block pointer-events-none" />

              {/* Project Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#4a0e17]">
                <div className="flex items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="font-mono text-3xl sm:text-4xl font-black text-[#8a1a2e]"
                  >
                    02
                  </motion.span>
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf6ee] tracking-tight">
                      HEALTHCARE RISK PREDICTION
                    </h3>
                    <div className="text-xs font-mono text-[#c49a9e] mt-0.5">
                      Python • FastAPI • Scikit-learn • NumPy • Pandas
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    id="project-02-view-source"
                    href="https://github.com/Latika-04/nfhis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#faf6ee] hover:bg-[#ffffff] text-[#1a060a] font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>VIEW SOURCE</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a1a2e]" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Visual: Vintage Computer / API Dashboard Interface (7 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: -60, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-4"
                >
                  <div className="rounded-xl bg-[#170508] border border-[#4a0e17] shadow-2xl p-5 space-y-4 paper-card">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-[#360810]">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-[#a82438]" />
                        <span className="text-xs font-mono font-bold text-[#faf6ee]">FastAPI Server Node ~ /api/v1/predict</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#2e0910] text-[#e6b8c0] text-[10px] font-mono border border-[#4a0e17]">
                        HTTP 200 OK
                      </span>
                    </div>

                    {/* Simulated API Flow Blocks: API → MODEL → DATA → PREDICTION */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="p-3 rounded bg-[#25070d] border border-[#4a0e17]">
                        <div className="text-[#a82438] font-bold">API</div>
                        <div className="text-[10px] text-[#c49a9e] mt-1">FastAPI Router</div>
                      </div>
                      <div className="p-3 rounded bg-[#25070d] border border-[#4a0e17]">
                        <div className="text-[#a82438] font-bold">DATA</div>
                        <div className="text-[10px] text-[#c49a9e] mt-1">NumPy/Pandas</div>
                      </div>
                      <div className="p-3 rounded bg-[#25070d] border border-[#4a0e17]">
                        <div className="text-[#a82438] font-bold">MODEL</div>
                        <div className="text-[10px] text-[#c49a9e] mt-1">Scikit-learn</div>
                      </div>
                      <div className="p-3 rounded bg-[#25070d] border border-[#4a0e17]">
                        <div className="text-[#a82438] font-bold">INFERENCE</div>
                        <div className="text-[10px] text-[#c49a9e] mt-1">~85% Accuracy</div>
                      </div>
                    </div>

                    {/* API Request / Response JSON Display */}
                    <div className="p-4 rounded-lg bg-[#0e0204] border border-[#2d080f] font-mono text-xs text-[#faf6ee] space-y-1">
                      <div className="text-[#a82438] text-[10px] pb-1 border-b border-[#2d080f]">
                        // POST /api/v1/predict-risk
                      </div>
                      <p className="text-[#c49a9e]">&#123;</p>
                      <p className="pl-4 text-[#e6b8c0]">"patient_metrics": &#123; "age": 48, "cholesterol": 210, "bmi": 24.2 &#125;,</p>
                      <p className="pl-4 text-[#e6b8c0]">"model_version": "v1.2_scikit",</p>
                      <p className="pl-4 text-[#faf6ee] font-bold">"predicted_risk_level": "LOW",</p>
                      <p className="pl-4 text-[#a82438]">"confidence_score": 0.854</p>
                      <p className="text-[#c49a9e]">&#125;</p>
                    </div>

                  </div>
                </motion.div>

                {/* Right Description Column (5 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="lg:col-span-5 space-y-5"
                >
                  
                  <div className="p-5 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] space-y-3 paper-card relative">
                    <div className="absolute -top-2.5 left-6 w-16 h-4 tape-strip -rotate-1" />
                    
                    <div className="text-xs font-mono font-bold text-[#8a1a2e] uppercase">
                      Architecture &amp; Pipelines
                    </div>
                    
                    <p className="text-sm font-sans leading-relaxed text-[#2d080f]">
                      Architected and delivered scalable, modular REST APIs from scratch using Python and FastAPI for model training and disease-risk inference across multiple simulated client nodes.
                    </p>
                    <p className="text-xs font-sans leading-relaxed text-[#522931]">
                      Designed data preprocessing and feature engineering pipelines, testing and tuning models to raise prediction accuracy to approximately 85%.
                    </p>
                  </div>

                  {/* Technologies Pills */}
                  <div>
                    <div className="text-[10px] font-mono text-[#a82438] uppercase tracking-wider mb-2 font-bold">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'FastAPI', 'Scikit-learn', 'NumPy', 'Pandas', 'REST API Architecture'].map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.35 + idx * 0.05, duration: 0.3 }}
                          className="px-3 py-1 rounded-md bg-[#170508] border border-[#4a0e17] text-xs font-mono text-[#faf6ee]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://github.com/Latika-04/healthcare-risk-prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg bg-[#380b14] hover:bg-[#52101e] text-[#faf6ee] border border-[#6b1422] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <FolderGit2 className="w-4 h-4 text-[#a82438]" />
                      <span>Inspect Backend Code on GitHub ↗</span>
                    </a>
                  </div>

                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
