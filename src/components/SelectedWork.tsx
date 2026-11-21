import React from 'react';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onViewAllProjects: () => void;
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onViewAllProjects, onSelectProject }) => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Layers size={20} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Selected Work</h2>
              <p className="text-xs sm:text-sm text-[#94A3B8]">Featured client deliverables & scalable web applications</p>
            </div>
          </div>

          <button
            onClick={onViewAllProjects}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-[#00F5D4] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-[#00E5FF]/20"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071426]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback gradient placeholder if needed
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/fintrack.png';
                    }}
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930] via-transparent to-transparent opacity-80" />

                  {/* Category Badge (Top Right) */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#00E5FF] bg-[#071426]/90 border border-[#00E5FF]/30 backdrop-blur-md shadow-[0_0_12px_rgba(0,229,255,0.25)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors flex items-center justify-between">
                    <span>{project.name}</span>
                  </h3>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-[#94A3B8] bg-[#071426] border border-[#00E5FF]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#00E5FF]/10 mt-auto">
                <div className="flex items-center gap-2 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub source code for ${project.name}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#94A3B8] hover:text-white bg-[#071426] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Live demo for ${project.name}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#00E5FF] hover:text-white bg-[#071426] border border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-9 h-9 rounded-full bg-[#071426] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#020817] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all mt-4"
                  title="View Details"
                  aria-label="View project details"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
