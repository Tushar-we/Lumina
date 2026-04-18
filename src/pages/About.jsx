import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold font-heading mb-8 text-center">About Lumina.</h1>
        
        <div className="glass-card p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Founded in 2026, Lumina started with a simple idea: premium quality products shouldn't have to come with a luxury price tag. We believe that everyone deserves access to well-designed, functional, and beautiful items that elevate their everyday life.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our team scours the globe to source the best materials and partner with ethical manufacturers. Whether it's our cutting-edge electronics or our carefully curated clothing collections, every item you see on Lumina has been selected with intention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-card">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="font-bold mb-2">Quality First</h3>
            <p className="text-sm text-gray-500">We never compromise on the materials or craftsmanship of our products.</p>
          </div>
          <div className="text-center p-6 glass-card">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="font-bold mb-2">Sustainable</h3>
            <p className="text-sm text-gray-500">Committed to ethical sourcing and reducing our environmental footprint.</p>
          </div>
          <div className="text-center p-6 glass-card">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="font-bold mb-2">Customer First</h3>
            <p className="text-sm text-gray-500">Your satisfaction is our priority, backed by our 30-day guarantee.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
