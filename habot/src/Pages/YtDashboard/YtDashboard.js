import React from 'react';
import YtEmbed from './YtEmbeded';
import check from '../Asessts/checked.png';

function YtDashboard({ videoId }) {
  return (
    <>
      <div className="lg:w-[90%] lg:h-[553px] bg-[#072F57] mx-auto flex flex-wrap justify-center lg:flex-row flex-col">
        {/* Youtube section */}
        <div className="flex w-auto lg:flex-col lg:w-[45%] md:justify-center flex-wrap lg:justify-center justify-center overflow-hidden sm:py-4 py-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            alt=""
            className="md:w-[590px] md:h-[310px] lg:w-full lg:h-[310px] flex flex-wrap sm:w-[70%] sm:h-[310px] w-[80%] h-[310px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>

        <div className="flex lg:flex-col lg:mt-0 lg:ml-10 lg:w-[43%] w-full lg:justify-center flex-wrap">
          <div className="flex w-full lg:w-[90%] h-auto lg:h-[310px] lg:flex-col flex-wrap lg:ml-2 lg:gap-3 gap-6 mb-4">
            {/* top section */}
            <div className="w-[70%] mx-auto lg:w-[100%] lg:h-[47px] h-auto flex-wrap lg:justify-between md:mt-2 flex md:justify-center mt-4 justify-between">
              <h1 className="font-[700] text-[26px] leading-[32px] text-[#EB7150] lg:text-center lg:w-[50%] w-[30%]">
                Buyer
                <div className="lg:w-[100%] md:w-[35%] sm:w-[50%] w-[100%] mt-[10px] h-[0.5px] border-b-4 border-[#EB7150]"></div>
              </h1>
              <h1 className="font-[700] text-[26px] leading-[32px] text-[white] lg:w-[50%] lg:text-center">
                Supplier
                <div className=""></div>
              </h1>
            </div>
            {/* paragraph section */}
            <div className="lg:w-[100%] h-auto flex lg:flex-col md:flex-col lg:mt-8 flex-col px-4">
              <div className="flex items-start mb-3 md:w-[80%] xl:w-full">
                <img
                  src={check}
                  className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                />
                <div className="flex-1 text-white text-[18px] font-[500]">
                  Post your requirements.
                </div>
              </div>
              <div className="flex items-start mb-3 w-full md:w-[100%] xl:w-full">
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
                  <span className="inline-block">rating and reviews.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YtDashboard;
