'use client';

import { useState } from 'react';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, this would call an API endpoint
    setTimeout(() => {
      setSubscribed(true);
      setError('');
    }, 500);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-5">
            <FiMail className="h-6 w-6 text-[#ffd200] dark:text-[#ffd200]" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Subscribe to our newsletter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Stay updated with the latest trends, new arrivals, and exclusive offers.</p>
          
          {subscribed ? (
            <div className="flex items-center justify-center text-green-600 dark:text-green-400">
              <FiCheckCircle className="h-5 w-5 mr-2" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sm:flex max-w-md mx-auto">
              <div className="flex-1 min-w-0">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className={`block w-full px-4 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:ring-[#ffd200] focus:border-[#ffd200] dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400 text-left">{error}</p>}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full px-5 py-3 rounded-md shadow bg-[#ffd200] text-gray-900 font-medium hover:bg-[#e6bd00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd200] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our <a href="/privacy" className="underline hover:text-[#ffd200] dark:hover:text-[#ffd200]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 