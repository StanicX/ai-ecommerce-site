import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import Newsletter from '../components/Newsletter';

export default function WomenPage() {
  const womenProducts = products.filter(product => product.category === 'women');

  return (
    <main>
      <div className="bg-[#ffd200]/90 text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Women's Collection</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="md:w-1/4 pr-8 mb-6 md:mb-0">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4 dark:text-white">Categories</h2>
              <ul className="space-y-2">
                <li className="text-[#ffd200] font-medium">All Women's</li>
                <li className="hover:text-[#ffd200] dark:text-gray-300 dark:hover:text-[#ffd200] cursor-pointer">Dresses</li>
                <li className="hover:text-[#ffd200] dark:text-gray-300 dark:hover:text-[#ffd200] cursor-pointer">Tops</li>
                <li className="hover:text-[#ffd200] dark:text-gray-300 dark:hover:text-[#ffd200] cursor-pointer">Pants</li>
                <li className="hover:text-[#ffd200] dark:text-gray-300 dark:hover:text-[#ffd200] cursor-pointer">Sweaters</li>
                <li className="hover:text-[#ffd200] dark:text-gray-300 dark:hover:text-[#ffd200] cursor-pointer">Activewear</li>
              </ul>
              
              <h2 className="text-lg font-semibold mt-8 mb-4 dark:text-white">Filter by</h2>
              <div className="mb-6">
                <h3 className="font-medium mb-2 dark:text-gray-200">Size</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">XS</button>
                  <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">S</button>
                  <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">M</button>
                  <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">L</button>
                  <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">XL</button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 dark:text-gray-200">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="200"
                  className="w-full accent-[#ffd200]"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <ProductGrid products={womenProducts} />
          </div>
        </div>
      </div>
      
      <Newsletter />
    </main>
  );
} 