import React from 'react';
import appStore from '../assets/as.png';
import playStore from '../assets/gp.png';
import Group from '../assets/Group 1000003051.png';

const Download = () => {
  return (
    <div id='convert' className='text-white'>
      {/* Parent Div for Hero Section */}
      <div
        className='w-full h-screen flex items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${Group})` }}
      >
        {/* Left Side Content */}
        <div className='w-full md:w-1/2 p-8 bg-transparent bg-opacity-50 ml-30 pr-30'>
          <h1 className='md:text-4xl sm:text-6xl text-2xl font-bold md:py-6 text-left'>
           Trade Anywhere, Anytime <br />   </h1>
       
          <p className='md:text-sm text-gray-500 text-left'>
            Join the world's biggest & trusted Exchange. Trade in Bitcoin, Ethereum, Ripple, and many more currencies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia et cum reprehenderit eaque similique ullam tenetur aut accusantium labore, corrupti, eos dicta quia sunt aperiam nisi explicabo quidem mollitia.
          </p>
          <br />
        
          {/* Download Links */}
          <div className="flex items-center justify-start space-x-4 mt-6">
  {/* App Store Link */}
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[150px] h-[140px] text-white bg-[#121318] rounded-md flex flex-col justify-center items-center p-2"
  >
    <img src={appStore} alt="App Store" className="h-6 mb-4" />
    
    <span className="text-sm">App Store</span>
<p className='text-xs text-gray-400'>Download on the</p>
  </a>

  {/* Google Play Link */}
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[150px] h-[140px] text-white bg-[#121318] rounded-md flex flex-col justify-center items-center p-2"
  >
    <img src={playStore} alt="Google Play" className="h-6 mb-4" />
    <span className="text-sm">Google Play</span>
    <p className='text-xs text-gray-400'>Get it on</p>
  </a>
</div>

        </div>

        {/* Right Side (Image in background already set) */}
        {/* The background image will cover the entire section */}
      </div>
    </div>
  );
};

export default Download;
