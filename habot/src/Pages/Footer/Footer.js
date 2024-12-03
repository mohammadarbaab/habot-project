import React from 'react';
import footerLogo from '../Asessts/HABOT.png';
import linkdln from '../Asessts/Item → Link - LinkedIn.png';
import x from '../Asessts/Item → Link - Twitter.png';
import instagram from '../Asessts/Item → Link - Instagram.png';
import fb from '../Asessts/Item → Link - Facebook.png';

function Footer() {
  return (
    <div className="w-full px-4 flex flex-col md:flex-row flex-wrap bg-[#123557] text-white md:h-[212px] h-auto items-center  justify-center mt-24">
      <div className="w-full md:w-[1200px] flex flex-col lg:flex-row md:flex-col flex-wrap justify-between  md:px-2 text-white lg:h-[150px]  h-auto border-t-[1px] border-b-[1px] border-solid border-[#FFFFFF33]">
        <div className="flex flex-col  md:flex-row lg:flex-row flex-wrap md:gap-16 lg:gap-16 md:justify-center sm:justify-center ">
          <div className="md:justify-center lg:justify-center flex lg:flex-col md:flex-col gap-2 flex-col lg:mt-6 items-center mt-5">
            <img
              src={footerLogo}
              alt="logo"
              className="lg:w-[206px] md:w-[206px] sm:w-[206px] w-[206px]"
            />
            <p className="text-16px font-[300] leading-[32px] ml-3 mt">
              © R Singhania
            </p>
          </div>
          <div className="sm:flex-row flex sm:gap-10 justify-center gap-10">
          <div className="flex md:flex-col md:gap-[7px] md:mt-[20px] flex-col mt-[20px]">
            <h1 className="text-[15.13px] font-[700] leading-[24px]">
              Company
            </h1>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[14px] font-[300] leading-[25px]">About</p>
              <p className="text-[14px] font-[300] leading-[25px]">FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-[7px]  mt-[20px]">
            <h1 className="text-[15.13px] font-[700] leading-[24px]">Terms</h1>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[14px] font-[300] leading-[25px]">
                Data privacy
              </p>
              <p className="text-[14px] font-[300] leading-[25px]">Terms</p>
              <p className="text-[14px] font-[300] leading-[25px]">
                Accessibility
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[7px]  mt-[20px]">
            <h1 className="text-[15.13px] font-[700] leading-[24px]">
              Related
            </h1>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[14px] font-[300] leading-[25px]">
                Find Buyer
              </p>
              <p className="text-[14px] font-[300] leading-[25px]">Feedback</p>
            </div>
          </div>
          </div>
         
        </div>

        <div className="flex flex-row flex-wrap gap-4 md:items-center lg:justify-center md:justify-center md:py-4 sm:justify-center sm:py-4 pl-4 py-4 justify-center">
          <a href="#">
            <img src={linkdln} />
          </a>
          <a href="#">
            <img src={x} />
          </a>
          <a href="#">
            <img src={fb} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
