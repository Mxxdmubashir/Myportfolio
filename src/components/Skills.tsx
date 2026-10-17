import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Icons } from './Icons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Icons.Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From frontend UI architecture to database schemas, low-level programming in C/Java, and 3D Augmented Reality scenes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {category.icon === 'Layout' && <Icons.Layout className="w-4 h-4" />}
                      {category.icon === 'Server' && <Icons.Server className="w-4 h-4" />}
                      {category.icon === 'Database' && <Icons.Database className="w-4 h-4" />}
                      {category.icon === 'Code' && <Icons.Code className="w-4 h-4" />}
                      {category.icon === 'Layers' && <Icons.Layers className="w-4 h-4" />}
                      {category.icon === 'Terminal' && <Icons.Terminal className="w-4 h-4" />}
                    </div>
                    <h3 className="text-base font-bold text-white">{category.name}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                        skill.highlight
                          ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 shadow-sm shadow-cyan-500/5'
                          : 'bg-slate-900/80 border border-slate-800 text-slate-300'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        • {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in production & projects</span>
                <span className="text-cyan-400">● Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI & Velocity Callout Banner */}
        <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-slate-900/70 to-blue-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Icons.Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">AI-Accelerated Engineering Workflow</h4>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                I integrate structured AI prompting to rapidly scaffold prototypes, design robust REST schemas, write unit test suites, and generate technical documentation—multiplying delivery velocity while ensuring code quality.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20">
              High Velocity
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

