import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Hide navbar if scrolling down to give full screen to the user
    if (latest > 150 && latest > previous) {
      if (!mobileMenuOpen) setHidden(true);
    } else {
      setHidden(false);
    }
    // Turn into compact island if scrolled past 50px
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-150%", opacity: 0 } }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 overflow-visible transition-all duration-500 \
        ${scrolled 
          ? 'top-4 w-[95%] max-w-7xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl' 
          : 'top-0 w-full bg-white shadow-md border-b-4 border-[var(--color-brand-green)] rounded-none'}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 min-h-[6rem]">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="SV Symbol" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all" />
              <img src="/logo-text.png" alt="Sri Varalakshmi Homes" className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all hidden min-[400px]:block" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-900 hover:text-[var(--color-brand-green)] transition-colors font-extrabold text-sm md:text-base uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/projects"
              className="bg-[var(--color-brand-green)] text-white px-8 py-3.5 rounded-[0.5rem] font-bold tracking-wide hover:bg-[#18613c] transition-colors shadow-md text-sm md:text-base"
            >
              Explore Properties
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none p-2 bg-gray-50 rounded-lg text-gray-900 shadow-sm border border-gray-200"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[110%] left-0 w-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-bold py-4 border-b border-gray-100/50 hover:text-[var(--color-brand-green)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-8 bg-[var(--color-brand-green)] text-white px-6 py-5 rounded-2xl font-bold tracking-wider shadow-lg text-lg active:scale-95 transition-transform"
              >
                Explore Properties
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
