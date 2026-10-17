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

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Icons.Activity className="w-5 h-5" />;
      case 'Globe': return <Icons.Globe className="w-5 h-5" />;
      case 'ShoppingCart': return <Icons.ShoppingCart className="w-5 h-5" />;
      case 'UserCheck': return <Icons.UserCheck className="w-5 h-5" />;
      case 'DollarSign': return <Icons.DollarSign className="w-5 h-5" />;
      case 'MessageSquare': return <Icons.MessageSquare className="w-5 h-5" />;
      case 'Utensils': return <Icons.Utensils className="w-5 h-5" />;
      default: return <Icons.Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Icons.Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Real-World Implementations
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A showcase of web applications, automotive telemetry systems, Unity AR simulations, and algorithmic utilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Icons.Terminal className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects (e.g. Socket.io, OBD, Unity, KDS, POS)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all shadow-inner font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Banner */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center text-white shadow-lg`}>
                    {getProjectIcon(project.iconName)}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key feature preview list */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">›</span>
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action Buttons */}
              <div className="p-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 mt-4 space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 border border-slate-800 rounded text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Architecture Details</span>
                    <Icons.ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Icons.Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeModalProject.accentColor} flex items-center justify-center text-white`}>
                  {getProjectIcon(activeModalProject.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeModalProject.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>{activeModalProject.category}</span>
                    <span>•</span>
                    <span>Status: {activeModalProject.status}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                <div>
                  <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-1 font-bold">
                    Project Overview
                  </h4>
                  <p>{activeModalProject.longDescription || activeModalProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2 font-bold">
                    Key Features & Technical Implementations
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Icons.CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2 font-bold">
                    Technologies & Tools Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded-md text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

