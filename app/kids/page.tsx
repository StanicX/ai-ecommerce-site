"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Filter, ChevronDown, X } from 'lucide-react';
import TrendingBanner from '../components/TrendingBanner';
import Newsletter from '../components/Newsletter';

// Mock data for kids products
const kidsProducts = [
  {
    id: "k1",
    name: "Colorful Graphic T-Shirt",
    category: "kids",
    subcategory: "tops",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Fun and colorful graphic t-shirt for children.",
    colors: ["Blue", "Red", "Yellow"],
    sizes: ["2T", "3T", "4T", "5T", "6"],
    rating: 4.7,
    reviews: 85
  },
  {
    id: "k2",
    name: "Comfortable Pull-on Jeans",
    category: "kids",
    subcategory: "bottoms",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519238425857-d6922ed3d389?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Comfortable and durable pull-on jeans for active kids.",
    colors: ["Blue", "Black"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    rating: 4.8,
    reviews: 92
  },
  {
    id: "k3",
    name: "Cozy Hooded Sweatshirt",
    category: "kids",
    subcategory: "outerwear",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Warm and cozy hooded sweatshirt perfect for cooler weather.",
    colors: ["Gray", "Navy", "Pink"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    rating: 4.9,
    reviews: 110
  },
  {
    id: "k4",
    name: "Cute Animal Print Pajamas",
    category: "kids",
    subcategory: "sleepwear",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Adorable and comfortable pajamas with fun animal prints.",
    colors: ["Elephant", "Tiger", "Giraffe"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    rating: 4.8,
    reviews: 76
  },
  {
    id: "k5",
    name: "Waterproof Rain Jacket",
    category: "kids",
    subcategory: "outerwear",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1565530995968-2e619c29a8c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Waterproof and windproof jacket perfect for rainy days.",
    colors: ["Yellow", "Blue", "Pink"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    rating: 4.6,
    reviews: 64
  },
  {
    id: "k6",
    name: "Colorful Sneakers",
    category: "kids",
    subcategory: "footwear",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1551954810-43cd466b9ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Comfortable and stylish sneakers for active children.",
    colors: ["Multicolor", "Blue/Green", "Pink/Purple"],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    rating: 4.7,
    reviews: 88
  },
  {
    id: "k7",
    name: "Denim Overall Dress",
    category: "kids",
    subcategory: "dresses",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1487033858121-f6f74a05c1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Cute and durable denim overall dress for little girls.",
    colors: ["Light Wash", "Dark Wash"],
    sizes: ["2T", "3T", "4T", "5T", "6"],
    rating: 4.5,
    reviews: 52
  },
  {
    id: "k8",
    name: "Dinosaur Print T-Shirt",
    category: "kids",
    subcategory: "tops",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1563074492-9e3ab3564f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Fun dinosaur print t-shirt for kids who love prehistoric creatures.",
    colors: ["Green", "Blue", "Gray"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    rating: 4.8,
    reviews: 104
  }
];

// Filter options for kids products
const filterOptions = {
  subcategories: ['tops', 'bottoms', 'outerwear', 'sleepwear', 'dresses', 'footwear'],
  sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '9', '10', '11', '12', '13'],
  colors: ['Blue', 'Red', 'Yellow', 'Green', 'Pink', 'Gray', 'Navy', 'Black', 'Multicolor'],
  priceRanges: ['Under $20', '$20 - $30', '$30 - $40', 'Over $40']
};

const KidsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    subcategories: [] as string[],
    sizes: [] as string[],
    colors: [] as string[],
    priceRanges: [] as string[]
  });
  
  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[category as keyof typeof prev] as string[];
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [category]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, value]
        };
      }
    });
  };
  
  const clearFilters = () => {
    setSelectedFilters({
      subcategories: [],
      sizes: [],
      colors: [],
      priceRanges: []
    });
  };
  
  // Filter the products based on selected filters
  const filteredProducts = kidsProducts.filter(product => {
    // If no filters are selected, show all products
    if (
      selectedFilters.subcategories.length === 0 &&
      selectedFilters.sizes.length === 0 &&
      selectedFilters.colors.length === 0 &&
      selectedFilters.priceRanges.length === 0
    ) {
      return true;
    }
    
    // Check if product matches selected subcategories
    const matchesSubcategory = selectedFilters.subcategories.length === 0 || 
      selectedFilters.subcategories.includes(product.subcategory);
    
    // Check if product matches selected sizes
    const matchesSize = selectedFilters.sizes.length === 0 || 
      product.sizes.some(size => selectedFilters.sizes.includes(size));
    
    // Check if product matches selected colors
    const matchesColor = selectedFilters.colors.length === 0 || 
      product.colors.some(color => selectedFilters.colors.includes(color));
    
    // Check if product matches selected price ranges
    const matchesPrice = selectedFilters.priceRanges.length === 0 || 
      selectedFilters.priceRanges.some(range => {
        if (range === 'Under $20') return product.price < 20;
        if (range === '$20 - $30') return product.price >= 20 && product.price < 30;
        if (range === '$30 - $40') return product.price >= 30 && product.price < 40;
        if (range === 'Over $40') return product.price >= 40;
        return false;
      });
    
    return matchesSubcategory && matchesSize && matchesColor && matchesPrice;
  });
  
  // Count active filters
  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, filters) => count + filters.length, 
    0
  );
  
  // Format subcategory for display
  const formatSubcategory = (subcategory: string) => {
    return subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
  };
  
  return (
    <>
      <TrendingBanner />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center mb-6">
          <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-8 dark:text-white">Kids Collection</h1>
        
        <div className="flex flex-col md:flex-row">
          {/* Filter sidebar (visible on larger screens) */}
          <div className="hidden md:block w-64 mr-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold dark:text-white">Filters</h2>
                {activeFilterCount > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                <h3 className="font-medium mb-2 dark:text-white">Category</h3>
                <div className="space-y-2">
                  {filterOptions.subcategories.map(subcategory => (
                    <div key={subcategory} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`subcategory-${subcategory}`}
                        checked={selectedFilters.subcategories.includes(subcategory)}
                        onChange={() => toggleFilter('subcategories', subcategory)}
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`subcategory-${subcategory}`} 
                        className="ml-2 text-gray-600 dark:text-gray-300 capitalize"
                      >
                        {formatSubcategory(subcategory)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                <h3 className="font-medium mb-2 dark:text-white">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleFilter('sizes', size)}
                      className={`px-2 py-1 text-sm border rounded 
                        ${selectedFilters.sizes.includes(size) 
                          ? 'bg-pink-500 text-white border-pink-500' 
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                <h3 className="font-medium mb-2 dark:text-white">Color</h3>
                <div className="space-y-2">
                  {filterOptions.colors.map(color => (
                    <div key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`color-${color}`}
                        checked={selectedFilters.colors.includes(color)}
                        onChange={() => toggleFilter('colors', color)}
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`color-${color}`} 
                        className="ml-2 text-gray-600 dark:text-gray-300 capitalize flex items-center"
                      >
                        <span 
                          className="w-4 h-4 mr-2 rounded-full inline-block border border-gray-300 dark:border-gray-600"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></span>
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="font-medium mb-2 dark:text-white">Price</h3>
                <div className="space-y-2">
                  {filterOptions.priceRanges.map(range => (
                    <div key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`price-${range}`}
                        checked={selectedFilters.priceRanges.includes(range)}
                        onChange={() => toggleFilter('priceRanges', range)}
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`price-${range}`} 
                        className="ml-2 text-gray-600 dark:text-gray-300"
                      >
                        {range}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile filter button */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="flex items-center justify-between w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
                <span className="font-medium dark:text-white">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
            </button>
            
            {/* Mobile filters panel */}
            {showFilters && (
              <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 overflow-auto p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold dark:text-white">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={24} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                
                {activeFilterCount > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 mb-4 font-medium"
                  >
                    Clear All Filters
                  </button>
                )}
                
                {/* Mobile filters content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Category</h3>
                    <div className="space-y-2">
                      {filterOptions.subcategories.map(subcategory => (
                        <div key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mob-subcategory-${subcategory}`}
                            checked={selectedFilters.subcategories.includes(subcategory)}
                            onChange={() => toggleFilter('subcategories', subcategory)}
                            className="h-5 w-5 text-pink-500 rounded border-gray-300 focus:ring-pink-400"
                          />
                          <label 
                            htmlFor={`mob-subcategory-${subcategory}`} 
                            className="ml-3 text-base dark:text-gray-300 capitalize"
                          >
                            {formatSubcategory(subcategory)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white dark:bg-gray-800 pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-300">No products found. Try adjusting your filters.</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition product-card">
                    <Link href={`/product/${product.id}`}>
                      <div className="relative aspect-square">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="p-4 space-y-2 product-info">
                        <h3 className="font-medium text-gray-800 dark:text-white line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="ml-1 font-medium">{product.rating}</span>
                          </div>
                          <span className="mx-1">•</span>
                          <span>{product.reviews} reviews</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-auto pt-2">
                          <span className="font-semibold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </>
  );
};

export default KidsPage; 