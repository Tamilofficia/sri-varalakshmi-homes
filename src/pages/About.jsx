import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[var(--color-brand-gray-100)] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Delivering premium real estate properties with transparency and trust since 2008.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-4">Founded in 2008</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Sri Varalakshmi Homes has been at the forefront of the real estate market in Chennai, specializing in premium CMDA approved plots. We believe in providing affordable yet high-quality residential spaces where families can build their future safely and securely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[var(--color-brand-gray-100)] p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-green)]">Our Vision</h3>
              <p className="text-gray-600">Affordable and premium homes for every family, fostering sustainable communities.</p>
            </div>
            <div className="bg-[var(--color-brand-gray-100)] p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-green)]">Our Mission</h3>
              <p className="text-gray-600">To provide transparent, ethical, and customer-centric real estate solutions ensuring long-term value.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
