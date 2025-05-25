'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiShoppingCart, FiHeart, FiArrowLeft } from 'react-icons/fi';

import { products, Product } from '../../data/products';
import ProductReviews from '../../components/ProductReviews';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find(p => p.id === id) as Product;
  
  // If product not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Not Found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-6 inline-block bg-[#ffd200] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#e6bd00]">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  // Generate random review count between 1 and 21,000
  const reviewCount = Math.floor(Math.random() * 21000) + 1;

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <Link href={`/${product.category}`} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#ffd200] dark:hover:text-[#ffd200]">
            <FiArrowLeft className="mr-2" />
            Back to {product.category === 'men' ? "Men's" : "Women's"} Collection
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 px-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) 
                        ? 'text-[#ffd200] fill-[#ffd200]' 
                        : 'text-gray-300 dark:text-gray-500'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{reviewCount} reviews</span>
              </div>
              
              <p className="text-2xl font-bold text-[#ffd200] dark:text-[#ffd200] mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Color</h3>
                <div className="flex space-x-2">
                  {product?.colors?.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'ring-2 ring-[#ffd200]' : 'border-gray-300 dark:border-gray-600'}`}
                      title={color}
                      style={{ 
                        backgroundColor: 
                          color.toLowerCase() === 'white' ? '#ffffff' :
                          color.toLowerCase() === 'black' ? '#000000' :
                          color.toLowerCase() === 'blue' ? '#3b82f6' :
                          color.toLowerCase() === 'red' ? '#ef4444' :
                          color.toLowerCase() === 'gray' ? '#9ca3af' :
                          color.toLowerCase() === 'navy' ? '#1e3a8a' :
                          color.toLowerCase() === 'burgundy' ? '#9f1239' :
                          color.toLowerCase() === 'khaki' ? '#d1b894' :
                          color.toLowerCase() === 'olive' ? '#4b5320' :
                          color.toLowerCase() === 'cream' ? '#fffdd0' :
                          color.toLowerCase() === 'blush' ? '#ffb6c1' :
                          color.toLowerCase() === 'ivory' ? '#fffff0' :
                          color.toLowerCase() === 'mauve' ? '#e0b0ff' :
                          '#cccccc'  // Default fallback color
                      }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Selected: {selectedColor}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {product?.sizes?.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded-md text-sm font-medium
                        ${selectedSize === size 
                          ? 'bg-[#ffd200] text-gray-900 border-[#ffd200]' 
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Quantity</h3>
                <div className="flex">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:text-white rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 px-3 py-2 border-t border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-center"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:text-white rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-[#ffd200] text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-[#e6bd00] transition-colors flex items-center justify-center">
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 dark:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FiHeart />
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Reviews Section */}
          <ProductReviews 
            productId={product.id} 
            totalReviews={reviewCount} 
            averageRating={product.rating} 
          />
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(product => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 product-card">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2 product-info">
                    <h3 className="font-medium text-gray-800 dark:text-white line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <FiStar className="w-4 h-4 text-[#ffd200] fill-[#ffd200]" />
                        <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
                      </div>
                      <span className="mx-1">•</span>
                      <span>{product.reviews} reviews</span>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white mt-auto pt-2">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
