import React from 'react';
import { personalInfo, experienceData, certifications, projects } from '../data/portfolioData';
import { Icons } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-200 bg-white shadow-2xl flex flex-col">
        
        {/* Top bar */}
        <div className="sticky top-0 z-20 px-6 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between print:hidden">
          <span className="text-sm font-semibold text-zinc-900">
            Muhammed Mubashir — Resume
          </span>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs cursor-pointer shadow-xs"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-500 hover:text-black bg-zinc-100 hover:bg-zinc-200 cursor-pointer"
            >
              <Icons.X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 text-zinc-800 bg-white space-y-5 text-xs">
          
          {/* Header */}
          <div className="border-b border-zinc-200 pb-4 flex flex-col sm:flex-row justify-between sm:items-start gap-2">
            <div>
              <h1 className="text-2xl font-bold text-zinc-950">
                {personalInfo.name}
              </h1>
              <p className="text-xs text-zinc-700 font-medium mt-0.5">
                Full-Stack Developer • BCA in AI, VR & AR (Cloud Computing)
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                {personalInfo.currentRole} — {personalInfo.companyLocation}
              </p>
            </div>

            <div className="text-[11px] space-y-0.5 text-zinc-600 sm:text-right font-mono">
              <div>{personalInfo.email}</div>
              <div>{personalInfo.phone}</div>
              <div>github.com/Mxxdmubashir</div>
              <div>{personalInfo.location}</div>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-1">
              Career Objective
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 pb-1 border-b border-zinc-200">
              Work Experience
            </h2>
            {experienceData.filter(e => e.type === 'Work').map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-zinc-950">
                    {exp.role} — <span className="font-medium text-zinc-700">{exp.company}</span>
                  </h3>
                  <span className="text-[11px] text-zinc-500 font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-zinc-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 pb-1 border-b border-zinc-200">
              Education
            </h2>
            {experienceData.filter(e => e.type === 'Education').map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-zinc-950">{edu.role}</h3>
                  <span className="text-[11px] text-zinc-500 font-mono">{edu.period}</span>
                </div>
                <div className="text-[11px] text-zinc-700">{edu.company}</div>
                <ul className="list-disc list-inside space-y-0.5 text-zinc-600">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 pb-1 border-b border-zinc-200">
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-2.5 rounded border border-zinc-200 bg-zinc-50/50">
                  <div className="font-semibold text-zinc-950">{p.title}</div>
                  <div className="text-[10px] text-zinc-500 font-mono mb-1">{p.tags.slice(0, 3).join(', ')}</div>
                  <p className="text-[11px] text-zinc-600 leading-snug">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 pb-1 border-b border-zinc-200">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-zinc-600">
              {certifications.map((cert, i) => (
                <div key={i}>• {cert.title} ({cert.issuer})</div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
