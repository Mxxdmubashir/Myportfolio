import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Skills</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
            Technologies & Tools
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Languages, libraries, and frameworks I use across projects and daily work.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-100 text-zinc-950 font-semibold'
                  : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 pb-3 mb-4 border-b border-zinc-800/80">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        skill.highlight
                          ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/80'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800/80'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-mono">
                {category.skills.length} tools
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
