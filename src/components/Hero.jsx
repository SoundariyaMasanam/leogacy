import React from 'react';
import appStore from '../assets/app-store.png';
import playStore from '../assets/play-store.png';
import mockupimage from '../assets/Mockup.png';
import { FaEnvelope } from 'react-icons/fa';
 
const Hero = () => {
  return (
    <div id='home' className='text-white'>
      {/* Parent Div for Hero Section */}
      <div
        className='w-full  h-screen flex items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${mockupimage})` }}
      >
        {/* Left Side Content */}
        <div className='w-full mb-30 md:w-1/2 p-8 bg-transparent bg-opacity-50'>
          <h1 className='md:text-6xl sm:text-6xl text-2xl font-bold md:py-6 text-left'>
            Buy & Sell <br />
            <span className='text-[#5367fe]'>Crypto Instant</span>
          </h1>
          <p className='md:text-xl text-gray-200 text-left pr-20'>
            Join the world's biggest & trusted Exchange. Trade in Bitcoin, Ethereum, Ripple, and many more currencies.
          </p>
          <br /><br /><br /><br />
          <div className="flex items-center justify-start space-x-4">
            {/* Input Field */}
           
            <input
              type="text"
              className="w-[300px] bg-gray-800 rounded-md font-medium py-3 text-left pl-2 text-gray-400"
              placeholder="Email"
            />
            {/* Sign Up Button */}
            <button className="bg-[#5367fe] justify-end w-[100px] rounded-md font-medium py-3 text-white">
              Sign Up
            </button>
          </div>

          {/* Download Links */}
          <div className="flex items-center justify-start space-x-4 mt-6">
  {/* App Store Link */}
  <div>
    <a
      href="https://www.apple.com/app-store/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[150px] h-[60px] text-white bg-gray-900 p-2 rounded-md flex flex-row justify-start items-center text-white"
    >
      <img
        src={appStore}
        alt="App Store"
        className="h-6 mr-2 text-white"  
      />
      <div className="flex flex-col justify-center">
        <p className='text-xs text-white'>Download on the</p>
        <p className='text-sm font-bold text-white'>App Store</p>
      </div>
    </a>
  </div>

  {/* Google Play Link */}
  <div>
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[150px] h-[60px] text-white p-2 bg-gray-900 rounded-md flex flex-row justify-start items-center text-white"
    >
      <img
        src={playStore}
        alt="Google Play"
        className="h-6 mr-2 text-white"
      />
      <div className="flex flex-col justify-center">
        <p className='text-xs text-white'>Download on the</p>
        <p className='text-sm font-bold text-white'>Google Play</p>
      </div>
    </a>
  </div>
</div>


        </div>

        {/* Right Side (Image in background already set) */}
        {/* The background image will cover the entire section */}
      </div>
    </div>
  );
};

export default Hero;
