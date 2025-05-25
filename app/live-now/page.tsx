'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiShoppingBag, FiHeart } from 'react-icons/fi';

interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  endTime: string;
  category: string;
}

export default function LiveNowPage() {
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: 'd1',
      title: 'Summer Collection Flash Sale',
      description: 'Get up to 50% off on selected summer items',
      originalPrice: 199.99,
      salePrice: 99.99,
      discount: 50,
      image: '/images/deals/summer-sale.jpg',
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
      category: 'Summer Collection'
    },
    {
      id: 'd2',
      title: 'Weekend Special',
      description: 'Limited time offer on premium items',
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      image: '/images/deals/weekend-special.jpg',
      endTime: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), // 48 hours from now
      category: 'Premium Collection'
    },
    {
      id: 'd3',
      title: 'Clearance Sale',
      description: 'Last chance to grab these amazing deals',
      originalPrice: 159.99,
      salePrice: 79.99,
      discount: 50,
      image: '/images/deals/clearance.jpg',
      endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), // 12 hours from now
      category: 'Clearance'
    }
  ]);

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: { hours: number; minutes: number; seconds: number } }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: { [key: string]: { hours: number; minutes: number; seconds: number } } = {};
      
      deals.forEach(deal => {
        const endTime = new Date(deal.endTime).getTime();
        const now = new Date().getTime();
        const difference = endTime - now;

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newTimeLeft[deal.id] = { hours, minutes, seconds };
        } else {
          newTimeLeft[deal.id] = { hours: 0, minutes: 0, seconds: 0 };
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [deals]);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Live Now</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't miss out on these amazing deals! Limited time offers with countdown timers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {deal.discount}% OFF
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {deal.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiClock className="mr-1" />
                    <span className="text-sm">
                      {formatTime(timeLeft[deal.id]?.hours || 0)}:
                      {formatTime(timeLeft[deal.id]?.minutes || 0)}:
                      {formatTime(timeLeft[deal.id]?.seconds || 0)}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {deal.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${deal.salePrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${deal.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#ffd200] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#ffd200]/90 transition-colors flex items-center justify-center">
                    <FiShoppingBag className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-2 text-gray-500 hover:text-[#ffd200] transition-colors">
                    <FiHeart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop-now"
            className="inline-flex items-center text-[#ffd200] hover:text-[#ffd200]/90 font-medium"
          >
            View All Deals
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 