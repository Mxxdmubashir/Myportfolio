import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Icons.Layout,
      title: "Full-Stack Web Engineering",
      description: "Developing scalable, type-safe web applications and dashboards using React, TypeScript, Node.js, and PostgreSQL with robust authentication.",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: Icons.Gauge,
      title: "Automotive Telemetry & OBD-II",
      description: "Passionate about automotive software, telemetry decoding, CAN-bus communication, and translating vehicle diagnostics into actionable UX.",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: Icons.Layers,
      title: "Augmented Reality & 3D (Unity)",
      description: "Building interactive spatial applications like the AR Solar System, configuring 3D scenes, animations, and deploying optimized mobile APKs.",
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Icons.Sparkles,
      title: "AI-Augmented Development",
      description: "Harnessing structured AI prompting workflows and modern developer tools to prototype faster, debug meticulously, and write comprehensive docs.",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Icons.UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Web Applications, Automotive Tech & Immersive Computing
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Software Developer based at DBI Skill Park, Markaz Knowledge City. Combining solid computer science foundations with modern frameworks and curiosity.
          </p>
        </div>

        {/* Narrative & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Story */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              My Journey & Background
            </h3>
            
            <p>
              I am a software developer at <strong className="text-white">Ziqx Creative Clique LLP</strong> (located at DBI Skill Park, Markaz Knowledge City, Kaithappoyil). Concurrently, I am completing my <strong className="text-white">Bachelor of Computer Applications (BCA)</strong> at Srinivas University Institute of Computer Science and Information Science, specializing in <strong className="text-cyan-300">Artificial Intelligence, Virtual Reality, Augmented Reality, and Cloud Computing</strong>.
            </p>
            
            <p>
              I engineer end-to-end web applications, custom management dashboards, and high-throughput REST APIs with secure authentication. I believe in writing readable, maintainable code backed by strong fundamentals in <strong className="text-white">Java, C, C++, and SQL</strong>.
            </p>

            <p>
              Beyond traditional web stacks, I am deeply fascinated by <strong className="text-amber-300">automotive software</strong> and vehicle telematics—building OBD-II diagnostic dashboards that decode vehicle parameters into real-time visual telemetry. I actively explore AI prompting paradigms to amplify engineering productivity and ship reliable software.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                📍 Calicut / Kaithappoyil, Kerala
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                🎓 Srinivas University (2024 – 2027)
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                💼 Ziqx Creative Clique LLP
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Icons.Sparkles className="w-4 h-4" />
                <span>Career Objective</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">
                Committed to Real-World Product Impact
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed italic bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Professional Values</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <Icons.CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Coding Standards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Agreed Timelines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Troubleshooting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Docs</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

