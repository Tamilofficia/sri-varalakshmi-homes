import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiShield, FiCreditCard, FiClock, FiPhoneCall } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';

const featuredProjects = [
  { id: 1, name: 'Thandurai Premium Plots', location: 'Thandurai, Pattabiram (Near Tidel Park)', priceStr: '₹32.6L onwards', sizeStr: '815-1370 sq.ft', status: 'Ongoing', image: '/hero/layout.png' },
  { id: 2, name: 'SV Serenity Plots', location: 'Ayapakkam, Chennai', priceStr: '₹28L onwards', sizeStr: '800-1200 sq.ft', status: 'Completed', image: '/projects/duplex1.png' },
  { id: 3, name: 'Green Meadows', location: 'Avadi, Chennai', priceStr: '₹42L onwards', sizeStr: '1200-2000 sq.ft', status: 'Ongoing', image: '/projects/duplex2.png' }
];

const teamPreview = [
  { id: 1, name: 'Aanandha Krishnan N', position: 'Founder & MD', photo: 'https://ui-avatars.com/api/?name=Aanandha+Krishnan&background=1f7a4c&color=fff&size=200' },
  { id: 2, name: 'Prasanth A', position: 'Operations Head', photo: 'https://ui-avatars.com/api/?name=Prasanth+A&background=random&color=fff&size=200' },
  { id: 3, name: 'Loga Prakash A', position: 'Sales Head', photo: 'https://ui-avatars.com/api/?name=Loga+Prakash&background=random&color=fff&size=200' }
];

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center px-6 text-center"
      >
        <div className="flex flex-col items-center gap-6 mb-8 w-full max-w-sm">
          <img src="/logo-icon.png" alt="SV Symbol" className="h-[120px] md:h-[180px] object-contain drop-shadow-md" />
          <img src="/logo-text.png" alt="Sri Varalakshmi Homes" className="w-full h-auto object-contain px-4" />
        </div>
        <p className="mt-4 text-[#B8860B] font-bold tracking-[0.3em] uppercase text-sm leading-loose">Divine & Premium Living Spaces</p>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Prevent scrolling while splash is visible
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-[var(--color-brand-gray-100)] pt-24 text-gray-900">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Hero Section 1: Premium Layout (Text Left, Image Right) */}
      <section className="bg-white py-16 lg:py-28 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-1"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-6 text-gray-900 tracking-tight leading-[1.1]">
                Building Your Future,<br/>
                <span className="text-[var(--color-brand-green)]">One Plot</span> at a Time
              </h1>
              <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-lg">
                CMDA Approved. Bank Loans Available. Premium Locations in Tamil Nadu.
              </p>
              <Link to="/projects" className="inline-block bg-[var(--color-brand-green)] hover:bg-[#18613c] text-white px-10 py-5 rounded-[0.5rem] text-xl font-bold tracking-wide transition-all shadow-xl hover:-translate-y-1">
                Explore Projects
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <img src="/hero/layout.png" alt="Premium Layout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Pooja Room (Image Left, Text Right) */}
      <section className="bg-[var(--color-brand-gray-100)] py-20 lg:py-32 overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <img src="/hero/pooja.png" alt="Divine Spaces" className="relative z-10 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Rooted in <br/><span className="text-[#B8860B]">Tradition</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                100% Vastu Compliant layouts designed with divine harmony and spiritual peace in mind. We honor the heritage of Tamil Nadu in every space we curate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Interior Design (Text Left, Image Right) */}
      <section className="bg-white py-20 lg:py-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Bespoke <br/><span className="text-[var(--color-brand-green)]">South Indian</span> Interiors
              </h2>
              <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-lg">
                We don't just build homes; we craft luxurious living spaces seamlessly blending modern aesthetics with traditional Chettinad architecture. Every detail tells a story.
              </p>
              <Link to="/about" className="inline-block border-2 border-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white text-[var(--color-brand-green)] px-10 py-5 rounded-[0.5rem] text-xl font-bold tracking-wide transition-all shadow-md hover:-translate-y-1">
                Read Our Story
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <img src="/hero/interior.png" alt="South Indian Interiors" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-[var(--color-brand-green)] mb-3">200+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm md:text-base">Plots Delivered</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-[var(--color-brand-green)] mb-3">98%</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm md:text-base">Satisfaction</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-[var(--color-brand-green)] mb-3">15+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm md:text-base">Years of Trust</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-[var(--color-brand-green)] mb-3">50+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm md:text-base">Active Projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl text-xl">Discover our handpicked premium plots in prime locations, designed to offer the best value for your investment.</p>
          </div>
          <Link to="/projects" className="hidden md:inline-block text-[var(--color-brand-green)] font-bold text-lg hover:underline">
            View All Projects &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/projects" className="inline-block text-[var(--color-brand-green)] font-bold text-lg hover:underline">
            View All Projects &rarr;
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFD700] opacity-5 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 60 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L60 45L34 50V120H26V50L0 45L30 0Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Why Choose Us</h2>
            <p className="text-gray-600 px-4 text-xl">We simplify your real estate journey with transparency and truth, blessed with tradition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiShield size={40} />, title: 'CMDA Approved', desc: 'All layouts strictly adhere to CMDA & RERA norms.' },
              { icon: <FiCheckCircle size={40} />, title: 'Transparent Pricing', desc: 'No hidden charges. Clear documentation.' },
              { icon: <FiCreditCard size={40} />, title: 'Loan Assistance', desc: 'Tie-ups with leading banks for easy finance.' },
              { icon: <FiClock size={40} />, title: 'On-Time Delivery', desc: 'Committed to delivering projects as promised.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl border border-white/80 transition-all"
              >
                <div className="text-[var(--color-brand-green)] w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-md border border-green-50">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-[var(--color-brand-gray-100)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">Meet the Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {teamPreview.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-8 border-white">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-2xl font-bold mb-2 font-serif">{member.name}</h4>
                <p className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a100d] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight">Ready to Own Your Dream Plot?</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Our experts are waiting to help you find the perfect property that fits your needs and budget. Let's make it a reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-[var(--color-brand-green)] hover:bg-[#18613c] text-white px-10 py-5 rounded-[0.5rem] text-xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(31,122,76,0.6)] hover:-translate-y-1">
              Contact Us Now
            </Link>
            <a href="tel:+919176692377" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0a100d] px-10 py-5 rounded-[0.5rem] text-xl font-bold tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center">
              <FiPhoneCall className="mr-3" /> +91 91766 92377
            </a>
          </div>
        </div>
        
        {/* Abstract Devotional glowing elements */}
        <div className="absolute top-0 right-0 -m-32 w-[500px] h-[500px] rounded-full bg-[#FFD700] opacity-10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -m-32 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-green)] opacity-20 blur-[120px]"></div>
      </section>
    </div>
  );
};

export default Home;
