import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ProductCard from '../components/products/ProductCard';
import ProductSkeleton from '../components/ui/ProductSkeleton';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    { name: "Men's Clothing", image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', path: "/products?category=men's clothing" },
    { name: "Women's Clothing", image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', path: "/products?category=women's clothing" },
    { name: "Electronics", image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', path: "/products?category=electronics" },
    { name: "Jewelery", image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', path: "/products?category=jewelery" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background blobs for premium feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-gray-900 dark:text-white">
              Elevate Your <br/>
              <span className="text-gradient">Everyday Style</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover curated collections of premium clothing and accessories designed for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-blue-500/30">
                Shop Collection <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fashion Hero" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 -left-10 glass-card p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl">✨</div>
                <div>
                  <p className="font-bold text-sm">New Arrivals</p>
                  <p className="text-xs text-gray-500">Just dropped</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Shop by Category</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Explore our wide range of products tailored for your lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Link to={category.path}>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <span className="text-white/80 flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors">
                      Explore <FiArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Products</h2>
              <p className="text-gray-500 dark:text-gray-400">Handpicked selections just for you.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array(4).fill(0).map((_, i) => <ProductSkeleton key={i} />)
            ) : (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
