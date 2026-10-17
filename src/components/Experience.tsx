import React from 'react';
import { experienceData, certifications } from '../data/portfolioData';
import { Icons } from './Icons';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Icons.Briefcase className="w-3.5 h-3.5" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience, Education & Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Practical industry software development, degree specialization in AI/VR and cloud computing, and developer certifications.
          </p>
        </div>

        {/* Experience & Education Dual Column Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Icons.Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Work Experience</h3>
            </div>

            {experienceData.filter(e => e.type === 'Work').map((exp) => (
              <div
                key={exp.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <div className="text-sm font-semibold text-cyan-400">{exp.company}</div>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <Icons.MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-cyan-400 font-bold mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-900 border border-slate-800 rounded text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Icons.GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education & Specialization</h3>
            </div>

            {experienceData.filter(e => e.type === 'Education').map((edu) => (
              <div
                key={edu.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.role}</h4>
                    <div className="text-sm font-semibold text-blue-400">{edu.company}</div>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 text-xs font-mono font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <Icons.MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-blue-400 font-bold mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-900 border border-slate-800 rounded text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Certifications Showcase */}
        <div>
          <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-800">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Icons.Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Developer Certifications & Credentials</h3>
              <p className="text-xs text-slate-400">Industry-recognized algorithm and full-stack development certifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-400 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">{cert.issuer}</div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-900/90 text-slate-300 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

