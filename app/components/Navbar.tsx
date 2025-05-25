'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingBag, FiHeart, FiUser, FiSearch, FiDownload, FiMapPin, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import AuthMenu from './AuthMenu';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  
  // Mock cart count - in a real app this would come from a cart context
  const cartItemCount = 2;

  // SVG Logo as data URI
  const logoSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 200 50">
      <rect width="200" height="50" fill="none"/>
      <circle cx="25" cy="25" r="20" fill="#FFD200"/>
      <path d="M15 15 L15 35 L20 35 L20 15 Z M25 15 L25 35 L30 35 L30 28 L35 35 L40 15 Z" fill="#333333" strokeWidth="1"/>
      <text x="50" y="32" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#333333">LOOMÉ</text>
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 transition-colors">
      {/* Top utility bar - hidden on mobile */}
      <div className="hidden sm:block bg-gray-100 dark:bg-gray-700 py-1 text-xs">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/offers" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200]">Offers</Link>
            <Link href="/fanbook" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200]">Fanbook</Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200] flex items-center">
              <FiDownload className="mr-1" /> App
            </Link>
            <Link href="/stores" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200] flex items-center">
              <FiMapPin className="mr-1" /> Stores
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200]">Contact</Link>
            <Link href="/orders/track" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200]">Track Order</Link>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="border-b border-gray-200 dark:border-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between">
          {/* Logo and menu button */}
          <div className="flex items-center">
            <button 
              className="mr-2 sm:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
            <Link href="/" className="flex-shrink-0">
              {logoSvg}
            </Link>
          </div>
          
          {/* Search and icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop search */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-40 lg:w-64 pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-[#ffd200] focus:border-[#ffd200] text-sm transition-colors"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Mobile search icon */}
            <button 
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <FiSearch className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              
              {/* Auth Menu (replace login link) */}
              <AuthMenu isLoggedIn={false} />
              
              <Link href="/wishlist" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200]">
                <FiHeart className="h-5 w-5" />
              </Link>
              
              <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] relative">
                <FiShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-gray-900 transform bg-[#ffd200] rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar - conditionally rendered */}
      {isMobileSearchOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-700 p-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-[#ffd200] focus:border-[#ffd200] text-sm transition-colors"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
      
      {/* Categories navbar */}
      <div className={`bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${isMenuOpen ? 'block' : 'hidden sm:block'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Desktop horizontal scrolling categories */}
          <div className="hidden sm:flex overflow-x-auto py-1.5 space-x-1">
            <Link href="/men" className="whitespace-nowrap px-3 py-1.5 rounded-full text-gray-800 dark:text-white text-sm font-medium bg-[#ffd200] hover:bg-[#ffd200]/90">
              MEN
            </Link>
            <Link href="/women" className="whitespace-nowrap px-3 py-1.5 rounded-full text-gray-800 dark:text-white text-sm font-medium bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
              WOMEN
            </Link>
            <Link href="/kids" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              KIDS
            </Link>
            <Link href="/live-now" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              LIVE NOW
            </Link>
            <Link href="/shop-now" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              SHOP NOW
            </Link>
            <Link href="/plus-size" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              PLUS SIZE
            </Link>
            <Link href="/accessories" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              ACCESSORIES
            </Link>
            <Link href="/official-merch" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              OFFICIAL MERCH
            </Link>
            <Link href="/sneakers" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              SNEAKERS
            </Link>
            <Link href="/loome-air" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              LOOMÉ AIR
            </Link>
            <Link href="/heavy-duty" className="whitespace-nowrap px-3 py-1.5 text-gray-800 dark:text-white text-sm font-medium hover:text-[#ffd200] dark:hover:text-[#ffd200]">
              HEAVY DUTY
            </Link>
          </div>
          
          {/* Mobile dropdown menu */}
          <div className="sm:hidden py-2 space-y-1">
            <Link href="/men" className="block px-3 py-2 text-sm font-medium bg-[#ffd200] text-gray-800 rounded">
              MEN
            </Link>
            <Link href="/women" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              WOMEN
            </Link>
            <Link href="/kids" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              KIDS
            </Link>
            <Link href="/live-now" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              LIVE NOW
            </Link>
            <Link href="/shop-now" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              SHOP NOW
            </Link>
            <Link href="/plus-size" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              PLUS SIZE
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
            <Link href="/login" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              LOGIN
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              CONTACT US
            </Link>
            <Link href="/orders/track" className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              TRACK ORDER
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 