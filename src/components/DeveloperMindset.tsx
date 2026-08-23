import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hammer, CheckSquare, Bug, TrendingUp, RefreshCw } from 'lucide-react';
import { mindsetSteps } from '../data/portfolioData';

export const DeveloperMindset: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#8a1a2e]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-[#a82438]" />;
      case 'Bug':
        return <Bug className="w-5 h-5 text-[#8a1a2e]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-[#a82438]" />;
    }
  };

  return (
    <section
      id="mindset"
      className="py-20 bg-[#170508] border-t border-[#3d0d16] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#a82438]" />
              <span>ENGINEERING PHILOSOPHY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black font-editorial text-[#faf6ee] tracking-tight"
            >
              BUILD → TEST → DEBUG → IMPROVE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-base sm:text-lg text-[#e6dcce]/80 mt-4 max-w-2xl mx-auto font-sans leading-relaxed"
            >
              "I approach development iteratively — build a clean solution, test edge cases, systematically isolate bugs, and continuously improve performance."
            </motion.p>
          </div>

          {/* 4-Step Interactive Scrapbook Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mindsetSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <motion.div
                  key={step.step}
                  id={`mindset-step-${step.step}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer rounded-xl p-6 border transition-all duration-300 relative paper-card ${
                    isActive
                      ? 'bg-[#faf6ee] text-[#1a060a] border-[#faf6ee] scale-102 shadow-2xl -rotate-1'
                      : 'bg-[#28070e] text-[#faf6ee] border-[#4a0e17] hover:border-[#8a1a2e] hover:bg-[#340912] rotate-1'
                  }`}
                >
                  {/* Washi tape on active card */}
                  {isActive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 tape-strip rotate-2 pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className={`p-2.5 rounded-lg border ${
                      isActive ? 'bg-[#f0e7d8] border-[#ded3c1]' : 'bg-[#170508] border-[#3d0d16]'
                    }`}>
                      {getStepIcon(step.iconName)}
                    </span>
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#8a1a2e]' : 'text-[#c49a9e]'
                    }`}>
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-editorial tracking-tight mb-2 ${
                    isActive ? 'text-[#1a060a]' : 'text-[#faf6ee]'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 font-sans ${
                    isActive ? 'text-[#2d080f]' : 'text-[#e6dcce]/80'
                  }`}>
                    {step.description}
                  </p>

                  <div className={`pt-3 border-t text-[11px] font-mono ${
                    isActive ? 'border-[#ded3c1] text-[#7d1a2c]' : 'border-[#3d0d16] text-[#c49a9e]'
                  }`}>
                    <span className="font-bold">Action:</span> {step.action}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
