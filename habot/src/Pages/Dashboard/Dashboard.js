import React from 'react';
import arrow from '../Asessts/Vector.png';

function Dashboard() {
  return (
    <>
      {/* main section start here */}
      <div className="flex flex-wrap lg:flex-row md:flex-col lg:gap-4 lg:px-16 lg:py-16 flex-col">
        {/* <!-- Left side content div --> */}
        <div className="flex-1 min-w-0 grid grid-cols-1 lg:gap-7 lg:px-0 px-8 place-items-center lg:place-items-start py-8 md:gap-4 gap-5">
          <h1 className="lg:text-[37px] lg:font-[700] lg:leading-[40px] lg:text-start text-center md:text-[28px] sm:text-[28px] md:font-[700] sm:font-[700] font-[700] text-[24px] text-black">
            Ready to dive into <font color="#271555">HABOT?</font>
          </h1>

          <p className="lg:text-[17.16px] lg:font-[300] lg:ml-0 lg:leading-[28px] md:leading-[28px] leading-[25px] underline decoration-transparent sm:text-[16px] sm:mb-4 w-full text-justify overflow-x-auto flex-wrap resize-none text-black lg:max-w-[520px] md:px-6 lg:px-0 px-4">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>

          {/* <button className="w-full sm:w-[240px] lg:w-[317px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] text-white font-[700] text-lg leading-[24px] text-center lg:px-0 lg:py-0">
            Sign up Today ! 
          </button> */}
          <button className="w-full sm:w-[240px] lg:w-[317px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] text-white font-[700] text-[18px] leading-[24px] text-center flex items-center justify-center relative">
            Sign up Today !
            <img
              src={arrow}
              alt="Arrow"
              className="lg:w-[32px] md:w-[30px] h-[16px] ml-6 absolute lg:right-6 md:right-3 right-3 leading-[24px] top-[18px]"
            />
          </button>
        </div>
        {/* left side content end here */}

        {/* <!-- Right side buttons div --> */}
        <div className="flex-1 min-w-0 flex lg:flex-col lg:pr-0 flex-col lg:justify-start lg:px-0 lg:py-0 md:py-6 px-4 py-6 lg:gap-4 gap-4">
          <div className="flex lg:gap-4 lg:justify-end lg:mt-[50px] md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Abu Dhabi
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Dubai
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
          </div>
          <div className="flex lg:gap-4 lg:justify-end lg:mt-2  md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Sharjah & Ajman
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Fujairah
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
          </div>
          <div className="flex lg:gap-4 lg:justify-end lg:mt-2 md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Ras Al Khaimah
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
            <button className="md:w-full max-w-[258px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-full sm:w-full relative">
              Umm Al Quwain
              <img
                src={arrow}
                alt="Arrow"
                className="w-[32px] h-[16px] ml-6 absolute right-3 leading-[24px] top-[24px]"
              />
            </button>
          </div>
        </div>
        {/* right side content end here */}
      </div>
      {/* main section end here */}
    </>
  );
}

export default Dashboard;
