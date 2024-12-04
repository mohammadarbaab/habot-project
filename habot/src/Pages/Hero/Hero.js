import React from 'react';
import bgImage from '../Asessts/hero.png';
import emailIcon from '../Asessts/suitcase 1.png';
import locationIcon from '../Asessts/placeholder 1.png';

function Hero() {
  return (
    <>
      {/* hero section start here */}
      <div
        className="flex w-[100%] lg:justify-center lg:items-center justify-center items-center flex-wrap flex-row lg:h-[509px] md:h[509px] lg:[509px] bg-orange-300 text-white h-[509px] overflow-x-hidden"
        style={{
          backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* main section start here */}
        <div className="flex flex-col flex-wrap lg:justify-center md:items-center lg:gap-8 md:gap-7 sm:gap-6 gap-4">
          {/* heading section start here */}
          <div className="flex flex-col flex-wrap lg:justify-center md:items-center justify-center items-center md:gap-0 lg:gap-0 gap-2">
            <h1
              className="lg:font-[700] lg:text-[55px] lg:leading-[66px] lg:text-center md:font-[700] md:text-[55px] md:leading-[66px] md:text-center sm:font-[700] sm:text-[45px] sm:leading-[50px] sm:text-center
            font-[500] text-[35px] leading-[40px] text-center px-[6px]"
            >
              Are You a Supplier?
            </h1>
            <h1
              className="lg:font-[400] lg:text-[55px] lg:leading-[66px] lg:text-center md:font-[400] md:text-[45px] md:leading-[60px] md:text-center sm:font-[400] sm:text-[45px] sm:leading-[50px] sm:text-center
            font-[400] text-[32px] leading-[36px] text-center px-2"
            >
              Explore Matching Opportunities.
            </h1>
          </div>
          {/* heading section end here */}
          {/* *************************/}
          {/* input section start here */}
          <div className="flex flex-wrap lg:gap-[10px] lg:justify-center lg:items-center lg:flex-row md:justify-center md:items-center md:gap-[14px] md:flex-col sm:gap-[14px] sm:flex-col flex-col justify-center items-center gap-4 px-8">
            <input
              className="flex flex-wrap w-full sm:w-[380px] md:w-[390px] lg:w-[390px] h-[52px] rounded-[5px] border-b-1 bg-no-repeat focus:outline-none text-black justify-center items-center"
              placeholder="Search your required service here"
              style={{
                backgroundImage: `url(${emailIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px center',
                paddingLeft: '45px',
              }}
            />

            <input
              className="flex flex-wrap w-full sm:w-[380px] md:w-[390px] lg:w-[390px] h-[52px] rounded-[5px] border-b-1 pl-14 bg-no-repeat focus:outline-none text-black justify-center items-center"
              placeholder="Search your required service here"
              style={{
                backgroundImage: `url(${locationIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px center',
                paddingLeft: '45px',
              }}
            />
            <button className="w-[117px] h-[52px] bg-[#00732F] rounded-[5px] text-[15px] font-[700] text-center leading-[24px]">
              Seacrh
            </button>
          </div>
          {/* input section end here */}
          {/* *********************/}
          {/* bottom section start here */}
          <div className="flex flex-wrap lg:flex-row lg:items-center lg:gap-2 md:items-center md:gap-2 md:flex-row sm:flex-col sm:justify-center sm:items-center flex-col justify-center items-center">
            <b className="text-[18px] font-[700] text-center leading-[26px]">
              Are you a buyer?
            </b>
            <span className="underline lg:text-[18px] font-[400] text-center md:text-[14px] sm:text-[14px] text-[12px] flex flex-wrap justify-center items-center lg:px-0 md:px-0 sm:px-0 px-2">
              Click here if you are looking to post a requirement
            </span>
          </div>
          {/* bottom section end here */}
        </div>
        {/* main section end here */}
      </div>
      {/* hero section end here */}
    </>
  );
}

export default Hero;
