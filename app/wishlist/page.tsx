"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<any[]>([]);
  
  // Mock wishlist data
  useEffect(() => {
    // In a real app, this would come from localStorage or an API
    const mockWishlist = ['m4', 'w3', 'w7'];
    setWishlistItems(mockWishlist);
    
    // Get the product details for the wishlist items
    const productsInWishlist = mockWishlist.map(id => {
      return products.find(p => p.id === id);
    }).filter(Boolean);
    
    setWishlistProducts(productsInWishlist);
  }, []);
  
  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item !== id));
    setWishlistProducts(wishlistProducts.filter(product => product.id !== id));
  };
  
  const moveToCart = (id: string) => {
    // In a real app, this would add to cart and possibly remove from wishlist
    removeFromWishlist(id);
    // Add to cart logic would go here
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
          <ArrowLeft size={20} className="mr-2" />
          <span>Continue Shopping</span>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">Your Wishlist ({wishlistProducts.length} items)</h1>
      
      {wishlistProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Add items to your wishlist to see them here.</p>
          <Link 
            href="/" 
            className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
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
                <p className="text-gray-500 mb-2 capitalize">{product.category} • {product.subcategory}</p>
                
                <div className="flex items-center mb-4">
                  <span className="font-semibold text-lg mr-2">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => moveToCart(product.id)}
                    className="flex items-center justify-center w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 transition"
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    Add to Bag
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(product.id)}
                    className="flex items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="mt-3 text-xs text-gray-500">
                  <p>
                    {product.rating} ★ ({product.reviews} reviews)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage; 