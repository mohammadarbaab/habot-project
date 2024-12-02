import React from 'react';

function Dashboard() {
  return (
    <>
      {/* <div className="w-full grid lg:grid-cols-2 ">
        <div className="w-auto h-full flex flex-col gap-6 lg:items-start px-6 md:px-[60px] py-6 md:py-[60px] md:items-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[700] leading-tight text-black">
            Ready to dive into <span className="text-[#271555]">HABOT?</span>
          </h1>
          <p className="text-[20px] lg:text-lg font-light text-[#000000] text-justify w-full sm:w-[500px] md:w-[540px]">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="w-full sm:w-[240px] lg:w-[317px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] text-white font-[700] text-lg leading-[24px] text-center">
            Sign up Today!
          </button>
        </div>

        <div className="lg:w-auto h-full flex flex-wrap gap-4 px-4 md:px-[76px] py-4 md:py-[20px] lg:py-[80px] justify-center">
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Abu Dhabi
          </button>
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Sharjah & Ajman
          </button>
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Dubai
          </button>
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Fujairah
          </button>
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Ras Al Khaimah
          </button>
          <button className="w-[220px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
            Umm Al Quwain
          </button>
        </div>
      </div> */}
      <div class="flex flex-wrap bg-orange-400 lg:flex-row md:flex-col lg:gap-4 lg:px-16 lg:py-16 flex-col">
        {/* <!-- Left side content div --> */}
        <div class="flex-1 min-w-[200px] bg-red-600 grid grid-cols-1 lg:gap-8 p-5 place-items-center lg:place-items-start py-8 md:gap-4 gap-4">
          <h1 class="text-[37px] font-[700] lg:leading-[40px]">
            Ready to dive into <font color="#271555">HABOT?</font>
          </h1>

          {/* <!-- Responsive Paragraph with Fixed Width and Scroll on Overflow --> */}
          <p class="lg:text-[17.16px] lg:font-[300] lg:ml-1 lg:leading-[28px] md:leading-[28px] leading-[25px] underline decoration-transparent sm:text-[16px] sm:mb-4 w-[520px] max-w-full text-justify overflow-x-auto resize-none text-black">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>

          <button class="w-[50%] sm:w-[240px] lg:w-[317px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] text-white font-[700] text-lg leading-[24px] text-center lg:px-0 lg:py-0 md:px-0 ">
            Sign up Today!
          </button>
        </div>
        {/*  */}
        {/* <!-- Right side buttons div --> */}
        <div class="flex-1 min-w-[200px] flex lg:flex-col lg:pr-5 bg-blue-400 flex-col lg:justify-start lg:px-0 lg:py-0 md:py-6 px-28 py-6 lg:gap-0 gap-4">
          <div class="flex lg:gap-4 lg:justify-end lg:mt-10 lg:ml-2 md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Abu Dhabi
            </button>
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Dubai
            </button>
          </div>
          <div class="flex lg:gap-4 lg:justify-end lg:mt-5 lg:ml-2 md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Abu Dhabi
            </button>
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Dubai
            </button>
          </div>
          <div class="flex lg:gap-4 lg:justify-end lg:mt-5 lg:ml-2 md:justify-center md:gap-4 gap-4 lg:flex-row md:flex-row flex-col justify-center items-center">
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Abu Dhabi
            </button>
            <button class="md:w-full max-w-[270px] h-[65px] bg-white border border-[#E7760D] rounded-[5px] px-0 opacity-100 text-[18.75px] leading-[32px] text-center font-[500] hover:bg-header-serch-icon-color hover:text-white cursor-pointer w-[200px]">
              Dubai
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
