import React from "react";
import pdfUrl from '../assests/pdfUrl.pdf'
const ElderlyManagement = () => {
  // Replace this with your actual PDF URL
  ;

  return (
    <div className="mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Side Content */}
        <div className="lg:w-1/2">
          <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg">
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              className="w-full h-72 md:h-[400px] lg:h-[400px]"
            ></iframe>
          </div>
        </div>
        {/* Right Side - PDF Viewer using iframe */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-teal-700 text-sm font-semibold mb-2">AI-Integrated</h2>
          <h1 className="text-teal-700 text-3xl md:text-4xl font-bold mb-4">
            Durable Medical Equipment (DME) Solutions by Nova Home Care
          </h1>
          <ul className="mb-6 space-y-2">
            {["Smart home medical devices like AI-powered beds and mobility aids.",
              "Seamless Medicaid, Medicare, and private insurance integration.",
              "AI-driven health monitoring with contactless vitals tracking.",
              "Customized assistive technology for seniors and disabled individuals.",
              "White-label DME solutions for home care agencies.",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700 text-base md:text-lg">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition duration-300">
              Know More
            </button>
            <button className="border border-teal-700 text-teal-700 px-6 py-2 rounded-md flex items-center justify-center hover:bg-teal-50 transition duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How To Apply
            </button>
          </div> */}
        </div>

        
        
      </div>
    </div>
  );
};

export default ElderlyManagement;