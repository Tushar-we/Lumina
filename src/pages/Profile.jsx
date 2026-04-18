import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiSettings, FiPackage, FiHeart, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-10">My Account</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="glass-card p-6 sticky top-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
                  <FiUser /> Profile Info
                </a>
                <Link to="/products?tab=wishlist" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                  <FiHeart /> Wishlist
                </Link>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                  <FiPackage /> Orders
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                  <FiSettings /> Settings
                </a>
                <div className="h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                >
                  <FiLogOut /> Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <p className="text-lg font-medium">{user.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                  <p className="text-lg font-medium">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Location</label>
                  <p className="text-lg font-medium">New York, USA</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-800 pb-4 mt-12">Recent Orders</h2>
              <div className="text-center py-10 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                <Link to="/products" className="text-blue-600 font-medium hover:underline">Start Shopping</Link>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
