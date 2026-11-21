import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-10 border-t border-[#00E5FF]/10 relative z-10 bg-[#020817]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center font-bold text-sm text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              {PERSONAL_INFO.initials}
            </div>
            <span className="font-bold text-base text-white">
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs sm:text-sm text-[#94A3B8] font-mono text-center">
            &copy; 2024 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4 text-xs font-medium text-[#94A3B8]">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-[#071426] border border-[#00E5FF]/30 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
