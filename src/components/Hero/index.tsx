import React from "react";
import { Search, Location } from "../ui-icons/Icons";

const Hero: React.FC = () => {
  return (
    <div className="bg-[url('/images/Pattern.png')] h-[750px] w-full bg-no-repeat bg-[100%_17px] bg-size-hero bg-[#F8F8FD]">
      <div className="px-[2rem] sm:px-[4rem] md:px-[6rem] grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div>
          <div className="text-[#25324B] text-[48px] lg:text-[60px] xl:text-[72px] font-semibold font-ClashDisplay leading-[0.6]">
            Discover more
          </div>
          <div className="text-[#25324B] text-[48px] lg:text-[60px] xl:text-[72px] font-semibold font-ClashDisplay">
            than <span className="text-[#26A4FF]">5000+</span>
          </div>
          <div className="text-[#26A4FF] text-[48px] lg:text-[60px] xl:text-[72px] font-semibold leading-[0.6] font-ClashDisplay">
            Jobs
          </div>
          <img
            src="/images/Vector.png"
            className="w-[500px] mt-10 mb-6 object-contain"
            alt=""
          />
          <span className="text-[#515B6F] inline-block font-20">
            Great platform for the job seeker that searching for
          </span>
          <span className="text-[#515B6F] inline-block font-20">
            new career heights and passionate about startups.
          </span>
          <div className="mt-6 z-10 w-auto md:w-[490px] lg:w-[850px] relative">
            <div className="bg-white py-[14px] w-full px-3 gap-y-10 md:gap-y-5 lg:gap-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md shadow-md shadow-slate-100">
              <div className="flex relative md:ml-3 md:mr-5">
                <span className="absolute bottom-2">
                  <Search width="20px" />
                </span>
                <input
                  type="text"
                  className="border-b-2 border-[#D6DDEB] w-full py-[2px] pl-7 outline-none focus:border-blue-500 text-sm text-[#25324B]"
                  placeholder="Job title"
                />
              </div>
              <div className="flex relative md:ml-5">
                <div className="absolute bottom-2">
                  <Location width="20px" />
                </div>
                <select className="border-b-2 w-full text-sm border-[#D6DDEB] pl-7 outline-none focus:border-blue-500 text-[#25324B]">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="dummy">Dummy</option>
                  <option value="another">Another Option</option>
                </select>
              </div>
              <button className="bg-primary px-4 col-span-1 w-full lg:w-[87%] py-[10px] md:ml-[0.8rem] lg:ml-8 font-semibold rounded-sm text-white">
                Search my job
              </button>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-[#202430] text-sm">Popular:</span>
            <span className="text-[#202430] font-medium text-sm ml-2">Web Developer</span>
            <span className="text-[#202430] font-medium text-sm">, AI/ML Engineer</span>
            <span className="text-[#202430] font-medium text-sm">, HR</span>
            <span className="text-[#202430] font-medium text-sm">, Business Developer</span>
            <span className="text-[#202430] font-medium text-sm">, Accountant & Finance</span>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <img src="/images/person.png" alt="" className="h-[688px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
