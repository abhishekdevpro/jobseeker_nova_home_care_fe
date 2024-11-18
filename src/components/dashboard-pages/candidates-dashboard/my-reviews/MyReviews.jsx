import React, { useState } from 'react';
import { Star } from 'lucide-react';

const MyReviews = () => {
  const [firstName, setFirstName] = useState('');

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Reviews</h1>
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            {/* Profile Image */}
            <div className="w-48 h-48 bg-green-100 rounded-lg flex items-center justify-center">
              <button className="text-green-600 text-sm font-medium">
                Upload your photo!
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
                <h2 className="text-xl text-cyan-500 font-medium">John J.</h2>
                <span className="text-gray-500">| H53 Scregg</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className="w-5 h-5 text-gray-300"
                    strokeWidth={1}
                  />
                ))}
                <span className="text-gray-500 text-sm">No Reviews</span>
              </div>
            </div>
          </div>

          {/* Review Request Section */}
          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              Ask for a review of your work to improve your profile and increase your future job chances.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter the first name of the person you worked for"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors">
                Request Review
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Hourly Rate Card */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Hourly Rate in Your Region
          </h2>

          <div className="bg-white p-4 rounded-md mb-4">
            <div className="flex items-baseline">
              <span className="text-4xl font-light text-gray-400">€</span>
              <span className="text-4xl font-light text-gray-400">10.00</span>
              <span className="text-gray-400 ml-1">/Hour</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            Average hourly rate for childcare in H53 Scregg
          </p>

          <button className="text-cyan-500 hover:text-cyan-600 font-medium">
            Calculate exact hourly rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;