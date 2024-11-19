import React from "react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-teal-50 py-8 px-4 sm:px-6 md:px-16">
      {/* Card Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
          <Link to={'/jobseeker-dashboard/dashboard'} className="text-teal-600 font-medium text-sm mb-4 sm:mb-0">
            &lt; View all jobs
          </Link>
          <a href="#" className="text-teal-600 font-medium text-sm">
            Next job &gt;
          </a>
        </div>

        {/* Job Title */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-teal-700 mb-4">
              Osaavaa au pairia haetaan 2 lapselle
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              Finland, Helsinki, Finland <br />
              Language: languages.other, Russian, English <br />
              Starts: 01/2025 Duration 6-12 months
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <button className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition duration-300">
              Apply
            </button>
            <button className="border border-teal-600 text-teal-600 py-2 px-6 rounded-md hover:bg-teal-100 transition duration-300">
              Not interested
            </button>
          </div>
        </div>

        {/* Description and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-sm leading-6 mb-6">
              Etsin au pairia, jota kiinnostaa työskennellä ja asua kaupungissa
              Helsinki. Tehtäväsi on pitää huolta 2 lapsestani. Jos olet
              kiinnostunut, lähetä minulle viesti ja kerron lisää työstä! Jos
              kiinnostuit, laita viestiä.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-bold text-lg">OK</span>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">Created by Olga</p>
                <p className="text-sm text-gray-500">on 16/11/2024</p>
              </div>
            </div>
          </div>

          {/* About Family and Desired Services */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold text-teal-700 mb-4">
              About Family
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Age: Primary school age (7-12 years)
            </p>
            <h3 className="text-lg font-semibold text-teal-700 mb-4">
              Desired Services
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Light housekeeping</li>
              <li>Putting kids to bed</li>
              <li>Cooking / Meal preparation</li>
              <li>Pick up / Drop off</li>
              <li>Activities (e.g. swimming)</li>
              <li>Homework help</li>
              <li>Bathing</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
      </div>
    </div>
  );
};

export default JobDetails;
