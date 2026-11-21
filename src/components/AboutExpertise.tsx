import React, { useState, useEffect, useRef } from 'react';
import { User, MapPin, Mail, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../data/portfolioData';

interface AboutExpertiseProps {
  onMoreAboutMe: () => void;
}

export const AboutExpertise: React.FC<AboutExpertiseProps> = ({ onMoreAboutMe }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 relative">
      <div id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: About Me */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top Cyan Accent Dot */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E5FF]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <User size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
              </div>

              {/* Description */}
              <p className="text-[#94A3B8] leading-relaxed mb-8 text-base">
                {PERSONAL_INFO.aboutMeText}
              </p>

              {/* Profile Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Name */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#071426]/60 border border-[#00E5FF]/10">
                  <div className="w-9 h-9 rounded-xl bg-[#0A1930] flex items-center justify-center text-[#94A3B8]">
                    <User size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold tracking-wider">Name</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#071426]/60 border border-[#00E5FF]/10">
                  <div className="w-9 h-9 rounded-xl bg-[#0A1930] flex items-center justify-center text-[#94A3B8]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold tracking-wider">Location</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#071426]/60 border border-[#00E5FF]/10">
                  <div className="w-9 h-9 rounded-xl bg-[#0A1930] flex items-center justify-center text-[#94A3B8]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold tracking-wider">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#00E5FF] transition-colors truncate block max-w-[140px] sm:max-w-[170px]"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#071426]/60 border border-[#00E5FF]/10">
                  <div className="w-9 h-9 rounded-xl bg-[#0A1930] flex items-center justify-center text-emerald-400">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold tracking-wider">Availability</div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot-green"></span>
                      <span className="text-sm font-semibold text-emerald-400">{PERSONAL_INFO.availability}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div>
              <button
                onClick={onMoreAboutMe}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs cyan-border-btn group"
              >
                <span>More About Me</span>
                <ArrowRight size={14} className="text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Card: My Expertise */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F5D4]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <Code2 size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">My Expertise</h2>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                {SKILLS.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="font-mono font-semibold text-[#00E5FF]">{skill.percentage}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2.5 w-full bg-[#071426] rounded-full overflow-hidden p-0.5 border border-[#00E5FF]/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00F5D4] shadow-[0_0_12px_rgba(0,229,255,0.6)] transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${index * 120}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Note */}
            <div className="mt-8 pt-4 border-t border-[#00E5FF]/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="font-mono text-[11px] text-[#00E5FF]">System.Performance &gt; 98.6%</span>
              <span className="font-mono text-[11px]">Modern Stacks & Best Practices</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
