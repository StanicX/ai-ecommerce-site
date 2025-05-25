'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ComboItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  count: number;
  colors: number;
  sizes: string;
  imageSrc: string;
  material: string;
  isNew?: boolean;
  discount?: number;
}

const ShopCombos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    // Set initial value
    updateItemsPerView();
    
    // Add event listener
    window.addEventListener('resize', updateItemsPerView);
    
    // Clean up
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const comboItems: ComboItem[] = [
    {
      id: 'plain-tshirts',
      title: 'PLAIN T-SHIRTS',
      subtitle: 'YOUR 365 DAYS ESSENTIAL',
      description: 'PICK ANY 4',
      price: 998,
      count: 12,
      colors: 12,
      sizes: 'S TO 5XL',
      imageSrc: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: '100% COTTON',
      isNew: true
    },
    {
      id: 'polo-tshirts',
      title: 'POLO T-SHIRTS',
      subtitle: 'YOUR SMART CASUAL CHOICE',
      description: 'PICK ANY 3',
      price: 1399,
      count: 10,
      colors: 10,
      sizes: 'M TO 4XL',
      imageSrc: 'https://images.unsplash.com/photo-1571974599782-fac9c7c599f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: '100% COTTON',
      discount: 15
    },
    {
      id: 'plain-shirts',
      title: 'PLAIN SHIRTS',
      subtitle: 'FROM DESK TO DINNER',
      description: 'PICK ANY 3',
      price: 1998,
      count: 10,
      colors: 10,
      sizes: 'S TO 4XL',
      imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: '100% COTTON'
    },
    {
      id: 'cargo-pants',
      title: 'CARGO PANTS',
      subtitle: 'STYLE & UTILITY',
      description: 'PICK ANY 2',
      price: 1599,
      count: 8,
      colors: 8,
      sizes: '30 TO 40',
      imageSrc: 'https://images.unsplash.com/photo-1509551858629-3c051e4be197?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: 'PREMIUM FABRIC'
    },
    {
      id: 'jeans',
      title: 'CLASSIC JEANS',
      subtitle: 'EVERYDAY READY',
      description: 'PICK ANY 2',
      price: 1699,
      count: 8,
      colors: 8,
      sizes: '30 TO 40',
      imageSrc: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: 'PREMIUM DENIM',
      discount: 10
    },
    {
      id: 'sweatshirts',
      title: 'SWEATSHIRTS',
      subtitle: 'CASUAL COMFORT',
      description: 'PICK ANY 2',
      price: 1499,
      count: 8,
      colors: 8,
      sizes: 'S TO XXL',
      imageSrc: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: 'COTTON BLEND',
      isNew: true
    },
    {
      id: 'formal-shoes',
      title: 'FORMAL SHOES',
      subtitle: 'CLASSIC ELEGANCE',
      description: 'PICK ANY 2',
      price: 2499,
      count: 6,
      colors: 6,
      sizes: '7 TO 12',
      imageSrc: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: 'PREMIUM LEATHER'
    },
    {
      id: 'sports-wear',
      title: 'SPORTS WEAR',
      subtitle: 'PERFORMANCE MEETS STYLE',
      description: 'PICK ANY 3',
      price: 1899,
      count: 7,
      colors: 7,
      sizes: 'S TO XL',
      imageSrc: 'https://images.unsplash.com/photo-1576888820793-7b87b6562598?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      material: 'TECHNICAL FABRIC',
      discount: 20
    }
  ];

  const visibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % comboItems.length;
      items.push(comboItems[index]);
    }
    return items;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comboItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comboItems.length) % comboItems.length);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">SHOP COMBOS</h2>
          <div className="flex justify-center items-center">
            <div className="text-xl text-gray-800 dark:text-gray-200">everyday<span className="text-yellow-400 font-semibold">basics</span></div>
          </div>
          <p className="text-xl mt-5 font-medium text-gray-800 dark:text-gray-200">Loved by 4 Million+ Beyoungsters</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
            <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">Best Selling Combos</span>
          </div>
          <Link href="/combos" className="text-yellow-500 hover:text-yellow-600 font-medium">
            View All Combos
          </Link>
        </div>

        <div className="relative">
          {/* Carousel navigation */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
          
          <div className="px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleItems().map((item) => (
                <div key={item.id} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative pb-[100%]"> {/* 1:1 aspect ratio */}
                      <img 
                        src={item.imageSrc} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                      
                      {item.isNew && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </div>
                      )}
                      
                      {item.discount && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {item.discount}% OFF
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                        <p className="text-sm mt-1 opacity-90">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <div className="font-bold text-gray-800 dark:text-white">{item.description}</div>
                        <div className="bg-yellow-400 text-black px-3 py-1.5 rounded-lg font-bold text-sm">
                          AT ₹{item.price}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-20 h-20 flex items-center justify-center mb-2">
                            <div className="text-xs text-center">
                              <div className="font-semibold text-gray-600 dark:text-gray-300 text-[10px]">{item.material}</div>
                              <div className="flex justify-center mt-2 space-x-1">
                                <div className="rounded-full w-3 h-3 bg-red-500"></div>
                                <div className="rounded-full w-3 h-3 bg-blue-500"></div>
                                <div className="rounded-full w-3 h-3 bg-green-500"></div>
                                <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{item.count}+ COLORS</span>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-20 h-20 flex items-center justify-center mb-2">
                            <div className="text-xs text-center font-semibold text-gray-800 dark:text-white">
                              {item.sizes}
                              <div className="text-xs font-normal mt-2 text-gray-600 dark:text-gray-400">SIZES</div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium hover:text-yellow-500 cursor-pointer">SIZE GUIDE</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2.5 rounded-lg transition-colors duration-200">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Next slide"
          >
            <FiChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-5">Bundle and save with our combo packs. Perfect for refreshing your wardrobe essentials.</p>
          <Link href="/combos" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-lg transition-colors duration-200">
            EXPLORE ALL COMBOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopCombos; 