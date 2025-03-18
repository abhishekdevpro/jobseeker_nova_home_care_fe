import React from "react";
import { FaRegFileAlt, FaRegFilePdf, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SeamlessMedicalBilling = () => {
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
              Efficient Claims Processing
            </h3>
            <p className="text-teal-500 text-center">
              Submit insurance claims accurately and get faster reimbursements
              with automated billing tools.
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
              Track Payments & Invoices
            </h3>
            <p className="text-teal-500 text-center">
              Monitor payments, manage invoices, and reduce errors with
              real-time financial tracking.
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
              Compliance & Verification
            </h3>
            <p className="text-teal-500 text-center">
              {/* Enhance skills with our Edtech platform. */}Easily track and
              Ensure HIPAA-compliant billing with secure data handling and
              verification processes.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeamlessMedicalBilling;
