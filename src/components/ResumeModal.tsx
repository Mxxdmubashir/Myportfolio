import React from 'react';
import { personalInfo, experienceData, certifications, projects, skillCategories } from '../data/portfolioData';
import { Icons } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl flex flex-col">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between print:hidden backdrop-blur-md">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <Icons.FileText className="w-5 h-5 text-cyan-400" />
            <span>Muhammed Mubashir — Official Curriculum Vitae</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Icons.Download className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Sheet */}
        <div className="p-6 sm:p-10 text-slate-200 bg-slate-900 print:bg-white print:text-black space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-cyan-400 print:text-slate-800 mt-1">
                Full-Stack Developer • BCA in AI, VR & AR (Cloud Computing)
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                {personalInfo.currentRole} — {personalInfo.companyLocation}
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-slate-300 print:text-slate-800 sm:text-right">
              <div>Email: {personalInfo.email}</div>
              <div>Phone: {personalInfo.phone}</div>
              <div>Location: {personalInfo.location}</div>
              <div>GitHub: github.com/Mxxdmubashir</div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              <div>
                <strong className="text-white print:text-black font-semibold">Languages: </strong>
                JavaScript (ES6+), TypeScript, Java, C, C++, SQL
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Web Development: </strong>
                React, HTML5, CSS3, Tailwind CSS, Node.js, Express, REST APIs
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Database & Backend: </strong>
                PostgreSQL, SQL, MERN Stack, LAMP Stack, JWT Authentication
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Emerging & Tools: </strong>
                Unity (AR/VR), Automotive Telemetry (OBD-II), Git, GitHub, Postman, AI Prompting
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.filter(e => e.type === 'Work').map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role} — <span className="font-semibold text-cyan-300 print:text-slate-800">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-slate-600 italic mb-1.5">{exp.location}</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              Education
            </h2>
            {experienceData.filter(e => e.type === 'Education').map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white print:text-black">{edu.role}</h3>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">{edu.period}</span>
                </div>
                <div className="text-xs text-slate-300 print:text-slate-800 font-semibold">{edu.company}</div>
                <div className="text-xs text-slate-400 print:text-slate-600 mb-1.5">{edu.location}</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg border border-slate-800 print:border-slate-300">
                  <div className="font-bold text-xs text-white print:text-black">{proj.title}</div>
                  <div className="text-[11px] text-cyan-400 print:text-slate-700 font-mono mb-1">{proj.tags.slice(0, 3).join(', ')}</div>
                  <p className="text-[11px] text-slate-400 print:text-slate-700 leading-snug">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 print:text-black mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span>• {cert.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{cert.issuer.includes('freeCodeCamp') ? 'freeCodeCamp' : 'Certified'}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

