import { Briefcase, Heart, MessageCircle, Search, User } from "lucide-react";
import logo from "@/pages/NovaHome/assests/logo.png"; // Updated path

const JobseekerHeader = () => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img
          className="text-red-500 w-auto h-16 font-bold"
          src={logo}
          alt="Logo" // Added alt attribute
        />
        
        <nav className="flex items-center space-x-6">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Search className="w-5 h-5" />
            <span className="text-xs block">Search</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs block">Messages</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Briefcase className="w-5 h-5" />
            <span className="text-xs block">Jobs</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Heart className="w-5 h-5" />
            <span className="text-xs block">Favorites</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <User className="w-5 h-5" />
            <span className="text-xs block">Me</span>
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Upgrade
          </button>
        </nav>
      </div>
    </header>
  );
}

export default JobseekerHeader;
