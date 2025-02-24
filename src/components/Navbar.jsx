import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineWallet, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // This toggles the nav state to show or hide the mobile menu
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      {/* "Leogacy" text stays on the left and the vertical bar after it */}
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-[#5367fe]'>Leogacy</h1>
        <div className='h-8 border-r-2 border-gray-500 ml-4'></div> {/* Vertical bar */}
      </div>

      {/* Main Navbar links for large screens */}
      <ul className='hidden md:flex flex-grow justify-start space-x-6'>
        <li className='p-4 text-white cursor-pointer hover:border-b-2 hover:border-blue-500'>
          <a href="#home">Home</a>
        </li>
        <li className='p-4 text-white cursor-pointer hover:border-b-2 hover:border-blue-500'>
          <a href="#market">Market</a>
        </li>
        <li className='p-4 text-white cursor-pointer hover:border-b-2 hover:border-blue-500'>
          <a href="#spot">Spot</a>
        </li>
        <li className='p-4 text-white cursor-pointer hover:border-b-2 hover:border-blue-500'>
          <a href="#convert">Convert</a>
        </li>
      </ul>

      {/* Right-side icons for wallet, settings, and profile */}
      <div className='hidden md:flex items-center space-x-4'>
        <Link to="wallet" smooth={true} duration={500}>
          <button className='cursor-pointer flex items-center bg-[#5367fe] text-white px-4 py-2 rounded-md'>
            <AiOutlineWallet size={20} className='mr-2' /> Wallet
          </button>
        </Link>
        <AiOutlineSetting size={24} className='cursor-pointer' />
        <Link to="profile" smooth={true} duration={500}>
          <AiOutlineUser size={24} className='cursor-pointer' />
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar, toggle display based on 'nav' state */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#5367fe] m-4'>Leogacy</h1>
        
        {/* Mobile scroll links */}
        <Link to="home" smooth={true} duration={500}>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
        </Link>
        <Link to="market" smooth={true} duration={500}>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Market</li>
        </Link>
        <Link to="spot" smooth={true} duration={500}>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Spot</li>
        </Link>
        <Link to="convert" smooth={true} duration={500}>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Convert</li>
        </Link>

        {/* Mobile icons for wallet, settings, and profile */}
        <div className='flex flex-col items-start p-4'>
          <Link to="wallet" smooth={true} duration={500}>
            <AiOutlineWallet size={24} className='mb-4 cursor-pointer' />
          </Link>
          <AiOutlineSetting size={24} className='mb-4 cursor-pointer' />
          <Link to="profile" smooth={true} duration={500}>
            <AiOutlineUser size={24} className='cursor-pointer' />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
