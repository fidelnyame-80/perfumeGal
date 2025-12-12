import React from 'react';
import { motion } from 'framer-motion';

const BrandMarquee = () => {
  // Array of brand names - you can replace with actual brand logos later
  const brands = [
    'Dior',
    'TOM FORD',
    'CHANEL',
    'Calvin Klein',
    'CLINIQUE',
    'D&G'
  ];

  // Duplicate the array to create seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-gray-50 py-8 overflow-hidden border-y border-gray-200">
      <div className="relative flex">
        {/* Animated marquee container */}
        <motion.div
          className="flex gap-12 md:gap-16 lg:gap-20"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center"
            >
              {/* Font: Serif for Dior, Sans-serif for others */}
              <span
                className={`text-2xl md:text-3xl lg:text-4xl whitespace-nowrap ${
                  brand === 'Dior' 
                    ? 'font-serif text-gray-700' 
                    : brand === 'TOM FORD'
                    ? 'font-bold text-gray-800 tracking-wider'
                    : brand === 'CHANEL'
                    ? 'font-bold text-gray-800'
                    : brand === 'Calvin Klein'
                    ? 'font-light text-gray-700 tracking-wide'
                    : brand === 'CLINIQUE'
                    ? 'font-normal text-gray-700 tracking-widest'
                    : 'font-bold text-gray-800'
                }`}
              >
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;