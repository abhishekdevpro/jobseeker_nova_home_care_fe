// import DashboardHeader from '@/components/header/DashboardHeader';
// import React, { useState } from 'react';

// const EditProfileForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "", // Added first name
//     lastName: "", // Added last name
//     careType: "babysitter",
//     services: "",
//     hourlyRate: "10",
//     profileText: "",
//     personalDescription: "",
//     location: "",
//     nativeLanguage: "",
//     otherLanguages: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className=" bg-white p-4 max-w-8xl mx-auto">
//       <h1 className="text-xl font-semibold text-teal-600 mb-6">
//         Find your perfect care job
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* First Name */}
//         <div>
//           <p className="text-sm font-medium mb-2">First Name</p>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="Your first name"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Last Name */}
//         <div>
//           <p className="text-sm font-medium mb-2">Last Name</p>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Your last name"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Care Type Selection */}
//         <div>
//           <p className="text-sm font-medium mb-2">
//             What kind of child carer are you?
//           </p>
//           <div className="flex gap-4">
//             {["babysitter", "nanny", "childminder"].map((type) => (
//               <label key={type} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="careType"
//                   value={type}
//                   checked={formData.careType === type}
//                   onChange={handleChange}
//                   className="w-4 h-4 text-teal-600"
//                 />
//                 <span className="text-sm capitalize">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <p className="text-sm font-medium mb-2">Services provided:</p>
//           <input
//             type="text"
//             name="services"
//             value={formData.services}
//             onChange={handleChange}
//             placeholder="I can sit up to 2 children"
//             className="w-full p-2 border rounded-md"
//           />
//           <div className="flex flex-wrap gap-2 mt-2">
//             {[
//               "Cooking / Meal preparation",
//               "Pick-up / Drop off",
//               "Light housekeeping",
//             ].map((tag) => (
//               <span
//                 key={tag}
//                 className="bg-gray-100 text-sm px-3 py-1 rounded-lg"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Experience Tags */}
//         <div>
//           <p className="text-sm font-medium mb-2">Experience:</p>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Newborns (up to 12 months)",
//               "Toddlers (1-3 years)",
//               "Early School Age (4-6 years)",
//             ].map((exp) => (
//               <span
//                 key={exp}
//                 className="bg-gray-100 text-sm px-3 py-1 rounded-lg"
//               >
//                 {exp}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Hourly Rate */}
//         <div>
//           <p className="text-sm font-medium mb-2">
//             I'm happy rate I charge is:
//           </p>
//           <select
//             name="hourlyRate"
//             value={formData.hourlyRate}
//             onChange={handleChange}
//             className="w-32 p-2 border rounded-md"
//           >
//             {[10, 12, 15, 18, 20].map((rate) => (
//               <option key={rate} value={rate}>
//                 €{rate}
//               </option>
//             ))}
//           </select>
//           <p className="text-sm text-gray-500 mt-1">
//             The average hourly rate in your area is €11.50
//           </p>
//         </div>

//         {/* Profile Text */}
//         <div>
//           <label className="block">
//             <span className="text-sm font-medium">Profile text</span>
//             <textarea
//               name="profileText"
//               value={formData.profileText}
//               onChange={handleChange}
//               className="mt-1 w-full p-2 border rounded-md"
//               rows="4"
//               placeholder="I am babysitter from the LUDHIANA i can take care of your baby, feed them play with them"
//             />
//           </label>
//         </div>

//         {/* Personal Description */}
//         <div>
//           <label className="block">
//             <span className="text-sm font-medium">Personal description</span>
//             <textarea
//               name="personalDescription"
//               value={formData.personalDescription}
//               onChange={handleChange}
//               className="mt-1 w-full p-2 border rounded-md"
//               rows="4"
//               placeholder="Describe yourself and your experience"
//             />
//           </label>
//         </div>

//         {/* Further Information */}
//         <div className="space-y-4">
//           <p className="text-sm font-medium">Further information:</p>
//           <div className="space-y-2">
//             {[
//               { name: "location", placeholder: "Location used" },
//               { name: "nativeLanguage", placeholder: "Native Language" },
//               { name: "otherLanguages", placeholder: "Other Languages" },
//             ].map((field) => (
//               <input
//                 key={field.name}
//                 type="text"
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 placeholder={field.placeholder}
//                 className="w-full p-2 border rounded-md"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Qualifications */}
//         <div>
//           <p className="text-sm font-medium mb-2">Additional qualifications:</p>
//           <div className="space-y-2">
//             {[
//               "Driver license",
//               "CPR Certificate",
//               "First Aid Certificate",
//               "Experience with special needs",
//               "Available for overnight care",
//             ].map((qual) => (
//               <label key={qual} className="flex items-center gap-2">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <span className="text-sm">{qual}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Auto Apply */}
//         <label className="flex items-center gap-2">
//           <input type="checkbox" className="w-4 h-4" />
//           <span className="text-sm">
//             I would like to automatically send this above application to all
//             suitable jobs
//           </span>
//         </label>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-colors"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;

import DashboardHeader from "@/components/header/DashboardHeader";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    careType: "babysitter",
    services: "",
    hourlyRate: "10",
    profileText: "",
    personalDescription: "",
    location: "",
    nativeLanguage: "",
    otherLanguages: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.novahome.care/api/jobseeker/getprofile",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response, "response");
        console.log(response.data.data, "response data");

        setFormData((prevProfile) => ({
          ...prevProfile, // Keep default values
          ...response.data.data, // Overwrite with API values
          firstName: response.data.data.first_name || "",
          lastName: response.data.data.last_name || "",
        }));
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Convert hourlyRate to integer before sending the request
      const response = await axios.put(
        "https://api.novahome.care/api/jobseeker/editprofile",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          care_type: formData.careType,
          services_provided: formData.services,
          hourly_rate: parseInt(formData.hourlyRate, 10), // Convert hourlyRate to integer
          profile_text: formData.profileText,
          personal_description: formData.personalDescription,
          location: formData.location,
          native_language: formData.nativeLanguage,
          other_languages: formData.otherLanguages,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data, "data");
      setSuccess(response.data.message || "Profile updated successfully!");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while updating the profile."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 max-w-8xl mx-auto">
      <h1 className="text-xl font-semibold text-teal-600 mb-6">
        Edit Your Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name */}
        <div>
          <p className="text-sm font-medium mb-2">First Name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Last Name */}
        <div>
          <p className="text-sm font-medium mb-2">Last Name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Care Type Selection */}
        <div>
          <p className="text-sm font-medium mb-2">
            What kind of child carer are you?
          </p>
          <div className="flex gap-4">
            {["babysitter", "nanny", "childminder"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="careType"
                  value={type}
                  checked={formData.careType === type}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="text-sm capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-medium mb-2">Services provided:</p>
          <input
            type="text"
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="I can sit up to 2 children"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <p className="text-sm font-medium mb-2">Hourly Rate:</p>
          <select
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            className="w-32 p-2 border rounded-md"
          >
            {[10, 12, 15, 18, 20].map((rate) => (
              <option key={rate} value={rate}>
                €{rate}
              </option>
            ))}
          </select>
        </div>

        {/* Profile Text */}
        <div>
          <label className="block">
            <span className="text-sm font-medium">Profile Text</span>
            <textarea
              name="profileText"
              value={formData.profileText}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
              rows="4"
              placeholder="Describe your profile and experience"
            />
          </label>
        </div>

        {/* Personal Description */}
        <div>
          <label className="block">
            <span className="text-sm font-medium">Personal Description</span>
            <textarea
              name="personalDescription"
              value={formData.personalDescription}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
              rows="4"
              placeholder="Describe yourself"
            />
          </label>
        </div>

        {/* Location and Languages */}
        <div className="space-y-4">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="nativeLanguage"
            value={formData.nativeLanguage}
            onChange={handleChange}
            placeholder="Native Language"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="otherLanguages"
            value={formData.otherLanguages}
            onChange={handleChange}
            placeholder="Other Languages"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default EditProfileForm;
