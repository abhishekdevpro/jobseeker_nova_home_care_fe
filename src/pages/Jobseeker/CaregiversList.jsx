import React from 'react';
import { Heart, BadgeCheck } from 'lucide-react';

const caregivers = [
  {
    id: 1,
    name: 'Tekoah S.',
    location: 'Waltham, MA 02451',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    reviewCount: 12,
    hourlyRate: 29,
    isVerified: true,
    hiredCount: 2,
    testimonial: {
      text: 'Tekoah was a delight and was fantastic with both our 18-month old and our often-skiddish dog. She did gre...',
      author: {
        avatar: '/api/placeholder/40/40'
      }
    }
  },
  {
    id: 2,
    name: 'Abigail B.',
    location: 'Brighton, MA 02135',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    reviewCount: 8,
    hourlyRate: 29,
    isVerified: true,
    testimonial: {
      text: "I cannot recommend Abby more highly. She's an incredible babysitter and great human being. Super reliable...",
      author: {
        initials: 'JT'
      }
    }
  }
];

const StarRating = ({ rating, count }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, index) => (
      <span key={index} className="text-yellow-400">★</span>
    ))}
    <span className="text-gray-500 text-sm">({count})</span>
  </div>
);

const CaregiverCard = ({ caregiver }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div className="flex space-x-4">
          <img
            src={caregiver.avatar}
            alt={caregiver.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{caregiver.name}</h3>
              {caregiver.isVerified && (
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{caregiver.location}</p>
            <StarRating rating={caregiver.rating} count={caregiver.reviewCount} />
            {caregiver.hiredCount && (
              <p className="text-sm text-green-600 mt-1">
                Hired by {caregiver.hiredCount} families in your neighborhood
              </p>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="text-gray-500 text-sm">from</div>
          <div className="text-2xl font-semibold mb-2">${caregiver.hourlyRate}</div>
          <div className="text-gray-500 text-sm mb-4">per hour</div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start space-x-3">
        {caregiver.testimonial.author.avatar ? (
          <img
            src={caregiver.testimonial.author.avatar}
            alt="Testimonial author"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            {caregiver.testimonial.author.initials}
          </div>
        )}
        <div className="flex-1">
          <p className="text-gray-600 text-sm">
            "{caregiver.testimonial.text}"
            <button className="text-blue-500 hover:text-blue-600 ml-1">
              more
            </button>
          </p>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors duration-200">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const CaregiverList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {caregivers.map((caregiver) => (
        <CaregiverCard key={caregiver.id} caregiver={caregiver} />
      ))}
    </div>
  );
};

export default CaregiverList;