'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // Calculate discount (mock)
  const originalPrice = (product.price * 1.25).toFixed(2);
  const discountPercentage = Math.floor((1 - product.price / (product.price * 1.25)) * 100);

  return (
    <Link href={`/product/${product.id}`}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
          />
          
          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-[#ffd200] text-gray-900 text-xs font-bold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-2 product-info">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
            </div>
            {product.reviews && (
              <>
                <span className="mx-1">•</span>
                <span>{product.reviews} reviews</span>
              </>
            )}
          </div>
          
          <h3 className="font-medium text-gray-800 dark:text-gray-200 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
          
          <div className="flex items-center space-x-2 mt-auto pt-2">
            <span className="font-semibold text-gray-900 dark:text-white">Rs. {Math.round(product.price)}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">Rs. {originalPrice}</span>
            <span className="text-sm font-medium text-[#ffd200] dark:text-[#ffd200]">({discountPercentage}% OFF)</span>
          </div>
          
          {product.colors && product.colors.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.colors.slice(0, 3).map((color, index) => (
                <span key={index} className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">+{product.colors.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 