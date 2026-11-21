import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isGlowMode, setIsGlowMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = ['home', 'about', 'skills', 'projects', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  const toggleGlowMode = () => {
    setIsGlowMode(!isGlowMode);
    document.documentElement.classList.toggle('neon-boost');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020817]/85 backdrop-blur-md border-b border-[rgba(0,229,255,0.18)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-[rgba(0,229,255,0.08)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center font-bold text-lg text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all">
              {PERSONAL_INFO.initials}
            </div>
            <span className="font-bold text-lg tracking-wide text-white group-hover:text-[#00E5FF] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#00E5FF] bg-[#0A1930] border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#071426]/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions (Download CV & Theme Toggle) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A1930] border border-[#00E5FF]/35 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-all group"
            >
              <Download size={14} className="text-[#00E5FF] group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </button>

            <button
              onClick={toggleGlowMode}
              aria-label="Toggle visual theme effects"
              className="w-9 h-9 rounded-full bg-[#0A1930] border border-[#00E5FF]/30 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
              title={isGlowMode ? 'Switch to Subtle Glow' : 'Switch to High Cyber Glow'}
            >
              {isGlowMode ? <Sun size={16} className="text-[#00E5FF]" /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleGlowMode}
              aria-label="Toggle theme mode"
              className="w-9 h-9 rounded-full bg-[#0A1930] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]"
            >
              {isGlowMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-[#0A1930] border border-[#00E5FF]/30 flex items-center justify-center text-white hover:text-[#00E5FF] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071426]/95 backdrop-blur-xl border-b border-[#00E5FF]/20 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#00E5FF] bg-[#0A1930] border border-[#00E5FF]/40 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#0A1930]/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#00E5FF]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1930] border border-[#00E5FF]/40 hover:border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                <Download size={14} className="text-[#00E5FF]" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
