import React, { useEffect } from 'react';
import { X, Sparkles, Terminal, Film } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#7d1a2c', '#faf6ee', '#a82438', '#f3ece0', '#4a0e17'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="easter-egg-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        id="easter-egg-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#25070d] border-2 border-[#8a1a2e] rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-5 paper-card"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 tape-strip rotate-1 pointer-events-none" />

        <button
          id="close-easter-egg-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#170508] text-[#c49a9e] hover:text-white border border-[#3d0d16]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-[#380b14] border border-[#8a1a2e] flex items-center justify-center text-[#faf6ee] mx-auto shadow-inner">
          <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#a82438] font-bold">
            Archival Easter Egg // Issue #26
          </span>
          <h3 className="text-2xl font-black font-editorial text-[#faf6ee] tracking-tight mt-1">
            Hey 👀 You found the secret cut.
          </h3>
        </div>

        <p className="text-sm font-sans text-[#e6dcce] leading-relaxed">
          Thanks for exploring the portfolio! As an aspiring Web Developer, I take pride in crafting deliberate typography, smooth responsive interactions, and accessible code structure.
        </p>

        <div className="p-3.5 rounded-xl bg-[#170508] border border-[#3d0d16] text-xs font-mono text-[#faf6ee]">
          <code>&gt; console.log("Ready to build great software together 🚀");</code>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-[#faf6ee] hover:bg-[#ffffff] text-[#1a060a] font-bold text-xs font-mono transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
