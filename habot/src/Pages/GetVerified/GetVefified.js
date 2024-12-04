import React from 'react';

function GetVefified() {
  return (
    <div className="flex lg:flex-row w-full md:flex-col flex-wrap lg:h-[244px] md:h-[170px] h-[190px] flex-col bg-[#E8FBFF] lg:justify-around justify-center  lg:gap-0 gap-6">
      <div className="flex flex-wrap items-center lg:w-[50%] md:w-[100%] md:justify-center lg:justify-start justify-center">
        <h1 className="lg:text-[37px] md:text-[37px] text-[30px] font-[600] leading-[40px] text-center md:text-left text-black lg:ml-[80px]">
          Let Suppliers
          <span className="relative inline-block ml-2">
            Find You
            <div className="w-full h-1 mt-2 bg-[#EB7150] absolute bottom-[-10px] left-0"></div>
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center lg:w-[35%] md:w-[100%] md:justify-center  justify-center">
        <button className="md:w-[216px] lg:h-[54px] md:h-[54px] rounded-[5px] bg-[#EB7150] md:mt-4 text-[18px] font-[700] text-center leading-[24px] text-white w-[180px] h-[40px] lg:ml-[100px]">
          Get Verified
        </button>
      </div>
    </div>
  );
}

export default GetVefified;
