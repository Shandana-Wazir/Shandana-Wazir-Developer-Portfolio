import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExpertise } from './components/AboutExpertise';
import { SelectedWork } from './components/SelectedWork';
import { WorkProcess } from './components/WorkProcess';
import { TestimonialsStats } from './components/TestimonialsStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/Modals/ResumeModal';
import { AboutModal } from './components/Modals/AboutModal';
import { ProjectsModal } from './components/Modals/ProjectsModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenProjectModalWithProject = (project: Project) => {
    setSelectedProject(project);
    setIsProjectsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020817] text-[#F8FAFC] relative selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] font-sans">
      
      {/* Background Cybernetic Grid & Ambient Light Orbs */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0 opacity-70" />
      
      {/* Top Ambient Light Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#00E5FF]/10 via-[#00F5D4]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Sticky Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Hero Section */}
        <main className="flex-grow">
          <Hero
            onLetsTalk={() => scrollToSection('contact')}
            onViewWork={() => scrollToSection('projects')}
          />

          {/* About Me & My Expertise */}
          <AboutExpertise
            onMoreAboutMe={() => setIsAboutModalOpen(true)}
          />

          {/* Selected Work / Projects */}
          <SelectedWork
            onViewAllProjects={() => {
              setSelectedProject(null);
              setIsProjectsModalOpen(true);
            }}
            onSelectProject={handleOpenProjectModalWithProject}
          />

          {/* My Work Process */}
          <WorkProcess />

          {/* Testimonials & Statistics */}
          <TestimonialsStats />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onContactClick={() => scrollToSection('contact')}
      />

      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => {
          setIsProjectsModalOpen(false);
          setSelectedProject(null);
        }}
        selectedProject={selectedProject}
        onSelectProject={(project) => setSelectedProject(project)}
      />

    </div>
  );
};

export default App;
