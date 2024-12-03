import React from 'react';

function GetVefified() {
  return (
    <div className="w-full md:h-[200px] h-auto flex lg:flex-row md:flex-col justify-between items-center bg-[#E8FBFF] md:pl-[100px] md:pr-[140px] px-4 py-4 mt-20 mb-20 flex-col">
      <h1 className="lg:text-[37px] md:text-[37px] text-[35px] font-[600] md:font-[600] leading-[40px] text-center md:text-left text-black lg:py-0 py-6">
        Let Suppliers Find You
      </h1>
      <button className="md:w-[216px] h-[54px] rounded-[5px] bg-[#EB7150] md:mt-4 text-[18px] md:font-[700] text-center leading-[24px] font-[700]  text-white lg:mb-0 md:mb-0 mb-2 w-[180px]">
        Get Verified
      </button>
    </div>
  );
}

export default GetVefified;
