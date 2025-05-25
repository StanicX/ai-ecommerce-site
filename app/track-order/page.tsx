'use client';

import { useState } from 'react';
import { FiSearch, FiTruck, FiPackage, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Link from 'next/link';

interface OrderStatus {
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  location: string;
  description: string;
}

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState<OrderStatus[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setOrderStatus(null);

    // Simulate API call
    try {
      // Mock data - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, show different statuses based on order ID
      if (orderId.toLowerCase().includes('delivered')) {
        setOrderStatus([
          {
            status: 'delivered',
            date: '2024-03-15 14:30',
            location: 'Delhi, India',
            description: 'Package has been delivered'
          },
          {
            status: 'shipped',
            date: '2024-03-14 09:15',
            location: 'Mumbai, India',
            description: 'Package is out for delivery'
          },
          {
            status: 'processing',
            date: '2024-03-13 16:45',
            location: 'Bangalore, India',
            description: 'Order is being processed'
          }
        ]);
      } else if (orderId.toLowerCase().includes('cancelled')) {
        setOrderStatus([
          {
            status: 'cancelled',
            date: '2024-03-15 10:20',
            location: 'Delhi, India',
            description: 'Order has been cancelled'
          },
          {
            status: 'processing',
            date: '2024-03-14 15:30',
            location: 'Mumbai, India',
            description: 'Order was being processed'
          }
        ]);
      } else {
        setOrderStatus([
          {
            status: 'shipped',
            date: '2024-03-15 11:45',
            location: 'Mumbai, India',
            description: 'Package is in transit'
          },
          {
            status: 'processing',
            date: '2024-03-14 16:30',
            location: 'Bangalore, India',
            description: 'Order is being processed'
          }
        ]);
      }
    } catch (err) {
      setError('Failed to track order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: OrderStatus['status']) => {
    switch (status) {
      case 'delivered':
        return <FiCheckCircle className="w-6 h-6 text-green-500" />;
      case 'shipped':
        return <FiTruck className="w-6 h-6 text-blue-500" />;
      case 'processing':
        return <FiPackage className="w-6 h-6 text-yellow-500" />;
      case 'cancelled':
        return <FiAlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  const getStatusColor = (status: OrderStatus['status']) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800';
      case 'shipped':
        return 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800';
      case 'processing':
        return 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800';
      case 'cancelled':
        return 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Track Your Order</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Enter your order ID to track your package
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleTrackOrder} className="space-y-4">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Order ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md 
                           focus:ring-2 focus:ring-[#ffd200] focus:border-transparent
                           dark:bg-gray-700 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 
                           dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffd200] mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Tracking your order...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-200">
            {error}
          </div>
        )}

        {orderStatus && (
          <div className="space-y-4">
            {orderStatus.map((status, index) => (
              <div
                key={index}
                className={`${getStatusColor(status.status)} border rounded-lg p-4 flex items-start space-x-4`}
              >
                <div className="flex-shrink-0">
                  {getStatusIcon(status.status)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900 dark:text-white capitalize">
                      {status.status}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {status.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {status.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {status.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-[#ffd200] hover:text-[#e6bd00] font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 