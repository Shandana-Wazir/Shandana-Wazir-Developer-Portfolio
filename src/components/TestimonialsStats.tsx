import React, { useState } from 'react';
import { Quote, BarChart2, Star, ChevronLeft, ChevronRight, Users, Layers, Briefcase, Award } from 'lucide-react';
import { TESTIMONIALS, STATS } from '../data/portfolioData';

export const TestimonialsStats: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentTestimonialIndex];

  const getStatIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Users':
        return <Users size={16} className="text-[#00E5FF]" />;
      case 'Layers':
        return <Layers size={16} className="text-[#00E5FF]" />;
      case 'Briefcase':
        return <Briefcase size={16} className="text-[#00E5FF]" />;
      case 'Star':
        return <Star size={16} className="text-[#00E5FF]" />;
      default:
        return <Award size={16} className="text-[#00E5FF]" />;
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: What Clients Say */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#00E5FF]/20 relative overflow-hidden">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <Quote size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">What Clients Say</h2>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-8 h-8 rounded-full bg-[#071426] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-8 h-8 rounded-full bg-[#071426] border border-[#00E5FF]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Testimonial Quote Body */}
              <div className="min-h-[140px] flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4 text-[#00E5FF]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#00E5FF" className="text-[#00E5FF]" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-white font-normal leading-relaxed italic mb-6">
                  "{current.content}"
                </p>
              </div>

              {/* Client Info with Avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#00E5FF]/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#071426] border-2 border-[#00E5FF]/40 shadow-[0_0_12px_rgba(0,229,255,0.3)] flex-shrink-0">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/hamza-crop.png';
                    }}
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-base">
                    — {current.name}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">
                    {current.role}, <span className="text-[#00E5FF]">{current.company}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonialIndex
                      ? 'w-6 bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]'
                      : 'w-2 bg-[#94A3B8]/30 hover:bg-[#94A3B8]/60'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right Card: By The Numbers */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#00E5FF]/20 relative overflow-hidden">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#071426] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <BarChart2 size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">By The Numbers</h2>
              </div>

              {/* 4 Statistic Cards (2x2 Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 sm:p-6 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all flex flex-col items-start justify-center group"
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[#0A1930] flex items-center justify-center border border-[#00E5FF]/20">
                        {getStatIcon(stat.iconName)}
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 group-hover:bg-[#00E5FF] transition-colors"></span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00F5D4] drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-[#94A3B8] mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight Badge */}
            <div className="mt-8 pt-4 border-t border-[#00E5FF]/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="text-[#00E5FF] font-mono">100% On-Time Delivery</span>
              <span className="font-mono">Clean Architecture</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
