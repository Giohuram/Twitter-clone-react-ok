import React from 'react';
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-64 bg-black border-r">
        {/* Twitter Logo */}
        <div className="p-4">
          <FaTwitter className="text-white-500 text-3xl" />
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaHome className="mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaHashtag className="mr-2" />
            Explore
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaBell className="mr-2" />
            Notifications
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaEnvelope className="mr-2" />
            Messages
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaBookmark className="mr-2" />
            Bookmarks
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaList className="mr-2" />
            Lists
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaUser className="mr-2" />
            Profile
          </a>
          <a href="#" className="flex items-center mb-2 text-white-700 hover:text-blue-500">
            <FaEllipsisH className="mr-2" />
            More
          </a>
          {/* Add more links as needed */}
        </nav>

        {/* Twitter Button */}
        <div className="p-4">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
            Tweet
          </button>
        </div>
      
        {/* Profile Section at the bottom */}
        <div>
          {/* Profile Picture at the bottom */}
          <div className="flex items-center space-x-4">
            <img
              src="src/images/profile-photo.png"
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Bradley Ortiz</h2>
              <p className="text-gray-600">@bradley_</p>
            </div>
          </div>
          
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
