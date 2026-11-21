import React from 'react';
import { X, Download, Printer, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown or trigger simulated download
    const cvText = `# ${PERSONAL_INFO.name} - Full-Stack Developer
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location} | Phone: ${PERSONAL_INFO.phone}

## Summary
Passionate full-stack developer with 4+ years of professional experience building modern, responsive, and scalable web applications. Proficient in TypeScript, React, Next.js, Node.js, and cloud ecosystems.

## Core Technical Skills
${SKILLS.map(s => `- ${s.name}: ${s.percentage}%`).join('\n')}

## Experience
- Senior Full-Stack Engineer | TechSolutions (2022 - Present)
  - Architected high-throughput SaaS web applications using Next.js, Node.js, and MongoDB.
  - Improved core web vitals by 45% and reduced TTFB by 300ms.
- Full-Stack Developer | InnovateX Labs (2020 - 2022)
  - Built scalable REST & GraphQL APIs powering modern e-commerce and dashboard applications.

## Education
- B.S. in Computer Science | FAST-NUCES (2016 - 2020)
`;

    const blob = new Blob([cvText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Abdullah_Tariq_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-[#00E5FF]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-left">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#00E5FF]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] font-bold text-lg">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-[#00E5FF] font-mono">{PERSONAL_INFO.role} &bull; Curriculum Vitae</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print CV"
              className="p-2 rounded-xl bg-[#071426] border border-[#00E5FF]/20 text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
              title="Print Resume"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cyan-gradient-btn"
            >
              <Download size={14} />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-[#071426] border border-[#00E5FF]/20 text-[#94A3B8] hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="py-6 space-y-6 text-sm">
          
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#00E5FF] mb-2 flex items-center gap-2">
              <CheckCircle2 size={14} /> Executive Summary
            </h4>
            <p className="text-[#94A3B8] leading-relaxed">
              Full-Stack Developer with 4+ years of hands-on experience designing, developing, and deploying enterprise-grade web applications. Demonstrated track record in creating performant user interfaces with React/Next.js, scalable distributed backends with Node.js/Python, and robust database architectures.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#00E5FF] mb-3 flex items-center gap-2">
              <Briefcase size={14} /> Professional Experience
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <span className="font-bold text-white text-base">Senior Full-Stack Developer</span>
                  <span className="text-xs font-mono text-[#00E5FF]">2022 — Present</span>
                </div>
                <div className="text-xs text-[#94A3B8] mb-2">TechSolutions &bull; Peshawar, Pakistan</div>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1">
                  <li>Engineered FinTrack analytics platform handling 250k+ daily transaction calculations.</li>
                  <li>Refactored legacy codebases into modular React + Tailwind components, lowering bundle size by 38%.</li>
                  <li>Collaborated directly with product managers and UI/UX designers to translate requirements into pixel-perfect experiences.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <span className="font-bold text-white text-base">Full-Stack Software Engineer</span>
                  <span className="text-xs font-mono text-[#00E5FF]">2020 — 2022</span>
                </div>
                <div className="text-xs text-[#94A3B8] mb-2">InnovateX Labs &bull; Remote</div>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1">
                  <li>Built resilient Node.js microservices and RESTful API backends with MongoDB and Redis.</li>
                  <li>Integrated secure payment processing gateways (Stripe, PayPal) for high-conversion web apps.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#00E5FF] mb-3 flex items-center gap-2">
              <Code size={14} /> Technical Proficiencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="px-3 py-1.5 rounded-xl bg-[#071426] border border-[#00E5FF]/20 text-xs text-white flex items-center gap-2 font-mono"
                >
                  <span>{skill.name}</span>
                  <span className="text-[#00E5FF] font-semibold">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#00E5FF] mb-2 flex items-center gap-2">
              <GraduationCap size={14} /> Education & Degree
            </h4>
            <div className="p-3.5 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/10">
              <div className="font-bold text-white text-sm">Bachelor of Science in Computer Science (BSCS)</div>
              <div className="text-xs text-[#94A3B8]">National University of Computer and Emerging Sciences (FAST-NUCES) &bull; 2016 — 2020</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#00E5FF]/20 flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Verified Credentials &bull; Status: Available for Hire</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#071426] border border-[#00E5FF]/30 text-white hover:text-[#00E5FF] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
