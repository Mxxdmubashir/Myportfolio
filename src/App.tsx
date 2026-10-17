import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SolarSystem3D } from './components/SolarSystem3D';
import { InteractiveOBDDemo } from './components/InteractiveOBDDemo';
import { ApiPlayground } from './components/ApiPlayground';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { Icons } from './components/Icons';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero with 3D Profile Avatar & Terminal HUD */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Featured Projects with Live Search & Modals */}
        <Projects />

        {/* 3D AR Solar System Simulator (WebGL / Three.js) */}
        <section id="solarsystem" className="py-20 relative bg-slate-950/70 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Icons.Globe className="w-3.5 h-3.5" />
                <span>Augmented & Virtual Reality</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                3D Planetary Motion & AR Simulation
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Interactive WebGL 3D simulation inspired by my Unity AR Solar System project. Drag to inspect orbits, inspect planetary telemetry, or toggle wireframe mesh mode.
              </p>
            </div>

            {/* Interactive 3D Canvas */}
            <SolarSystem3D />
          </div>
        </section>

        {/* Live Automotive Telemetry Showcase (OBD-II) */}
        <section id="telemetry" className="py-20 relative bg-slate-950/50 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Icons.Gauge className="w-3.5 h-3.5" />
                <span>Automotive Telemetry Engine</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Interactive OBD-II Telemetry Dashboard
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Bridging automotive sensor networks with responsive frontend interfaces. Test live CAN-bus telemetry, simulate high-rev sport mode, or trigger and clear DTC diagnostic fault codes.
              </p>
            </div>

            {/* Live Interactive Telemetry Widget */}
            <InteractiveOBDDemo />
          </div>
        </section>

        {/* Backend REST API Sandbox */}
        <section id="api" className="py-20 relative bg-slate-950/80 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Icons.Server className="w-3.5 h-3.5" />
                <span>REST API Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Interactive Developer API Sandbox
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                I build high-performance backend microservices with Node.js, Express, and PostgreSQL. Test live simulated requests with real HTTP response codes and latencies.
              </p>
            </div>

            {/* Live API Tester */}
            <ApiPlayground />
          </div>
        </section>

        {/* Experience & Certifications */}
        <Experience />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
};

export default App;
