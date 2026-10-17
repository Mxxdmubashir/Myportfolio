import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

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
      category: 'Document',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'projects',
      title: 'Browse Featured Projects',
      category: 'Portfolio',
      action: () => {
        onClose();
        window.location.hash = '#projects';
      }
    },
    {
      id: 'solar',
      title: 'Open 3D AR Solar System Demo',
      category: 'Demo',
      action: () => {
        onClose();
        window.location.hash = '#solarsystem';
      }
    },
    {
      id: 'telemetry',
      title: 'Open OBD-II Telemetry Dashboard',
      category: 'Automotive',
      action: () => {
        onClose();
        window.location.hash = '#telemetry';
      }
    },
    {
      id: 'whatsapp',
      title: 'Chat on WhatsApp (+91 96053 42418)',
      category: 'Contact',
      action: () => {
        onClose();
        window.open('https://wa.me/919605342418', '_blank');
      }
    },
    {
      id: 'github',
      title: 'GitHub Profile (Mxxdmubashir)',
      category: 'Link',
      action: () => {
        onClose();
        window.open('https://github.com/Mxxdmubashir', '_blank');
      }
    },
    {
      id: 'contact',
      title: 'Send a Message',
      category: 'Contact',
      action: () => {
        onClose();
        window.location.hash = '#contact';
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
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden flex flex-col">
        <div className="p-3.5 border-b border-zinc-800 flex items-center gap-2.5">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search actions (e.g. Resume, Projects, WhatsApp)..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 rounded hover:text-white"
          >
            ESC
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto p-1.5 space-y-0.5">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-zinc-500">
              No results found
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={item.action}
                className={`p-2.5 rounded-lg flex items-center justify-between cursor-pointer text-xs transition-colors ${
                  idx === selectedIndex
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-300 hover:bg-zinc-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">({item.category})</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">↵</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
