import React from 'react'
import Navbar from "./Navbar";
import { Search } from "lucide-react";
import { motion } from 'framer-motion';

// Main Hero Component (Static)
const PerfumeHero = () => {
  // Default placeholder image - update img src later
  const img = { src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop' };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content (55% width on desktop) */}
            <motion.div className="lg:pr-8"
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease: "easeOut"}}
            >
              {/* Font: Playfair Display for headings, or similar serif */}
              <h1 className="text-4xl text-3xl md:text-6xl lg:text-5xl leading-tight mb-6">
                <span className="font-light"><span className='font-[blackJack] lg:text-7xl text-5xl'>Smell</span> is a</span>
                <br />
                <span className="font-light">word.Perfume is</span>
                <br />
                <span className="font-serif italic">literature</span>
              </h1>

              {/* Font: Light sans-serif for body text */}
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8 max-w-md">
                Discover the artistry and elegance of
                <br />
                our collection of premium perfumes.
                <br />
                Enrich your everyday smell!
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-6 py-3 pr-12 bg-gray-50 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-gray-400 transition"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition">
                  <Search size={18} />
                </button>
              </div>

              {/* Shop Now Button */}
              <button className="mt-8 px-8 py-3 bg-black text-white rounded-full text-sm font-light hover:bg-gray-800 transition flex items-center space-x-2">
                <span>Shop Now</span>
                <span className="text-lg">→</span>
              </button>
            </motion.div>

            {/* Right Column - Image (45% width on desktop) */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Default for now, update img src */}
                <img
                  src={img.src}
                  alt="Woman with perfume bottle"
                  className="w-full h-auto object-cover"
                />
                
                {/* Decorative elements in corner */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeHero;