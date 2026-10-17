import React from 'react';
import { experienceData, certifications } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-100 bg-zinc-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Background</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
            Experience & Education
          </h2>
        </div>

        {/* Work & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-200">
              Work Experience
            </h3>

            {experienceData.filter(e => e.type === 'Work').map((exp) => (
              <div
                key={exp.id}
                className="rounded-xl border border-zinc-200 bg-white p-5 space-y-3 shadow-xs"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-base font-semibold text-zinc-900">{exp.role}</h4>
                  <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                </div>

                <div className="text-xs text-zinc-800 font-medium">
                  {exp.company}
                </div>

                <div className="text-[11px] text-zinc-500">
                  {exp.location}
                </div>

                <ul className="space-y-1.5 text-xs text-zinc-600 pt-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-zinc-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-100">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono bg-zinc-50 border border-zinc-200 rounded text-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-200">
              Education
            </h3>

            {experienceData.filter(e => e.type === 'Education').map((edu) => (
              <div
                key={edu.id}
                className="rounded-xl border border-zinc-200 bg-white p-5 space-y-3 shadow-xs"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-base font-semibold text-zinc-900">{edu.role}</h4>
                  <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                </div>

                <div className="text-xs text-zinc-800 font-medium">
                  {edu.company}
                </div>

                <div className="text-[11px] text-zinc-500">
                  {edu.location}
                </div>

                <ul className="space-y-1.5 text-xs text-zinc-600 pt-1">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-zinc-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-100">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono bg-zinc-50 border border-zinc-200 rounded text-zinc-600"
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 pb-2 mb-5 border-b border-zinc-200">
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 bg-white p-4 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900">{cert.title}</h4>
                  <span className="text-[11px] text-zinc-500">{cert.issuer}</span>
                </div>
                <div className="mt-3 pt-2 border-t border-zinc-100 text-[10px] font-mono text-zinc-500">
                  {cert.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
