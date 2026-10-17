import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { soundFX } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: 'resume',
      title: 'View & Print Resume',
      category: 'Navigation',
      icon: 'FileText',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'telemetry',
      title: 'Open OBD-II Telemetry Simulator',
      category: 'Simulators',
      icon: 'Gauge',
      action: () => {
        onClose();
        window.location.hash = '#telemetry';
      }
    },
    {
      id: 'solar',
      title: 'Explore 3D AR Solar System',
      category: 'Simulators',
      icon: 'Globe',
      action: () => {
        onClose();
        window.location.hash = '#solarsystem';
      }
    },
    {
      id: 'pepito',
      title: 'View Pepito Cloud Kitchen Project',
      category: 'Projects',
      icon: 'Utensils',
      action: () => {
        onClose();
        window.location.hash = '#projects';
      }
    },
    {
      id: 'whatsapp',
      title: 'Chat Instantly on WhatsApp (+91 96053 42418)',
      category: 'Contact',
      icon: 'MessageCircle',
      action: () => {
        onClose();
        window.open('https://wa.me/919605342418', '_blank');
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile (Mxxdmubashir)',
      category: 'Social',
      icon: 'Github',
      action: () => {
        onClose();
        window.open('https://github.com/Mxxdmubashir', '_blank');
      }
    },
    {
      id: 'contact',
      title: 'Jump to Contact Form',
      category: 'Contact',
      icon: 'Mail',
      action: () => {
        onClose();
        window.location.hash = '#contact';
      }
    },
    {
      id: 'skills',
      title: 'Browse Technical Skills Matrix',
      category: 'Navigation',
      icon: 'Code',
      action: () => {
        onClose();
        window.location.hash = '#skills';
      }
    }
  ];

  const filtered = actions.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
        soundFX.playBlip();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
        soundFX.playBlip();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          soundFX.playChime();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Icons.Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. Telemetry, Resume, Pepito)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 text-[11px] font-mono text-slate-400 bg-slate-800 rounded hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500">
              No matching actions found
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  item.action();
                  soundFX.playChime();
                }}
                className={`p-3 rounded-xl flex items-center justify-between cursor-pointer text-xs transition-colors ${
                  idx === selectedIndex
                    ? 'bg-cyan-500/10 border border-cyan-500/30 text-white'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${idx === selectedIndex ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    <Icons.ChevronRight className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{item.category}</div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500">Jump ↵</div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>↑↓ Navigate</span>
          <span>↵ Execute</span>
          <span>ESC to Dismiss</span>
        </div>
      </div>
    </div>
  );
};

