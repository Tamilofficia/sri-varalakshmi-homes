import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const mockProjects = [
  { id: 1, name: 'Thandurai Premium Plots', location: 'Thandurai, Pattabiram (Near Tidel Park)', priceStr: '₹32.6L onwards', sizeStr: '815-1370 sq.ft', status: 'Ongoing', category: 'Chennai', image: '/hero/layout.png' },
  { id: 2, name: 'SV Serenity Plots', location: 'Ayapakkam, Chennai', priceStr: '₹28L onwards', sizeStr: '800-1200 sq.ft', status: 'Completed', category: 'Chennai', image: '/projects/duplex1.png' },
  { id: 3, name: 'Green Meadows', location: 'Avadi, Chennai', priceStr: '₹42L onwards', sizeStr: '1200-2000 sq.ft', status: 'Ongoing', category: 'Chennai', image: '/projects/duplex2.png' },
  { id: 4, name: 'SV Royal City', location: 'Bangalore Highway', priceStr: '₹50L onwards', sizeStr: '1500-2400 sq.ft', status: 'Ongoing', category: 'Bangalore', image: '/hero/interior.png' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[var(--color-brand-gray-100)] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-gray-500 text-lg">Find your dream plot today.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-2 bg-white p-1 rounded-full shadow-sm border border-gray-100">
            {['All', 'Chennai', 'Bangalore'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === cat ? 'bg-[var(--color-brand-green)] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
