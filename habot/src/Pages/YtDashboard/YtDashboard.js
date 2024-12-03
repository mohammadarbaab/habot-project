import React from 'react';
import check from '../Asessts/checked.png';
import { useState } from 'react';

function YtDashboard({ videoId }) {
  const [selected, setSelected] = useState('Buyer');
  return (
    <>
      <div className="lg:w-[90%] lg:h-[553px] bg-[#072F57] mx-auto flex flex-wrap justify-center lg:flex-row flex-col">
        {/* Youtube section */}
        <div className="flex w-auto lg:flex-col lg:w-[45%] md:justify-center flex-wrap lg:justify-center justify-center overflow-hidden sm:py-4 py-4">
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

        <div className="flex lg:flex-col lg:mt-0 lg:ml-10 lg:w-[43%] w-full lg:justify-center flex-wrap">
          <div className="flex w-full lg:w-[90%] h-auto lg:h-[310px] lg:flex-col flex-wrap lg:ml-2 lg:gap-3 gap-6 mb-4">
            {/* Top section (Buyer/Supplier buttons) */}
            <div className="w-[70%] mx-auto lg:w-[100%] lg:h-[47px] h-auto flex lg:justify-between lg:mt-5 flex-row md:justify-center mt-4 justify-between">
              <button
                className={`font-[700] text-[26px] leading-[32px] ${selected === 'Buyer' ? 'text-[#EB7150]' : 'text-white'} lg:text-center lg:w-[45%] w-[45%] mr-[20px] flex flex-col items-center`}
                onClick={() => setSelected('Buyer')}
              >
                <span>Buyer</span>
                <div
                  className={`lg:w-[100%] md:w-[35%] sm:w-[50%] w-[100%] mt-[10px] h-[0.5px] border-b-4 ${selected === 'Buyer' ? 'border-[#EB7150]' : 'border-transparent'}`}
                ></div>
              </button>
              <button
                className={`font-[700] text-[26px] leading-[32px] ${selected === 'Supplier' ? 'text-[#EB7150]' : 'text-white'} lg:w-[45%] lg:text-center flex flex-col items-center`}
                onClick={() => setSelected('Supplier')}
              >
                <span>Supplier</span>
                <div
                  className={`lg:w-[90%] md:w-[35%] sm:w-[50%] w-[100%] mt-[10px] h-[0.5px] border-b-4 ${selected === 'Supplier' ? 'border-[#EB7150]' : 'border-transparent'}`}
                ></div>
              </button>
            </div>

            {/* Paragraph section */}
            <div className="lg:w-[416px] h-auto flex lg:flex-col md:flex-col lg:mt-8 flex-col lg:px-0 px-4">
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
                  <div className="flex items-start mb-3 md:w-[80%] xl:w-full">
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
                    Reach out to buyers and expand your business.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YtDashboard;
