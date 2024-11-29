import React from 'react';
import YtEmbed from './YtEmbeded';
import check from '../Asessts/checked.png';

function YtDashboard({ videoId }) {
  return (
    <>
      <div className="w-[90%] h-auto md:h-[523px] mx-auto flex flex-col md:flex-row lg:mb-2 bg-[#072F57] p-4 md:p-10 md:gap-10 ">
        <div className="w-full lg:ml-4 md:w-1/2 flex justify-center items-center">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            alt=""
            style={{
              top: 0,
              left: 0,
              width: '550px',
              height: '310px',
              borderRadius: '5px',
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 flex flex-col  lg:h-[310px] md:mt-16 xl:ml-[30px] ">
          <div className="mb-4 flex flex-row md:gap-10 ">
            <h1 className="text-[20px] text-center md:text-[26px] font-[700] leading-[32px] text-[#EB7150]">
              Buyer
              <div className="md:w-[100px] lg:w-[202px] mt-[10px] h-[0.5px] border-b-4 border-[#EB7150]"></div>
            </h1>
            <h1 className="text-[20px] text-center md:text-[26px] font-[700] leading-[32px] text-white">
              Supplier
              <div className="md:w-[100px] lg:w-[202px]  mt-[10px] h-[0.5px]"></div>
            </h1>
          </div>

          <div className="xl:mt-4">
          <div className="flex items-start mb-3 md:w-[80%] xl:w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-[18px] font-[500]">
              Post your requirements.
            </div>
          </div>
          <div className="flex items-start mb-3 w-full md:w-[90%] xl:w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-[18px] font-[500]">
              Sit back for multiple suppliers to contact you.
            </div>
          </div>
          <div className="flex items-start mb-3 w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-[18px] font-[500]">
              Choose among the suppliers based on the{' '}
              <span className="block mt-2">rating and reviews.</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YtDashboard;
