import React from "react";
import { CompanyLogo } from "../ui-icons/Icons";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#202430] px-[2rem] sm:px-[4rem] md:px-[6rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-[5rem] gap-[1.5rem] lg:gap-[3rem] pb-[2.5rem] border-b border-[#8F9197]">
        <div>
          <div className="flex gap-1.5 mr-5 mb-10 cursor-pointer">
            <CompanyLogo />
            <h6 className="font-semibold text-[#D6DDEB]">JobHuntly</h6>
          </div>
          <div className="text-[#D6DDEB] font-16">
            Great platform for the job seeker that{" "}
          </div>
          <div className="text-[#D6DDEB] font-16">
            passionate about startups. Find your dream job
          </div>
          <div className="text-[#D6DDEB] font-16">easier.</div>
        </div>
        <div className="flex justify-between mr-8">
          <div className="flex flex-col justify-start items-start">
            <h6 className="font-semibold text-[#D6DDEB]">About</h6>
            <button className="mt-6 mb-[14px] text-[#D6DDEB]">Companies</button>
            <button className="my-[14px] text-[#D6DDEB]">Pricing</button>
            <button className="my-[14px] text-[#D6DDEB]">Terms</button>
            <button className="my-[14px] text-[#D6DDEB]">Advice</button>
            <button className="my-[14px] text-[#D6DDEB]">Privacy Policy</button>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h6 className="font-semibold text-[#D6DDEB]">Resources</h6>
            <button className="mt-6 mb-[14px] text-[#D6DDEB]">Help Docs</button>
            <button className="my-[14px] text-[#D6DDEB]">Guide</button>
            <button className="my-[14px] text-[#D6DDEB]">Updates</button>
            <button className="my-[14px] text-[#D6DDEB]">Contact Us</button>
          </div>
        </div>
        <div className="lg:ml-7">
          <h6 className="font-semibold text-[#D6DDEB]">
            Get Jobs Notifications
          </h6>
          <div className="text-[#D6DDEB] font-16 mt-6">
            The latest job news, articles, sent to
          </div>
          <div className="text-[#D6DDEB] font-16">your inbox weekly.</div>
          <div className="flex items-center mt-8">
            <input
              type="text"
              placeholder="Enter text here"
              className="bg-white border border-gray-300 rounded-sm px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[200px] xl:w-64"
            />
            <button className="bg-primary px-4 py-3 ml-3 font-semibold rounded-sm text-white">Subscribe</button>

          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-center gap-y-2 sm:justify-between items-center py-[2.8rem]">
       <span className="font-18 text-[#8F9197] font-semibold">2024 @ JobHuntly. All right reserved.</span>
       <div className="flex">
        <img src="/images/Facebook.png" alt="" className="h-9 md:h-12 mx-2" />
        <img src="/images/Instagram.png" alt="" className="h-9 md:h-12 mx-2" />
        <img src="/images/Dribbble.png" alt="" className="h-9 md:h-12 mx-2" />
        <img src="/images/LinkedIn.png" alt="" className="h-9 md:h-12 mx-2" />
        <img src="/images/Twitter.png" alt="" className="h-9 md:h-12 mx-2" />

       </div>
      </div>
    </div>
  );
};

export default Footer;
