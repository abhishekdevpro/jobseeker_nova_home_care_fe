import React, { useState } from 'react';
import { FaStar, FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobPortalSection = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  
  return (
    <div className="w-full py-16 bg-white/50 text-white text-center ">
      <div className="md:container mx-auto px-4">
        <div className="section-head text-center text-white">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Job Seeker Box */}
            <div
              className={`bg-teal-500 rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-md ${
                hoveredBox === "jobseeker" ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredBox("jobseeker")}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <div className="flex flex-col gap-4 items-start text-left">
                <div className="flex items-center gap-3">
                  <FaStar className="text-white text-xl" />
                  <h3 className="text-lg font-semibold text-white m-0">
                    Looking For a Care Job
                  </h3>
                </div>
                <p className="text-sm text-white m-0">
                  Search Jobs with advanced filters and the power of AI
                </p>
                <Link to="/login" className="text-white no-underline">
                  <button
                    type="button"
                    className="bg-white text-teal-700 font-medium py-2 px-4 rounded-md hover:bg-teal-50 transition-colors duration-300"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Employer Box */}
            <div
              className={`bg-white text-teal-700 rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-md ${
                hoveredBox === "employer" ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredBox("employer")}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <div className="flex flex-col gap-4 items-start text-left">
                <div className="flex items-center gap-3">
                  <FaRegEdit className="text-teal-700 text-xl" />
                  <h3 className="text-lg font-semibold text-teal-700 m-0">
                    Are you Searching for Caregiver?
                  </h3>
                </div>
                <p className="text-sm text-teal-700 m-0">
                  List your requirements, post jobs, search verified caregivers with advanced filters and power of AI
                </p>
                <Link to="/" className="no-underline">
                  <button
                    type="button"
                    className="bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
                  >
                    Search Caregivers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortalSection;