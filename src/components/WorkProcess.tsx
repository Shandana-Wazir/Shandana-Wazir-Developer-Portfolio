import React from 'react';
import { Search, FileText, PenTool, Code, ShieldCheck, Rocket, GitBranch } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search size={22} />;
      case 'FileText':
        return <FileText size={22} />;
      case 'PenTool':
        return <PenTool size={22} />;
      case 'Code':
        return <Code size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'Rocket':
        return <Rocket size={22} />;
      default:
        return <Code size={22} />;
    }
  };

  return (
    <section id="process" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <GitBranch size={20} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">My Work Process</h2>
            <p className="text-xs sm:text-sm text-[#94A3B8]">A systematic, disciplined path from initial vision to deployment</p>
          </div>
        </div>

        {/* Process Card Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-[#00E5FF]/20">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Desktop Horizontal Timeline (Visible on lg screens) */}
          <div className="hidden lg:block relative py-6">
            
            {/* Glowing Horizontal Connector Line */}
            <div className="absolute top-[46px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#00E5FF]/30 via-[#00F5D4]/60 to-[#00E5FF]/30 shadow-[0_0_12px_rgba(0,229,255,0.4)] z-0" />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {WORK_PROCESS_STEPS.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  
                  {/* Glowing Node Button / Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#0A1930] border-2 border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] group-hover:scale-110 transition-all duration-300 relative shadow-[0_0_12px_rgba(0,229,255,0.25)]">
                    {getStepIcon(step.iconName)}
                  </div>

                  {/* Step Number */}
                  <div className="mt-5 text-xs font-mono font-bold text-[#00E5FF] tracking-wider">
                    {step.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#00E5FF] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed mt-2 max-w-[150px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Timeline (Visible on < lg screens) */}
          <div className="block lg:hidden relative pl-6 sm:pl-8 space-y-8">
            
            {/* Vertical Glowing Connector Line */}
            <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-[2px] bg-gradient-to-b from-[#00E5FF]/40 via-[#00F5D4]/70 to-[#00E5FF]/40 shadow-[0_0_10px_rgba(0,229,255,0.4)]" />

            {WORK_PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative flex items-start gap-4 sm:gap-6 group">
                
                {/* Node Circle on Line */}
                <div className="absolute -left-[27px] sm:-left-[31px] w-12 h-12 rounded-full bg-[#0A1930] border-2 border-[#00E5FF]/50 flex items-center justify-center text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.3)] group-hover:border-[#00E5FF] transition-all">
                  {getStepIcon(step.iconName)}
                </div>

                {/* Content */}
                <div className="pl-6 sm:pl-8">
                  <span className="text-xs font-mono font-bold text-[#00E5FF] tracking-wider">
                    STEP {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-[#00E5FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1 max-w-md">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
