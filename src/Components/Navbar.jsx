import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Navbar Component with Framer Motion animations
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="">
            <h1 className="text-xl md:text-2xl font-light tracking-wider">PerfumeGal</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={'/'} className="text-sm font-light hover:text-gray-600 transition">Home</Link>
            <Link to={'/Shop'} className="text-sm font-light hover:text-gray-600 transition">Shop</Link>
           <Link to={'/Contact'} className="text-sm font-light hover:text-gray-600 transition">Contact us</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-600 transition">
              <Search size={20} />
            </button>
            <button className="hover:text-gray-600 transition">
              <User size={20} />
            </button>
            <button className="hover:text-gray-600 transition">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="px-4 py-6 space-y-4"
            >
              <a href="#" className="block text-base font-light hover:text-gray-600 transition">Home</a>
              <a href="#" className="block text-base font-light hover:text-gray-600 transition">Shop</a>
              <a href="#" className="block text-base font-light hover:text-gray-600 transition">Contact us</a>
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                <button className="hover:text-gray-600 transition">
                  <Search size={20} />
                </button>
                <button className="hover:text-gray-600 transition">
                  <User size={20} />
                </button>
                <button className="hover:text-gray-600 transition">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;