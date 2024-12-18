import React from 'react';
import group33 from '../Asessts/Group 33.png';
import document from '../Asessts/document.png';
import layer from '../Asessts/Layer.png';
import edit from '../Asessts/edit.png';
import group from '../Asessts/Group.png';
import group22 from '../Asessts/Group22.png';
function BuyersPost() {
  return (
    // main div start here
    <div className="h-auto flex flex-wrap flex-col text-center md:mt-20 md:mb-20 mt-16 mb-16">
      <div className="w-full h-auto flex flex-wrap flex-col  items-center gap-[40px]">
        {/* top heading section start here */}
        <div className="flex flex-col flex-wrap gap-[20px] ">
          <h1 className="text-[37px] font-[700] text-gray-900 text-center leading-[48px]">
            How it works?
          </h1>
          <p className="text-[17px] font-[400] leading-[26px] sm:text-center md:text-center sm:w-[400px] lg:w-[839px] flex flex-col flex-wrap">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>
        {/* top heading section end here */}
        {/* cards section start here */}
        <div className="w-[90%] flex flex-wrap justify-center ">
          <div className=" flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px]  gap-5 bg-[#E8FBFF]">
            <img src={group33} className="w-[74px] h-[74px]" />
            <p className="text-[20px] font-[500] w-[206px] text-center leading-[26px]">
              Select Your Role and Sign Up
            </p>
          </div>
          <div className="flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px] gap-5">
            <img src={document} className="w-[75px] h-[75px]" />
            <p className="text-[20px] font-[500] w-[206px] text-center leading-[26px]">
              Buyers Post Your Requirements
            </p>
          </div>
          <div className=" flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px] gap-5 bg-[#E8FBFF]">
            <img src={layer} className="w-[76px] h-[78px]" />
            <p className="text-[20px] font-[500] w-[240px] text-center leading-[26px]">
              Review, Select, and Contact the Best Suppliers
            </p>
          </div>
          <div className=" flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px] gray] gap-5">
            <img src={edit} className="w-[75px] h-[75px]" />
            <p className="text-[20px] font-[500] w-[267px] text-center leading-[26px]">
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div className=" flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px] gap-5 bg-[#E8FBFF]">
            <img src={group} className="w-[75px] h-[75px]" />
            <p className="text-[20px] font-[500] w-[299px] text-center leading-[26px]">
              Contact to Buyers and Share your Quote for the service
            </p>
          </div>
          <div className=" flex flex-wrap flex-col items-center justify-center  w-[380px] h-[254px]  gap-5">
            <img src={group22} className="w-[86.69px] h-[85.34px]" />
            <p className="text-[20px] font-[500] w-[290px] text-center leading-[26px]">
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
        {/* cards section end here */}
      </div>
    </div>
    // main div end here
  );
}

export default BuyersPost;
