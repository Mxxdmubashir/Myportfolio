import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Skills</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
            Technologies & Tools
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
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
                  ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                  : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 shadow-2xs'
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
              className="rounded-xl border border-zinc-200 bg-white p-5 flex flex-col justify-between shadow-xs"
            >
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 pb-3 mb-4 border-b border-zinc-100">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        skill.highlight
                          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300 font-semibold'
                          : 'bg-zinc-50 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
                {category.skills.length} tools
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
