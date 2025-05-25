'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';

interface AuthMenuProps {
  isLoggedIn?: boolean;
  userName?: string;
}

const AuthMenu: React.FC<AuthMenuProps> = ({ 
  isLoggedIn = false, 
  userName = 'User'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Auth Button */}
      <button 
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiUser className="h-5 w-5" />
        <span className="hidden md:block text-sm font-medium">
          {isLoggedIn ? userName : 'Profile'}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-30 border border-gray-200 dark:border-gray-700">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-800 dark:text-white">Welcome</h3>
            {!isLoggedIn ? (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">To access account and manage orders</p>
                <Link 
                  href="/login" 
                  className="block mt-3 text-center border border-yellow-400 text-gray-800 dark:text-white bg-yellow-400 py-2 rounded-md font-medium text-sm hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  LOGIN / SIGNUP
                </Link>
              </>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Hello, {userName}</p>
            )}
          </div>

          <ul className="py-2">
            <li>
              <Link 
                href="/orders" 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link 
                href="/wishlist" 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link 
                href="/gift-cards" 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Gift Cards
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="relative">
              <Link 
                href="/insider" 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                LOOMÉ Insider
                <span className="absolute right-4 top-2 bg-yellow-500 text-gray-900 text-xs px-1.5 py-0.5 rounded-sm font-medium">
                  New
                </span>
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="py-2">
              <li>
                <Link 
                  href="/credit" 
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  LOOMÉ Credit
                </Link>
              </li>
              <li>
                <Link 
                  href="/coupons" 
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Coupons
                </Link>
              </li>
              <li>
                <Link 
                  href="/saved-cards" 
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Saved Cards
                </Link>
              </li>
              <li>
                <Link 
                  href="/saved-vpa" 
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Saved VPA
                </Link>
              </li>
              <li>
                <Link 
                  href="/addresses" 
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Saved Addresses
                </Link>
              </li>
            </ul>
          </div>

          {isLoggedIn && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-3">
              <button 
                className="w-full text-sm text-left text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                onClick={() => {
                  console.log('Logging out...');
                  setIsOpen(false);
                  // Add your logout logic here
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthMenu; 