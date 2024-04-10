// components/Footer.js

import React from 'react';

export default function footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            <h2 className="text-white text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Main Street</p>
            <p className="text-gray-400">City, State 12345</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            <h2 className="text-white text-lg font-bold mb-4">Social Media</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


