import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Images } from '../assets/Images';

const PopularProducts = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Font: Serif/Elegant */}
        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          Popular Products
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>

          {/* Products Grid/Carousel */}
          <motion.div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,                // adjust speed here
              ease: "linear",
              repeat: Infinity
            }}
          >
            <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {/* Product Card 1 - Berries Weekend */}
              <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={Images.berriesWeekend}
                      alt="Berries Weekend"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                    Berries Weekend
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-normal text-gray-900">$43</p>
                    <button
                      className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 - Khamrah */}
              <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={Images.khamrah}
                      alt="Khamrah"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                    Khamrah
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-normal text-gray-900">$43</p>
                    <button
                      className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 - Paradox Orient */}
              <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={Images.paradoxOrient}
                      alt="Paradox Orient"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                    Paradox Orient
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-normal text-gray-900">$43</p>
                    <button
                      className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 4 - Velvet Oud */}
              <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={Images.velvetOUD}
                      alt="Velvet Oud"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                    Velvet Oud
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-normal text-gray-900">$43</p>
                    <button
                      className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Scroll Indicator Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PopularProducts; 