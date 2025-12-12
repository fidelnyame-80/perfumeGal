import React from 'react';
import { Images } from '../assets/Images';

const ProductGridCTA = ({
  // Import these images in parent component and pass as props
  largeImage, // Import: Left large image - woman with perfume bottle
  topRightImage, // Import: Top right image - woman spraying perfume
  bottomRightImage // Import: Bottom right image - perfume bottle on pedestal
}) => {
  return (
    <div className="w-full bg-gray-100  py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:h-[50rem] gap-2 md:gap-6">
          {/* Left Large Image */}
          <div className="relative group overflow-hidden rounded-lg md:rounded-2xl row-span-2">
            <img
              src={Images.gridImg1}
              alt="Woman with perfume bottle"
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            
            {/* Shop Now Button */}
            <div className="absolute bottom-3 left-3 md:bottom-8 md:left-8">
              <button className="bg-white text-black px-3 py-1.5 md:px-8 md:py-3 rounded text-xs md:text-base font-light hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="relative group overflow-hidden rounded-lg md:rounded-2xl">
            <img
              src={Images.gridImg2}
              alt="Woman spraying perfume"
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            
            {/* Shop Now Button */}
            <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6">
              <button className="bg-white text-black px-3 py-1.5 md:px-6 md:py-2.5 rounded text-xs md:text-sm font-light hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="relative group overflow-hidden rounded-lg md:rounded-2xl">
            <img
              src={Images.gridImg3}
              alt="Perfume bottle on pedestal"
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            
            {/* Shop Now Button */}
            <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6">
              <button className="bg-black text-white px-3 py-1.5 md:px-6 md:py-2.5 rounded text-xs md:text-sm font-light hover:bg-gray-800 transition-all duration-300 shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridCTA;