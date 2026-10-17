import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: '3D Solar System', href: '#solarsystem' },
    { name: 'Telemetry', href: '#telemetry' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 text-zinc-100 hover:text-white transition-colors">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-bold text-xs text-zinc-100">
            MM
          </div>
          <span className="text-sm font-semibold tracking-tight">Muhammed Mubashir</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCommandPalette}
            className="px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-2 transition-all cursor-pointer"
            title="Search (Ctrl+K)"
          >
            <Icons.Terminal className="w-3.5 h-3.5" />
            <kbd className="px-1.5 py-0.2 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400">
              Ctrl+K
            </kbd>
          </button>

          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-200 hover:text-white transition-all cursor-pointer"
          >
            Resume
          </button>

          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-1.5 text-zinc-400 rounded-lg bg-zinc-900 border border-zinc-800"
          >
            <Icons.Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
          >
            {mobileMenuOpen ? <Icons.X className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-zinc-950 border-b border-zinc-800 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-zinc-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-200 font-medium"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-lg bg-zinc-100 text-zinc-950 text-xs font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
