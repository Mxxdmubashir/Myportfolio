import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web App',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Client'}: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nNeed: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hi Mubashir, I came across your portfolio.\nName: ${formData.name || 'Guest'}\nNeed: ${formData.service}\n${formData.message ? `Message: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/919605342418?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Icons.Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Available for software developer internships, full-time engineering roles, and custom web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white">Direct Contacts</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icons.Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <div className="text-sm font-semibold truncate text-white">{personalInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icons.Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & Mobile</div>
                    <div className="text-sm font-semibold text-white">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icons.MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">WhatsApp Instant Chat</div>
                    <div className="text-sm font-semibold text-emerald-400">+91 96053 42418 (Direct)</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icons.Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white">github.com/Mxxdmubashir</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Icons.MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Current Office & Base</div>
                    <div className="text-xs text-slate-200 leading-snug">
                      DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Kerala
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="text-xs text-emerald-300">
                <strong>Actively Available:</strong> Open for Software Developer internships, client projects, and engineering opportunities.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below to send an email inquiry or initiate a direct chat via WhatsApp.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! Your default email client was opened. You can also message me on WhatsApp for immediate response.</span>
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Need / Service */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      What do you need?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm outline-none transition-all"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="Software Developer Internship / Role">Software Developer Hiring / Internship</option>
                      <option value="Automotive / OBD Dashboard">Automotive Dashboard / Telemetry</option>
                      <option value="REST API & Backend Development">REST API & Backend Architecture</option>
                      <option value="Consulting / Freelance Project">Consulting / Freelance Project</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or open role..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Icons.Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-400 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Icons.MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

