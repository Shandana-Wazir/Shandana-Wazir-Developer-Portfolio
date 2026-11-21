import React, { useState } from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: Project | null;
  onSelectProject: (project: Project | null) => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Full Stack', 'Web App', 'AI / Full Stack', 'DevOps / Tooling'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-card rounded-3xl border border-[#00E5FF]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#00E5FF]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Selected Project Showcase</h3>
              <p className="text-xs text-[#00E5FF] font-mono">Full-Stack &bull; High Performance &bull; Enterprise UI</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-[#071426] border border-[#00E5FF]/20 text-[#94A3B8] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Selected Project Detailed Spotlight (if one was chosen) */}
        {selectedProject && (
          <div className="my-6 p-6 rounded-2xl bg-[#071426]/90 border border-[#00E5FF]/30 relative animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
                Project Spotlight // {selectedProject.name}
              </span>
              <button
                onClick={() => onSelectProject(null)}
                className="text-xs text-[#94A3B8] hover:text-white"
              >
                Close Spotlight
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#00E5FF]/20 aspect-[16/9] bg-[#020817]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <h4 className="text-xl font-bold text-white mb-2">{selectedProject.name}</h4>
                <p className="text-sm text-[#94A3B8] mb-4">{selectedProject.description}</p>

                {selectedProject.highlights && (
                  <div className="mb-4 space-y-1.5">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block">Key Engineering Highlights:</span>
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-[#94A3B8] flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#00E5FF] mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0A1930] border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all"
                  >
                    <GithubIcon size={14} />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold cyan-gradient-btn"
                  >
                    <ExternalLink size={14} />
                    <span>Live Application</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 my-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00E5FF] text-[#020817] shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'bg-[#071426] text-[#94A3B8] hover:text-white border border-[#00E5FF]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-[#00E5FF]/20 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-[#071426]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#071426]/90 text-[#00E5FF] border border-[#00E5FF]/30">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
                  {project.name}
                </h4>
                <p className="text-xs text-[#94A3B8] line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#94A3B8] border border-[#00E5FF]/10"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#00E5FF]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#00E5FF]/10 text-xs">
                <span className="text-[#00E5FF] font-semibold group-hover:underline">
                  Inspect Details &rarr;
                </span>
                <span className="text-[11px] text-[#64748B] font-mono">v1.0.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-[#00E5FF]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold cyan-border-btn"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
