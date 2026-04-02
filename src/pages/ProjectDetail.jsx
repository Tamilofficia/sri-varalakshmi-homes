import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiMapPin, FiCheckCircle, FiPhone, FiMessageCircle, FiDownload } from 'react-icons/fi';

const mockProject = {
  id: 1, 
  name: 'Thandurai Premium Plots', 
  location: 'Thandurai, Pattabiram (Near Tidel Park)', 
  priceStr: '₹32.6L onwards', 
  sizeStr: '815-1370 sq.ft', 
  status: 'Ongoing',
  description: 'Premium residential plots ranging from 815 to 1370 sq.ft. CMDA and RERA approved. Bank loan up to 80% available. Located strategically near Tidel Park in Thandurai, Pattabiram.',
  images: [
    '/hero/layout.png',
    '/hero/interior.png',
    '/projects/duplex1.png'
  ],
  features: ['CMDA Approved', 'RERA Approved', 'Upto 80% Bank Loan', 'Clear Title', '7.2M wide road', 'Gated Community'],
  landmarks: ['Near Tidel Park', 'Pattabiram Railway Station', 'Schools & hospitals nearby']
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeImg, setActiveImg] = useState(0);
  const project = mockProject;

  return (
    <div className="min-h-screen bg-[var(--color-brand-gray-100)] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/projects" className="text-[var(--color-brand-green)] hover:underline mb-4 inline-block font-medium">&larr; Back to Projects</Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{project.name}</h1>
              <div className="flex items-center text-gray-500 text-lg">
                <FiMapPin className="mr-2" /> {project.location}
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="inline-block bg-white text-[var(--color-brand-green)] font-semibold px-4 py-1 rounded-full text-sm uppercase tracking-wider mb-2 border border-green-100 shadow-sm">{project.status}</span>
              <p className="text-3xl font-bold">{project.priceStr}</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <div className="lg:col-span-2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-sm bg-white p-2">
            <img src={project.images[activeImg]} alt={project.name} className="w-full h-full object-cover rounded-2xl transition-all duration-500" />
          </div>
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto h-32 lg:h-[500px] snap-x p-1">
            {project.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImg(idx)}
                className={`flex-shrink-0 w-32 lg:w-full h-full lg:h-[155px] rounded-2xl overflow-hidden cursor-pointer border-4 transition-all ${activeImg === idx ? 'border-[var(--color-brand-green)]' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About the Project</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-gray-700 bg-[var(--color-brand-gray-100)] p-4 rounded-xl">
                    <FiCheckCircle className="text-[var(--color-brand-green)] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Nearby Landmarks</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.landmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[var(--color-brand-green)] mr-4">
                      <FiMapPin />
                    </div>
                    <span className="font-medium">{landmark}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-28 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Interested?</h3>
              <p className="text-gray-500 mb-8">Get in touch with our executives for a free site visit and consultation.</p>
              <div className="space-y-4">
                <a href="tel:+919176692377" className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-medium transition-colors shadow-sm">
                  <FiPhone className="mr-2" /> Call Now
                </a>
                <a href="https://wa.me/919176692377" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-4 rounded-xl font-medium transition-colors shadow-sm mt-4">
                  <FiMessageCircle className="mr-2" /> WhatsApp
                </a>
                <a href="/hero/layout.png" download="Thandurai_Brochure.png" className="w-full flex items-center justify-center border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white px-6 py-4 rounded-xl font-bold transition-all shadow-sm mt-4">
                  <FiDownload className="mr-2" /> Download Brochure
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
