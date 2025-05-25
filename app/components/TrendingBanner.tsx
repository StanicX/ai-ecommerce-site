import React from 'react';
import Link from 'next/link';

const TrendingBanner = () => {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 py-8 border-t border-b border-yellow-100 dark:border-yellow-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#ffd200] dark:text-[#ffd200] mb-2">TRENDING NOW</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-4">
            <Link href="/kids/back-to-school" className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-colors">
              #BackToSchool
            </Link>
            <Link href="/kids/summer-essentials" className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-colors">
              #SummerEssentials
            </Link>
            <Link href="/kids/new-arrivals" className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-colors">
              #NewArrivals
            </Link>
            <Link href="/kids/footwear" className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-colors">
              #KidsFootwear
            </Link>
            <Link href="/kids/sale" className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-2 rounded-full text-sm font-bold text-[#ffd200] dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/60 transition-colors">
              #SpecialSale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBanner; 