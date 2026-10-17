import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-white text-base">
                MM
              </div>
              <span className="text-base font-bold text-white tracking-wide">Muhammed Mubashir</span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer engineering web applications, automotive telemetry systems, and AR/VR experiences. Based in Kerala, India.
            </p>

            <div className="text-xs font-mono text-slate-500">
              © {new Date().getFullYear()} Muhammed Mubashir. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#telemetry" className="hover:text-cyan-400 transition-colors">OBD-II Telemetry</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold mb-3">Connect</h4>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white transition-all"
                  title="GitHub"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all"
                  title="WhatsApp"
                >
                  <Icons.MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white transition-all"
                  title="Email"
                >
                  <Icons.Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white transition-all"
                  title="Phone"
                >
                  <Icons.Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 font-mono transition-colors cursor-pointer"
              >
                <span>Back to top ↑</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>Built with React 19, TypeScript, Tailwind CSS & Vite</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DBI Skill Park, Markaz Knowledge City, Kerala</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

