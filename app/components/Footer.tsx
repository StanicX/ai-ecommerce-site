import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Shop & Help */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Online Shopping</h3>
              <ul className="space-y-3">
                <li><Link href="/men" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Men</Link></li>
                <li><Link href="/women" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Women</Link></li>
                <li><Link href="/kids" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Kids</Link></li>
                <li><Link href="/home-living" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Home & Living</Link></li>
                <li><Link href="/beauty" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Beauty</Link></li>
                <li><Link href="/gift-cards" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Gift Cards</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">FAQ</Link></li>
                <li><Link href="/shipping" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Shipping & Delivery</Link></li>
                <li><Link href="/returns" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Returns & Exchanges</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Policies & About */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Policies</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Terms of Service</Link></li>
                <li><Link href="/security" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Security</Link></li>
                <li><Link href="/sitemap" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Sitemap</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">About</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Press</Link></li>
                <li><Link href="/corporate-info" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">Corporate Information</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Connect With Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiMail className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <a href="mailto:support@loome.com" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                    support@loome.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FiPhone className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <a href="tel:+18001234567" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                    +1 (800) 123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <FiMapPin className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    123 Fashion Street, New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200] transition-colors">
                  <FiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* App Downloads */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">Experience Loomé App</h3>
            <div className="space-y-3">
              <a href="#" className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.9 5c-.7.1-1.5.5-2.1 1-.5.5-1 1.3-1.2 2.2-.2.8 0 2 .5 2.9.1.2.2.4.4.5-1.2.1-1.5 0-2.2-.2-1.4-.6-2.9-1.9-3.5-3.3-.3-.6-.3-.7-.6-1.4-.2-.5-.4-.9-.5-1-.1-.1-.3-.3-.4-.6-.2-.2-.3-.4-.5-.4-.1 0-.4 0-.5.1-.1 0-.3.1-.4.2 0 0-.1 0-.2.1-.5.2-.9.5-1.2.9C5.1 7 5 7.4 5 8c0 .5.1.9.3 1.3.5.9 1.1 1.7 2 2.3.4.3.5.3.4.4-.1 0-.6.1-1.2.2-.8.1-.9.2-1.1.4-.2.2-.3.6-.1.9.1.1.3.3.5.4.3.2.9.5 1.1.6 1.1.5 2 .7 3.1.8.5 0 .6 0 .6.1s-.1.9-.2 1.2c-.4 1.3-1.3 2.1-2.6 2.2l-.3 2.5c.4-.1.6-.2 1-.3.9-.3 1.7-.9 2.3-1.6.6-.7 1.1-1.5 1.4-2.3.2-.5.4-1.1.4-1.2.1-.3.3-.3 1.1-.2.9.2 1.9.2 2.8.1 1.6-.2 3.3-.6 4.4-1.3.7-.3 1.3-.8 1.8-1.2.4-.4.9-1.1 1.1-1.7.1-.3.2-.4.2-.9 0-.4 0-.5-.1-.7 0-.1-.1-.3-.1-.4-.2-.4-.4-.8-.8-1.1L23 8c-.3-.3-.4-.3-.7-.1-.1.1-.6.5-.9.8-.3.2-.6.5-.6.6 0 .2.2.6.5 1 .3.3.3.4.3.5s-.1.1-.2 0c-.7-.4-1.5-1.4-1.3-1.8.1-.2.2-.2.9-.5.7-.2 1.3-.6 1.9-1 .6-.5 1.1-1.1 1.3-1.7.1-.2.2-.5.2-.7v-.4l-1.3.4c-.7.2-1.4.5-1.5.5-.2.1-.2 0-.6-.2-.6-.4-1.7-.8-2.4-.9l-.4.9c-.1.5-.1.9-.1 1 0 .1-.1.2-.2.1-.1 0-.1-.1-.1-.4v-.3l-.6.1h-.7zm.1-2.1c-.8.3-1.3.6-1.9 1.1.1-.4.3-.8.4-1 .2-.3.5-.6.8-.7.3-.1.3-.1.8-.1.6 0 .6 0 .6.1 0 0 0 .2-.1.3-.2.1-.3.2-.6.3z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm8.5-11.8l-5-2.8v3.6l3 1.7-3 1.7v3.6l5-2.8V8.7zm1 13.8h5c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5h-5v20z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 dark:text-white uppercase mb-4">We Accept</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs font-medium flex items-center">
                  <span className="font-bold mr-1">VISA</span> Credit/Debit
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs font-medium flex items-center">
                  <span className="font-bold mr-1">MasterCard</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs font-medium flex items-center">
                  <span className="font-bold mr-1">American Express</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs font-medium flex items-center">
                  <span className="font-bold mr-1">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Loomé. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 