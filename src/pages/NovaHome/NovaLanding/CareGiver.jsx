import React from "react";
import { FaRegFileAlt, FaRegFilePdf, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const CareGiver = () => {
  return (
    <div className="flex flex-col items-center bg-white p-8 gap-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-teal-800 leading-snug m-0">
        Why choose us,
        <br />
        among other Job sites.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Card 1 - Build AI Resume */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
          <div className="text-teal-600 text-3xl mb-4">
            <FaRegFileAlt />
          </div>
          <Link to="/" className="no-underline">
            <h3 className="flex justify-center text-lg font-bold text-teal-700 mb-2 cursor-pointer">
              Find Qualified Caregivers
            </h3>
            <p className="text-teal-500 text-center">
              Browse and hire trained professionals for home healthcare, elderly
              care, and specialized support.
            </p>
          </Link>
        </div>

        {/* Card 2 - Give skill test */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
          <div className="text-teal-600 text-3xl mb-4">
            <FaRegFilePdf />
          </div>
          <Link to="/" className="no-underline">
            <h3 className="flex justify-center text-lg font-bold text-teal-700 mb-2">
              Background-Verified Professionals
            </h3>
            <p className="text-teal-500 text-center">
              We ensure every caregiver undergoes a thorough background check
              for your peace of mind.
            </p>
          </Link>
        </div>

        {/* Card 3 - Enhance Skills */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
          <div className="text-teal-600 text-3xl mb-4">
            <FaRegUser />
          </div>
          <Link to="/" className="no-underline">
            <h3 className="flex justify-center text-lg font-bold text-teal-700 mb-2">
              Manage & Track Care Services
            </h3>
            <p className="text-teal-500 text-center">
              {/* Enhance skills with our Edtech platform. */}
              Monitor schedules, track working hours, and manage caregiver
              payments all in one place.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareGiver;
