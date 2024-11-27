import React from 'react';
import heroImage from '../Asessts/hero.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
// import sent from "../Asessts/suitcase 1.png";
// import address from "../Asessts/placeholder 1.png";
// import { Input } from "postcss";

function Hero() {
  return (
    <main>
      <div
        className="min-h-[490px] bg-cover bg-center flex flex-col gap-[20px] md:gap-[35px] text-[white] items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${heroImage})`,
        }}
      >
        <div className="grid justify-items-center flex-col">
          <h1 className="text-[28px] md:text-[55px] font-[700] md:leading-[66px] text-center">
            Are You a Supplier?
          </h1>
          <span className="text-[22px] md:text-[55px] lg:text-[55px] font-[400] md:leading-[66px]  text-center">
            Explore Matching Opportunities.
          </span>
        </div>

        <div className="flex flex-col gap-[22px] items-center justify-center md:flex-row md:gap-[10px] md:w-full px-2">
          <input
            type="text"
            placeholder="Search your required service here"
            className="pl-[45px] pr-[20px] rounded-[5px] border border-transparent bg-white text-black bg-no-repeat bg-[length:18px] bg-[position:15px_center] w-[300px]  md:w-[400px]"
            style={{
              height: '52px',
            }}
          />
          <input
            type="text"
            placeholder="Search your required service here"
            className="pl-[45px] pr-[20px] rounded-[5px] border border-transparent bg-white text-black bg-no-repeat bg-[length:18px] bg-[position:15px_center] w-[300px]  md:w-[400px]"
            style={{
              height: '52px',
            }}
          />
          <button className="w-[160px] h-[54px] bg-[#00732f] rounded-[5px] text-[15px] font-[700]">
            Search
          </button>
        </div>

        <div className="flex flex-col  md:flex-row gap-2 items-center text-center ">
          <b className="text-lg  font-semibold">Are you a buyer?</b>
          <span className="underline text-[14px] s">
            Click here if you are looking to post a requirement
          </span>
        </div>
      </div>
    </main>
  );
}

export default Hero;
