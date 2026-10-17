import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { soundFX } from '../utils/sound';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.enabled = next;
    if (next) soundFX.playChime();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: '3D Solar System', href: '#solarsystem' },
    { name: 'Telemetry', href: '#telemetry' },
    { name: 'API Sandbox', href: '#api' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onMouseEnter={() => soundFX.playBlip()}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            MM
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
              Muhammed Mubashir
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono tracking-tight">Full-Stack Dev • AI & AR/VR</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFX.playBlip()}
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Quick Command Palette Launcher */}
          <button
            onClick={() => {
              soundFX.playBlip();
              onOpenCommandPalette();
            }}
            className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            title="Search or jump to sections (Ctrl+K)"
          >
            <Icons.Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-950 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-slate-900 border-cyan-500/30 text-cyan-400'
                : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}
            title={soundEnabled ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
          >
            <Icons.Activity className="w-3.5 h-3.5" />
          </button>

          {/* Resume Modal */}
          <button
            onClick={() => {
              soundFX.playChime();
              onOpenResume();
            }}
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Icons.FileText className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </button>
          
          <a
            href="#contact"
            onClick={() => soundFX.playChime()}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-slate-300 rounded-lg bg-slate-900 border border-slate-800"
          >
            <Icons.Terminal className="w-5 h-5 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-sm font-semibold text-white flex items-center justify-center gap-2"
            >
              <Icons.FileText className="w-4 h-4 text-cyan-400" />
              View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
