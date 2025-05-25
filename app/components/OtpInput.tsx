'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface OtpInputProps {
  length?: number;
  onOtpComplete: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onOtpComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize inputRefs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Only allow a single digit
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    
    // Replace the current value or just take the last digit if multiple digits are pasted
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // If the user entered a digit (not backspace) and we're not at the end, focus the next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Check if OTP is complete
    const otpComplete = newOtp.every(digit => digit !== '');
    if (otpComplete) {
      onOtpComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // On backspace, clear the current input and move focus to the previous input
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        // If current input is already empty, move to previous input
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          
          // Also clear the previous value
          const newOtp = [...otp];
          newOtp[index - 1] = '';
          setOtp(newOtp);
        }
      } else {
        // Just clear the current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    } 
    // Arrow left: move focus to the previous input
    else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } 
    // Arrow right: move focus to the next input
    else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted content is all digits
    if (!/^\d+$/.test(pastedData)) return;
    
    const newOtp = [...otp];
    
    // Fill in as many digits as needed
    for (let i = 0; i < Math.min(length, pastedData.length); i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    // Focus the appropriate input based on pasted length
    const focusIndex = Math.min(length - 1, pastedData.length);
    inputRefs.current[focusIndex]?.focus();
    
    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onOtpComplete(newOtp.join(''));
    }
  };

  return (
    <div className="flex justify-center gap-3 sm:gap-4 mx-auto">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-14 h-14 sm:w-16 sm:h-16 text-center text-xl font-bold 
                   border-2 border-gray-300 dark:border-gray-600 rounded-md
                   focus:border-yellow-500 dark:focus:border-yellow-400 focus:outline-none
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   transition-all duration-200 shadow-sm"
          aria-label={`OTP digit ${index + 1}`}
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
};

export default OtpInput; 