import React from 'react';
import { FaSearch, FaHashtag, LuBadgeCheck } from 'react-icons/fa';

const TwitterTrendBar = () => {
  return (
    <div className="bg-black border-r border-gray-200 flex flex-col h-screen w-80">
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <span className="absolute left-3 top-3">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search Twitter"
            className="bg-black w-full px-10 py-2 rounded-full border border-black-300 focus:outline-none"  
          />
        </div>
      </div>

      {/* Trend Section */}
      <div className="flex-1 overflow-y-auto">
        {/* Trends for You */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold mb-3">Trends for You</h2>
          {/* Render trend items */}
           <p className='text-gray-600'>Trending in Turkey</p>
          <div className="flex items-center space-x-2 text-white-600">
            <FaHashtag className="text-white-500" />
            <span>SQUID</span>
            
          </div>
          <p className='text-gray-600'>2,066 Tweets</p>
          {/* Add more trend items */}
          <div>
            <p className='text-gray-600'>Trending in Turkey</p>
            <div className="flex items-center space-x-2 text-white-600">
              <FaHashtag className="text-white-500" />
              <span>SQUID</span>

            </div>
            <p className='text-gray-600'>2,066 Tweets</p>
          </div>
          <div>
            <p className='text-gray-600'>Trending in Turkey</p>
            <div className="flex items-center space-x-2 text-white-600">
              <FaHashtag className="text-white-500" />
              <span>SQUID</span>

            </div>
            <p className='text-gray-600'>2,066 Tweets</p>
          </div>
          <div>
            <p className='text-gray-600'>Trending in Turkey</p>
            <div className="flex items-center space-x-2 text-white-600">
              <FaHashtag className="text-white-500" />
              <span>SQUID</span>

            </div>
            <p className='text-gray-600'>2,066 Tweets</p>
          </div>
        </div>

        {/* Who to Follow */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-3">Who to Follow</h2>
          {/* Render user suggestions */}
          <div className="flex items-center space-x-2">
            <img src="src/images/Tweet-Profile-Photo.png" alt="newYorktimes" />
            <span>The New York Times</span><LuBadgeCheck />
            <button>Follow</button>
            
          </div>
          {/* Add more user suggestions */}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-row items-start">
          <span><a href="#" className="text-blue-500 text-sm">Terms of Service</a></span>
          <span><a href="#" className="text-blue-500 text-sm">Privacy Policy</a></span>
          <span><a href="#" className="text-blue-500 text-sm">Cookie Policy</a></span>
          <span><a href="#" className="text-blue-500 text-sm">Imprint</a></span>
          <span><a href="#" className="text-blue-500 text-sm">Ads Info</a></span>
          <span className="text-sm text-gray-600">More...</span>
        </div>
        <p className="text-sm text-gray-600">&copy;2021 Twitter, Inc</p>
      </div>
    </div>
  );
};

export default TwitterTrendBar;
