"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, MapPin, ShoppingBag, Heart, CreditCard, Settings, LogOut } from 'lucide-react';

type TabType = 'overview' | 'orders' | 'addresses' | 'payments' | 'wishlist' | 'settings';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joined: 'April 2023',
    addresses: [
      {
        id: 1,
        type: 'Home',
        name: 'John Doe',
        address: '123 Main St, Apt 4B',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
        phone: '+1 (555) 123-4567',
        isDefault: true
      },
      {
        id: 2,
        type: 'Work',
        name: 'John Doe',
        address: '456 Business Ave, Floor 8',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        country: 'United States',
        phone: '+1 (555) 987-6543',
        isDefault: false
      }
    ],
    payments: [
      {
        id: 1,
        type: 'Credit Card',
        cardNumber: '**** **** **** 5678',
        expiryDate: '09/25',
        cardHolder: 'John Doe',
        isDefault: true
      },
      {
        id: 2,
        type: 'Credit Card',
        cardNumber: '**** **** **** 1234',
        expiryDate: '12/24',
        cardHolder: 'John Doe',
        isDefault: false
      }
    ]
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Account Information</h2>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <span className="text-gray-600">Phone</span>
                  <span className="font-medium">{user.phone}</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium">{user.joined}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-pink-500 hover:text-pink-600">
                  Edit Profile
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Default Address</h2>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className="text-pink-500 hover:text-pink-600 text-sm"
                >
                  View All
                </button>
              </div>
              {user.addresses.filter(addr => addr.isDefault).map(address => (
                <div key={address.id} className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{address.type}</span>
                    <span className="text-xs bg-gray-100 py-1 px-2 rounded text-gray-600">Default</span>
                  </div>
                  <div className="text-gray-600">
                    <p>{address.name}</p>
                    <p>{address.address}</p>
                    <p>{address.city}, {address.state} {address.zipCode}</p>
                    <p>{address.country}</p>
                    <p className="mt-1">{address.phone}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Payment Methods</h2>
                <button 
                  onClick={() => setActiveTab('payments')}
                  className="text-pink-500 hover:text-pink-600 text-sm"
                >
                  View All
                </button>
              </div>
              {user.payments.filter(pay => pay.isDefault).map(payment => (
                <div key={payment.id} className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{payment.type}</span>
                    <span className="text-xs bg-gray-100 py-1 px-2 rounded text-gray-600">Default</span>
                  </div>
                  <div className="text-gray-600">
                    <p>{payment.cardNumber}</p>
                    <p className="text-sm">Expires {payment.expiryDate}</p>
                    <p className="text-sm mt-1">{payment.cardHolder}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <Link 
                  href="/orders" 
                  className="text-pink-500 hover:text-pink-600 text-sm"
                >
                  View All Orders
                </Link>
              </div>
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Your order history is available on the Orders page.
                </p>
                <Link 
                  href="/orders" 
                  className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                >
                  Go to Orders
                </Link>
              </div>
            </div>
          </div>
        );
      
      case 'addresses':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Addresses</h2>
                <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 transition text-sm">
                  Add New Address
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.addresses.map(address => (
                  <div key={address.id} className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{address.type}</span>
                      {address.isDefault && <span className="text-xs bg-gray-100 py-1 px-2 rounded text-gray-600">Default</span>}
                    </div>
                    <div className="text-gray-600">
                      <p>{address.name}</p>
                      <p>{address.address}</p>
                      <p>{address.city}, {address.state} {address.zipCode}</p>
                      <p>{address.country}</p>
                      <p className="mt-1">{address.phone}</p>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <button className="text-sm text-gray-600 hover:text-pink-500">Edit</button>
                      {!address.isDefault && (
                        <>
                          <button className="text-sm text-gray-600 hover:text-pink-500">Make Default</button>
                          <button className="text-sm text-gray-600 hover:text-pink-500">Remove</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'payments':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Saved Payment Methods</h2>
                <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 transition text-sm">
                  Add New Card
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.payments.map(payment => (
                  <div key={payment.id} className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{payment.type}</span>
                      {payment.isDefault && <span className="text-xs bg-gray-100 py-1 px-2 rounded text-gray-600">Default</span>}
                    </div>
                    <div className="text-gray-600">
                      <p>{payment.cardNumber}</p>
                      <p className="text-sm">Expires {payment.expiryDate}</p>
                      <p className="text-sm mt-1">{payment.cardHolder}</p>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      {!payment.isDefault && (
                        <>
                          <button className="text-sm text-gray-600 hover:text-pink-500">Make Default</button>
                          <button className="text-sm text-gray-600 hover:text-pink-500">Remove</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'wishlist':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Wishlist</h2>
                <Link 
                  href="/wishlist" 
                  className="text-pink-500 hover:text-pink-600 text-sm"
                >
                  View Wishlist
                </Link>
              </div>
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Your saved items are available on the Wishlist page.
                </p>
                <Link 
                  href="/wishlist" 
                  className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                >
                  Go to Wishlist
                </Link>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium mb-2">Change Password</h3>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm text-gray-600 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        id="currentPassword" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm text-gray-600 mb-1">New Password</label>
                      <input 
                        type="password" 
                        id="newPassword" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        id="confirmPassword" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                      Update Password
                    </button>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium mb-2">Email Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="orderUpdates" 
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                        defaultChecked={true}
                      />
                      <label htmlFor="orderUpdates" className="ml-2 text-gray-600">Order updates and receipts</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="promotions" 
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                        defaultChecked={true}
                      />
                      <label htmlFor="promotions" className="ml-2 text-gray-600">Promotions and deals</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="newProducts" 
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                        defaultChecked={true}
                      />
                      <label htmlFor="newProducts" className="ml-2 text-gray-600">New product announcements</label>
                    </div>
                    <button className="mt-2 text-sm text-pink-500 hover:text-pink-600">
                      Update Preferences
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 text-gray-800">Delete Account</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Once you delete your account, all your data will be permanently removed. This action cannot be undone.
                  </p>
                  <button className="text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <User size={24} className="text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="font-medium">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'overview' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User size={18} className="mr-3" />
                <span>Account Overview</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'orders' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ShoppingBag size={18} className="mr-3" />
                <span>My Orders</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'addresses' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <MapPin size={18} className="mr-3" />
                <span>Addresses</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('payments')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'payments' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <CreditCard size={18} className="mr-3" />
                <span>Payment Methods</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('wishlist')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'wishlist' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Heart size={18} className="mr-3" />
                <span>Wishlist</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === 'settings' 
                    ? 'bg-pink-50 text-pink-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings size={18} className="mr-3" />
                <span>Account Settings</span>
              </button>
              
              <button 
                className="flex items-center w-full px-3 py-2 rounded-md text-left text-gray-600 hover:bg-gray-50"
              >
                <LogOut size={18} className="mr-3" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="md:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 