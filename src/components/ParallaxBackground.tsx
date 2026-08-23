import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const ParallaxBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth springs for fluid, non-jittery parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Layer 1: Slow Background Watermark & Vintage Coordinates (Speed: 0.1x)
  const layer0Y = useTransform(smoothProgress, [0, 1], [-50, 150]);
  const layer0Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.15, 0.25, 0.15]);

  // Layer 2: Left 35mm Film Rail (Speed: 0.35x downward travel)
  const leftFilmY = useTransform(smoothProgress, [0, 1], [0, -380]);

  // Layer 3: Right 35mm Film Rail (Speed: 0.25x upward/downward travel)
  const rightFilmY = useTransform(smoothProgress, [0, 1], [-100, 250]);

  // Layer 4: Floating Ephemera (Postage stamps, wax marks, washi scrap) (Speed: 0.5x - 0.7x)
  const stamp1Y = useTransform(smoothProgress, [0, 1], [80, -420]);
  const stamp1Rotate = useTransform(smoothProgress, [0, 1], [-8, 12]);

  const stamp2Y = useTransform(smoothProgress, [0, 1], [300, -600]);
  const stamp2Rotate = useTransform(smoothProgress, [0, 1], [6, -10]);

  const tapeScrapY = useTransform(smoothProgress, [0, 1], [500, -350]);
  const crosshairY = useTransform(smoothProgress, [0, 1], [0, 200]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Ambient Deep Burgundy Backdrop with Paper Texture */}
      <div className="absolute inset-0 bg-[#12080a] bg-paper-grain opacity-90" />
      <div className="absolute inset-0 bg-vintage-grid opacity-60" />

      {/* ============================================================== */}
      {/* LAYER 0: SLOW-MOVING EDITORIAL WATERMARKS & GRID CROSSES       */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: layer0Y, opacity: layer0Opacity }}
        className="absolute inset-0 flex flex-col justify-between p-12"
      >
        <div className="flex justify-between items-start text-[10px] font-mono text-[#a82438] tracking-widest">
          <div>+ REGISTRATION CROSS // 17.3850° N, 78.4867° E</div>
          <div>HYDERABAD // ARCHIVAL ISSUE 2026 +</div>
        </div>

        {/* Giant Vertical Editorial Watermark */}
        <div className="absolute top-1/4 right-8 font-editorial font-black text-8xl md:text-9xl text-[#4a0d17]/10 rotate-90 origin-top-right tracking-tighter">
          PORTFOLIO
        </div>

        <div className="absolute top-2/3 left-6 font-editorial font-black text-8xl md:text-9xl text-[#4a0d17]/10 -rotate-90 origin-top-left tracking-tighter">
          DEVELOPER
        </div>

        <div className="flex justify-between items-end text-[10px] font-mono text-[#a82438] tracking-widest">
          <div>+ B.TECH COMPUTER SCIENCE (AI/ML) +</div>
          <div>LATIKA.DEV // 35MM SYSTEM +</div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* LAYER 1: LEFT 35MM CONTINUOUS VERTICAL FILM STRIP NEGATIVE     */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: leftFilmY }}
        className="absolute -top-40 left-1 sm:left-3 w-8 sm:w-12 h-[220vh] film-rail-vertical flex flex-col items-center py-6 gap-6 opacity-35 sm:opacity-50"
      >
        {[...Array(38)].map((_, i) => (
          <div key={`left-frame-${i}`} className="flex flex-col items-center gap-2">
            {/* Sprocket Hole */}
            <div className="w-3.5 sm:w-5 h-2.5 sm:h-3 rounded-[2px] bg-[#1c0509] border border-[#5c121f]" />
            {i % 3 === 0 && (
              <span className="text-[7px] sm:text-[8px] font-mono text-[#8a1a2e] -rotate-90 tracking-tighter my-2 whitespace-nowrap">
                KODAK 400 • {String(i + 1).padStart(2, '0')}A
              </span>
            )}
            {/* Second Sprocket Hole */}
            <div className="w-3.5 sm:w-5 h-2.5 sm:h-3 rounded-[2px] bg-[#1c0509] border border-[#5c121f]" />
          </div>
        ))}
      </motion.div>

      {/* ============================================================== */}
      {/* LAYER 2: RIGHT 35MM CONTINUOUS VERTICAL FILM STRIP NEGATIVE    */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: rightFilmY }}
        className="absolute -top-32 right-1 sm:right-3 w-8 sm:w-12 h-[220vh] film-rail-vertical flex flex-col items-center py-6 gap-6 opacity-35 sm:opacity-50"
      >
        {[...Array(38)].map((_, i) => (
          <div key={`right-frame-${i}`} className="flex flex-col items-center gap-2">
            {/* Sprocket Hole */}
            <div className="w-3.5 sm:w-5 h-2.5 sm:h-3 rounded-[2px] bg-[#1c0509] border border-[#5c121f]" />
            {i % 4 === 0 && (
              <span className="text-[7px] sm:text-[8px] font-mono text-[#a82438] rotate-90 tracking-tighter my-2 whitespace-nowrap">
                SAFETY FILM • EXP 36
              </span>
            )}
            {/* Second Sprocket Hole */}
            <div className="w-3.5 sm:w-5 h-2.5 sm:h-3 rounded-[2px] bg-[#1c0509] border border-[#5c121f]" />
          </div>
        ))}
      </motion.div>

      {/* ============================================================== */}
      {/* LAYER 3: FLOATING PARALLAX STAMPS & SCRAPBOOK ARTIFACTS        */}
      {/* ============================================================== */}
      
      {/* Floating Vintage Postage Stamp 1 (Upper right) */}
      <motion.div
        style={{ y: stamp1Y, rotate: stamp1Rotate }}
        className="absolute top-[28vh] right-16 sm:right-24 hidden md:block opacity-40 stamp-serrated"
      >
        <div className="w-24 h-28 bg-[#faf6ee] text-[#1a060a] border-2 border-dashed border-[#8a1a2e] p-2 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-center border-b border-[#ded3c1] pb-1">
            <span className="text-[8px] font-mono font-bold text-[#8a1a2e]">AIR MAIL</span>
            <span className="text-[8px] font-mono">₹ 25.00</span>
          </div>
          <div className="text-center py-1 font-editorial font-bold text-sm text-[#8a1a2e] leading-tight">
            M. S. LAXMI<br />
            <span className="text-[9px] font-sans font-normal text-[#1a060a]">HYDERABAD</span>
          </div>
          <div className="text-[7px] font-mono text-center border-t border-[#ded3c1] pt-0.5 text-[#5c121f]">
            POSTAGE VERIFIED
          </div>
        </div>
      </motion.div>

      {/* Floating Postage / Inspection Stamp 2 (Lower left) */}
      <motion.div
        style={{ y: stamp2Y, rotate: stamp2Rotate }}
        className="absolute top-[65vh] left-14 sm:left-24 hidden lg:block opacity-35"
      >
        <div className="w-24 h-24 rounded-full border-2 border-[#a82438] bg-[#1e0509] text-[#faf6ee] flex flex-col items-center justify-center p-2 text-center shadow-2xl">
          <span className="text-[7px] font-mono tracking-widest text-[#a82438]">ACADEMIC RECORD</span>
          <span className="font-editorial text-lg font-bold">8.88</span>
          <span className="text-[7px] font-mono text-[#e6b8c0]">CGPA SCORE</span>
        </div>
      </motion.div>

      {/* Floating Washi Tape Scrap */}
      <motion.div
        style={{ y: tapeScrapY }}
        className="absolute top-[80vh] right-20 w-32 h-6 tape-strip rotate-6 hidden xl:block opacity-30 pointer-events-none"
      />

      {/* Floating Plus Coordinate Crosshair */}
      <motion.div
        style={{ y: crosshairY }}
        className="absolute top-[45vh] left-1/4 text-[#a82438]/20 font-mono text-xl pointer-events-none"
      >
        +
      </motion.div>

    </div>
  );
};
