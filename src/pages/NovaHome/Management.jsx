import React from 'react';
import ReactPlayer from "react-player";
import img1 from './assests/m1.jpg'
import img2 from './assests/m2.jpg'
const ElderlyManagement = () => {
  return (
    <div className=" mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="relative mb-4 lg:mb-0 w-1/2 ">
          
       <ReactPlayer
                  url="https://www.youtube.com/embed/KmlLB-t6IUI"
                  width="600px"
                  height="500px"
                  controls={true}
                  style={{
                    margin: "50px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
         
        </div>
        <div className="lg:pl-12 flex flex-col justify-center w-1/2">
          <h2 className="text-teal-700 text-sm font-semibold mb-2">About Us</h2>
          <h1 className="text-teal-700 text-3xl md:text-4xl font-bold mb-4">
            Skilled Elderly Management
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-lg lg:text-xl">
            We provide exceptional, personalized care for the elderly.
            Our professional team ensures comfort and well-being,
            focusing on dignity and respect to enhance their quality of life.
          </p>
          <ul className="mb-6 space-y-2">
            {['Security & Safety', 'Non Medical Support', 'Best Care Takers', 'Relaxing Environment'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700 text-base md:text-lg lg:text-xl">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyManagement;
