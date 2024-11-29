import React from 'react';

function Dashboard() {
  return (
    <div className="w-full grid lg:grid-cols-2 ">
      {/* left div */}
      <div className="w-full h-full flex flex-col gap-6 items-start px-6 md:px-[60px] py-6 md:py-[60px]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[700] leading-tight text-black">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h1>
        <p className="text-[20px]  lg:text-lg font-light text-[#000000] text-justify w-full sm:w-[500px] md:w-[540px]">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="w-full sm:w-[240px] lg:w-[317px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] text-white font-[700] text-lg leading-[24px] text-center">
          Sign up Today!
        </button>
      </div>

      {/* Right Div */}

      <div className="w-full h-full flex flex-wrap gap-4 px-4 md:px-[76px] py-4 md:py-[20px] lg:py-[80px] justify-center">
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Abu Dhabi
        </button>
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Sharjah & Ajman
        </button>
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Dubai
        </button>
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Fujairah
        </button>
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Ras Al Khaimah
        </button>
        <button className="w-[240px] h-[60px] rounded-[5px] border-[1px] border-[#E7760D] mb-4">
          Umm Al Quwain
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
