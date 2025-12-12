import React, { useState } from 'react';
import { ShoppingCart, Search, SlidersHorizontal, ArrowLeft, CreditCard, Smartphone, Check } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Images } from '../assets/Images';

// Product data - Images matched to your Images.js file
const ProductsData = [
  { id: 1, name: "Ophylia Intense", price: 350, image: Images.ophyliaIntense, description: "A bold, long-lasting fragrance with a rich floral-oriental profile." },
  { id: 2, name: "Pegasus", price: 350, image: Images.pegasus, description: "A fresh, slightly sweet scent inspired by masculine elegance and charm." },
  { id: 3, name: "Luxe", price: 550, image: Images.raed, description: "A premium, luxurious blend with warm woody and amber notes." },
  { id: 4, name: "Paradox", price: 500, image: Images.paradoxOrient, description: "A mysterious scent that balances sweetness and spice with a soft finish." },
  { id: 5, name: "Velvet Oud", price: 400, image: Images.velvetOUD, description: "A deep, velvety oud fragrance with smoky undertones and lasting depth." },
  { id: 6, name: "Khamarah", price: 550, image: Images.khamrah, description: "A sweet, spicy gourmand scent known for its strong projection and longevity." },
  { id: 7, name: "Ministry of Oud", price: 650, image: Images.OUDindonesian, description: "An intense, dark oud blend crafted for lovers of strong Middle Eastern scents." },
  { id: 8, name: "Mousuf", price: 400, image: Images.mousuf, description: "A warm, fruity-woody fragrance that's crowd-pleasing and very wearable." },
  { id: 9, name: "After Sunset", price: 350, image: Images.afterSunset, description: "A smooth, airy fragrance perfect for evening wear with fresh-floral vibes." },
  { id: 10, name: "Weekend Berries", price: 300, image: Images.berriesWeekend, description: "A playful fruity fragrance bursting with sweet berry freshness." },
  { id: 11, name: "Hayaati Beau", price: 400, image: Images.hayaati, description: "A refined, masculine scent with a blend of citrus, woods, and soft spice." },
  { id: 12, name: "Explore The One", price: 350, image: Images.exploreTheOne, description: "A balanced everyday fragrance combining freshness with warm undertones." },
  { id: 13, name: "Nabeez", price: 500, image: Images.nabeez, description: "A deep, sweet, resinous scent inspired by Arabian traditional blends." },
  { id: 14, name: "Mocha Wood", price: 350, image: Images.mochawood, description: "A cozy fragrance mixing coffee, wood, and warm spice accords." },
  { id: 15, name: "Hamraa", price: 350, image: Images.hamraa, description: "A warm, spicy fragrance with Middle Eastern character and rich depth." },
  { id: 16, name: "Montera Instant Love", price: 400, image: Images.instantLove, description: "A vibrant, sweet, citrusy-fruity perfume that stands out instantly." },
  { id: 17, name: "Montera Rogue Tobacco", price: 400, image: Images.rougeTobacco, description: "A bold tobacco fragrance with sweetness and smoky richness." },
  { id: 18, name: "Legend Oud", price: 820, image: Images.paradoxRossa, description: "A high-end, powerful oud scent crafted with premium aromatic woods." }
];

// Product Detail Page Component
const ProductDetail = ({ product, onBack, onCheckout }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 md:mb-8 transition"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-light">Back to Shop</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 flex items-center justify-center">
            <div className="w-full aspect-square flex items-center justify-center">
              {/* PRODUCT DETAIL IMAGE: Replace placeholder with actual product image */}
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                  <p className="text-sm text-gray-400">Product Image</p>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
              GH₵{product.price}
            </p>
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Size</span>
                <span className="font-normal">100ml EDP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Type</span>
                <span className="font-normal">Eau de Parfum</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Longevity</span>
                <span className="font-normal">8-12 hours</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-light text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseQty}
                  className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="text-lg font-normal w-12 text-center">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-light">Total</span>
              <span className="text-2xl font-normal">GH₵{product.price * quantity}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => onCheckout(product, quantity)}
              className="w-full py-4 bg-black text-white rounded-lg text-base font-normal hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Checkout Page Component
const CheckoutPage = ({ product, quantity, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    momoNumber: '',
    momoNetwork: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: ''
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const total = product.price * quantity;
  const deliveryFee = 20;
  const grandTotal = total + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here
    console.log('Order submitted:', { product, quantity, paymentMethod, formData });
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We'll send a confirmation email shortly.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 md:mb-8 transition"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-light">Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-normal mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-normal mb-4">Delivery Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-normal mb-4">Payment Method</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Mobile Money Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('momo')}
                    className={`p-4 border-2 rounded-lg transition ${
                      paymentMethod === 'momo'
                        ? 'border-black bg-white'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <Smartphone className="mx-auto mb-2" size={24} />
                    <p className="text-sm font-normal">Mobile Money</p>
                  </button>

                  {/* Card Payment Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-lg transition ${
                      paymentMethod === 'card'
                        ? 'border-black bg-white'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <CreditCard className="mx-auto mb-2" size={24} />
                    <p className="text-sm font-normal">Card Payment</p>
                  </button>
                </div>

                {/* Mobile Money Fields */}
                {paymentMethod === 'momo' && (
                  <div className="space-y-4">
                    <select
                      name="momoNetwork"
                      required
                      value={formData.momoNetwork}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    >
                      <option value="">Select Network</option>
                      <option value="mtn">MTN Mobile Money</option>
                      <option value="vodafone">Vodafone Cash</option>
                      <option value="airteltigo">AirtelTigo Money</option>
                    </select>
                    <input
                      type="tel"
                      name="momoNumber"
                      placeholder="Mobile Money Number"
                      required
                      value={formData.momoNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                  </div>
                )}

                {/* Card Payment Fields */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      required
                      maxLength="19"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        required
                        maxLength="5"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                      />
                      <input
                        type="text"
                        name="cardCVV"
                        placeholder="CVV"
                        required
                        maxLength="3"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!paymentMethod}
                className="w-full py-4 bg-black text-white rounded-lg text-base font-normal hover:bg-gray-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Complete Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h3 className="text-lg font-normal mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  {/* CHECKOUT THUMBNAIL IMAGE: Product thumbnail in order summary */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-normal mb-1">{product.name}</p>
                    <p className="text-xs text-gray-600">Qty: {quantity}</p>
                  </div>
                  <p className="text-sm font-normal">GH₵{total}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>GH₵{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span>GH₵{deliveryFee}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-lg font-normal">Total</span>
                <span className="text-2xl font-normal">GH₵{grandTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Shop Page Component
const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [currentView, setCurrentView] = useState('shop'); // 'shop', 'detail', 'checkout'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);

  // Filter products
  const filteredProducts = ProductsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceFilter === 'under400') matchesPrice = product.price < 400;
    if (priceFilter === '400to500') matchesPrice = product.price >= 400 && product.price <= 500;
    if (priceFilter === 'over500') matchesPrice = product.price > 500;
    
    return matchesSearch && matchesPrice;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleCheckout = (product, quantity) => {
    setSelectedProduct(product);
    setCheckoutQuantity(quantity);
    setCurrentView('checkout');
  };

  const handleBack = () => {
    if (currentView === 'checkout') {
      setCurrentView('detail');
    } else {
      setCurrentView('shop');
      setSelectedProduct(null);
    }
  };

  const handleBackToShop = () => {
    setCurrentView('shop');
    setSelectedProduct(null);
  };

  // Render current view
  if (currentView === 'detail' && selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBack} onCheckout={handleCheckout} />;
  }

  if (currentView === 'checkout' && selectedProduct) {
    return <CheckoutPage product={selectedProduct} quantity={checkoutQuantity} onBack={handleBackToShop} />;
  }

  // Shop listing view
  return (
    <>
    <Navbar />
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 mt-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-800">
            Shop perfumeGal
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-light">
            Discover our complete collection of premium fragrances
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search perfumes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>
          <div className="relative">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full md:w-48 pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition appearance-none cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under400">Under GH₵400</option>
              <option value="400to500">GH₵400 - GH₵500</option>
              <option value="over500">Over GH₵500</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Showing {filteredProducts.length} of {ProductsData.length} products
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                {/* PRODUCT GRID IMAGE: Main product image in shop grid */}
                <div className="aspect-[3/4] bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 bg-gray-200 rounded-full"></div>
                        <p className="text-xs text-gray-400">Image</p>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xs md:text-sm lg:text-base font-light text-gray-800 mb-2 text-center min-h-[2.5rem] flex items-center justify-center">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 font-light mb-3 text-center line-clamp-2 min-h-[2rem]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg font-normal text-gray-900">
                    GH₵{product.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                    className="p-1.5 md:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    aria-label={`View ${product.name}`}
                  >
                    <ShoppingCart size={14} className="md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-2">No products found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
   </>
  );
};

export default ShopPage;