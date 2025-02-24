import React from 'react';
import Account from '../assets/add-user (1) 1.png';
import Verify from '../assets/credit-card 1.png';
import Funds from '../assets/wallet 1.png';
import Trading from '../assets/diagram 1.png';
import { FaArrowRight } from 'react-icons/fa';
const GetStarted = () => {
  return (
    <div id='spot' className="w-full py-24 px-4 bg-[#121318]">
      <div className="max-w-[1240px] mx-auto">
        <div className="w-full flex flex-col md:flex-row p-4 rounded-lg">

     {/* Left Side: Heading and Paragraph */}
<div className="w-full md:w-2/5 flex flex-col justify-center h-full">
  <h2 className="text-3xl font-bold text-left text-white py-8 pt-10">
    Easy Way to get Started
  </h2>
  <p className="text-white  mr-10">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat dicta, eligendi nihil,
    iure provident quibusdam quisquam temporibus culpa, earum deserunt accusantium! Placeat architecto,
    incidunt deserunt exercitationem ut debitis porro?
  </p>
  <div className='flex mt-15'>
      <a 
        href='#' 
        className='text-[#5367fe] font-bold hover:border-b-2 hover:border-blue-500'>
        Start Trading
      </a>
      <FaArrowRight className='mt-2'/>
    </div>
</div>

          {/* Right Side: Grid for 4 Plans (Cards) */}
          <div className="w-full md:w-3/5 ml-20 flex flex-col gap-8 mt-8 md:mt-0 bg">

            {/* Top two cards (Basic and Advanced Plans) */}
            <div className="flex space-x-8 mb-8 mr-12">
              <div className="w-1/2 shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300  bg-black">
              <div className="flex items-center justify-center">  {/* Add justify-center to center the content horizontally */}
  <div className="ml-4 text-center">  {/* Use text-center for centering the content */}
    <img src={Account} alt="Account" className="mx-auto" />  {/* mx-auto will center the image */}
    <h2 className="text-xl font-bold text-white">Create an Account</h2>
    <p className="text-gray-500">Sign up with your email and mobile in just 5 minutes</p>
  </div>
</div>

              </div>

              <div className="w-1/2 shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300  bg-black">
              <div className="flex items-center justify-center">  {/* Add justify-center to center the content horizontally */}
  <div className="ml-4 text-center">  {/* Use text-center for centering the content */}
    <img src={Verify} alt="Account" className="mx-auto" />  {/* mx-auto will center the image */}
    <h2 className="text-xl font-bold text-white">Verify your Account</h2>
    <p className="text-gray-500">Verify your account in Easy Way</p>
  </div>
</div>

              </div>
            </div>

            {/* Bottom two cards (Premium and Full Access Plans), with the second card slightly moved right */}
            <div className="flex space-x-8 ml-12">
            <div className="w-1/2 shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300  bg-black">
              <div className="flex items-center justify-center">  {/* Add justify-center to center the content horizontally */}
  <div className="ml-4 text-center">  {/* Use text-center for centering the content */}
    <img src={Funds} alt="Account" className="mx-auto" />  {/* mx-auto will center the image */}
    <h2 className="text-xl font-bold text-white">Add Funds to Wallet</h2>
    <p className="text-gray-500">Quickly add money to your investment wallet</p>
  </div>
</div>

              </div>
              <div className="w-1/2 shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-black">
              <div className="flex items-center justify-center">  {/* Add justify-center to center the content horizontally */}
  <div className="ml-4 text-center">  {/* Use text-center for centering the content */}
    <img src={Trading} alt="Account" className="mx-auto" />  {/* mx-auto will center the image */}
    <h2 className="text-xl font-bold text-white">Start Trading Instantly</h2>
    <p className="text-gray-500">Buy & Sell a variety of top coins at the best prices</p>
  </div>
</div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
