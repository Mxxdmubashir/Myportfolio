import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';
import { ProfileAvatar } from './ProfileAvatar';
import { soundFX } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 to-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">
                Software Developer @ <strong className="text-cyan-400">Ziqx Creative Clique LLP</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Muhammed Mubashir</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Full-Stack Developer <span className="text-cyan-400">&</span> BCA in AI, VR & AR
              </p>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              I build modern, responsive web applications, automotive telemetry dashboards, and robust REST APIs with <strong className="text-slate-200">React, TypeScript, Node.js, and PostgreSQL</strong>. Leveraging AI prompting and deep computer science fundamentals to deliver real-world software faster.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <Icons.ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer hover:border-slate-600"
              >
                <Icons.FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Icons.MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Icons.Github className="w-4 h-4" />
                <span>github.com/Mxxdmubashir</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Icons.Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Icons.Phone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Profile Avatar & Code Terminal */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
            {/* 3D Profile Photo & Avatar Space */}
            <ProfileAvatar />

            {/* Code Terminal / Developer HUD Card */}
            <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden relative hover:border-cyan-500/40 transition-all">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Icons.Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>mubashir-profile.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  v2.4 (Active)
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <div className="text-slate-500">// Developer Profile & Core Specializations</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{'}
                </div>
                
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">currentRole</span>: <span className="text-emerald-300">"Software Developer"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">company</span>: <span className="text-emerald-300">"Ziqx Creative Clique LLP"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">education</span>: <span className="text-emerald-300">"BCA in AI, VR/AR & Cloud"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">university</span>: <span className="text-emerald-300">"Srinivas University"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">coreTech</span>: [
                    <span className="text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-300">"TypeScript"</span>,{' '}
                    <span className="text-amber-300">"Node.js"</span>,{' '}
                    <span className="text-amber-300">"PostgreSQL"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-cyan-400">interests</span>: [
                    <span className="text-amber-300">"Automotive Software"</span>,{' '}
                    <span className="text-amber-300">"OBD-II Telemetry"</span>,{' '}
                    <span className="text-amber-300">"Unity AR"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-cyan-400">accelerator</span>: <span className="text-emerald-300">"AI Prompting & Modern Tooling"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">openForOpportunities</span>: <span className="text-purple-400">true</span>
                  </div>
                </div>

                <div>{'};'}</div>
                
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="text-slate-400">Location: <strong className="text-slate-200">Kerala, India</strong></span>
                  <span className="text-cyan-400 font-semibold">Ready to ship code 🚀</span>
                </div>
              </div>

              {/* Quick stats ribbon */}
              <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 bg-slate-950/60 p-3 text-center">
                <div>
                  <div className="text-lg font-bold text-cyan-400">7+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Projects</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-teal-400">5+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Certs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Dedication</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

