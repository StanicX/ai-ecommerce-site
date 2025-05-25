'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';

const PromoTopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#ffd200] text-gray-900 py-2 px-4 text-center text-sm relative">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-2">
        <span className="font-medium">SALE: Up to 70% OFF! Extra 10% OFF on orders above $99</span>
        <span className="hidden sm:inline">|</span>
        <Link href="/sale" className="underline font-bold hover:text-gray-700">Shop Now</Link>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-700"
          aria-label="Close promotion banner"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoTopBanner; 