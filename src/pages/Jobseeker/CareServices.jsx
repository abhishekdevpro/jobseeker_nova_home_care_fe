// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const services = [
//   {
//     name: 'Child care',
//     icon: '👶'
//   },
//   {
//     name: 'Senior care',
//     icon: '🤍'
//   },
//   {
//     name: 'Housekeeping',
//     icon: '🏠'
//   },
//   {
//     name: 'Pet care',
//     icon: '🐾'
//   },
//   {
//     name: 'Tutoring',
//     icon: '📚'
//   }
// ];

// const CareServicesNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className=" bg-white shadow-md">
//       {/* Desktop Navigation */}
//       <div className="hidden md:flex justify-center items-center space-x-8 py-4 px-6">
//         {services.map((service, index) => (
//           <a
//             key={index}
//             href={`#${service.name.toLowerCase().replace(' ', '-')}`}
//             className="flex flex-col items-center group"
//           >
//             <span className="text-2xl mb-2">{service.icon}</span>
//             <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
//               {service.name}
//             </span>
//           </a>
//         ))}
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden">
//         <div className="flex justify-between items-center px-4 py-3">
//           <span className="text-lg font-semibold">Care Services</span>
//           <button
//             onClick={toggleMenu}
//             className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu Slide-in */}
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <div className="flex justify-end p-4">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <div className="flex flex-col space-y-4 px-4">
//             {services.map((service, index) => (
//               <a
//                 key={index}
//                 href={`#${service.name.toLowerCase().replace(' ', '-')}`}
//                 className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
//                 onClick={toggleMenu}
//               >
//                 <span className="text-xl">{service.icon}</span>
//                 <span>{service.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile menu */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
//           onClick={toggleMenu}
//         />
//       )}
//     </nav>
//   );
// };

// export default CareServicesNav;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const services = [
  { name: "Child care", icon: "👶" },
  { name: "Senior care", icon: "🤍" },
  { name: "Housekeeping", icon: "🏠" },
  { name: "Pet care", icon: "🐾" },
  { name: "Tutoring", icon: "📚" },
];

const CareServicesNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center space-x-8 py-4 px-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={`#${service.name.toLowerCase().replace(" ", "-")}`}
            className="flex flex-col items-center group"
          >
            <span className="text-2xl mb-2">{service.icon}</span>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
              {service.name}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <span className="text-lg font-semibold">Care Services</span>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Slide-in */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#${service.name.toLowerCase().replace(" ", "-")}`}
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
              >
                <span className="text-xl">{service.icon}</span>
                <span>{service.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default CareServicesNav;
