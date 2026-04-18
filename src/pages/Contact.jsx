import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold font-heading mb-4 text-center">Get in Touch</h1>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center rounded-xl flex-shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-500 text-sm">support@lumina.com</p>
                <p className="text-gray-500 text-sm">sales@lumina.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center rounded-xl flex-shrink-0">
                <FiPhone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center rounded-xl flex-shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Office</h3>
                <p className="text-gray-500 text-sm">123 Commerce St.</p>
                <p className="text-gray-500 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <div className="glass-card p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
