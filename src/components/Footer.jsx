import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col items-start gap-4 mb-8">
              <img src="/logo-icon.png" alt="SV Symbol" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/logo-text.png" alt="Sri Varalakshmi Homes" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building trust and delivering premium real estate properties in Chennai since 2008. Your dream plot awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">Our Story</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">All Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-[var(--color-brand-green)]" size={20} />
                <span className="text-gray-400">123, Real Estate Avenue, Ambattur, Chennai</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-[var(--color-brand-green)]" size={20} />
                <span className="text-gray-400 flex flex-col">
                  <span>+91 91766 92377</span>
                  <span>+91 98414 68054</span>
                  <span>+91 98842 20050</span>
                </span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-[var(--color-brand-green)]" size={20} />
                <span className="text-gray-400">info@srivaralakshmihomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sri Varalakshmi Homes & Interiors. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
