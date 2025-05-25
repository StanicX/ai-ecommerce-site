"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { products } from '../data/products';

type Address = {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
};

type PaymentMethod = 'credit-card' | 'paypal' | 'apple-pay';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping');
  const [shippingAddress, setShippingAddress] = useState<Address>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  
  // Mock cart data
  useEffect(() => {
    // Simulate fetching cart from localStorage or API
    const mockCartItems = [
      { id: 'm1', quantity: 1, size: 'M' },
      { id: 'w1', quantity: 2, size: 'L' },
    ];
    
    // Get the product details
    const productsInCart = mockCartItems.map(item => {
      const product = products.find(p => p.id === item.id);
      return {
        ...product,
        quantity: item.quantity,
        size: item.size
      };
    }).filter(Boolean);
    
    setCartItems(productsInCart);
  }, []);
  
  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => 
    total + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 5;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };
  
  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to an API
    alert('Order placed successfully!');
    // Then redirect to order confirmation page
  };
  
  const goBack = () => {
    if (step === 'payment') {
      setStep('shipping');
    } else if (step === 'review') {
      setStep('payment');
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center mb-6">
        {step !== 'shipping' ? (
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-pink-500"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Back</span>
          </button>
        ) : (
          <Link href="/cart" className="flex items-center text-gray-600 hover:text-pink-500">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Cart</span>
          </Link>
        )}
      </div>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="flex justify-between items-center mb-8 max-w-2xl">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 'shipping' ? 'bg-pink-500 text-white' : 'bg-green-500 text-white'}`}>
              {step === 'shipping' ? '1' : <Check size={18} />}
            </div>
            <span className={`text-sm ${step === 'shipping' ? 'text-pink-500 font-medium' : 'text-gray-600'}`}>Shipping</span>
          </div>
          
          <div className="w-24 h-1 bg-gray-300">
            <div className={`h-full ${step === 'shipping' ? 'w-0' : 'w-full bg-green-500'}`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
              ${step === 'payment' ? 'bg-pink-500 text-white' : 
                step === 'review' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              {step === 'review' ? <Check size={18} /> : '2'}
            </div>
            <span className={`text-sm 
              ${step === 'payment' ? 'text-pink-500 font-medium' : 
                step === 'review' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              Payment
            </span>
          </div>
          
          <div className="w-24 h-1 bg-gray-300">
            <div className={`h-full ${step === 'review' ? 'w-full bg-green-500' : 'w-0'}`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
              ${step === 'review' ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              3
            </div>
            <span className={`text-sm ${step === 'review' ? 'text-pink-500 font-medium' : 'text-gray-400'}`}>Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit}>
                <h2 className="text-lg font-semibold mb-6">Shipping Address</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      value={shippingAddress.fullName}
                      onChange={(e) => setShippingAddress({...shippingAddress, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                    value={shippingAddress.addressLine1}
                    onChange={(e) => setShippingAddress({...shippingAddress, addressLine1: e.target.value})}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    id="addressLine2"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                    value={shippingAddress.addressLine2}
                    onChange={(e) => setShippingAddress({...shippingAddress, addressLine2: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      value={shippingAddress.city}
                      onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      value={shippingAddress.state}
                      onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                      value={shippingAddress.zipCode}
                      onChange={(e) => setShippingAddress({...shippingAddress, zipCode: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                    value={shippingAddress.country}
                    onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                    required
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
                >
                  Continue to Payment
                </button>
              </form>
            )}
            
            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="text-lg font-semibold mb-6">Payment Method</h2>
                
                <div className="mb-6 space-y-3">
                  <div 
                    className={`border rounded-md p-3 flex items-center cursor-pointer ${paymentMethod === 'credit-card' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('credit-card')}
                  >
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment-method"
                      className="mr-3"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                    />
                    <label htmlFor="credit-card" className="flex items-center cursor-pointer">
                      <CreditCard className="mr-2" size={20} />
                      <span>Credit / Debit Card</span>
                    </label>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 flex items-center cursor-pointer ${paymentMethod === 'paypal' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      className="mr-3"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <label htmlFor="paypal" className="flex items-center cursor-pointer">
                      <span className="font-semibold text-blue-600 mr-2">Pay</span>
                      <span className="font-semibold text-blue-800">Pal</span>
                    </label>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 flex items-center cursor-pointer ${paymentMethod === 'apple-pay' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('apple-pay')}
                  >
                    <input
                      type="radio"
                      id="apple-pay"
                      name="payment-method"
                      className="mr-3"
                      checked={paymentMethod === 'apple-pay'}
                      onChange={() => setPaymentMethod('apple-pay')}
                    />
                    <label htmlFor="apple-pay" className="flex items-center cursor-pointer">
                      <span className="font-semibold mr-1">Apple</span>
                      <span className="font-semibold">Pay</span>
                    </label>
                  </div>
                </div>
                
                {paymentMethod === 'credit-card' && (
                  <div className="mb-6">
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="cardHolder"
                        placeholder="John Smith"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                        value={cardDetails.cardHolder}
                        onChange={(e) => setCardDetails({...cardDetails, cardHolder: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                          value={cardDetails.expiryDate}
                          onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
                >
                  Continue to Review
                </button>
              </form>
            )}
            
            {step === 'review' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Order Review</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Shipping Address</h3>
                  <div className="bg-gray-50 p-3 rounded-md text-gray-700">
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.addressLine1}</p>
                    {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                    <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                    <p>{shippingAddress.country}</p>
                    <p>{shippingAddress.phone}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
                  <div className="bg-gray-50 p-3 rounded-md text-gray-700">
                    {paymentMethod === 'credit-card' && (
                      <p>Credit Card ending in {cardDetails.cardNumber.slice(-4)}</p>
                    )}
                    {paymentMethod === 'paypal' && <p>PayPal</p>}
                    {paymentMethod === 'apple-pay' && <p>Apple Pay</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Items</h3>
                  <div className="bg-gray-50 p-3 rounded-md">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div className="relative w-16 h-16 mr-4">
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-gray-500 text-sm">Size: {item.size} • Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-gray-200">
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between pt-4 border-t border-gray-200 mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>Free shipping on orders above $100</p>
              <p className="mt-2">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 