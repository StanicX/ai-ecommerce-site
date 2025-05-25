"use client";

import React from 'react';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import FeaturedBrands from './components/FeaturedBrands';
import ShoppingAssistance from './components/ShoppingAssistance';
import Newsletter from './components/Newsletter';
import ShopCombos from './components/ShopCombos';
import Link from 'next/link';
import { products } from './data/products';

export default function Home() {
  // Filter products by category - show more products now
  const menProducts = products.filter(product => product.category === 'men').slice(0, 8);
  const womenProducts = products.filter(product => product.category === 'women').slice(0, 8);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      
      {/* Featured collections */}
      <section className="max-w-7xl mx-auto py-16">
        {/* Men's collection */}
        <div className="space-y-8 mb-16">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Men's Collection</h2>
            <Link href="/men" className="text-[#ffd200] hover:text-yellow-600 dark:text-[#ffd200] dark:hover:text-yellow-400 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Women's collection */}
        <div className="space-y-8 mb-16">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Women's Collection</h2>
            <Link href="/women" className="text-[#ffd200] hover:text-yellow-600 dark:text-[#ffd200] dark:hover:text-yellow-400 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Shop by category */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/men" className="relative h-80 group overflow-hidden rounded-lg shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Men's Collection"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Men</h3>
                <p className="text-gray-200 mt-1">View Collection</p>
              </div>
            </Link>
            
            <Link href="/women" className="relative h-80 group overflow-hidden rounded-lg shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1623535074756-a1ebad705717?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Women's Collection"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Women</h3>
                <p className="text-gray-200 mt-1">View Collection</p>
              </div>
            </Link>
            
            <Link href="/kids" className="relative h-80 group overflow-hidden rounded-lg shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1626128665085-483747621778?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Kids Collection"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Kids</h3>
                <p className="text-gray-200 mt-1">View Collection</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Shop Combos Section */}
      <ShopCombos />
      
      {/* Featured Brands */}
      <FeaturedBrands />
      
      {/* Promotions section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">Special Offers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">New Season Collection</h3>
                <p className="text-gray-600 dark:text-gray-300">Discover the latest trends for the upcoming season with exclusive styles.</p>
                <Link href="/women" className="inline-block bg-[#ffd200] text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6">
                <img
                  src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="New Season Collection"
                  className="w-full h-48 md:h-64 object-cover rounded-md"
                />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Summer Sale</h3>
                <p className="text-gray-600 dark:text-gray-300">Up to 50% off on selected items. Limited time offer, don't miss out!</p>
                <Link href="/men" className="inline-block bg-[#ffd200] text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6">
                <img
                  src="https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Summer Sale"
                  className="w-full h-48 md:h-64 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shopping Assistance */}
      <ShoppingAssistance />
      
      {/* Newsletter Subscription */}
      <Newsletter />
    </div>
  );
} 