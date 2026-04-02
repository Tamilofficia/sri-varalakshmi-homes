import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiMaximize2 } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(31,122,76,0.15)] transition-all duration-500 group border border-white/60"
    >
      <div className="relative h-64 overflow-hidden">
        <Link to={`/projects/${project._id || project.id}`}>
          <img 
            src={project.image || 'https://images.unsplash.com/photo-1605276374102-8c5108f90bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
            alt={project.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </Link>
        <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md border border-white/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[var(--color-brand-green)] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          {project.status || 'Ongoing'}
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/projects/${project._id || project.id}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-brand-green)] transition-colors line-clamp-1">{project.name}</h3>
        </Link>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FiMapPin className="mr-1" />
          <span className="line-clamp-1">{project.location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price</p>
            <p className="font-semibold">{project.priceStr || '₹32.6L onwards'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Plot Size</p>
            <div className="flex items-center font-semibold">
              <FiMaximize2 className="mr-1 text-gray-400" size={14} />
              <span>{project.sizeStr || '800-1500 sq.ft'}</span>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/projects/${project._id || project.id}`}
          className="block w-full text-center bg-white border border-gray-200 hover:border-transparent hover:bg-[var(--color-brand-green)] text-gray-800 hover:text-white py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
