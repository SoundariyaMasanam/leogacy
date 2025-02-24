import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#121318]'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#5367fe]'>Leogacy</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaLinkedin size={30} />
            <FaYoutube size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
    <div>
        <h6 className='font-medium text-gray-200'>Exchange</h6><br/>
        <ul>
      <li className='py-2 text-sm text-gray-500'>
        <a href="#market" className="cursor-pointer">Market</a>
      </li>
      <li className='py-2 text-sm text-gray-500'>
        <a href="#spot" className="cursor-pointer">Spot Trade</a>
      </li>
      <li className='py-2 text-sm text-gray-500'>
        <a href="#convert" className="cursor-pointer">Convert</a>
      </li></ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-200'>Support</h6><br/>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Request Form</li>
            <li className='py-2 text-sm text-gray-500'>Contact Support</li>
            <li className='py-2 text-sm text-gray-500'>FAQ</li>
            <li className='py-2 text-sm text-gray-500'>Security</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-200'>Resources</h6><br/>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Downloads</li>
            <li className='py-2 text-sm text-gray-500'>Desktop Application</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-200'>Company</h6><br/>
        <ul>
            <li className='py-2 text-sm text-gray-500'>About Us</li>
            <li className='py-2 text-sm text-gray-500'>Contact Us</li>
        </ul>
    </div>
 
      </div>
    
    </div>
    
</div>    
  );
};

export default Footer;
