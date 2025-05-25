'use client';

// Store OTPs in memory (in a real app, you would store these securely in a database with expiration)
interface OtpRecord {
  otp: string;
  expiresAt: number;
  verified: boolean;
}

// In-memory store for OTPs, keyed by phone number
const otpStore: Record<string, OtpRecord> = {};

// OpenAI-inspired text completion function to simulate AI-assisted OTP messages
const generateOtpMessage = async (otp: string, phoneNumber: string): Promise<string> => {
  // In a real app, you would call an actual AI API like OpenAI or Google's Gemini
  // This is a simplified simulation of what an AI might generate
  const templates = [
    `Your LOOMÉ verification code is ${otp}. This code will expire in 10 minutes. Don't share it with anyone.`,
    `${otp} is your one-time password for LOOMÉ login. Valid for 10 minutes. For security reasons, don't share this OTP.`,
    `Welcome to LOOMÉ! Use verification code ${otp} to complete your login. Code expires in 10 minutes.`,
    `LOOMÉ: Your secure login code is ${otp}. This code is valid for 10 minutes only.`
  ];
  
  // Get a random message template
  const randomIndex = Math.floor(Math.random() * templates.length);
  
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return templates[randomIndex];
};

// Generate a random n-digit OTP
const generateOtp = (length: number = 4): string => {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
};

// Send OTP to a phone number (simulated)
export const sendOtp = async (phoneNumber: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Generate a new 4-digit OTP
    const otp = generateOtp(4);
    
    // Store the OTP with expiration time (10 minutes from now)
    otpStore[phoneNumber] = {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
      verified: false
    };
    
    // Generate AI-powered OTP message
    const otpMessage = await generateOtpMessage(otp, phoneNumber);
    
    // In a real app, you would send an SMS here
    console.log(`Sending OTP to ${phoneNumber}: ${otpMessage}`);
    
    return {
      success: true,
      message: 'OTP sent successfully. Check your phone for the verification code.'
    };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return {
      success: false,
      message: 'Failed to send OTP. Please try again.'
    };
  }
};

// Verify an OTP
export const verifyOtp = (phoneNumber: string, userOtp: string): { success: boolean; message: string } => {
  // Check if OTP exists for this phone number
  const otpRecord = otpStore[phoneNumber];
  if (!otpRecord) {
    return {
      success: false,
      message: 'No OTP found for this phone number. Please request a new one.'
    };
  }
  
  // Check if OTP has expired
  if (Date.now() > otpRecord.expiresAt) {
    delete otpStore[phoneNumber]; // Clean up expired OTP
    return {
      success: false,
      message: 'OTP has expired. Please request a new one.'
    };
  }
  
  // Check if OTP matches
  if (otpRecord.otp !== userOtp) {
    return {
      success: false,
      message: 'Invalid OTP. Please try again.'
    };
  }
  
  // Mark OTP as verified
  otpRecord.verified = true;
  
  return {
    success: true,
    message: 'OTP verified successfully.'
  };
};

// Check if a phone number has been verified
export const isPhoneVerified = (phoneNumber: string): boolean => {
  const otpRecord = otpStore[phoneNumber];
  return !!otpRecord && otpRecord.verified;
};

// Resend OTP
export const resendOtp = async (phoneNumber: string): Promise<{ success: boolean; message: string }> => {
  // Delete the old OTP if it exists
  if (otpStore[phoneNumber]) {
    delete otpStore[phoneNumber];
  }
  
  // Generate and send a new OTP
  return await sendOtp(phoneNumber);
}; 