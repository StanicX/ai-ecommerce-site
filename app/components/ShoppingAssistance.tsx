import React from 'react';
import Link from 'next/link';
import { FiClock, FiTruck, FiCreditCard, FiRefreshCw, FiHeadphones, FiMapPin } from 'react-icons/fi';

const ShoppingAssistance = () => {
  const services = [
    {
      icon: <FiClock className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "Quick Delivery",
      description: "Free delivery on orders above $50",
      link: "/shipping"
    },
    {
      icon: <FiTruck className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "Track Orders",
      description: "Real-time tracking updates",
      link: "/track-order"
    },
    {
      icon: <FiCreditCard className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "Secure Payment",
      description: "Multiple payment methods",
      link: "/payment"
    },
    {
      icon: <FiRefreshCw className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      link: "/returns"
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "24/7 Support",
      description: "Get help anytime you need",
      link: "/support"
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-[#ffd200] dark:text-[#ffd200]" />,
      title: "Store Locator",
      description: "Find stores near you",
      link: "/stores"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Can We Help You?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Discover how we make your shopping experience seamless</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/help-center" 
            className="inline-flex items-center font-medium text-[#ffd200] dark:text-[#ffd200] hover:text-yellow-600 dark:hover:text-yellow-400"
          >
            Visit our Help Center
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAssistance; 