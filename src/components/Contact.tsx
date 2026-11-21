import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Sparkles, CheckCircle, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00E5FF', '#00F5D4', '#ffffff', '#38bdf8']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Glass Container matching Reference Design */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#00E5FF]/25 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Heading, Pitch & CTA (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center gap-2.5 text-[#00E5FF] mb-4">
                  <Send size={20} />
                  <span className="text-xs uppercase tracking-widest font-mono font-semibold">Get in Touch</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Let's Build Something{' '}
                  <span className="cyan-gradient-text">Great</span>
                </h2>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                  Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs cyan-gradient-btn"
                >
                  <span>Direct Email</span>
                  <Send size={14} />
                </a>
              </div>

              {/* Digital Sphere Wireframe Graphic Illustration (Lower Left) */}
              <div className="relative mt-8 lg:mt-0 pt-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-[#00E5FF]/30 relative flex items-center justify-center animate-spin-slow">
                  <div className="w-24 h-24 rounded-full border border-[#00F5D4]/40 animate-pulse-glow" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-transparent blur-sm" />
                </div>
                <div className="text-[10px] font-mono text-[#00E5FF]/60 mt-2">SECURE_CHANNEL // ONLINE</div>
              </div>

            </div>

            {/* Middle Column: Contact Info Cards (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-4">
              
              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                    <Mail size={14} className="text-[#00E5FF]" />
                    <span>Email</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-medium text-white group-hover:text-[#00E5FF] transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                    <Phone size={14} className="text-[#00E5FF]" />
                    <span>Phone</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs sm:text-sm font-medium text-white group-hover:text-[#00E5FF] transition-colors block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 transition-all">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                  <MapPin size={14} className="text-[#00E5FF]" />
                  <span>Location</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>

              {/* Availability Status Card */}
              <div className="p-3.5 rounded-2xl bg-[#071426]/70 border border-[#00E5FF]/15">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot-green"></span>
                  <span className="text-xs font-medium text-emerald-400">{PERSONAL_INFO.availabilityStatus}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#071426]/90 border border-[#00E5FF]/40 text-center flex flex-col items-center justify-center animate-fadeIn shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                  <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-[#94A3B8] mb-6 max-w-sm">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold cyan-border-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#071426]/90 border text-white text-sm placeholder-[#64748B] focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500/70 focus:border-rose-500'
                            : 'border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#071426]/90 border text-white text-sm placeholder-[#64748B] focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/70 focus:border-rose-500'
                            : 'border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#071426]/90 border text-white text-sm placeholder-[#64748B] focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#071426]/90 border text-white text-sm placeholder-[#64748B] focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Glowing Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm cyan-gradient-btn disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-[#020817]" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
