import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-heading font-bold tracking-tighter">
              LUMIN<span className="text-accent">A.</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Premium clothing and electronics for the modern individual. Elevate your everyday style with our curated collections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/products?category=men's clothing" className="text-sm text-gray-500 hover:text-accent transition-colors">Men's Collection</Link></li>
              <li><Link to="/products?category=women's clothing" className="text-sm text-gray-500 hover:text-accent transition-colors">Women's Collection</Link></li>
              <li><Link to="/products?category=electronics" className="text-sm text-gray-500 hover:text-accent transition-colors">Electronics</Link></li>
              <li><Link to="/products?category=jewelery" className="text-sm text-gray-500 hover:text-accent transition-colors">Jewelry</Link></li>
              <li><Link to="/products" className="text-sm text-gray-500 hover:text-accent transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/profile" className="text-sm text-gray-500 hover:text-accent transition-colors">My Account</Link></li>
              <li><Link to="/cart" className="text-sm text-gray-500 hover:text-accent transition-colors">Order History</Link></li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-l-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-accent text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Payment Icons placehoder */}
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
