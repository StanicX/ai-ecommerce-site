"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Filter, ChevronDown, X, Star } from 'lucide-react';

// Mock data for watches
const watchesProducts = [
  {
    id: "w1",
    name: "Alexandre Christie Stainless Steel Straps Watch",
    category: "watches",
    subcategory: "men",
    price: 14395,
    originalPrice: 15999,
    discount: 10,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Elegant stainless steel watch with precision movement.",
    colors: ["Silver", "Black"],
    sizes: ["One Size"],
    rating: 4.2,
    reviews: 2900
  },
  {
    id: "w2",
    name: "WROGN Men Analogue Watch",
    category: "watches",
    subcategory: "men",
    price: 749,
    originalPrice: 3749,
    discount: 80,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Classic analogue watch for men with leather strap.",
    colors: ["Brown", "Black"],
    sizes: ["One Size"],
    rating: 4.3,
    reviews: 2900
  },
  {
    id: "w3",
    name: "DressBerry Women Analogue Watch",
    category: "watches",
    subcategory: "women",
    price: 720,
    originalPrice: 3600,
    discount: 80,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Stylish analogue watch for women.",
    colors: ["Rose Gold", "Silver"],
    sizes: ["One Size"],
    rating: 4.3,
    reviews: 2900
  },
  {
    id: "w4",
    name: "Alexandre Christie Stainless Steel Straps Watch",
    category: "watches",
    subcategory: "men",
    price: 16656,
    originalPrice: 22150,
    discount: 30,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Premium stainless steel watch with sophisticated design.",
    colors: ["Silver", "Gold"],
    sizes: ["One Size"],
    rating: 4.2,
    reviews: 2900
  },
  {
    id: "w5",
    name: "Timex Women Bracelet Analogue Watch",
    category: "watches",
    subcategory: "women",
    price: 1272,
    originalPrice: 2495,
    discount: 49,
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Elegant bracelet analogue watch for women.",
    colors: ["Rose Gold", "Gold"],
    sizes: ["One Size"],
    rating: 4.6,
    reviews: 3800
  },
  {
    id: "w6",
    name: "Timex Women Multi Function Watch",
    category: "watches",
    subcategory: "women",
    price: 2013,
    originalPrice: 3995,
    discount: 44,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Multi-function watch with versatile features.",
    colors: ["Rose Gold"],
    sizes: ["One Size"],
    rating: 4.5,
    reviews: 558
  },
  {
    id: "w7",
    name: "Alexandre Christie Men Automatic Motion Watch",
    category: "watches",
    subcategory: "men",
    price: 35995,
    originalPrice: 39995,
    discount: 10,
    image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Premium automatic motion watch with luxurious design.",
    colors: ["Blue", "Black"],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 220
  },
  {
    id: "w8",
    name: "JOKER & WITCH MOP Dial Double Wrap Watch",
    category: "watches",
    subcategory: "women",
    price: 1499,
    originalPrice: 3999,
    discount: 60,
    image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Stylish MOP dial watch with double wrap strap.",
    colors: ["Pearl", "Gold"],
    sizes: ["One Size"],
    rating: 4.2,
    reviews: 50
  }
];

// Filter options for watches
const filterOptions = {
  subcategories: ['men', 'women', 'smart watches'],
  brands: ['Alexandre Christie', 'WROGN', 'DressBerry', 'Timex', 'JOKER & WITCH', 'GIO COLLECTION'],
  colors: ['Silver', 'Black', 'Rose Gold', 'Gold', 'Blue', 'Brown'],
  priceRanges: ['Under ₹1000', '₹1000 - ₹5000', '₹5000 - ₹15000', 'Over ₹15000']
};

const WatchesPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    subcategories: [] as string[],
    brands: [] as string[],
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
      brands: [],
      colors: [],
      priceRanges: []
    });
  };
  
  // Filter the products based on selected filters
  const filteredProducts = watchesProducts.filter(product => {
    // If no filters are selected, show all products
    if (
      selectedFilters.subcategories.length === 0 &&
      selectedFilters.brands.length === 0 &&
      selectedFilters.colors.length === 0 &&
      selectedFilters.priceRanges.length === 0
    ) {
      return true;
    }
    
    // Check if product matches selected subcategories
    const matchesSubcategory = selectedFilters.subcategories.length === 0 || 
      selectedFilters.subcategories.includes(product.subcategory);
    
    // Check if product matches selected brands
    const matchesBrand = selectedFilters.brands.length === 0 || 
      (product.name && selectedFilters.brands.some(brand => product.name.includes(brand)));
    
    // Check if product matches selected colors
    const matchesColor = selectedFilters.colors.length === 0 || 
      product.colors.some(color => selectedFilters.colors.includes(color));
    
    // Check if product matches selected price ranges
    const matchesPrice = selectedFilters.priceRanges.length === 0 || 
      selectedFilters.priceRanges.some(range => {
        if (range === 'Under ₹1000') return product.price < 1000;
        if (range === '₹1000 - ₹5000') return product.price >= 1000 && product.price < 5000;
        if (range === '₹5000 - ₹15000') return product.price >= 5000 && product.price < 15000;
        if (range === 'Over ₹15000') return product.price >= 15000;
        return false;
      });
    
    return matchesSubcategory && matchesBrand && matchesColor && matchesPrice;
  });
  
  // Count active filters
  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, filters) => count + filters.length, 
    0
  );
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Watches</h1>
          <span className="text-gray-500">{filteredProducts.length} items</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">FILTERS</h2>
                {activeFilterCount > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-pink-500 hover:text-pink-600 font-medium"
                  >
                    CLEAR ALL
                  </button>
                )}
              </div>
              
              {/* Categories */}
              <div className="border-t border-gray-200 py-5">
                <h3 className="font-medium mb-4 text-gray-700">Categories</h3>
                <div className="space-y-3">
                  {filterOptions.subcategories.map(subcategory => (
                    <div key={subcategory} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`subcategory-${subcategory}`}
                        checked={selectedFilters.subcategories.includes(subcategory)}
                        onChange={() => toggleFilter('subcategories', subcategory)}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`subcategory-${subcategory}`} 
                        className="ml-3 text-sm text-gray-600 capitalize"
                      >
                        {subcategory === 'men' ? "Men's Watches" : 
                         subcategory === 'women' ? "Women's Watches" : 
                         "Smart Watches"}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brands */}
              <div className="border-t border-gray-200 py-5">
                <h3 className="font-medium mb-4 text-gray-700">Brand</h3>
                <div className="space-y-3">
                  {filterOptions.brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${brand}`}
                        checked={selectedFilters.brands.includes(brand)}
                        onChange={() => toggleFilter('brands', brand)}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`brand-${brand}`} 
                        className="ml-3 text-sm text-gray-600"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Colors */}
              <div className="border-t border-gray-200 py-5">
                <h3 className="font-medium mb-4 text-gray-700">Color</h3>
                <div className="space-y-3">
                  {filterOptions.colors.map(color => (
                    <div key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`color-${color}`}
                        checked={selectedFilters.colors.includes(color)}
                        onChange={() => toggleFilter('colors', color)}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`color-${color}`} 
                        className="ml-3 text-sm text-gray-600 flex items-center"
                      >
                        <span 
                          className="w-4 h-4 mr-2 rounded-full inline-block border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></span>
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price */}
              <div className="border-t border-gray-200 py-5">
                <h3 className="font-medium mb-4 text-gray-700">Price</h3>
                <div className="space-y-3">
                  {filterOptions.priceRanges.map(range => (
                    <div key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`price-${range}`}
                        checked={selectedFilters.priceRanges.includes(range)}
                        onChange={() => toggleFilter('priceRanges', range)}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-400"
                      />
                      <label 
                        htmlFor={`price-${range}`} 
                        className="ml-3 text-sm text-gray-600"
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
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="flex items-center justify-between w-full bg-white rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2 text-gray-500" />
                <span className="font-medium">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              <ChevronDown size={18} className="text-gray-500" />
            </button>
            
            {/* Mobile filters panel */}
            {showFilters && (
              <div className="fixed inset-0 bg-white z-50 overflow-auto p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                
                {activeFilterCount > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-pink-500 hover:text-pink-600 mb-4 font-medium"
                  >
                    Clear All Filters
                  </button>
                )}
                
                {/* Mobile filters content - same structure as desktop but optimized for mobile */}
                <div className="py-4 border-t border-gray-200">
                  <h3 className="font-medium mb-4 text-gray-700">Categories</h3>
                  <div className="space-y-3">
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
                          className="ml-3 text-base text-gray-600 capitalize"
                        >
                          {subcategory === 'men' ? "Men's Watches" : 
                           subcategory === 'women' ? "Women's Watches" : 
                           "Smart Watches"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-200">
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
                  <p className="text-lg text-gray-600">No products found. Try adjusting your filters.</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition product-card">
                    <Link href={`/product/${product.id}`}>
                      <div className="relative aspect-square">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.discount > 0 && (
                          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}% OFF
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 space-y-2 product-info">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 font-medium">{product.rating}</span>
                          </div>
                          <span className="mx-1">•</span>
                          <span>{product.reviews.toLocaleString()}</span>
                        </div>
                        
                        <h3 className="font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                        
                        <div className="flex items-center space-x-2 mt-auto pt-2">
                          <span className="font-semibold text-gray-900">Rs. {product.price}</span>
                          <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice}</span>
                          <span className="text-sm font-medium text-pink-500">({product.discount}% OFF)</span>
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
    </div>
  );
};

export default WatchesPage; 