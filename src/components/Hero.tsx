import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icons } from './Icons';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Natural Human Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Software Developer at <strong className="text-zinc-100 font-medium">Ziqx Creative Clique</strong></span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight leading-tight">
                Hey, I'm Muhammed Mubashir.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 font-normal">
                Full-stack developer building clean web apps, automotive dashboards, and APIs.
              </p>
            </div>

            {/* Human Bio */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              I work with <strong className="text-zinc-200">React, TypeScript, Node.js, and PostgreSQL</strong>. Currently building client dashboards and web platforms at Ziqx Creative Clique LLP (Markaz Knowledge City), while finishing my BCA at Srinivas University.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all"
              >
                View Projects
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Icons.FileText className="w-4 h-4 text-zinc-400" />
                <span>Resume (PDF)</span>
              </button>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Icons.MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Contacts Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-zinc-500">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Icons.Github className="w-4 h-4" />
                <span>github.com/Mxxdmubashir</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Icons.Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Icons.MapPin className="w-4 h-4" />
                <span>Calicut, Kerala</span>
              </span>
            </div>

          </div>

          {/* Right Column: Profile Avatar + Human Summary */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <ProfileAvatar />

            {/* Clean summary card */}
            <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                <span className="text-zinc-500">Focus Areas</span>
                <span className="text-zinc-200 font-medium">Full-Stack & Automotive</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Current Work</span>
                <span className="text-zinc-300">Software Developer @ Ziqx</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Education</span>
                <span className="text-zinc-300">BCA (Srinivas University)</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-zinc-500">Tech</span>
                <span className="text-zinc-300 font-mono">React • TS • Node • Postgres</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
