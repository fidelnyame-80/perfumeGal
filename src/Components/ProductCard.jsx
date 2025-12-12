import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ProductsData from './ProductsData';

const ProductCard = ({ product }) => {
  // product is an object with: id, name, price, image, and description
  //product is a prop passed from Shop.jsx
  
  const handleAddToCart = () => {
    console.log(`Added ${ProductsData.name} to cart!`);
    // Later you'll add real cart functionality here
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="aspect-3/4 bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={ProductsData.name}
          className="w-full h-full object-contain p-3 md:p-4"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center">
        {ProductsData.name}
      </h3>

      {/* Price and Cart Button */}
      <div className="flex items-center justify-between">
        <p className="text-base md:text-lg font-normal text-gray-900">
          GH₵{ProductsData.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          aria-label="Add to cart"
        >
          <ShoppingCart size={14} className="md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;