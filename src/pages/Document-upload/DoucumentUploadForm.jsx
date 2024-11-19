import React, { useState } from 'react';

const DocumentUploadForm = () => {
  const [files, setFiles] = useState([null, null, null]);
  const [documentTypes, setDocumentTypes] = useState(['', '', '']);

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);
  };

  const handleTypeChange = (index, event) => {
    const newTypes = [...documentTypes];
    newTypes[index] = event.target.value;
    setDocumentTypes(newTypes);
  };

  const handleUpload = () => {
    console.log('Files:', files);
    console.log('Document Types:', documentTypes);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      <div className="w-full max-w-8xl bg-white rounded-lg shadow-lg">
        {/* Header */}
       
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-teal-700">Add new document</h2>
          <p className="text-gray-600 font-medium mt-2">Stand out! Upload certificates and other documents</p>
          <p className="text-sm text-gray-500 mt-1">
            You can upload documents that will help demonstrate your trustworthiness and qualifications in your field. Select the documents you would like to upload to your profile.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <select
                className="flex-1 p-2 border rounded-md border-gray-300 bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
                value={documentTypes[index]}
                onChange={(e) => handleTypeChange(index, e)}
              >
                <option value="">Select one...</option>
                <option value="certificate">Certificate</option>
                <option value="id">ID Document</option>
                <option value="license">License</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver's License</option>
              </select>
              <div className="flex-1">
                <input
                  type="file"
                  id={`file-${index}`}
                  className="hidden"
                  onChange={(e) => handleFileChange(index, e)}
                  accept=".pdf,.jpg,.gif,.png"
                />
                <label
                  htmlFor={`file-${index}`}
                  className="inline-block w-full sm:w-auto text-center px-4 py-2 bg-gray-100 text-gray-700 rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                >
                  Select File
                </label>
                {files[index] && (
                  <p className="mt-2 text-sm text-gray-600">
                    {files[index].name}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Information Alert */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600">
              By clicking "Add new document" you confirm that the documents you upload are true and accurate documents pertaining to you. You understand that care.com will review each document for appropriate content and regulate which documents will be made available for care seekers to view. Care.com members only share their express consent through their account. Identity documents (Passports / ID Cards, Driver's License, etc.) are never shared. Prior to uploading certificates, we encourage you to black out any personal information you do not want to share with care seekers.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You can upload a PDF, JPG, GIF or PNG (file size limit is 10 MB)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row justify-between gap-4">
          <button 
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={handleUpload}
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadForm;