import React from 'react';
import { ArrowRight, MessageSquare, Mail, Briefcase, Layers, Star, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import shandanaProfile from '../assets/shandana-profile.png';

interface HeroProps {
  onLetsTalk: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLetsTalk, onViewWork }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 md:right-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#00F5D4]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1930]/80 border border-[#00E5FF]/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] pulse-dot-cyan"></span>
              <span className="text-xs font-medium tracking-wider uppercase text-[#00E5FF]">
                {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              I build digital{' '}
              <span className="cyan-gradient-text drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                {PERSONAL_INFO.highlightWord}
              </span>{' '}
              that matter.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onViewWork}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm cyan-gradient-btn"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onLetsTalk}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm cyan-border-btn"
              >
                <span>Let's Talk</span>
                <MessageSquare size={16} className="text-[#00E5FF]" />
              </button>
            </div>

            {/* Social Media Row */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter profile"
                className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all"
              >
                <TwitterIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Direct Email"
                className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Portrait & Futuristic HUD Elements (col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Ambient Circular Glow Background */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#00E5FF]/25 via-[#00F5D4]/15 to-transparent blur-2xl -z-10 animate-pulse-glow" />

            {/* Futuristic HUD Concentric Rings */}
            <div className="absolute w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] rounded-full border border-[#00E5FF]/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full border border-dashed border-[#00F5D4]/25 animate-spin-reverse pointer-events-none" />

            {/* Central Portrait Container */}
            <div className="relative w-[300px] h-[360px] sm:w-[340px] sm:h-[420px] rounded-3xl overflow-hidden glass-card border border-[#00E5FF]/30 shadow-[0_0_40px_rgba(0,229,255,0.25)] group">
              <img
                src={shandanaProfile}
                alt="Developer Portrait"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Cyan Bottom Rim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Stat Card 1: 4+ Years Experience (Top Right) */}
            <div className="absolute -top-4 -right-2 sm:-right-6 glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 animate-float-slow shadow-[0_8px_25px_rgba(0,229,255,0.18)] border border-[#00E5FF]/30 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Briefcase size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white leading-none">4+</div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-medium">Years of Experience</div>
              </div>
            </div>

            {/* Floating Stat Card 2: 20+ Projects Completed (Middle Right) */}
            <div className="absolute top-28 -right-4 sm:-right-8 glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 animate-float-delayed shadow-[0_8px_25px_rgba(0,229,255,0.18)] border border-[#00E5FF]/30 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Layers size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white leading-none">20+</div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-medium">Projects Completed</div>
              </div>
            </div>

            {/* Floating Stat Card 3: 99% Client Satisfaction (Lower Right) */}
            <div className="absolute top-60 -right-2 sm:-right-6 glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 animate-float-slow shadow-[0_8px_25px_rgba(0,229,255,0.18)] border border-[#00E5FF]/30 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Star size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white leading-none">99%</div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Floating Glassmorphism Badge: Clean Code / Scalable / Pixel Perfect (Chest Area) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 border border-[#00E5FF]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-20 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Code2 size={18} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-semibold text-white tracking-wide">Clean Code</div>
                <div className="text-[10px] text-[#00E5FF] tracking-wider">Scalable Solutions</div>
                <div className="text-[10px] text-[#94A3B8]">Pixel Perfect</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
