import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Ripple from '../assets/ripple.png'
import Ethereum from '../assets/ethereum.png';
import Binance from '../assets/binance.png';
import Litecoin from '../assets/lite.png';
import Polygon from '../assets/polygon.png';
import Up from '../assets/up.png';
import Down from '../assets/down.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
const Cards = () => {
  return (
    <div id='market' className='w-full py-24 px-4 '>
                    <h2 className='text-3xl text-white font-bold text-center py-8'>Get Various Crypto Coin</h2>

      {/* First Section with 4 Cards */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        
     {/* Card 1 */}
<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#121318] hover:scale-105 duration-300'>
    
  <div className='flex items-center'>
    <img className='w-10' src={Single} alt="Single" />
    <div className='ml-4 flex items-center'>
      <h2 className='text-xl text-white font-bold'>Bitcoin</h2><br/>
      {/* Tag/Label for BTC */}
      <span className='ml-2 px-2 py-1 text-blue-500 bg-black  text-sm'>
        BTC
      </span>
    </div>
  </div>
     <div className="flex items-center">
        <p className="text-white text-xl mr-2">$38,447.54</p>
        <span className="ml-2 text-green-500 flex items-center">
          +2%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
      </div>
   
      <svg
              className="w-full h-40"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#067339"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>

</div>


        {/* Card 2 */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#121318] hover:scale-105 duration-300'>
  <div className='flex items-center'>
    <img className='w-10' src={Double} alt="Double" />
    <div className='ml-4 flex items-center'>
      <h2 className='text-xl font-bold text-white'>Binance</h2><br/>
      {/* Tag for Binance */}
      <span className='ml-2 px-2 py-1 text-blue-500 bg-black text-sm'>
        BNB
      </span>
    </div>
  </div>
  <div className="flex items-center">
        <p className="text-white text-xl mr-2">$38,447.54</p>
        <span className="ml-2 text-green-500 flex items-center">
          +2%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
      </div>
      <div className="wavy-line">
      <svg
              className="w-full h-40"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#067339"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
      </div>
</div>

        {/* Card 3 */}
        <div className='w-full shadow-xl flex flex-col bg-[#121318] p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  <div className='flex items-center'>
    <img className='w-10' src={Triple} alt="Triple" />
    <div className='ml-4 flex items-center'>
      <h2 className='text-xl font-bold text-white'>Ethereum</h2><br/>
      {/* Tag for Ethereum */}
      <span className='ml-2 px-2 py-1 text-blue-500 bg-black text-sm'>
        ETH
      </span>
    </div>
  </div>
  <div className="flex items-center">
        <p className="text-white text-xl mr-2">$38,447.54</p>
        <span className="ml-2 text-red-500 flex items-center">
          +2%
          <FontAwesomeIcon icon={faArrowDown} className="ml-1 text-red-500" />
        </span>
      </div>
      <div className="wavy-line">
      <svg
              className="w-full h-40"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#801d1f"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
      </div>
</div>
        {/* Card 4 */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-[#121318] rounded-lg hover:scale-105 duration-300'>
  <div className='flex items-center'>
    <img className='w-10' src={Ripple} alt="Single" />
    <div className='ml-4 flex items-center'>
      <h2 className='text-xl font-bold text-white'>XRP</h2><br/>
      {/* Tag for XRP */}
      <span className='ml-2 px-2 py-1 text-blue-500 bg-black text-sm'>
        XRP
      </span>
    </div> 

  </div>
  <div className="flex items-center">
        <p className="text-white text-xl mr-2">$38,447.54</p>
        <span className="ml-2 text-green-500 flex items-center">
          +2%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
      </div>
      <div className="wavy-line">
      <svg
              className="w-full h-40"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#067339"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
      </div>
      </div>
      
      </div>

      {/* Second Section with a single card containing 4 smaller cards */}
      <div className='w-full py-4 px-4 '>
  <div className='max-w-[1240px] mx-auto bg-[#121318]'>
    <div className='w-full shadow-xl flex flex-col p-4 rounded-lg'>
      
      {/* Left Side: Heading and Paragraph */}
      <div className='w-full md:w-3/5'>
        <h2 className='text-3xl font-bold text-left text-white py-8'>
          Crypto Currencies Prices by Market
        </h2>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat dicta, eligendi nihil,
          iure provident quibusdam quisquam temporibus culpa, earum deserunt accusantium! Placeat architecto,
          incidunt deserunt exercitationem ut debitis porro?
        </p>
      </div>

      {/* Right Side: Grid for 4 Plans (Cards) */}
      <div className='w-full mt-8 grid md:grid-cols-4 gap-8'>
        
        <div className='w-full shadow-xl bg-black flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex items-center'>
            <img className='w-10' src={Ethereum} alt="Single" />
            <div className='ml-4'>
              <h2 className='text-xl font-bold text-white'>Ethereum</h2>
            </div>
          </div>
          <div className="flex items-center">
          <p className='text-left text-2xl text-white font-bold mt-4'>$38,40.54</p>
          <span className="ml-2 text-green-500 flex pt-3 items-center">
          +7.0%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
        <svg
              className="w-full h-10"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#1D78BC"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
        </div>
        </div>

        <div className='w-full shadow-xl flex bg-black flex-col p-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex items-center'>
            <img className='w-10' src={Binance} alt="Double" />
            <div className='ml-4'>
              <h2 className='text-xl font-bold text-white'>Binance</h2>
            </div>
          </div>
            <div className="flex items-center">
          <p className='text-left text-white text-2xl font-bold mt-4'>$38,40.54</p>
          <span className="ml-2 text-green-500 pt-3 flex items-center">
          +7.0%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
        <svg
              className="w-full h-10"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#1D78BC"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
        </div>
</div>
        <div className='w-full shadow-xl flex flex-col bg-black p-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex items-center'>
            <img className='w-10' src={Litecoin} alt="Triple" />
            <div className='ml-4'>
              <h2 className='text-xl text-white font-bold'>Litecoin</h2>
            </div>
          </div>
          <div className="flex items-center">
          <p className='text-left text-2xl text-white font-bold mt-4'>$38,40.54</p>
          <span className="ml-2 text-green-500 pt-3 flex items-center">
          +7.0%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
        <svg
              className="w-full h-10"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#1D78BC"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
        </div>
</div>
        <div className='w-full shadow-xl flex flex-col p-4 bg-black rounded-lg hover:scale-105 duration-300'>
          <div className='flex items-center'>
            <img className='w-10' src={Polygon} alt="Ripple" />
            <div className='ml-4'>
              <h2 className='text-xl font-bold text-white'>Polygon</h2>
            </div>
          </div>
          <div className="flex items-center">
          <p className='text-left text-white text-2xl font-bold mt-4'>$38,40.54</p>
          <span className="ml-2 text-green-500 pt-3 flex items-center">
          +7.0%
          <FontAwesomeIcon icon={faArrowUp} className="ml-1 text-green-500" />
        </span>
        <svg
              className="w-full h-10"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* More pronounced curve */}
              <path
                d="M0 5 Q 20 30, 50 10 Q 80 -10, 80 20"
                fill="transparent"
                stroke="#1D78BC"
                strokeWidth="1"
                className="animate-wiggle"
              />
            </svg>
        </div></div>

      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Cards;
