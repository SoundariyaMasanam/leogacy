import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Copywrite = () => {
  return (
    <div className='bg-[#121318] text-center'>
      {/* Horizontal Line */}
      <hr className="my-0 border-t-2 border-gray-400 mx-40" />
      
      {/* Copyright Text and App Store/Google Play Links */}
      <div className="flex items-center justify-left text-gray-500 py-4">
        {/* Copyright Content */}
        <div className="flex items-center justify-left pl-40">
          <FaCopyright className="mr-2" />
          2025 Leogacy, All rights reserved        </div>
             {/* Vertical Bar on the Right */}
        <div className="border-l-2 border-gray-400 h-6 mx-4"></div> {/* Vertical line */}
        <p>Privacy</p>
        <div className="border-l-2 border-gray-400 h-6 mx-4"></div> {/* Vertical line */}
<p>Terms</p>
<div className="border-l-2 border-gray-400 h-6 mx-4"></div> {/* Vertical line */}
<p>Sitemap</p>

</div>

        {/* Right side: App Store and Google Play with Vertical Bars */}
        <div className="flex items-center justify-end space-x-4 pr-40">
          {/* Vertical Line */}
          
          {/* App Store Button */}
          <a 
            href="https://www.apple.com/app-store/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/App_Store_logo.svg" 
              alt="Download on the App Store" 
              className="w-32 text-white" 
            />
          </a>

          {/* Vertical Line */}

          {/* Google Play Button */}
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Google_Play_Store_logo_2015.svg" 
              alt="Get it on Google Play" 
              className="w-32 text-white" 
            />
          </a>

          {/* Vertical Line */}
        </div>
      </div>

  );
};

export default Copywrite;
