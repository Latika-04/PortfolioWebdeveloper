import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Code2, Award, Sparkles } from 'lucide-react';
import { quickStats } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
      default:
        return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="stats" className="py-8 bg-[#090d16] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickStats.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="group relative p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all" />

              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {getIcon(stat.iconName)}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/40 px-2 py-0.5 rounded border border-slate-800">
                  Verified
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
