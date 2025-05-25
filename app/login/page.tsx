'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OtpInput from '../components/OtpInput';
import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';

type LoginStep = 'phone' | 'otp' | 'success';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentStep, setCurrentStep] = useState<LoginStep>('phone');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSentTime, setOtpSentTime] = useState<Date | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [generatedOtp, setGeneratedOtp] = useState<string>(''); // Store OTP for demo purposes

  // Start a timer for resend cooldown
  React.useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length !== 10 || !agreedToTerms) return;
    
    setIsSubmitting(true);
    setMessage({ text: "Sending verification code...", type: 'info' });
    
    try {
      // For demo purposes, generate a new 4-digit OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(otp);
      
      const result = await sendOtp(phoneNumber);
      
      if (result.success) {
        setCurrentStep('otp');
        setMessage({ text: "New code sent! Check your phone.", type: 'success' });
        setOtpSentTime(new Date());
        setResendCooldown(30); // 30 seconds cooldown for resend
      } else {
        setMessage({ text: result.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ text: "An error occurred. Please try again.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = (otp: string) => {
    setIsSubmitting(true);
    setMessage({ text: "Verifying code...", type: 'info' });
    
    try {
      // For demo purposes, just check if OTP matches what was generated
      const isValid = otp === generatedOtp;
      
      if (isValid) {
        setCurrentStep('success');
        setMessage({ text: "Verification successful! Redirecting to your account...", type: 'success' });
        
        // Simulate redirection after 2 seconds
        setTimeout(() => {
          window.location.href = '/'; // In a real app, you would use router.push
        }, 2000);
      } else {
        setMessage({ text: "Invalid OTP. Please try again.", type: 'error' });
      }
    } catch (error) {
      setMessage({ text: "An error occurred during verification. Please try again.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    
    setIsSubmitting(true);
    setMessage({ text: "Resending verification code...", type: 'info' });
    
    try {
      // For demo purposes, generate a new 4-digit OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(otp);
      
      const result = await resendOtp(phoneNumber);
      
      if (result.success) {
        setMessage({ text: "New code sent! Check your phone.", type: 'success' });
        setOtpSentTime(new Date());
        setResendCooldown(30); // 30 seconds cooldown
      } else {
        setMessage({ text: result.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ text: "Failed to resend code. Please try again.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'phone':
        return (
          <form onSubmit={handleSendOtp}>
            <div className="mb-5">
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-md p-2.5 focus-within:border-yellow-500 dark:focus-within:border-yellow-400">
                <span className="text-gray-500 dark:text-gray-400 pr-2 border-r border-gray-300 dark:border-gray-600 mr-2 flex items-center">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="w-full outline-none bg-transparent dark:text-white"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-yellow-500"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
                disabled={isSubmitting}
              />
              <label htmlFor="terms" className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
                By continuing, I agree to the {' '}
                <Link href="/terms" className="text-yellow-500 dark:text-yellow-400 hover:underline">
                  Terms of Use
                </Link>
                {' '} & {' '}
                <Link href="/privacy" className="text-yellow-500 dark:text-yellow-400 hover:underline">
                  Privacy Policy
                </Link>
                {' '} and I am above 18 years old.
              </label>
            </div>
            
            <button
              type="submit"
              disabled={!agreedToTerms || phoneNumber.length !== 10 || isSubmitting}
              className={`w-full py-3.5 rounded-md text-gray-900 font-medium text-sm transition-colors
                ${(agreedToTerms && phoneNumber.length === 10 && !isSubmitting)
                  ? 'bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600'
                  : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500 dark:text-gray-400'}`}
            >
              {isSubmitting ? 'SENDING...' : 'CONTINUE'}
            </button>
          </form>
        );
        
      case 'otp':
        return (
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
              We've sent a verification code to your phone<br />+91 {phoneNumber}
            </p>
            
            {/* For demo purposes only - show the generated OTP */}
            <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded text-sm text-green-800 dark:text-green-200 mb-6 text-center">
              New code sent! Check your phone.<br />
              <span className="font-bold">(Demo OTP: {generatedOtp})</span>
            </div>
            
            <div className="mb-8">
              <OtpInput onOtpComplete={handleVerifyOtp} />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResendOtp}
                disabled={resendCooldown > 0 || isSubmitting}
                className={`text-sm ${resendCooldown > 0 ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' : 'text-yellow-500 dark:text-yellow-400 hover:underline'}`}
              >
                {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : 'Resend code'}
              </button>
            </div>
            
            <button
              onClick={() => setCurrentStep('phone')}
              className="w-full py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              disabled={isSubmitting}
            >
              GO BACK
            </button>
          </div>
        );
        
      case 'success':
        return (
          <div className="text-center py-6">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Verification Successful!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You will be redirected to your account shortly.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Offer Section */}
          <div className="w-full md:w-1/2 bg-yellow-50 dark:bg-gray-700 p-8 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl">
            <div className="text-gray-900 dark:text-white font-bold text-2xl mb-4">
              Flat ₹300 OFF +<br />
              Free Shipping
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              On First Order
            </div>
            
            <div className="mb-5">
              <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Code:</div>
              <div className="border border-dashed border-yellow-500 dark:border-yellow-600 inline-block px-3 py-1.5 rounded-md bg-white dark:bg-gray-800">
                <span className="font-mono text-gray-900 dark:text-white font-medium">LOOMÉ300</span>
              </div>
            </div>
          </div>
          
          {/* Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {isLogin ? 'Login' : 'Signup'} <span className="text-gray-400 font-normal">or</span> {isLogin ? 'Signup' : 'Login'}
              </h2>
              {currentStep === 'phone' && (
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300 underline text-sm mt-3"
                >
                  {isLogin ? 'Create new account' : 'Use existing account'}
                </button>
              )}
            </div>
            
            {message && currentStep !== 'otp' && (
              <div className={`mb-5 p-3 rounded-md text-sm ${
                message.type === 'success' ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 
                message.type === 'error' ? 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200' :
                'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
              }`}>
                {message.text}
              </div>
            )}
            
            {renderStepContent()}
            
            {currentStep === 'phone' && (
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Have trouble logging in? 
                  <Link href="/help" className="ml-1.5 text-yellow-500 dark:text-yellow-400 hover:underline font-medium">
                    Get help
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 