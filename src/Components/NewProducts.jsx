import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Images } from '../assets/Images';

const NewProducts = ({
  // Import these images in parent component and pass as props
  mousuf, // Import: Mousuf image
  afterSunset, // Import: After Sunset image
  berriesWeekend, // Import: Berries Weekend image
  hayaati // Import: Hayaati image
}) => {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Title - Font: Serif/Elegant */}
        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16 text-gray-800"
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8, ease:"easeOut"}}
        viewport={{once:false, amount:0.1}}
        >
          New Products
        </motion.h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Product Card 1 - Mousuf */}
          <div className="group">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-3/4 bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={Images.mousuf}
                  alt="Mousuf"
                  className="w-full h-full object-cover p-3 md:p-4"
                />
              </div>
              <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center">
                Mousuf
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base md:text-lg font-normal text-gray-900">$43</p>
                <button
                  className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 - After Sunset */}
          <div className="group">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-3/4 bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={Images.afterSunset}
                  alt="After Sunset"
                  className="w-full h-full object-cover p-3 md:p-4"
                />
              </div>
              <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center">
                After Sunset
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base md:text-lg font-normal text-gray-900">$43</p>
                <button
                  className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 - Berries Weekend */}
          <div className="group">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-3/4 bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={Images.berriesWeekend}
                  alt="Berries Weekend"
                  className="w-full h-full object-cover p-3 md:p-4"
                />
              </div>
              <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center">
                Berries Weekend
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base md:text-lg font-normal text-gray-900">$43</p>
                <button
                  className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4 - Hayaati */}
          <div className="group">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-3/4 bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={Images.hayaati}
                  alt="Hayaati"
                  className="w-full h-full object-cover p-3 md:p-4"
                />
              </div>
              <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center">
                Hayaati
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base md:text-lg font-normal text-gray-900">$43</p>
                <button
                  className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;