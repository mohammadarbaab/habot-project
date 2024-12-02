import React from 'react';
import bgImage from '../Asessts/hero.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import emailIcon from '../Asessts/suitcase 1.png';
import locationIcon from '../Asessts/placeholder 1.png';
// import sent from "../Asessts/suitcase 1.png";
// import address from "../Asessts/placeholder 1.png";
// import { Input } from "postcss";

function Hero() {
  return (
    <>
      {/* // <main>
    //   <div
    //     className="min-h-[490px] bg-cover bg-center flex flex-col gap-[20px] md:gap-[35px] text-[white] items-center justify-center"
    //     style={{
    //       backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${heroImage})`,
    //     }}
    //   >
    //     <div className="grid justify-items-center flex-col">
    //       <h1 className="text-[28px] md:text-[55px] font-[700] md:leading-[66px] text-center">
    //         Are You a Supplier?
    //       </h1>
    //       <span className="text-[22px] md:text-[55px] lg:text-[55px] font-[400] md:leading-[66px]  text-center">
    //         Explore Matching Opportunities.
    //       </span>
    //     </div>

    //     <div className="flex flex-col gap-[22px] items-center justify-center md:flex-row md:gap-[10px] md:w-full px-2">
    //       <input
    //         type="text"
    //         placeholder="Search your required service here"
    //         className="pl-[45px] pr-[20px] rounded-[5px] border border-transparent bg-white text-black bg-no-repeat bg-[length:18px] bg-[position:15px_center] w-[300px]  md:w-[400px]"
    //         style={{
    //           height: '52px',
    //         }}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Search your required service here"
    //         className="pl-[45px] pr-[20px] rounded-[5px] border border-transparent bg-white text-black bg-no-repeat bg-[length:18px] bg-[position:15px_center] w-[300px]  md:w-[400px]"
    //         style={{
    //           height: '52px',
    //         }}
    //       />
    //       <button className="w-[160px] h-[54px] bg-[#00732f] rounded-[5px] text-[15px] font-[700]">
    //         Search
    //       </button>
    //     </div>

    //     <div className="flex flex-col  md:flex-row gap-2 items-center text-center ">
    //       <b className="text-lg  font-semibold">Are you a buyer?</b>
    //       <span className="underline text-[14px] s">
    //         Click here if you are looking to post a requirement
    //       </span>
    //     </div>
    //   </div>
    // </main> */}
      <div
        className="flex lg:justify-center lg:items-center justify-center items-center flex-wrap flex-row lg:h-[509px] md:h[509px] lg:[509px] bg-orange-300 text-white h-[509px] "
        style={{
          backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col flex-wrap lg:justify-center md:items-center lg:gap-7 md:gap-7 gap-6">
          <div className="flex flex-col flex-wrap lg:justify-center md:items-center justify-center items-center gap-3">
            <h1
              className="lg:font-[700] lg:text-[55px] lg:leading-[66px] lg:text-center md:font-[700] md:text-[55px] md:leading-[66px] md:text-center sm:font-[700] sm:text-[45px] sm:leading-[50px] sm:text-center
            font-[500] text-[35px] leading-[40px] text-center px-1"
            >
              Are You a Supplier?
            </h1>
            <h1
              className="lg:font-[400] lg:text-[55px] lg:leading-[66px] lg:text-center md:font-[400] md:text-[45px] md:leading-[66px] md:text-center sm:font-[400] sm:text-[45px] sm:leading-[66px] sm:text-center
            font-[400] text-[35px] leading-[36px] text-center px-2"
            >
              Explore Matching Opportunities.
            </h1>
          </div>
          {/* input section */}
          <div className="flex flex-wrap lg:gap-[10px] lg:justify-center lg:items-center lg:flex-row md:justify-center md:items-center md:gap-[10px] md:flex-col sm:gap-[10px] sm:flex-col flex-col justify-center items-center gap-4 px-8">
            <input
              className="flex flex-wrap w-full sm:w-[380px] md:w-[390px] lg:w-[390px] h-[52px] rounded-[5px] border-b-1 bg-no-repeat focus:outline-none text-black justify-center items-center"
              placeholder="Search your required service here"
              style={{
                backgroundImage: `url(${emailIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px center', // Icon ko vertically center karne ke liye
                paddingLeft: '45px', // Placeholder aur icon ke beech mein space ke liye
              }}
            />

            <input
              className="flex flex-wrap w-full sm:w-[380px] md:w-[390px] lg:w-[390px] h-[52px] rounded-[5px] border-b-1 pl-14 bg-no-repeat focus:outline-none text-black justify-center items-center"
              placeholder="Search your required service here"
              style={{
                backgroundImage: `url(${locationIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px center', // Icon ko vertically center karne ke liye
                paddingLeft: '45px', // Placeholder aur icon ke beech mein space ke liye
              }}
            />
            <button className="w-[117px] h-[52px] bg-[#00732F] rounded-[5px] text-[15px] font-[700] text-center leading-[24px]">
              Seacrh
            </button>
          </div>
          {/* Bottom sextion */}
          <div className="flex flex-wrap lg:flex-row lg:items-center lg:gap-2 md:items-center md:gap-2 md:flex-row sm:flex-col sm:justify-center sm:items-center flex-col justify-center items-center">
            <b className="text-lg  font-semibold">Are you a buyer?</b>
            <span className="underline lg:text-[14px] md:text-[14px] sm:text-[14px] text-[12px] flex flex-wrap justify-center items-center lg:px-0 md:px-0 sm:px-0 px-2">
              Click here if you are looking to post a requirement
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
