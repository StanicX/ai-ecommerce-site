import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBrands = () => {
  const brands = [
    {
      name: 'Nike',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png',
      url: '/brands/nike',
    },
    {
      name: 'Adidas',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-700x394.png',
      url: '/brands/adidas',
    },
    {
      name: 'Puma',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-700x394.png',
      url: '/brands/puma',
    },
    {
      name: 'Reebok',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Reebok-Logo-700x394.png',
      url: '/brands/reebok',
    },
    {
      name: 'Under Armour',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo-700x394.png',
      url: '/brands/under-armour',
    },
    {
      name: 'New Balance',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-700x394.png',
      url: '/brands/new-balance',
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Brands</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Shop your favorite brands all in one place</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Link 
              key={index}
              href={brand.url}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-16">
                <Image 
                  src={brand.logo} 
                  alt={brand.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="dark:brightness-0 dark:invert filter"
                />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/brands" 
            className="inline-block px-6 py-3 border border-[#ffd200] dark:border-[#ffd200] text-gray-800 dark:text-[#ffd200] font-medium rounded-md hover:bg-[#ffd200]/10 dark:hover:bg-gray-800 transition-colors"
          >
            View All Brands
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands; 