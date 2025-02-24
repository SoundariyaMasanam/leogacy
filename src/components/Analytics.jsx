import React from 'react';
import Laptop from '../assets/laptop.jpg'; // Assuming you have an image imported
import Icon1 from '../assets/Icon-1.png';
import Icon2 from '../assets/Icon-2.png';
import Icon3 from '../assets/Icon-3.png'
import Icon4 from '../assets/Icon-4.png'
import Icon5 from '../assets/Icon-5.png'
import Icon6 from '../assets/Icon-6.png'
import Icon7 from '../assets/deposit 1.png'
import Icon8 from '../assets/Icon.png'

const Analytics = () => {
  return (
    <div id='wallet' className="w-full py-24 px-4 bg-[#080808]">
      {/* Container */}
      <div className="w-full mx-auto text-center text-white">
        
        {/* Heading and Paragraph */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold">Our Best Service</h1>
          <p className="text-lg mt-4">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod enim repudiandae dolorem praesentium aliquam sed porro? Ad commodi eaque omnis!
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-8">
          {/* Left Side Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Cards for Left Side */}
            <div className="flex justify-between gap-8">
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg bg-[#121318] p-10 rounded-lg hover:scale-105 duration-300">
                <img src={Icon8} alt="image" />
                <h3 className="text-xl font-bold text-left">Safety Comes First</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus!</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg bg-[#121318] p-10 rounded-lg hover:scale-105 duration-300">
                <img src={Icon7} alt="image" /><br/>
                <h3 className="text-xl font-bold text-left">Easy Deposits & Withdrawls</h3>
                <p className="text-gray-400 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, ipsum.</p>
              </div>
            </div>

            {/* Bottom Cards for Left Side */}
            <div className="flex justify-between gap-8">
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg bg-[#121318] p-10 rounded-lg hover:scale-105 duration-300">
                <img src={Icon1} alt="image" />
                <h3 className="text-xl font-bold text-left">Fast Transactions</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sequi!</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg p-10 bg-[#121318] rounded-lg hover:scale-105 duration-300">
                <img src={Icon2} alt="image" />
                <h3 className="text-xl font-bold text-left">Deep Encryption</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, id.</p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Cards for Right Side */}
            <div className="flex justify-between gap-8">
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg p-10 bg-[#121318] rounded-lg hover:scale-105 duration-300">
                <img src={Icon3} alt="image" />
                <h3 className="text-xl font-bold text-left">Low Charges</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi.</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg p-10 bg-[#121318] rounded-lg hover:scale-105 duration-300">
                <img src={Icon5} alt="image" />
                <h3 className="text-xl font-bold text-left">Bonus & Refferal</h3>
                <p className="text-gray-400 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.</p>
              </div>
            </div>

            {/* Bottom Cards for Right Side */}
            <div className="flex justify-between gap-8">
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg p-10 bg-[#121318] rounded-lg hover:scale-105 duration-300">
                <img src={Icon4} alt="image" />
                <h3 className="text-xl font-bold text-left">Fast KYC</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, repellat?</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 shadow-lg p-8 bg-[#121318] rounded-lg hover:scale-105 duration-300">
                <img src={Icon6} alt="image" />
                <h3 className="text-xl font-bold text-left">24/7 Support</h3>
                <p className="text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
