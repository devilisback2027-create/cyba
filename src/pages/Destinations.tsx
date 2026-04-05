import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { MapPin, ExternalLink, Filter } from 'lucide-react';

export const Destinations = () => {
  const { projects } = useContent();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Our Destinations
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-foreground/60"
              >
                Explore the digital landscapes we've built across the globe. Each project is a unique destination in our journey of innovation.
              </motion.p>
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 no-scrollbar">
              <Filter size={20} className="text-foreground/40 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    filter === cat
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-foreground/60 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    View Case Study <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
