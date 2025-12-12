import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wider">
              perfumeGal
            </h3>
            <p className="text-sm font-light leading-relaxed">
              Discover the artistry and elegance of our collection of premium perfumes. 
              Enrich your everyday smell with perfumeGal.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-normal text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Popular Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-normal text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-normal text-white">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span className="text-sm font-light">
                  57 2nd DIS Street,<br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+233123456789" className="text-sm font-light hover:text-white transition">
                  +233 24 976 2228
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:info@perfumegal.com" className="text-sm font-light hover:text-white transition">
                  info@perfumegal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-normal text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-sm font-light">
                Get the latest updates on new products and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
              <button className="px-6 py-2.5 bg-white text-gray-900 rounded-r text-sm font-normal hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light">
            <p>© 2024 perfumeGal. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;