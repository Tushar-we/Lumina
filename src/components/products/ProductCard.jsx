import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      className="glass-card group flex flex-col h-full overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-white dark:bg-white p-6">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges */}
        {product.rating && product.rating.rate > 4.5 && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">
            BESTSELLER
          </span>
        )}

        {/* Action Buttons Overlay */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <button 
            onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
            className="w-10 h-10 rounded-full bg-white text-black shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
          >
            <FiHeart className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''} />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-sm text-yellow-500 mb-2">
          <FiStar className="fill-yellow-500" />
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            {product.rating?.rate} <span className="text-gray-400 text-xs">({product.rating?.count})</span>
          </span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading font-medium text-lg leading-tight mb-2 line-clamp-2 hover:text-accent transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 capitalize">
          {product.category}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
