import React from "react";
import { Link } from "react-router-dom";

const DocumentUpload = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-teal-50 rounded-md shadow-lg p-6">
        <h2 className="text-teal-800 text-xl font-bold mb-4">My Documents</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-teal-200">
            <thead className="bg-teal-100">
              <tr>
                <th className="border border-teal-200 px-4 py-2 text-left text-teal-700 font-medium">
                  Document
                </th>
                <th className="border border-teal-200 px-4 py-2 text-left text-teal-700 font-medium">
                  Status
                </th>
                <th className="border border-teal-200 px-4 py-2 text-left text-teal-700 font-medium">
                  Expiration Date
                </th>
                <th className="border border-teal-200 px-4 py-2 text-left text-teal-700 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-teal-200 px-4 py-2 text-teal-700">
                  CV
                </td>
                <td className="border border-teal-200 px-4 py-2 text-teal-700">
                  Pending
                </td>
                <td className="border border-teal-200 px-4 py-2 text-teal-700">
                  -
                </td>
                <td className="border border-teal-200 px-4 py-2">
                  <button className="text-teal-600 hover:underline">
                    On file
                  </button>{" "}
                  |{" "}
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-teal-600 mt-6">
          By clicking "Add new document" you confirm that the documents you
          upload are true and accurate. Care.com will review each document for
          inappropriate content. Identity documents (Passports/ID Cards/Driver's
          Licenses) are never shared. Please black out any personal information
          you don't want shared with care seekers. You release Care.com from
          liability related to document disclosures.
        </p>

       <Link to={'/jobseeker-upload-document'}>
       <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded mt-6">
          Add new document
        </button>
       </Link>
      </div>
    </div>
  );
};

export default DocumentUpload;
