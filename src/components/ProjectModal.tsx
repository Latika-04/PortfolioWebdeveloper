import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Code2, Layers, Cpu, Activity, ShieldAlert, Monitor } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="project-detail-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0b101d] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              {project.type === 'frontend' && <Monitor className="w-5 h-5" />}
              {project.type === 'ai-ml' && <Activity className="w-5 h-5" />}
              {project.type === 'cv' && <ShieldAlert className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                Project Details
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Contributions */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Contributions &amp; Implementation
            </h4>
            <div className="space-y-3">
              {project.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {project.stats.map((stat, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Source repository on GitHub
          </span>

          <a
            id="modal-github-link-btn"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
