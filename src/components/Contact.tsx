import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    need: 'Web Application',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name || 'Visitor'}: ${formData.need}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nNeed: ${formData.need}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Mubashir,\nName: ${formData.name || 'Friend'}\nNeed: ${formData.need}\n${formData.message ? `Message: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/919605342418?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Contact</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
            Let's work together
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Have a project, freelance inquiry, or an internship opportunity? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100/70 text-zinc-800 transition-colors shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-2xs">
                <Icons.Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="text-[11px] text-zinc-500 block">Email</span>
                <span className="text-xs font-medium text-zinc-900 truncate">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100/70 text-zinc-800 transition-colors shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 shadow-2xs">
                <Icons.MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-zinc-500 block">WhatsApp</span>
                <span className="text-xs font-medium text-zinc-900">+91 96053 42418 (Direct)</span>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100/70 text-zinc-800 transition-colors shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-2xs">
                <Icons.Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-zinc-500 block">GitHub</span>
                <span className="text-xs font-medium text-zinc-900">github.com/Mxxdmubashir</span>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/70 text-zinc-600 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-2xs">
                <Icons.MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-zinc-500 block">Location</span>
                <span className="text-xs text-zinc-800 font-medium">DBI Skill Park, Markaz Knowledge City, Kerala</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Send a message</h3>

            {sent && (
              <div className="mb-4 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-700">
                Your email client was opened. You can also message directly on WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-600 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-medium mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-600 font-medium mb-1">What do you need?</label>
                <select
                  value={formData.need}
                  onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none"
                >
                  <option value="Web Application">Web Application</option>
                  <option value="Internship / Full-time Role">Internship or Developer Role</option>
                  <option value="Car Telemetry / OBD Dashboard">Car Telemetry / OBD Dashboard</option>
                  <option value="Backend REST API">Backend REST API</option>
                  <option value="Freelance Project">Freelance Project</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-600 font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or role..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Send via Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-4 py-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-xs transition-colors cursor-pointer shadow-2xs"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
