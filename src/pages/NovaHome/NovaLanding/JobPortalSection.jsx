// import React, { useState } from 'react';
// import { FaStar, FaRegEdit } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const JobPortalSection = () => {
//   const [hoveredBox, setHoveredBox] = useState(null);

//   return (
//     <div className="w-full py-16 bg-white/50 text-white text-center ">
//       <div className="md:container mx-auto px-4">
//         <div className="section-head text-center text-white">
//           <div className="flex flex-col md:flex-row gap-6 justify-center">
//             {/* Job Seeker Box */}
//             <div
//               className={`bg-teal-500 rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-md ${
//                 hoveredBox === "jobseeker" ? "transform -translate-y-2" : ""
//               }`}
//               onMouseEnter={() => setHoveredBox("jobseeker")}
//               onMouseLeave={() => setHoveredBox(null)}
//             >
//               <div className="flex flex-col gap-4 items-start text-left">
//                 <div className="flex items-center gap-3">
//                   <FaStar className="text-white text-xl" />
//                   <h3 className="text-lg font-semibold text-white m-0">
//                     Looking For a Care Job
//                   </h3>
//                 </div>
//                 <p className="text-sm text-white m-0">
//                   Search Jobs with advanced filters and the power of AI
//                 </p>
//                 <Link to="/login" className="text-white no-underline">
//                   <button
//                     type="button"
//                     className="bg-white text-teal-700 font-medium py-2 px-4 rounded-md hover:bg-teal-50 transition-colors duration-300"
//                   >
//                     Apply Now
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* Employer Box */}
//             <div
//               className={`bg-white text-teal-700 rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-md ${
//                 hoveredBox === "employer" ? "transform -translate-y-2" : ""
//               }`}
//               onMouseEnter={() => setHoveredBox("employer")}
//               onMouseLeave={() => setHoveredBox(null)}
//             >
//               <div className="flex flex-col gap-4 items-start text-left">
//                 <div className="flex items-center gap-3">
//                   <FaRegEdit className="text-teal-700 text-xl" />
//                   <h3 className="text-lg font-semibold text-teal-700 m-0">
//                     Are you Searching for Caregiver?
//                   </h3>
//                 </div>
//                 <p className="text-sm text-teal-700 m-0">
//                   List your requirements, post jobs, search verified caregivers with advanced filters and power of AI
//                 </p>
//                 <Link to="/" className="no-underline">
//                   <button
//                     type="button"
//                     className="bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
//                   >
//                     Search Caregivers
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobPortalSection;

import React, { useState } from "react";
import { FaStar, FaRegEdit, FaBook, FaWheelchair } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhyChooseUsSection from "./WhyChooseUs";
import CareGiver from "./Caregiver";
import DMEProvider from "./DMEProvider";
import HomeCareBuisness from "./HomeCareBuisness";

const JobPortalSection = () => {
  const [hoveredBox, setHoveredBox] = useState("jobSeeker");

  return (
    <div className="w-full py-16 bg-white/50 text-white text-center relative">
      <div className="md:container mx-auto px-4">
        <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap relative">
          {/* Job Seeker Box */}
          <div
            className="rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-sm text-teal-700 hover:bg-teal-500 hover:text-white group"
            onMouseEnter={() => setHoveredBox("jobSeeker")}
            onMouseLeave={() => setHoveredBox("jobSeeker")}
          >
            <div className="flex flex-col gap-4 items-start text-left">
              <div className="flex items-center gap-3">
                <FaStar className="text-teal-700 text-xl transition-colors duration-300 group-hover:text-white" />
                <h3 className="text-lg font-semibold m-0 group-hover:text-white">
                  Looking For a Care Job
                </h3>
              </div>
              <p className="text-sm m-0 group-hover:text-white text-teal-700">
                Search Jobs with advanced filters and the power of AI
              </p>
              <Link to="/login" className="no-underline">
                <button
                  type="button"
                  className="bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Employer Box */}
          <div
            className="rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-sm text-teal-700 hover:bg-teal-500 hover:text-white group"
            onMouseEnter={() => setHoveredBox("caregiver")}
            onMouseLeave={() => setHoveredBox("jobSeeker")}
          >
            <div className="flex flex-col gap-4 items-start text-left">
              <div className="flex items-center gap-3">
                <FaRegEdit className="text-teal-700 text-xl transition-colors duration-300 group-hover:text-white" />
                <h3 className="text-lg font-semibold m-0 group-hover:text-white">
                  Are you looking for CareGiver?
                </h3>
              </div>
              <p className="text-sm m-0 group-hover:text-white text-teal-700">
                Get Reliable Care with Trusted Caregivers
              </p>
              <Link to="/login" className="no-underline">
                <button
                  type="button"
                  className="bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Search Caregivers
                </button>
              </Link>
            </div>
          </div>

          {/* DME Provider Box */}
          <div
            className="rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-sm text-teal-700 hover:bg-teal-500 hover:text-white group"
            onMouseEnter={() => setHoveredBox("dme")}
            onMouseLeave={() => setHoveredBox("jobSeeker")}
          >
            <div className="flex flex-col gap-4 items-start text-left">
              <div className="flex items-center gap-3">
                <FaWheelchair className="text-teal-700 text-xl transition-colors duration-300 group-hover:text-white" />
                <h3 className="text-lg font-semibold m-0 group-hover:text-white">
                  Are you a DME Provider?
                </h3>
              </div>
              <p className="text-sm m-0 group-hover:text-white text-teal-700">
                Receive and manage patient referrals efficiently
              </p>
              <Link to="/" className="no-underline">
                <button
                  type="button"
                  className="bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Manage account
                </button>
              </Link>
            </div>
          </div>

          {/* Homecare Business Box */}
          <div
            className="rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 max-w-sm text-teal-700 hover:bg-teal-500 hover:text-white group"
            onMouseEnter={() => setHoveredBox("homecare")}
            onMouseLeave={() => setHoveredBox("jobSeeker")}
          >
            <div className="flex flex-col gap-4 items-start text-left">
              <div className="flex items-center gap-3">
                <FaBook className="text-teal-700 text-xl transition-colors duration-300 group-hover:text-white" />
                <h3 className="text-lg font-semibold m-0 group-hover:text-white">
                  Take Your Homecare Business Online with Us
                </h3>
              </div>
              <p className="text-sm m-0 group-hover:text-white text-teal-700">
                Digitize and simplify your homecare operations with
                NovaHome.Care
              </p>
              <Link to="/login" className="no-underline">
                <button
                  type="button"
                  className="bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Get started for Free
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Conditional Rendering of Sections */}
        <div className=" left-0 right-0 top-full mt-4">
          {hoveredBox === "jobSeeker" && <WhyChooseUsSection />}
          {hoveredBox === "caregiver" && <CareGiver />}
          {hoveredBox === "dme" && <DMEProvider />}
          {hoveredBox === "homecare" && <HomeCareBuisness />}
        </div>
      </div>
    </div>
  );
};

export default JobPortalSection;
