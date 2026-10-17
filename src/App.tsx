import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SolarSystem3D } from './components/SolarSystem3D';
import { InteractiveOBDDemo } from './components/InteractiveOBDDemo';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

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
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-200 selection:text-zinc-900">
      {/* Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* 3D AR Solar System Demo */}
        <section id="solarsystem" className="py-20 border-b border-zinc-100 bg-zinc-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">3D Simulation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
                Unity AR Solar System (3D Port)
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Interactive WebGL model demonstrating planetary orbits and spatial scale from my academic AR project.
              </p>
            </div>

            <SolarSystem3D />
          </div>
        </section>

        {/* OBD-II Telemetry Dashboard */}
        <section id="telemetry" className="py-20 border-b border-zinc-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Automotive Diagnostics</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
                OBD-II Telemetry Reader Concept
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                An interactive interface concept for parsing vehicle speed, RPM, and diagnostic trouble codes (DTCs).
              </p>
            </div>

            <InteractiveOBDDemo />
          </div>
        </section>

        {/* Experience & Education */}
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

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
};

export default App;
