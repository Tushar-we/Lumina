import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <FiShoppingBag className="text-6xl text-gray-400" />
        </div>
        <h2 className="text-3xl font-bold font-heading mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Looks like you haven't added anything to your cart yet. Discover our premium collection and find something you love.
        </p>
        <Link 
          to="/products" 
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const tax = cartTotal * 0.08;
  const shipping = cartTotal > 100 ? 0 : 15;
  const finalTotal = cartTotal + tax + shipping;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold font-heading mb-10">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="glass-card overflow-hidden">
            <div className="hidden md:grid grid-cols-6 gap-4 p-6 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 font-medium text-sm text-gray-500 uppercase tracking-wider">
              <div className="col-span-3">Product</div>
              <div className="col-span-1 text-center">Price</div>
              <div className="col-span-1 text-center">Quantity</div>
              <div className="col-span-1 text-right">Total</div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {cart.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={item.id} 
                  className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6 items-center"
                >
                  {/* Product Details */}
                  <div className="col-span-1 md:col-span-3 flex gap-4 items-center">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors md:hidden"
                    >
                      <FiTrash2 />
                    </button>
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg p-2 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                      </Link>
                    </div>
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-bold line-clamp-2 hover:text-accent transition-colors">{item.title}</h3>
                      </Link>
                      <p className="text-sm text-gray-500 capitalize mt-1">{item.category}</p>
                    </div>
                  </div>

                  {/* Price (Desktop) */}
                  <div className="hidden md:block col-span-1 text-center font-medium">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 flex items-center justify-between md:justify-center">
                    <span className="md:hidden font-medium text-gray-500">Quantity:</span>
                    <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-1/3 py-2 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="w-1/3 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-1/3 py-2 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 flex items-center justify-between md:justify-end font-bold text-lg">
                    <span className="md:hidden font-medium text-gray-500">Total:</span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove (Desktop) */}
                  <div className="hidden md:flex justify-end absolute right-8">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      title="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <button 
                onClick={clearCart}
                className="text-red-500 font-medium hover:text-red-600 transition-colors"
              >
                Clear Cart
              </button>
              <Link to="/products" className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2">
                Continue Shopping <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="glass-card p-8 sticky top-24">
            <h3 className="text-2xl font-bold font-heading mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-black dark:text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-black dark:text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-black dark:text-white">
                  {shipping === 0 ? <span className="text-green-500">Free</span> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-blue-500">Add ${(100 - cartTotal).toFixed(2)} more for free shipping!</p>
              )}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-bold text-black dark:text-white">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {user ? (
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/30">
                Proceed to Checkout <FiArrowRight />
              </button>
            ) : (
              <Link to="/auth" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                Login to Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
