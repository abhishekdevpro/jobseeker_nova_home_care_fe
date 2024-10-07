import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-white text-gray-700 p-3 md:p-4 shadow-sm border-b">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Address Section */}
        <div className="flex items-center mb-2 md:mb-0 text-base md:text-lg">
          <MdLocationOn className="text-blue-500 mr-2" />
          <span className="text-gray-600">
            1509 Lady St, Columbia, SC 29201, United States
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-blue-500 text-lg mt-2 md:mt-0">
          <FaFacebookF className="hover:text-blue-600 transition cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 transition cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
