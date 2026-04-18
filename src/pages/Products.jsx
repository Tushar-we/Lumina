import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import ProductCard from '../components/products/ProductCard';
import ProductSkeleton from '../components/ui/ProductSkeleton';
import { useWishlist } from '../context/WishlistContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const location = useLocation();
  const { wishlist } = useWishlist();

  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';
  const showWishlist = queryParams.get('tab') === 'wishlist';

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['all', "men's clothing", "women's clothing", 'electronics', 'jewelery'];

  let filteredProducts = showWishlist 
    ? wishlist 
    : products.filter(p => {
        const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
      });

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold font-heading mb-4">
          {showWishlist ? 'Your Wishlist' : 'Our Collection'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          {showWishlist 
            ? 'Items you\'ve saved for later.' 
            : 'Explore our wide range of premium products tailored for your lifestyle.'}
        </p>
      </div>

      {!showWishlist && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center gap-2 px-4 py-3 rounded-xl glass-card w-full justify-center font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter /> Filters
          </button>

          {/* Desktop Categories */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Categories Dropdown */}
      {isFilterOpen && !showWishlist && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-2 mb-8 p-4 glass-card"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Categories</h3>
            <button onClick={() => setIsFilterOpen(false)}><FiX /></button>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>
      )}

      {/* Product Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-gray-500">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
