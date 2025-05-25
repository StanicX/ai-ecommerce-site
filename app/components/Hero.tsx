'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "SUMMER COLLECTION",
      subtitle: "Up to 70% off on new arrivals",
      cta: "Shop Now",
      url: "/sale",
      position: "right" // text position
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "EXCLUSIVE SPORTSWEAR",
      subtitle: "The perfect gear for your workout",
      cta: "Explore Collection",
      url: "/sportswear",
      position: "left"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "AUTUMN ESSENTIALS",
      subtitle: "Get ready for the changing season",
      cta: "Shop Premium",
      url: "/fall-collection",
      position: "center"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
              <div className={`absolute inset-0 bg-black/30`}></div>
              <div className={`absolute inset-0 flex items-center ${
                slide.position === 'left' ? 'justify-start' : 
                slide.position === 'right' ? 'justify-end' : 'justify-center'
              }`}>
                <div className={`text-white p-6 md:p-10 ${
                  slide.position === 'left' ? 'ml-4 md:ml-16' : 
                  slide.position === 'right' ? 'mr-4 md:mr-16' : 'text-center'
                }`}>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-2 md:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-4 md:mb-6">
                    {slide.subtitle}
                  </p>
                  <Link 
                    href={slide.url} 
                    className="inline-block bg-[#ffd200] text-gray-900 px-6 py-3 font-medium rounded hover:bg-[#e6bd00] transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-[#ffd200]' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Category Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/men" className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 dark:text-white">Men's Fashion</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">New styles added</p>
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Men's Fashion"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
          
          <Link href="/women" className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 dark:text-white">Women's Fashion</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">50% Off Select Items</p>
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Women's Fashion"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
          
          <Link href="/footwear" className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 dark:text-white">Footwear</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Starting at $39.99</p>
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="https://images.unsplash.com/photo-1549298916-b21d5d90e2c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Footwear"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
          
          <Link href="/accessories" className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 dark:text-white">Accessories</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Complete your look</p>
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Accessories"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Deal banners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/sale/clearance" className="group relative overflow-hidden rounded-lg shadow-md h-32">
            <Image
              src="https://images.unsplash.com/photo-1561052967-61fc91e48d79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Clearance Sale"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd200]/80 to-transparent flex items-center">
              <div className="ml-6 text-gray-900">
                <h3 className="font-bold text-xl mb-1">CLEARANCE</h3>
                <p className="font-medium">Up to 70% Off</p>
              </div>
            </div>
          </Link>
          
          <Link href="/sale/seasonal" className="group relative overflow-hidden rounded-lg shadow-md h-32">
            <Image
              src="https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Summer Sale"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd200]/80 to-transparent flex items-center">
              <div className="ml-6 text-gray-900">
                <h3 className="font-bold text-xl mb-1">SEASONAL SALE</h3>
                <p className="font-medium">Hottest Deals</p>
              </div>
            </div>
          </Link>
          
          <Link href="/membership" className="group relative overflow-hidden rounded-lg shadow-md h-32">
            <Image
              src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Premium Membership"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd200]/80 to-transparent flex items-center">
              <div className="ml-6 text-gray-900">
                <h3 className="font-bold text-xl mb-1">PREMIUM</h3>
                <p className="font-medium">Join Our Membership</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 