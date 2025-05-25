'use client';

import React, { useState } from 'react';
import { FiStar, FiUser, FiThumbsUp, FiThumbsDown, FiFilter, FiChevronDown, FiImage } from 'react-icons/fi';

interface Review {
  id: number;
  username: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

interface ProductReviewsProps {
  productId: string;
  totalReviews: number;
  averageRating: number;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId, totalReviews, averageRating }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  
  // Mock review statistics
  const ratingDistribution = {
    5: Math.floor(totalReviews * 0.65),
    4: Math.floor(totalReviews * 0.20),
    3: Math.floor(totalReviews * 0.07),
    2: Math.floor(totalReviews * 0.05),
    1: Math.floor(totalReviews * 0.03),
  };
  
  // Calculate percentages for the rating bars
  const calculatePercentage = (count: number) => {
    return (count / totalReviews) * 100;
  };
  
  // Generate mock reviews
  const mockReviews: Review[] = [
    {
      id: 1,
      username: "Michael T.",
      date: "August 15, 2023",
      rating: 5,
      title: "Excellent quality and perfect fit!",
      content: "I've been wearing this for about a month now and I'm very happy with the purchase. The material is comfortable and breathable, and the fit is perfect for my build. It's held up well after multiple washes with no sign of fading or shrinking. Definitely worth the money!",
      verified: true,
      helpful: 342,
      images: [
        "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      id: 2,
      username: "Sarah K.",
      date: "July 22, 2023",
      rating: 4,
      title: "Great product but runs a bit large",
      content: "The quality of the fabric is amazing and the design is exactly as pictured. My only issue is that it runs a bit large. I usually wear a medium but should have ordered a small for this. Otherwise, it's a great addition to my wardrobe!",
      verified: true,
      helpful: 129
    },
    {
      id: 3,
      username: "John D.",
      date: "June 10, 2023",
      rating: 2,
      title: "Disappointed with the durability",
      content: "While it looked great at first, after just a few washes the color started to fade significantly. For the price point, I expected better quality. Not sure I would buy again from this line.",
      verified: true,
      helpful: 78
    },
    {
      id: 4,
      username: "Emily R.",
      date: "September 3, 2023",
      rating: 5,
      title: "Absolutely love it!",
      content: "This is my second time purchasing this item and I'm just as impressed as the first time. The fit is consistent, the material is high quality, and it's so versatile! I can dress it up or down depending on the occasion. Highly recommend!",
      verified: true,
      helpful: 210,
      images: [
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1576861048192-2c5a4be87668?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      id: 5,
      username: "David H.",
      date: "July 29, 2023",
      rating: 3,
      title: "Decent but not outstanding",
      content: "The product is okay for the price. Nothing spectacular but it serves its purpose. The material is a bit thinner than I expected, but overall it's comfortable to wear. Probably wouldn't buy again, but I don't regret the purchase either.",
      verified: false,
      helpful: 45
    },
    {
      id: 6,
      username: "Jessica T.",
      date: "August 7, 2023",
      rating: 5,
      title: "Perfect addition to my wardrobe!",
      content: "I get compliments every time I wear this! The fit is flattering, the material is high quality, and the color is exactly as shown. I've already ordered another in a different color. Fast shipping too!",
      verified: true,
      helpful: 187
    },
  ];
  
  // Filter reviews based on the active filter
  const filteredReviews = mockReviews.filter(review => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'positive') return review.rating >= 4;
    if (activeFilter === 'negative') return review.rating <= 2;
    if (activeFilter === 'media') return review.images && review.images.length > 0;
    return parseInt(activeFilter) === review.rating;
  });
  
  // Determine how many reviews to show
  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 3);
  
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-10 mt-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Average rating and distribution */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{averageRating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">out of 5</span>
            </div>
            
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar 
                  key={star}
                  className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-[#ffd200] fill-[#ffd200]' : 'text-gray-300 dark:text-gray-600'}`}
                />
              ))}
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{totalReviews.toLocaleString()} ratings</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <button 
                  onClick={() => setActiveFilter(rating.toString())}
                  className="flex items-center hover:underline text-gray-600 dark:text-gray-300"
                >
                  <span>{rating} star</span>
                </button>
                <div className="w-full mx-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-[#ffd200] rounded-full" 
                    style={{ width: `${calculatePercentage(ratingDistribution[rating as keyof typeof ratingDistribution])}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[40px] text-right">
                  {calculatePercentage(ratingDistribution[rating as keyof typeof ratingDistribution]).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Filter reviews</h3>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilter === 'all' 
                    ? 'bg-[#ffd200] text-gray-900' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveFilter('positive')}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilter === 'positive' 
                    ? 'bg-[#ffd200] text-gray-900' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                Positive
              </button>
              <button 
                onClick={() => setActiveFilter('negative')}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilter === 'negative' 
                    ? 'bg-[#ffd200] text-gray-900' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                Critical
              </button>
              <button 
                onClick={() => setActiveFilter('media')}
                className={`px-3 py-1 text-sm rounded-full flex items-center ${
                  activeFilter === 'media' 
                    ? 'bg-[#ffd200] text-gray-900' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <FiImage className="mr-1 h-3 w-3" />
                With media
              </button>
            </div>
          </div>
        </div>
        
        {/* Right column: Reviews */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
            </h3>
            <div className="relative inline-block">
              <button className="flex items-center text-sm text-gray-600 dark:text-gray-300 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md">
                <FiFilter className="mr-2 h-4 w-4" />
                Sort by: Most recent
                <FiChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {displayedReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <FiUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{review.username}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar 
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? 'text-[#ffd200] fill-[#ffd200]' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                  ))}
                  <span className="ml-2 font-medium text-gray-900 dark:text-white">{review.title}</span>
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Reviewed on {review.date} {review.verified && <span className="text-green-600 dark:text-green-500 ml-2">✓ Verified Purchase</span>}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{review.content}</p>
                
                {review.images && review.images.length > 0 && (
                  <div className="flex mb-4 overflow-x-auto space-x-2 pb-2">
                    {review.images.map((image, index) => (
                      <div key={index} className="flex-shrink-0 h-20 w-20 relative rounded overflow-hidden">
                        <img src={image} alt={`Review image ${index + 1}`} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400 mr-3">{review.helpful} people found this helpful</span>
                  <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#ffd200] mr-3">
                    <FiThumbsUp className="mr-1 h-3.5 w-3.5" />
                    Helpful
                  </button>
                  <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#ffd200]">
                    <FiThumbsDown className="mr-1 h-3.5 w-3.5" />
                    Not helpful
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredReviews.length > 3 && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="px-5 py-2 bg-[#ffd200] text-gray-900 font-medium rounded-md hover:bg-[#e6bd00] transition-colors"
              >
                {showAllReviews ? 'Show Less Reviews' : `See All ${filteredReviews.length} Reviews`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews; 