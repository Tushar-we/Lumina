import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiShare2, FiStar, FiArrowLeft, FiTruck, FiShield } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Check out this ${product.title} on Lumina!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 animate-pulse mt-10">
        <div className="w-full md:w-1/2 h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl"></div>
        <div className="w-full md:w-1/2 space-y-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-32"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-32 text-2xl font-bold">Product not found</div>;
  }

  const amazonSearchLink = `https://www.amazon.com/s?k=${encodeURIComponent(product.title)}`;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <FiArrowLeft /> Back to products
      </Link>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 bg-white rounded-3xl p-8 flex items-center justify-center shadow-sm border border-gray-100 dark:border-none min-h-[400px] md:min-h-[600px]"
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <p className="text-accent font-medium uppercase tracking-wider text-sm mb-3">
            {product.category}
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4">
            {product.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
              <FiStar className="fill-yellow-500 text-yellow-500" />
              <span className="font-bold text-yellow-700 dark:text-yellow-500">{product.rating.rate}</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{product.rating.count} reviews</span>
          </div>
          
          <div className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-xl shadow-black/10 dark:shadow-white/10"
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <a 
              href={amazonSearchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center text-center transition-colors shadow-xl shadow-blue-500/20"
            >
              Buy on Amazon
            </a>
          </div>

          <div className="flex gap-4 mb-10 pb-10 border-b border-gray-200 dark:border-gray-800">
            <button 
              onClick={() => toggleWishlist(product)}
              className={`flex items-center gap-2 font-medium transition-colors ${isInWishlist(product.id) ? 'text-red-500' : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
            >
              <FiHeart className={isInWishlist(product.id) ? 'fill-red-500' : ''} /> 
              {isInWishlist(product.id) ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <button onClick={handleShare} className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white font-medium transition-colors">
              <FiShare2 /> Share Product
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                <FiTruck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-500">On orders over $50</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                <FiShield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">2 Year Warranty</h4>
                <p className="text-xs text-gray-500">Guarantee protection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
