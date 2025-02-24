import React from 'react';

const Newsletter = () => {
  return (
    <div id='profile' className='w-full py-16 text-white px-4 bg-[#080808]'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3  bg-[#5367fe] p-30 rounded-2xl'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Start Trade Now
          </h1>
          <p>Join now with DYNAMIC to get the latest news and start mining now</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full border-b-2 rounded-md text-white'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#ffffff] text-black rounded-4xl font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Get Started
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
