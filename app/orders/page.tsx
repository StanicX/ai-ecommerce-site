"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Box } from 'lucide-react';
import { products } from '../data/products';

// Define mock order data structure
type OrderItem = {
  productId: string;
  quantity: number;
  size: string;
  price: number;
};

type Order = {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
  };
  trackingId?: string;
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  
  useEffect(() => {
    // Mock orders data - in a real app this would come from an API
    const mockOrders: Order[] = [
      {
        id: 'ORD-12345',
        date: '2023-05-12',
        status: 'Delivered',
        items: [
          { productId: 'm1', quantity: 1, size: 'M', price: 49.99 },
          { productId: 'w1', quantity: 2, size: 'L', price: 79.99 }
        ],
        total: 209.97,
        paymentMethod: 'Credit Card',
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York, NY',
          zipCode: '10001'
        },
        trackingId: 'TRK-78945612'
      },
      {
        id: 'ORD-12346',
        date: '2023-04-20',
        status: 'Delivered',
        items: [
          { productId: 'm3', quantity: 1, size: 'S', price: 89.99 }
        ],
        total: 89.99,
        paymentMethod: 'PayPal',
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York, NY',
          zipCode: '10001'
        },
        trackingId: 'TRK-65432198'
      },
      {
        id: 'ORD-12347',
        date: '2023-05-28',
        status: 'Processing',
        items: [
          { productId: 'w5', quantity: 1, size: 'M', price: 49.99 }
        ],
        total: 49.99,
        paymentMethod: 'Credit Card',
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York, NY',
          zipCode: '10001'
        }
      }
    ];
    
    setOrders(mockOrders);
  }, []);
  
  const toggleOrderExpansion = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600';
      case 'Processing':
        return 'text-blue-600';
      case 'Shipped':
        return 'text-orange-600';
      case 'Cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  
  const getProductDetails = (productId: string) => {
    return products.find(p => p.id === productId);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
            <Box size={24} className="text-gray-500" />
          </div>
          <h2 className="text-xl mb-4">No orders yet</h2>
          <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
          <Link 
            href="/" 
            className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleOrderExpansion(order.id)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-lg">Order {order.id}</h3>
                      <span className={`ml-4 ${getStatusColor(order.status)} font-medium`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Placed on {formatDate(order.date)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <p className="text-gray-500 text-sm">{order.items.length} item(s)</p>
                    </div>
                    
                    {expandedOrder === order.id ? (
                      <ChevronUp size={20} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium mb-4">Order Items</h4>
                      <div className="space-y-4">
                        {order.items.map((item) => {
                          const product = getProductDetails(item.productId);
                          return product ? (
                            <div key={`${order.id}-${item.productId}`} className="flex">
                              <div className="relative w-20 h-24 mr-4">
                                <Image 
                                  src={product.image} 
                                  alt={product.name}
                                  fill
                                  className="object-cover rounded-md"
                                />
                              </div>
                              <div>
                                <h5 className="font-medium">{product.name}</h5>
                                <p className="text-gray-500 text-sm">Size: {item.size}</p>
                                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                              </div>
                            </div>
                          ) : (
                            <div key={`${order.id}-${item.productId}`}>Product not found</div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Shipping Address</h4>
                        <div className="text-gray-600">
                          <p>{order.shippingAddress.name}</p>
                          <p>{order.shippingAddress.address}</p>
                          <p>{order.shippingAddress.city}, {order.shippingAddress.zipCode}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Payment Method</h4>
                        <p className="text-gray-600">{order.paymentMethod}</p>
                      </div>
                      
                      {order.trackingId && (
                        <div className="mb-6">
                          <h4 className="font-medium mb-2">Tracking ID</h4>
                          <p className="text-gray-600">{order.trackingId}</p>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-medium mb-3">Order Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>${order.total.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span>Free</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                            <span>Total</span>
                            <span>${order.total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    {order.status === 'Delivered' && (
                      <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition mr-3">
                        Buy Again
                      </button>
                    )}
                    <Link 
                      href={`/support?order=${order.id}`}
                      className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 transition"
                    >
                      Need Help?
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage; 