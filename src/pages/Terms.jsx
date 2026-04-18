import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms & Conditions</h1>
        
        <div className="glass-card p-8 md:p-10 space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-sm text-gray-500">Last updated: April 18, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Agreement to Terms</h2>
            <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Lumina ("Company", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Products and Pricing</h2>
            <p>We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
