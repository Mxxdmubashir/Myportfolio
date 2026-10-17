import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 py-10 bg-zinc-50 text-xs text-zinc-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-zinc-900 font-semibold">{personalInfo.name}</span> — Full-Stack Developer
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Ziqx Creative Clique LLP • DBI Skill Park, Markaz Knowledge City
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
