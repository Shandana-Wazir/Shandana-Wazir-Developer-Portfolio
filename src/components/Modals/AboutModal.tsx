import React from 'react';
import { X, Sparkles, Terminal, Cpu, Compass, Heart, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-[#00E5FF]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#00E5FF]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">More About Shandana Wazir</h3>
              <p className="text-xs text-[#00E5FF] font-mono">Philosophy &bull; Engineering Values &bull; Story</p>
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

        {/* Content */}
        <div className="py-6 space-y-6 text-sm text-[#94A3B8] leading-relaxed">
          
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Terminal size={18} className="text-[#00E5FF]" />
              The Journey
            </h4>
            <p className="mb-3">
              I started coding during my early university days, fascinated by how a few lines of logic could render interactive, global systems accessible to anyone with a browser. Over the past 4+ years, that fascination has grown into a disciplined engineering career.
            </p>
            <p>
              I specialize in bridging the gap between design fidelity and robust architecture. I don't just write components—I build systems that withstand scale, maintain high performance, and look effortlessly modern.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <Cpu size={16} className="text-[#00E5FF]" />
                Clean & Scalable Code
              </div>
              <p className="text-xs leading-relaxed">
                Code readability, modular components, strict type-safety, and DRY principles are non-negotiable standards in every project I touch.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <Heart size={16} className="text-[#00F5D4]" />
                Pixel-Perfect Craft
              </div>
              <p className="text-xs leading-relaxed">
                Smooth 60fps animations, accessible contrast ratios, tactile micro-interactions, and zero layout shift make digital experiences unforgettable.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass size={18} className="text-[#00E5FF]" />
              Outside of the Terminal
            </h4>
            <p>
              When I'm not architecting full-stack applications or testing new UI paradigms, I enjoy reading about distributed systems, mentoring junior developers, and contributing to open-source software.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#00E5FF]/20 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold cyan-gradient-btn"
          >
            <span>Let's Discuss a Project</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-white bg-[#071426] border border-[#00E5FF]/20 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
