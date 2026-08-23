import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Terminal, ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const cloneCommand = `git clone https://github.com/Latika-04/latika-portfoliowebdeveloper.git`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="github"
      className="min-h-screen py-24 bg-[#140407] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* 35mm Film Top Track */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#0c0204] border-b border-[#360810] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
        <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
          ● SLIDE 10 // DEVELOPER DESK &amp; REPOSITORY INSPECTION // OPEN SOURCE
        </div>
        <div className="flex gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-[#1a0508]" />
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
          {/* Developer's Desk Container (Deep Burgundy Card) */}
          <div className="rounded-2xl bg-[#28070e] border-2 border-[#5c121f] p-6 sm:p-10 md:p-12 shadow-2xl relative paper-card">
            
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-12 w-28 h-6 tape-strip rotate-2 hidden sm:block pointer-events-none" />
            <div className="absolute -top-3 right-14 w-24 h-6 tape-strip -rotate-1 hidden sm:block pointer-events-none" />

            {/* Section Header */}
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#170508] border border-[#4a0e17] text-[#e6b8c0] text-xs font-mono mb-3"
              >
                <Github className="w-3.5 h-3.5 text-[#a82438]" />
                <span>SLIDE 10 // OPEN THE SOURCE</span>
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
                >
                  open the source
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-editorial italic text-lg text-[#e6b8c0]"
                >
                  — The projects are available on GitHub — take a look under the hood.
                </motion.span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Desk Column: Profile & Direct Actions (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="lg:col-span-5 space-y-6"
              >
                
                {/* GitHub Identity Card */}
                <div className="p-6 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] space-y-4 paper-card relative">
                  <div className="absolute -top-2.5 right-8 w-16 h-4 tape-strip rotate-1" />

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a060a] text-[#faf6ee] flex items-center justify-center font-bold text-xl font-editorial shadow-md">
                      LP
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl font-bold text-[#1a060a]">
                        {personalInfo.name}
                      </h3>
                      <div className="text-xs font-mono text-[#8a1a2e] font-semibold">
                        github.com/Latika-04
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-sans leading-relaxed text-[#2d080f]">
                    Explore modular frontend applications, FastAPI machine learning backends, responsive portfolio implementations, and clean commit histories.
                  </p>

                  <div className="pt-2 border-t border-[#ded3c1] flex items-center justify-between">
                    <a
                      id="github-desk-profile-button"
                      href={personalInfo.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-[#1a060a] hover:bg-[#380b14] text-[#faf6ee] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <Github className="w-4 h-4 text-[#e6b8c0]" />
                      <span>View GitHub Profile ↗</span>
                    </a>
                  </div>
                </div>

                {/* Quick Copy Clone Command */}
                <div className="p-4 rounded-xl bg-[#170508] border border-[#4a0e17] flex items-center justify-between gap-3 text-xs font-mono text-[#e6b8c0]">
                  <div className="truncate">
                    <span className="text-[#a82438]">$ </span>
                    <span className="text-[#faf6ee]">{cloneCommand}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded bg-[#25070d] hover:bg-[#3d0d16] text-[#faf6ee] shrink-0 transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </motion.div>

              {/* Right Desk Column: Vintage Terminal Mockup with Animated Cursor (7 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="rounded-xl bg-[#0e0204] border-2 border-[#5c121f] shadow-2xl overflow-hidden font-mono text-xs paper-card">
                  
                  {/* Terminal Header */}
                  <div className="px-4 py-3 bg-[#1e0509] border-b border-[#360810] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8a1a2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#5c121f]" />
                      <div className="w-3 h-3 rounded-full bg-[#3d0d16]" />
                      <span className="text-[11px] font-bold text-[#faf6ee] ml-2">bash ~ latika-workspace</span>
                    </div>
                    <span className="text-[10px] text-[#a82438]">node: v18+</span>
                  </div>

                  {/* Terminal Shell Body */}
                  <div className="p-6 text-[#faf6ee] space-y-4 leading-relaxed">
                    <div>
                      <span className="text-[#a82438] font-bold">latika@dev-station:~$</span> <span className="text-[#faf6ee]">git clone https://github.com/Latika-04/latika-portfoliowebdeveloper.git</span>
                      <p className="text-[#c49a9e] text-[11px] mt-1">Cloning into 'portfolio'... done.</p>
                    </div>

                    <div>
                      <span className="text-[#a82438] font-bold">latika@dev-station:~$</span> <span className="text-[#faf6ee]">cd portfolio</span>
                    </div>

                    <div>
                      <span className="text-[#a82438] font-bold">latika@dev-station:~/portfolio$</span> <span className="text-[#faf6ee]">npm install</span>
                      <p className="text-[#c49a9e] text-[11px] mt-1">added 48 packages in 1.4s (0 vulnerabilities)</p>
                    </div>

                    <div>
                      <span className="text-[#a82438] font-bold">latika@dev-station:~/portfolio$</span> <span className="text-[#faf6ee]">npm run dev</span>
                      <div className="p-3 mt-2 rounded bg-[#170508] border border-[#360810] text-[11px] text-[#e6b8c0] space-y-0.5">
                        <p className="text-emerald-400">➜ Local:   http://localhost:3000/</p>
                        <p className="text-[#c49a9e]">➜ Network: use --host to expose</p>
                        <p className="text-[#8a1a2e]">➜ Ready in 120ms.</p>
                      </div>
                    </div>

                    {/* Active Blinking Cursor */}
                    <div className="flex items-center gap-1.5 pt-2">
                      <span className="text-[#a82438] font-bold">latika@dev-station:~/portfolio$</span>
                      <span className="inline-block w-2.5 h-4 bg-[#faf6ee] animate-pulse" />
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
