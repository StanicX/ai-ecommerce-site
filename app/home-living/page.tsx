"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Filter, ChevronDown, X } from 'lucide-react';

// Mock data for home and living products
const homeLivingProducts = [
  {
    id: "h1",
    name: "Decorative Throw Pillow",
    category: "home",
    subcategory: "decor",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1541840031508-494a5a7e8d85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Stylish decorative throw pillow to add comfort and style to any space.",
    colors: ["Gray", "Navy", "Blush", "Sage"],
    sizes: ["18 x 18\"", "20 x 20\""],
    rating: 4.7,
    reviews: 156
  },
  {
    id: "h2",
    name: "Cotton Duvet Cover Set",
    category: "home",
    subcategory: "bedding",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Soft and luxurious 100% cotton duvet cover set with matching pillowcases.",
    colors: ["White", "Gray", "Blue", "Beige"],
    sizes: ["Twin", "Full", "Queen", "King"],
    rating: 4.8,
    reviews: 243
  },
  {
    id: "h3",
    name: "Ceramic Serving Bowl",
    category: "home",
    subcategory: "kitchen",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1603199865784-87a091565abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Handcrafted ceramic serving bowl perfect for entertaining.",
    colors: ["White", "Terracotta", "Black"],
    sizes: ["Medium", "Large"],
    rating: 4.6,
    reviews: 89
  },
  {
    id: "h4",
    name: "Cozy Knit Throw Blanket",
    category: "home",
    subcategory: "decor",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1616594092172-6f51559b38e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Soft and cozy knit throw blanket for added warmth and style.",
    colors: ["Cream", "Gray", "Mustard", "Slate Blue"],
    sizes: ["50 x 60\"", "60 x 80\""],
    rating: 4.9,
    reviews: 178
  },
  {
    id: "h5",
    name: "Set of 4 Wine Glasses",
    category: "home",
    subcategory: "kitchen",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1566498910385-826ed202ae8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Elegant stemmed wine glasses for your dinner parties and evening relaxation.",
    colors: ["Clear"],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 136
  },
  {
    id: "h6",
    name: "Scented Soy Candle",
    category: "home",
    subcategory: "decor",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Hand-poured soy candle with relaxing scents to create a cozy atmosphere.",
    colors: ["Lavender", "Vanilla", "Sandalwood", "Cedar"],
    sizes: ["8 oz", "12 oz"],
    rating: 4.8,
    reviews: 210
  },
  {
    id: "h7",
    name: "Bamboo Bath Mat",
    category: "home",
    subcategory: "bath",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Eco-friendly bamboo bath mat that adds a spa-like feel to your bathroom.",
    colors: ["Natural", "Dark Brown"],
    sizes: ["Small", "Large"],
    rating: 4.5,
    reviews: 94
  },
  {
    id: "h8",
    name: "Set of 3 Decorative Vases",
    category: "home",
    subcategory: "decor",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Set of 3 ceramic vases in complementary colors for a stylish display.",
    colors: ["White/Gray/Blue", "Beige/Brown/Tan"],
    sizes: ["Assorted Sizes"],
    rating: 4.7,
    reviews: 118
  },
  {
    id: "h9",
    name: "Plush Area Rug",
    category: "home",
    subcategory: "flooring",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1612968244170-ea380261f3c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Soft and plush area rug to add warmth and style to any room.",
    colors: ["Ivory", "Gray", "Blue", "Beige"],
    sizes: ["5' x 7'", "8' x 10'"],
    rating: 4.6,
    reviews: 152
  },
  {
    id: "h10",
    name: "Wooden Wall Shelf",
    category: "home",
    subcategory: "furniture",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Floating wooden wall shelf for displaying plants, books, and decor.",
    colors: ["Natural", "Walnut", "White"],
    sizes: ["24\"", "36\""],
    rating: 4.8,
    reviews: 87
  }
];

// Filter options for home and living products
const filterOptions = {
  subcategories: ['decor', 'bedding', 'kitchen', 'bath', 'flooring', 'furniture'],
  colors: ['White', 'Gray', 'Blue', 'Beige', 'Black', 'Natural', 'Cream'],
  priceRanges: ['Under $30', '$30 - $50', '$50 - $80', 'Over $80']
};

const HomeLivingPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    subcategories: [] as string[],
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
      colors: [],
      priceRanges: []
    });
  };
  
  // Filter the products based on selected filters
  const filteredProducts = homeLivingProducts.filter(product => {
    // If no filters are selected, show all products
    if (
      selectedFilters.subcategories.length === 0 &&
      selectedFilters.colors.length === 0 &&
      selectedFilters.priceRanges.length === 0
    ) {
      return true;
    }
    
    // Check if product matches selected subcategories
    const matchesSubcategory = selectedFilters.subcategories.length === 0 || 
      selectedFilters.subcategories.includes(product.subcategory);
    
    // Check if product matches selected colors
    const matchesColor = selectedFilters.colors.length === 0 || 
      product.colors.some(color => selectedFilters.colors.includes(color));
    
    // Check if product matches selected price ranges
    const matchesPrice = selectedFilters.priceRanges.length === 0 || 
      selectedFilters.priceRanges.some(range => {
        if (range === 'Under $30') return product.price < 30;
        if (range === '$30 - $50') return product.price >= 30 && product.price < 50;
        if (range === '$50 - $80') return product.price >= 50 && product.price < 80;
        if (range === 'Over $80') return product.price >= 80;
        return false;
      });
    
    return matchesSubcategory && matchesColor && matchesPrice;
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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">Home & Living</h1>
      
      {/* Featured categories section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {filterOptions.subcategories.map((category) => (
          <div 
            key={category}
            onClick={() => {
              setSelectedFilters({
                ...selectedFilters,
                subcategories: [category]
              });
            }}
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
          >
            <div className="relative h-32 w-full">
              <Image 
                src={`https://source.unsplash.com/500x500/?${category}`}
                alt={formatSubcategory(category)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white font-medium text-lg capitalize">
                  {formatSubcategory(category)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filter sidebar (visible on larger screens) */}
        <div className="hidden md:block w-64 mr-8">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFilterCount > 0 && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Clear All
                </button>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-medium mb-2">Category</h3>
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
                      className="ml-2 text-gray-600 capitalize"
                    >
                      {formatSubcategory(subcategory)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-medium mb-2">Color</h3>
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
                      className="ml-2 text-gray-600"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-2">Price</h3>
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
                      className="ml-2 text-gray-600"
                    >
                      {range}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile filter button and results */}
        <div className="flex-1">
          <div className="md:hidden mb-4">
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
                    className="text-sm text-pink-500 hover:text-pink-600 mb-4"
                  >
                    Clear All Filters
                  </button>
                )}
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-2">
                    {filterOptions.subcategories.map(subcategory => (
                      <div key={subcategory} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-subcategory-${subcategory}`}
                          checked={selectedFilters.subcategories.includes(subcategory)}
                          onChange={() => toggleFilter('subcategories', subcategory)}
                          className="h-5 w-5 text-pink-500 focus:ring-pink-400"
                        />
                        <label 
                          htmlFor={`mobile-subcategory-${subcategory}`} 
                          className="ml-2 text-gray-600 capitalize"
                        >
                          {formatSubcategory(subcategory)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-medium mb-2">Color</h3>
                  <div className="space-y-2">
                    {filterOptions.colors.map(color => (
                      <div key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-color-${color}`}
                          checked={selectedFilters.colors.includes(color)}
                          onChange={() => toggleFilter('colors', color)}
                          className="h-5 w-5 text-pink-500 focus:ring-pink-400"
                        />
                        <label 
                          htmlFor={`mobile-color-${color}`} 
                          className="ml-2 text-gray-600"
                        >
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-medium mb-2">Price</h3>
                  <div className="space-y-2">
                    {filterOptions.priceRanges.map(range => (
                      <div key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-price-${range}`}
                          checked={selectedFilters.priceRanges.includes(range)}
                          onChange={() => toggleFilter('priceRanges', range)}
                          className="h-5 w-5 text-pink-500 focus:ring-pink-400"
                        />
                        <label 
                          htmlFor={`mobile-price-${range}`} 
                          className="ml-2 text-gray-600"
                        >
                          {range}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white pt-4 pb-2">
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
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative h-64 w-full">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    </Link>
                    <p className="text-gray-500 mb-2 capitalize">{formatSubcategory(product.subcategory)}</p>
                    
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex flex-wrap mb-2">
                      {product.colors.slice(0, 3).map(color => (
                        <span key={color} className="text-xs mr-1 mb-1 px-2 py-1 bg-gray-100 rounded">
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs mr-1 mb-1 px-2 py-1 bg-gray-100 rounded">
                          +{product.colors.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      <span>{product.rating} ★</span>
                      <span className="mx-1">•</span>
                      <span>{product.reviews} reviews</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLivingPage; 