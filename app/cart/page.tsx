"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trash2, Heart } from 'lucide-react';
import { products } from '../data/products';

// Mock cart data, in a real app this would come from a cart context/state
type CartItem = {
  id: string;
  quantity: number;
  size: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  
  // Mock initial cart items
  useEffect(() => {
    // Simulate fetching cart from localStorage or API
    const mockCart: CartItem[] = [
      { id: 'm1', quantity: 1, size: 'M' },
      { id: 'w1', quantity: 2, size: 'L' },
    ];
    setCartItems(mockCart);
    
    // Get the actual product details
    const productsInCart = mockCart.map(item => {
      const product = products.find(p => p.id === item.id);
      return {
        ...product,
        quantity: item.quantity,
        size: item.size
      };
    });
    
    setCartProducts(productsInCart);
  }, []);
  
  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    setCartProducts(cartProducts.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
    
    setCartProducts(cartProducts.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };
  
  const moveToWishlist = (id: string) => {
    // In a real app, this would add to wishlist and remove from cart
    removeFromCart(id);
    // Add to wishlist logic would go here
  };
  
  // Calculate order summary
  const subtotal = cartProducts.reduce((total, item) => 
    total + item.price * item.quantity, 0);
  const discount = 0; // No discounts in this example
  const deliveryCharge = subtotal > 100 ? 0 : 5;
  const total = subtotal + deliveryCharge;
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
          <ArrowLeft size={20} className="mr-2" />
          <span>Continue Shopping</span>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">Shopping Cart ({cartProducts.length} items)</h1>
      
      {cartProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add items to your cart to see them here.</p>
          <Link 
            href="/" 
            className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {cartProducts.map((item) => (
                <div key={`${item.id}-${item.size}`} className="border-b border-gray-200 py-6 last:border-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-28 h-40 mb-4 md:mb-0 md:mr-6">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-gray-500 mb-2">{item.category}</p>
                          <p className="text-gray-500 mb-4">Size: {item.size}</p>
                          
                          <div className="flex items-center mb-4">
                            <div className="border border-gray-300 rounded-md inline-flex">
                              <button 
                                className="px-3 py-1 border-r border-gray-300"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-4 py-1">{item.quantity}</span>
                              <button 
                                className="px-3 py-1 border-l border-gray-300"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                          <div className="flex items-center">
                            <span className="font-semibold text-lg mr-2">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex mt-4 space-x-4">
                        <button 
                          className="flex items-center text-gray-500 hover:text-pink-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={18} className="mr-1" />
                          <span>Remove</span>
                        </button>
                        <button 
                          className="flex items-center text-gray-500 hover:text-pink-500"
                          onClick={() => moveToWishlist(item.id)}
                        >
                          <Heart size={18} className="mr-1" />
                          <span>Move to Wishlist</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-gray-200">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charges</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${deliveryCharge.toFixed(2)}`
                    )}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-200 mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              
              <Link href="/checkout" className="block w-full">
                <button className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
              
              <div className="mt-6 text-xs text-gray-500">
                <p>Free delivery on orders above $100</p>
                <p className="mt-2">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 