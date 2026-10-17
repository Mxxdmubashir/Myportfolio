import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 py-10 bg-zinc-950 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-zinc-300 font-medium">{personalInfo.name}</span> — Full-Stack Developer
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Ziqx Creative Clique LLP • DBI Skill Park, Markaz Knowledge City
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-zinc-200 transition-colors cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
