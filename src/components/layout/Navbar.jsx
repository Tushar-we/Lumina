import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiHeart, FiUser, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-bold tracking-tighter">
          LUMIN<span className="text-accent">A.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === link.path ? 'text-accent' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button onClick={toggleTheme} className="text-xl hover:text-accent transition-colors">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          
          <Link to="/profile" className="text-xl hover:text-accent transition-colors">
            {user ? <span className="text-sm font-medium">Hi, {user.name.split(' ')[0]}</span> : <FiUser />}
          </Link>
          
          <Link to="/products?tab=wishlist" className="text-xl hover:text-accent transition-colors">
            <FiHeart />
          </Link>

          <Link to="/cart" className="relative text-xl hover:text-accent transition-colors">
            <FiShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative text-xl">
            <FiShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl">
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Theme</span>
                <button onClick={toggleTheme} className="text-xl p-2 rounded-full glass-card">
                  {isDarkMode ? <FiSun /> : <FiMoon />}
                </button>
              </div>
              <Link to="/profile" className="text-lg font-medium hover:text-accent flex items-center gap-2">
                <FiUser /> {user ? 'My Profile' : 'Login / Signup'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
