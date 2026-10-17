import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">About Me</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
            Software development, car diagnostics & 3D projects
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            <p>
              I am a software developer at <strong className="text-zinc-200">Ziqx Creative Clique LLP</strong>, located at DBI Skill Park in Markaz Knowledge City, Kaithappoyil, Kerala. I build full-stack web applications, business dashboards, and REST APIs with secure authentication.
            </p>

            <p>
              Alongside my developer work, I am pursuing my <strong className="text-zinc-200">Bachelor of Computer Applications (BCA)</strong> at Srinivas University, with specialized coursework in Artificial Intelligence, Virtual Reality, Augmented Reality, and Cloud Computing.
            </p>

            <p>
              I'm particularly drawn to <strong className="text-zinc-200">automotive software</strong>—building OBD-II telemetry dashboards that can read CAN-bus signals, display live engine speeds and temperatures, and diagnose fault codes. I also enjoy creating interactive 3D simulations in Unity.
            </p>

            <p className="pt-2 text-xs text-zinc-500 font-mono">
              Core tools: React • TypeScript • Node.js • Express • PostgreSQL • SQL • Unity • Git
            </p>
          </div>

          {/* Clean Quick Facts Panel */}
          <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4 text-xs">
            <h3 className="text-sm font-semibold text-zinc-200 pb-2 border-b border-zinc-800">
              Quick Facts
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-zinc-500 block">Based in</span>
                <span className="text-zinc-200 font-medium">Calicut / Markaz Knowledge City, Kerala</span>
              </div>

              <div>
                <span className="text-zinc-500 block">Current Workplace</span>
                <span className="text-zinc-200 font-medium">Ziqx Creative Clique LLP (DBI Skill Park)</span>
              </div>

              <div>
                <span className="text-zinc-500 block">Degree & Major</span>
                <span className="text-zinc-200 font-medium">BCA in AI, VR & AR — Srinivas University (2024–2027)</span>
              </div>

              <div>
                <span className="text-zinc-500 block">Certification</span>
                <span className="text-zinc-200 font-medium">freeCodeCamp JavaScript Algorithms & Data Structures</span>
              </div>

              <div>
                <span className="text-zinc-500 block">Interests</span>
                <span className="text-zinc-200 font-medium">Automotive Telematics (OBD-II), Cloud Kitchens, Unity 3D</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
