// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaSearch, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// // import JobseekerForm from "./JobseekerForm";
// // import PartnerForm from "./Partnersform";
// // import EmployeeForm from "./EmployeeForm";
// // import bgimg from "./bg-img.jpg";
// import videoSrc from "./assests/herovideo.mp4";
// import { useEffect } from "react";
// import axios from "axios";

// // ... (keep all the existing styled components)
// const Video = styled.video`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 100%;
//   height: auto; /* Keep the aspect ratio */
//   min-height: 100%;
//   min-width: 100%;
//   object-fit: cover; /* Cover the entire container */
//   transform: translate(-50%, -50%);
//   z-index: 0; /* Video is behind everything */
// `;

// const Container = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   position: relative;
//   overflow: hidden; /* Prevent overflow due to video */

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
//     z-index: 1; /* Overlay above video */
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Heading1 = styled.h1`
//   font-size: 5rem;
//   color: #ffffff;
//   font-weight: bold;
//   margin-bottom: 0.5rem;
//   text-align: center;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   z-index: 2; /* Ensure prompt is above the overlay */
//   @media (max-width: 768px) {
//     font-size: 2.25rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.75rem;
//   }
// `;

// const Heading2 = styled.h2`
//   font-size: 2rem;
//   color: #ff6b6b;
//   font-weight: 600;
//   margin-bottom: 2rem;
//   text-align: center;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
//   z-index: 2; /* Ensure prompt is above the overlay */
//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.25rem;
//   }
// `;

// const Prompt = styled.p`
//   font-size: 2rem;
//   color: #ffffff;
//   font-weight: 800;
//   margin-bottom: 2rem;
//   text-align: center;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
//   z-index: 2; /* Ensure prompt is above the overlay */
// `;

// const OptionWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   width: 100%;
//   max-width: 800px;
//   z-index: 2; /* Ensure prompt is above the overlay */
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const OptionLabel = styled.button`
//   background-color: ${(props) => (props.selected ? "#ff6b6b" : "#4a4e69")};
//   color: #ffffff;
//   border: none;
//   border-radius: 2rem;
//   padding: 1rem 2rem;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//     background-color: ${(props) => (props.selected ? "#ff8787" : "#5c6283")};
//   }

//   @media (max-width: 768px) {
//     width: 80%;
//     margin-bottom: 0.5rem;
//   }
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   width: 100%;
//   max-width: 600px;
//   margin-bottom: 2rem;

//   @media (max-width: 768px) {
//     max-width: 90%;
//   }
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 1rem 3rem 1rem 1.5rem;
//   border-radius: 2rem;
//   border: none;
//   font-size: 1.1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease-in-out;

//   &:focus {
//     outline: none;
//     box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//   }
// `;

// const SearchIcon = styled(FaSearch)`
//   position: absolute;
//   right: 1.5rem;
//   font-size: 1.25rem;
//   color: #4a4e69;
//   cursor: pointer;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ff6b6b;
//   }
// `;

// const Modal = styled.div`
//   // border: 2px solid red;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #ffffff;
//   padding: 0.5rem;
//   border-radius: 1rem;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   max-width: 90%;
//   width: 500px;
//   max-height: 80vh;
//   overflow-y: auto;

//   @media (max-width: 768px) {
//     width: 90%;
//     padding: 0.5rem;
//   }
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.7);
//   z-index: 999;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   color: #4a4e69;
//   cursor: pointer;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ff6b6b;
//   }
// `;

// const ModalTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #4a4e69;
//   // margin-bottom: 1.5rem;
//   text-align: center;
// `;

// const SearchForm = styled.form`
//   width: 100%;
//   max-width: 1000px;
//   background-color: rgba(255, 255, 255, 0.3);
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
//   z-index: 2; /* Ensure the search form is above the overlay */
//   position: relative; /* Position relative for layering */
// `;
// const FormRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const FormGroup = styled.div`
//   flex: 1;
//   min-width: 200px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   border: 1px solid #ccc;
//   font-size: 1rem;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   border: 1px solid #ccc;
//   font-size: 1rem;
//   appearance: none;
//   background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>');
//   background-repeat: no-repeat;
//   background-position: right 1rem center;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   border: none;
//   background-color: #ff6b6b;
//   color: white;
//   font-size: 1rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff8787;
//   }

//   img {
//     width: 24px;
//     vertical-align: middle;
//     margin-right: 0.5rem;
//   }
// `;
// const SearchWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   gap: 10px;
// `;
// const BackgroundMedia = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;

//   img,
//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const CareerAdvisorPage = () => {
//   const [searchJob, setSearchJob] = useState("");
//   const [sector, setSector] = useState("");
//   const [location, setLocation] = useState("");
//   const [states, setStates] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [pageData, setPageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("jobSeekerLoginToken");
//   const navigate = useNavigate();

//   const [selectedOption, setSelectedOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
// /

//   const options = [
//     "Jobseeker",
//     "Employer",
//     ["A Partner"], // Only add "A Partner" if isPartner is true
//   ];

//   // Helper function to check file type
//   const getFileType = (url) => {
//     if (!url) return null;
//     const extension = url.split(".").pop().toLowerCase();
//     if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) {
//       return "image";
//     } else if (["mp4", "webm", "ogg"].includes(extension)) {
//       return "video";
//     }
//     return null;
//   };

//   // Render background media based on file type
//   const renderBackgroundMedia = (mediaUrl) => {
//     const fileType = getFileType(mediaUrl);
//     const defaultVideo = videoSrc;
//     // const defaultImg = defaultImg;

//     if (!mediaUrl) {
//       return (
//         <Video autoPlay loop muted src={defaultVideo} type="video/mp4">
//           Your browser does not support the video tag.
//         </Video>
//       );
//     }
//     <img
//       src={mediaUrl}
//       alt="Background"
//       style={{ width: "100%", height: "100%", objectFit: "cover" }}
//     />;

//     switch (fileType) {
//       case "image":
//         return <img src={mediaUrl } alt="Background" />;
//       case "video":
//         return (
//           <Video
//             autoPlay
//             loop
//             muted
//             src={mediaUrl}
//             type={`video/${mediaUrl.split(".").pop()}`}
//           >
//             Your browser does not support the video tag.
//           </Video>
//         );
//       default:
//         return (
//           <Video autoPlay loop muted src={defaultVideo} type="video/mp4">
//             Your browser does not support the video tag.
//           </Video>
//         );
//     }
//   };
//   const url = window.location.origin.includes("localhost")
//     ? "https://novajobs.us"
//     : window.location.origin;
//   // Fetch page data from the API
//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const response = await axios.get(
//           `https://apiwl.novajobs.us/api/jobseeker/general-info?domain=${url}`,
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         setPageData(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching page data:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchPageData();
//   }, [token]);

//   // Keep existing useEffects for states and categories...
//   useEffect(() => {
//     const getState = async () => {
//       try {
//         const response = await axios.get(
//           `https://apiwl.novajobs.us/api/jobseeker/stats/231`,
//           {
//             headers: { Authorization: token },
//           }
//         );
//         setStates(response.data.data);
//       } catch (err) {
//         console.log(err, "STATE fetch error");
//       }
//     };
//     getState();
//   }, [token]);

//   useEffect(() => {
//     const getCategory = async () => {
//       try {
//         const res = await axios.get(
//           "https://apiwl.novajobs.us/api/jobseeker/job-categories",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         setCategories(res.data.data);
//       } catch (err) {
//         console.log(err, "error fetching categories");
//       }
//     };
//     getCategory();
//   }, [token]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setIsModalOpen(true)
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

// //   const renderForm = () => {
// //     switch (selectedOption) {
// //       case "Jobseeker":
// //         return <JobseekerForm />;
// //       case "Employer":
// //         return <EmployeeForm />;
// //       case "A Partner":
// //         return <PartnerForm />;
// //       default:
// //         return null;
// //     }
// //   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (searchJob) params.append("title_keywords", searchJob);
//     if (sector) params.append("sector", sector);
//     if (location) params.append("location", location);

//     const searchUrl = `/user/job/1?${params.toString()}`;
//     console.log(searchUrl, "urrrrrlllll");
//     navigate(searchUrl);
//   };

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container>
//       <BackgroundMedia>
//         {renderBackgroundMedia(pageData?.home_here_section?.BackgroundMedia)}
//       </BackgroundMedia>

//       <Heading1>
//         {pageData?.home_here_section?.title || "Hello, I'm Aria,"}
//       </Heading1>
//       <Heading2>
//         {pageData?.home_here_section?.description ||
//           "Your Personal Career Advisor!"}
//       </Heading2>
//       <Prompt>Are You?</Prompt>

//       <OptionWrapper>
//         {options.map((option, index) => (
//           <OptionLabel
//             key={index}
//             selected={selectedOption === option}
//             onClick={() => handleOptionChange(option)}
//           >
//             {option}
//           </OptionLabel>
//         ))}
//       </OptionWrapper>

//       <SearchForm onSubmit={handleSearch}>
//         <FormRow>
//           <FormGroup>
//             <Input
//               type="text"
//               placeholder="Job Title, Keywords, or Phrase"
//               value={searchJob}
//               onChange={(e) => setSearchJob(e.target.value)}
//             />
//           </FormGroup>

//           {/* <FormGroup>
//             <Select value={sector} onChange={(e) => setSector(e.target.value)}>
//               <option value="">Select Sector</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.name}>
//                   {category.name}
//                 </option>
//               ))}
//             </Select>
//           </FormGroup> */}

//           <FormGroup>
//             <Select
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             >
//               <option value="">Select Location</option>
//               {states.map((state) => (
//                 <option key={state.id} value={state.name}>
//                   {state.name}
//                 </option>
//               ))}
//             </Select>
//           </FormGroup>

//           <FormGroup>
//             <Button type="submit" className="search-button">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//                 alt="Search"
//                 className="search-icon"
//               />
//               Search
//             </Button>
//           </FormGroup>
//         </FormRow>
//       </SearchForm>

//       {isModalOpen && (
//         <>
//           <Overlay onClick={closeModal} />
//           <Modal>
//             <CloseButton onClick={closeModal}>
//               <FaTimes />
//             </CloseButton>
//             <ModalTitle>{selectedOption} Form</ModalTitle>
//             {/* {renderForm()} */}
//           </Modal>
//         </>
//       )}
//     </Container>
//   );
// };

// export default CareerAdvisorPage;

import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaChild,
  FaHeart,
  FaHome,
  FaPaw,
  FaSearch,
  FaTimes,
  FaWheelchair,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import videoSrc from "../assests/herovideo.mp4";
import axios from "axios";

const CareerAdvisorPage = () => {
  const [searchJob, setSearchJob] = useState("");
  const [location, setLocation] = useState("");
  const [states, setStates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("jobSeekerLoginToken");
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [activeTab, setActiveTab] = useState("care");
  // const navigate = useNavigate();
  const partnerOptions = [
    "DME Providers",
    "Medical Billing Partners",
    "Homecare Services",
  ];
  const handleSearch = () => {
    if (zipCode) {
      navigate("/care-job-listing");
    } else {
      navigate("/care-job-listing");
    }
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "Partner") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption("");
  };
  const options = ["Care Giver", "Care Taker", "Partner"];

  // Helper function to check file type
  const getFileType = (url) => {
    if (!url) return null;
    const extension = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) {
      return "image";
    } else if (["mp4", "webm", "ogg"].includes(extension)) {
      return "video";
    }
    return null;
  };

  // Render background media based on file type
  const renderBackgroundMedia = (mediaUrl) => {
    const fileType = getFileType(mediaUrl);
    const defaultVideo =
      "https://wedesignthemes.s3.amazonaws.com/thatha/Slider+VDO+02+HD.mp4";

    if (!mediaUrl) {
      return (
        <video
          autoPlay
          loop
          muted
          src={defaultVideo}
          type="video/mp4"
          className="absolute inset-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      );
    }

    switch (fileType) {
      case "image":
        return (
          <img
            src={mediaUrl}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        );
      case "video":
        return (
          <video
            autoPlay
            loop
            muted
            src={mediaUrl}
            type={`video/${mediaUrl.split(".").pop()}`}
            className="absolute inset-0 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        );
      default:
        return (
          <video
            autoPlay
            loop
            muted
            src={defaultVideo}
            type="video/mp4"
            className="absolute inset-0 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        );
    }
  };

  const url = window.location.origin.includes("localhost")
    ? "https://novajobs.us"
    : window.location.origin;

  // Fetch page data from the API
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(
          `https://apiwl.novajobs.us/api/jobseeker/general-info?domain=${url}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPageData(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching page data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPageData();
  }, [token, url]);

  // Fetch states
  useEffect(() => {
    const getState = async () => {
      try {
        const response = await axios.get(
          `https://apiwl.novajobs.us/api/jobseeker/stats/231`,
          {
            headers: { Authorization: token },
          }
        );
        setStates(response.data.data);
      } catch (err) {
        console.log(err, "STATE fetch error");
      }
    };
    getState();
  }, [token]);

  // Fetch categories
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(
          "https://apiwl.novajobs.us/api/jobseeker/job-categories",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setCategories(res.data.data);
      } catch (err) {
        console.log(err, "error fetching categories");
      }
    };
    getCategory();
  }, [token]);

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     const params = new URLSearchParams();
  //     if (searchJob) params.append("title_keywords", searchJob);
  //     if (location) params.append("location", location);

  //     const searchUrl = `/user/job/1?${params.toString()}`;
  //     console.log(searchUrl, "urrrrrlllll");
  //     navigate(searchUrl);
  //   };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background image/video with overlay */}
      <div className="absolute inset-0">
        {renderBackgroundMedia(pageData?.home_here_section?.BackgroundMedia)}
        {/* <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div> */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl text-white font-bold mb-2">
          {pageData?.home_here_section?.title || "Hello, I'm Aria,"}
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl text-pink-500 font-semibold mb-12">
          {pageData?.home_here_section?.description ||
            "Your Personal Care Advisor!"}
        </h2>

        {/* "Are You?" text */}
        <p className="text-3xl text-white font-bold mb-6">Are You?</p>

        {/* Option buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {options.map((option, index) => (
            <button
              key={index}
              className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Search form */}
        {/* <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Job Title, Keywords, or Phrase"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className="flex-1 py-3 px-4 rounded-md text-gray-800 focus:outline-none"
            />
            
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 py-2 px-4 rounded-md text-gray-800 focus:outline-none appearance-none"
            >
              <option value="">Select Location</option>
              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            
            <button
              type="submit"
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md flex items-center justify-center transition-colors"
            >
              <FaSearch className="mr-2" />
              Search
            </button>
          </form>
        </div> */}
        <div className="relative z-10 h-full w-full flex items-center justify-center ">
          <div className="w-full max-w-5xl px-4 lg:px-8 ">
            <div className="text-white">
              <div className="bg-white/25 bg-opacity-30 p-8 rounded-lg shadow-lg">
                <div className="flex gap-4 items-center mb-6">
                  {/* <Link to={"https://employer-nova-home-care-fe.vercel.app/"}>
                        <button 
                          className={`font-semibold pb-2 border-b-2 ${activeTab === 'care' ? 'text-teal-400 border-teal-400' : 'text-white border-transparent hover:border-white'}`}
                          onClick={() => setActiveTab('care')}
                        >
                          Find care
                        </button> 
                        </Link> */}
                  {/* <button 
                          className={`font-semibold pb-2 border-b-2 ${activeTab === 'job' ? 'text-teal-400 border-teal-400' : 'text-white border-transparent hover:border-white'}`}
                          onClick={() => setActiveTab('job')}
                        >
                          Find a job
                        </button> */}
                </div>

                {/* Search Input */}
                <div className="flex mb-6">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Enter ZIP code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button
                    className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition duration-300"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>

                {/* Icon Section */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {[
                    { icon: FaChild, label: "Child care" },
                    { icon: FaHeart, label: "Senior care" },
                    { icon: FaHome, label: "Housekeeping" },
                    { icon: FaPaw, label: "Pet care" },
                    { icon: FaBook, label: "Tutoring" },
                    { icon: FaWheelchair, label: "DME" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <item.icon className="text-teal-400 text-4xl" />
                      <p className="text-sm text-white font-medium mt-2">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            onClick={closeModal}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-transparent border-none text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="text-xl" />
            </button>
            <h3 className="text-xl text-gray-700 text-center mb-6">
              {selectedOption} Form
            </h3>
          </div>
        </>
      )}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            onClick={closeModal}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="text-xl" />
            </button>
            <h3 className="text-xl font-bold text-gray-700 text-center mb-4">
              Partner Options
            </h3>
            <ul className="space-y-3">
              {partnerOptions.map((partner, idx) => (
                <li
                  key={idx}
                  className="bg-teal-100 px-4 py-2 rounded-md text-center cursor-pointer hover:bg-teal-200"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CareerAdvisorPage;
