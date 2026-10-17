import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { Icons } from './Icons';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Full-Stack', 'Automotive', 'AR/VR', 'Utilities'];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedFilter === 'All' || p.category === selectedFilter;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Web applications, car telemetry tools, and interactive 3D simulations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tech..."
              className="w-full pl-3.5 pr-8 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-zinc-100 text-zinc-950 font-semibold'
                  : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Icons.Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-zinc-100 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key features */}
                <ul className="space-y-1 text-xs text-zinc-400 mb-4">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tags & Detail Trigger */}
              <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 border border-zinc-800 rounded text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white rounded-lg bg-zinc-800"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-zinc-500 uppercase">{activeModalProject.category}</span>
                <h3 className="text-xl font-bold text-zinc-100 mt-0.5">{activeModalProject.title}</h3>
              </div>

              <div className="space-y-4 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800 pt-4">
                <div>
                  <h4 className="text-zinc-400 font-semibold mb-1">Overview</h4>
                  <p className="text-zinc-400">{activeModalProject.longDescription || activeModalProject.description}</p>
                </div>

                <div>
                  <h4 className="text-zinc-400 font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-1.5 text-zinc-300">
                    {activeModalProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-zinc-400 font-semibold mb-2">Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium flex items-center gap-1.5"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
