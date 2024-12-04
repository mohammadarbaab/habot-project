import React from 'react';
import check from '../Asessts/checked.png';
import { useState } from 'react';

function YtDashboard({ videoId }) {
  const [selected, setSelected] = useState('Buyer');
  return (
    <div className="lg:px-16 lg:mb-16">
      <div className="lg:w-[100%] lg:h-[553px] bg-[#072F57] mx-auto flex flex-wrap justify-center lg:flex-row flex-col rounded-[5px]">
        {/* Youtube section */}
        <div className="flex w-auto lg:flex-col lg:w-[45%] md:justify-center flex-wrap lg:justify-center justify-center overflow-hidden sm:py-8 lg:py-0 py-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            alt=""
            className="md:w-[590px] md:h-[310px] lg:w-full lg:h-[296px] flex flex-wrap sm:w-[70%] sm:h-[310px] w-[80%] h-[310px] rounded-[5px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>

        <div className="flex lg:flex-col lg:mt-0 lg:ml-10 lg:w-[43%] w-full lg:justify-center flex-wrap md:justify-center">
          <div className="flex w-full lg:w-[80%] h-auto lg:h-[310px] lg:flex-col md:flex-col flex-col flex-wrap lg:gap-3 gap-6 mb-4 lg:justify-start lg:ml-[18px] md:justify-center md:items-center lg:items-start">
            {/* Top section (Buyer/Supplier buttons) */}
            <div className="md:w-[60%] w-full lg:w-[100%]  lg:h-[47px] h-auto flex lg:justify-between lg:mt-5 flex-row lg:px-0 mt-4">
              <button
                className={`font-[700] text-[26px] lg:leading-[32px] ${selected === 'Buyer' ? 'text-[#EB7150]' : 'text-white'} lg:text-center lg:w-[45%] md:w-[20%] w-full mr-[20px] flex flex-col items-center`}
                onClick={() => setSelected('Buyer')}
              >
                <span>Buyer</span>
                <div
                  className={`lg:w-[100%] md:w-[100%]  sm:w-[40%] w-[100%] mt-[10px] h-[0.5px] border-b-4 ${selected === 'Buyer' ? 'border-[#EB7150]' : 'border-transparent'}`}
                ></div>
              </button>
              <button
                className={`font-[700] text-[26px] lg:leading-[32px] ${selected === 'Supplier' ? 'text-[#EB7150]' : 'text-white'} lg:text-center lg:w-[45%] md:w-[20%] w-full mr-[20px] flex flex-col items-center`}
                onClick={() => setSelected('Supplier')}
              >
                <span>Supplier</span>
                <div
                  className={`lg:w-[100%] md:w-[100%]  sm:w-[40%] w-[100%] mt-[10px] h-[0.5px] border-b-4 ${selected === 'Supplier' ? 'border-[#EB7150]' : 'border-transparent'}`}
                ></div>
              </button>
              
            </div>

            {/* Paragraph section */}
            <div className="lg:w-[416px] md:w-[60%] h-auto flex lg:flex-col md:flex-col lg:mt-6 flex-col lg:px-0 md:px-0 sm:px-[105px] px-6">
              {/* Conditional Content */}
              {selected === 'Buyer' ? (
                <>
                  <div className="flex items-start mb-3 md:w-[80%] xl:w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18.75px] font-[500]">
                      Post your requirements.
                    </div>
                  </div>
                  <div className="flex items-start mb-3 w-full md:w-[100%] xl:w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18px] font-[500]">
                      Sit back for multiple suppliers to contact you.
                    </div>
                  </div>
                  <div className="flex items-start mb-3 w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18px] font-[500] leading-[30px]">
                      Choose among the suppliers based on the{' '}
                      <span className="inline-block">rating and reviews.</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start mb-3 md:w-[100%] xl:w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18.75px] font-[500]">
                      Complete your profile and get verified.
                    </div>
                  </div>
                  <div className="flex items-start mb-3 w-full md:w-[100%] xl:w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18px] font-[500]">
                      Select service tags for relevant opportunities.
                    </div>
                  </div>
                  <div className="flex items-start mb-3 w-full">
                    <img
                      src={check}
                      className="text-green-500 text-xl mr-2 mt-1.5 flex-shrink-0"
                      alt="check"
                    />
                    <div className="flex-1 text-white text-[18px] font-[500] leading-[30px]">
                      Reach out to buyers and expand your &nbsp; &nbsp;
                      <span className="inline-block">business.</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YtDashboard;
