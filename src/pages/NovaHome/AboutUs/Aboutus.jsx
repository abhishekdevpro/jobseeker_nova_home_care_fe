// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./aboutus.css";
// import Introductions from "./Introductions";
// import ForJobseeker from "./ForJobseeker";
// import ForEmployer from "./ForEmployer";
// import Novajobsus from "./Novajobsus";
// import MoreServices from "./MoreServices";
// import Navbar from "../Header/Navbar";
// import FullPageLoader from "../NovaLoader/FullPageLoader";

// function Aboutus2() {
//   const [sections, setSections] = React.useState([]);
//   const [loading,setLoading] =  useState(false)

//   // Fetch data from the GET API
//   const fetchContent = async () => {
//     setLoading(true)
//     try {
//       const response = await axios.get(
//         `https://apiwl.novajobs.us/api/admin/homecare/get-aboutus-content`
//       );
//       const data = response.data;
//       setSections(data.data || []);
//       // Fallback content if fields are empty or null
//     } catch (error) {
//       console.error("Error fetching content:", error);
//       // alert("An error occurred while fetching content.");
//     }
//     finally{
//       setLoading(false)
//     }
//   };
//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const getSectionData = (id) => {
//     console.log("sections", sections);
//     return sections.find((section) => section.id === id);
//   };
//   return (
//     <>
//       <div className="page-wrapper ">
//       <Navbar />
//         <span className="header-span"></span>

//         {loading ? <FullPageLoader message="Loading..." /> :<section className="user-dashboard bg-teal-50 ">
//           <div className="dashboard-outer">
//             <div className="page-content bg-white">
//               <div className="content-block ">
//                 <div className="section-full bg-white p-t50 p-b20">
//                   <div className="container">
//                     <div className="m-b30">
//                       <div className="job-bx">
//                         {sections.length ? (
//                           <>
//                             <Introductions
//                               introductionData={getSectionData(1)}
//                             />
//                             <ForJobseeker
//                               forJobseekerData={getSectionData(2)}
//                             />
//                             <ForEmployer forEmployerData={getSectionData(3)} />
//                             <Novajobsus novaJobsusData={getSectionData(4)} />
//                             <MoreServices
//                               moreServicesData={getSectionData(5)}
//                             />
//                           </>
//                         ) : null}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>}
//       </div>
//     </>
//   );
// }

// export default Aboutus2;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";
import Navbar from "../Header/Navbar";
import FullPageLoader from "../NovaLoader/FullPageLoader";

function Aboutus2() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from the GET API
  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiwl.novajobs.us/api/admin/homecare/get-aboutus-content`
      );
      const data = response.data;
      setSections(data.data || []);
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const getSectionData = (id) => {
    return sections.find((section) => section.id === id);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />
        <span className="block h-16"></span>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <FullPageLoader message="Loading..." />
          </div>
        ) : (
          <section className="py-6 px-4 md:px-10 bg-white">
            <div className="max-w-7xl mx-auto">
              {sections.length > 0 ? (
                <>
                  <Introductions introductionData={getSectionData(1)} />
                  <ForJobseeker forJobseekerData={getSectionData(2)} />
                  <ForEmployer forEmployerData={getSectionData(3)} />
                  <Novajobsus novaJobsusData={getSectionData(4)} />
                  <MoreServices moreServicesData={getSectionData(5)} />
                </>
              ) : (
                <p className="text-center text-gray-500">
                  No content available.
                </p>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Aboutus2;
