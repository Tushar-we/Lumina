import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
        
        <div className="glass-card p-8 md:p-10 space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-sm text-gray-500">Last updated: April 18, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Introduction</h2>
            <p>Welcome to Lumina. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. The Data We Collect About You</h2>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely via our payment partners).</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
