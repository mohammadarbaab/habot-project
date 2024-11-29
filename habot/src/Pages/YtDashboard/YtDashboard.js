import React from 'react';
import YtEmbed from './YtEmbeded';
import check from '../Asessts/checked.png';

function YtDashboard({ videoId }) {
  return (
    <>
      <div className="w-[90%] h-[523px] mx-auto flex flex-col md:flex-row bg-[#072F57] p-4 md:p-10 gap-6">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            alt=""
            style={{
              top: 0,
              left: 0,
              width: '530px',
              height: '295px',
              borderRadius: '5px',
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 flex flex-col mt-20 ">
          <div className="mb-4 flex flex-row md:gap-6 ">
            <h1 className="text-[20px] text-center md:text-[26px] font-[700] leading-[32px] text-[#EB7150]">
              Buyer
              <div className="md:w-[100px] lg:w-[202px] mt-[10px] h-[0.5px] border-b-4 border-[#EB7150]"></div>
            </h1>
            <h1 className="text-[20px] text-center md:text-[26px] font-[700] leading-[32px] text-white">
              Supplier
              <div className="md:w-[202px] lg:w-[202px]  mt-[10px] h-[0.5px]"></div>
            </h1>
          </div>

          <div className="flex items-start mb-3 w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-lg leading-6">
              Post your requirements.
            </div>
          </div>
          <div className="flex items-start mb-3 w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-lg leading-6">
              Sit back for multiple suppliers to contact you.
            </div>
          </div>
          <div className="flex items-start mb-3 w-full">
            <img
              src={check}
              className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
            />
            <div className="flex-1 text-white text-lg leading-6">
              Choose among the suppliers based on the{' '}
              <span className="block mt-2">rating and reviews.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YtDashboard;
