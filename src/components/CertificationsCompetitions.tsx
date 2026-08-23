import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, ShieldCheck, Film, Sparkles } from 'lucide-react';
import { certifications, competitions } from '../data/portfolioData';

export const CertificationsCompetitions: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* ============================================================== */}
      {/* SLIDE 08: CERTIFICATIONS                                       */}
      {/* ============================================================== */}
      <section
        id="certifications"
        className="min-h-screen py-24 bg-[#1a060a] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
      >
        {/* 35mm Film Top Track */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0e0305] border-b border-[#360810] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
            ● SLIDE 08 // CREDENTIALS &amp; VERIFIED CERTIFICATES // ARCHIVE
          </div>
          <div className="flex gap-2">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-3 h-2 rounded-[2px] bg-[#1f0509] border border-[#3d0d16]" />
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
            <div className="max-w-3xl mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3"
              >
                <Award className="w-3.5 h-3.5 text-[#a82438]" />
                <span>SLIDE 08 // CREDENTIALS</span>
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
                >
                  certifications
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-editorial italic text-lg text-[#e6b8c0]"
                >
                  — Verified badges &amp; internship recognition.
                </motion.span>
              </div>
            </div>

            {/* Certificate Cards Grid (Paper notes with pins & tape) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  id={`cert-card-${cert.id}`}
                  initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? 3 : -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? 1 : -1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
                  className="relative p-6 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] paper-card transition-all duration-200 group cursor-default"
                >
                  {/* Washi tape on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 tape-strip rotate-2" />

                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ded3c1]">
                    <span className="text-[10px] font-mono font-bold text-[#8a1a2e] uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <div className="p-1 rounded bg-[#f0e7d8] text-[#8a1a2e]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1a060a] group-hover:text-[#8a1a2e] transition-colors leading-snug mb-3">
                    {cert.title}
                  </h3>

                  <div className="pt-2 border-t border-[#ded3c1] flex items-center justify-between text-xs font-mono text-[#7d1a2c]">
                    <span className="font-semibold">{cert.badgeLevel}</span>
                    <span className="text-[10px] text-[#522931]">VERIFIED</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SLIDE 09: COMPETITIONS ("Beyond the Classroom")                */}
      {/* ============================================================== */}
      <section
        id="competitions"
        className="min-h-screen py-24 bg-[#140407] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
      >
        {/* 35mm Film Top Track */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0e0305] border-b border-[#360810] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
            ● SLIDE 09 // NATIONAL COMPETITIONS // HACKATHONS &amp; SQUADS
          </div>
          <div className="flex gap-2">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-3 h-2 rounded-[2px] bg-[#1f0509] border border-[#3d0d16]" />
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
            <div className="max-w-3xl mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e080f] border border-[#5c121f] text-[#e6b8c0] text-xs font-mono mb-3"
              >
                <Trophy className="w-3.5 h-3.5 text-[#a82438]" />
                <span>SLIDE 09 // NATIONAL COMPETITIONS</span>
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-handwriting text-5xl sm:text-6xl text-[#faf6ee] font-bold tracking-wide"
                >
                  beyond the classroom
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-editorial italic text-lg text-[#e6b8c0]"
                >
                  — Hackathons &amp; problem-solving stages.
                </motion.span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitions.map((comp, idx) => (
                <motion.div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl bg-[#28070e] border-2 border-[#5c121f] p-6 sm:p-8 shadow-2xl relative paper-card"
                >
                  {/* Masking tape on corner */}
                  <div className="absolute -top-3 left-10 w-24 h-5 tape-strip-dark rotate-2 pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#4a0e17]">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#a82438]" />
                      <span className="text-xs font-mono font-bold text-[#faf6ee] uppercase">
                        {comp.level}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#c49a9e] px-2 py-0.5 rounded bg-[#170508] border border-[#3d0d16]">
                      NATIONAL HACKATHON
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#faf6ee] mb-3">
                    {comp.title}
                  </h3>

                  <div className="p-4 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] font-sans text-sm leading-relaxed text-[#2d080f]">
                    {comp.description}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#e6b8c0]">
                    <span>MEMBER: MULTIDISCIPLINARY SQUAD</span>
                    <span className="text-[#a82438]">★ PARTICIPATION</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
