
import React, { useState } from 'react';
import { ChevronDown, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobListingPage = () => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  const jobs = [
    {
      id: 1,
      title: "Senior Caregiver Position",
      location: "Dublin West",
      postedBy: "Sarah M.",
      area: "Clondalkin",
      description: "Looking for an experienced caregiver to provide support...",
      salary: "€80",
      hours: "8 Hr. / Day",
      startDate: "Starts: Shortly",
      children: 1,
      matchPercentage: 86
    },
    {
      id: 2,
      title: "Childcare Professional Needed",
      location: "Dublin South",
      postedBy: "Michael R.",
      area: "Blackrock",
      description: "Seeking a qualified childcare professional for our toddler...",
      salary: "€90",
      hours: "6 Hr. / Week",
      startDate: "Starts: Next Week",
      children: 1,
      matchPercentage: 92
    },
    {
      id: 3,
      title: "Childcare Professional Needed",
      location: "Dublin South",
      postedBy: "Michael R.",
      area: "Blackrock",
      description: "Seeking a qualified childcare professional for our toddler...",
      salary: "€90",
      hours: "6 Hr. / Week",
      startDate: "Starts: Next Week",
      children: 1,
      matchPercentage: 92
    },
    {
      id: 4,
      title: "Childcare Professional Needed",
      location: "Dublin South",
      postedBy: "Michael R.",
      area: "Blackrock",
      description: "Seeking a qualified childcare professional for our toddler...",
      salary: "€90",
      hours: "6 Hr. / Week",
      startDate: "Starts: Next Week",
      children: 1,
      matchPercentage: 92
    }
  ];

  const filterCategories = [
    { name: "Household help", count: 5 },
    { name: "Childcare", count: 13 },
    { name: "Pet care", count: 1 },
    { name: "Elderly care", count: 0 },
    { name: "Special needs care", count: 0 },
    { name: "Tutors", count: 0 },
    { name: "Au pairs", count: 637, worldwide: true }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">OUR LATEST JOBS ({jobs.length})</h1>
        <button
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="flex items-center text-teal-600 hover:text-teal-700"
        >
          + Filter
        </button>
      </div>

      {/* Filter Panel */}
      {isFilterExpanded && (
        <div className="bg-white p-4 rounded-lg mb-6 transition-all border border-gray-200 shadow-sm">
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-gray-200">
              <MapPin size={18} className="text-teal-600" />
              <input
                type="text"
                placeholder="Location"
                className="outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <select className="border border-gray-200 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>20 km radius</option>
              <option>10 km radius</option>
              <option>30 km radius</option>
            </select>
          </div>
          <div className="space-y-3">
            {filterCategories.map((category) => (
              <label key={category.name} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="category" 
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">{category.name}</span>
                <span className="text-gray-500 text-sm">
                  ({category.worldwide ? 'worldwide: ' : ''}{category.count} jobs)
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Link to={'/jobseeker-jobdetail/1'}>
                <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                 </Link>
                <p className="text-gray-600">by {job.postedBy} • {job.area}</p>
              </div>
              <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-sm">
                {job.matchPercentage}% MATCH
              </span>
            </div>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="font-semibold text-teal-600">€{job.salary}</span>
              <span className="flex items-center gap-1">
                <Clock size={16} className="text-teal-600" />
                {job.hours}
              </span>
              <span>{job.startDate}</span>
              <span>{job.children} Child</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-teal-600 rounded-lg text-white hover:bg-teal-700 transition-colors">
        View {jobs.length} Jobs
      </button>
    </div>
  );
};

export default JobListingPage;