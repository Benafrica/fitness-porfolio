// pages/reviews.js

import React, { useState, useEffect } from 'react';

export default function reviews() {
  // Dummy data for reviews (replace with your actual reviews)
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus at justo tincidunt sodales.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Aenean nec magna quis lorem gravida congue. Fusce vel ligula arcu.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      comment: 'Nullam commodo eros a libero tristique interdum. Duis eget eros vitae ligula mollis pulvinar.',
      rating: 5,
    },
    // Add more reviews as needed
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prevIndex => (prevIndex === reviews.length - 2 ? 0 : prevIndex + 1));
    }, 5000); // Auto-swapping interval in milliseconds (adjust as needed)

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Clients Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map(index => (
          <div key={reviews[currentReviewIndex + index].id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center mr-2">
                <span className="font-bold text-gray-700">{reviews[currentReviewIndex + index].rating}</span>
              </div>
              <span className="font-semibold">{reviews[currentReviewIndex + index].name}</span>
            </div>
            <p className="text-gray-600">{reviews[currentReviewIndex + index].comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


