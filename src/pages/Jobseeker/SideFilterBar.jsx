import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [priceRange, setPriceRange] = useState(50);
  const [selectedJobType, setSelectedJobType] = useState('Nanny');
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    availability: {
      title: 'Availability',
      isOpen: true,
      options: {
        morning: false,
        afternoon: false,
        evening: false,
        weekends: false
      }
    },
    services: {
      title: 'Services',
      isOpen: true,
      options: {
        childCare: false,
        seniorCare: false,
        housekeeping: false,
        petCare: false,
        tutoring: false
      }
    },
    experience: {
      title: 'Experience',
      isOpen: true,
      options: {
        beginner: false,
        intermediate: false,
        expert: false
      }
    },
    languages: {
      title: 'Languages',
      isOpen: true,
      options: {
        english: false,
        spanish: false,
        french: false,
        mandarin: false
      }
    }
  });

  const toggleFilter = (category, option) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        options: {
          ...prev[category].options,
          [option]: !prev[category].options[option]
        }
      }
    }));
  };

  const toggleSection = (category) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        isOpen: !prev[category].isOpen
      }
    }));
  };

  const FilterSection = ({ category, data }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(category)}
        className="flex justify-between items-center w-full mb-2 text-left"
      >
        <span className="font-medium text-gray-800">{data.title}</span>
        {data.isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {data.isOpen && (
        <div className="space-y-2">
          {Object.entries(data.options).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleFilter(category, key)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-80 bg-white h-screen shadow-lg">
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`${isOpen ? 'block' : 'hidden md:block'}`}>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

          {/* Job Type and Location */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">Showing results for</label>
            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Nanny">Nanny</option>
              <option value="Babysitter">Babysitter</option>
              <option value="Senior Care">Senior Care</option>
              <option value="Pet Care">Pet Care</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">Where do you need care?</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter ZIP code"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          
          {/* Price Range */}
          <div className="border-b border-gray-200 py-4">
            <h3 className="font-medium text-gray-800 mb-4">Price Range</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>${priceRange}/hr</span>
              </div>
            </div>
          </div>

          {/* Filter Sections */}
          {Object.entries(filters).map(([category, data]) => (
            <FilterSection key={category} category={category} data={data} />
          ))}

          {/* Apply Filters Button */}
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
