import React, { useState } from "react";
import { CompanyLogo } from "../ui-icons/Icons";
import { Link } from "react-router-dom";

const index: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const handleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  return (
    <>
      <div className="px-[6rem] flex justify-between items-center fixed w-full py-[15px] top-0 bg-[#f8f8fd8a] z-50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex gap-1.5 mr-5 cursor-pointer">
            <CompanyLogo />
            <h6 className="font-semibold">JobHuntly</h6>
          </Link>
          <button className="font-14 text-[#515B6F]">
            <Link to="/findjobs">Find Jobs</Link>
          </button>
          <button className="font-14 text-[#515B6F] ml-1">
            <Link to="/browsecompanies">Browse Companies</Link>
          </button>
        </div>
        <div>
          <button className="text-primary font-semibold mr-10">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-primary px-4 py-2 font-semibold rounded-sm text-white">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
        {/* <div className="flex items-center">
          <button className="bg-primary px-4 py-2 font-semibold mr-10 rounded-sm text-white">
            <Link to="/postjobs">Post A New Job</Link>
          </button>
          <div className="relative">
            <img
              src="/images/profile.png"
              alt=""
              className="h-9 cursor-pointer border-[3px] border-primary p-1 rounded-full"
              onClick={handleProfileMenu}
            />
            {showProfileMenu && (
              <div className="bg-white shadow-lg shadow-slate-300 w-40 px-5 py-3 z-[1000px] absolute right-2 top-11 rounded-lg">
                <div className="">
                  <button className="font-semibold text-[#515B6F] font-16">
                    {" "}
                    <Link to="/profile" className="flex items-center">
                      {" "}
                      <img
                        src="/images/profile.png"
                        className="h-5"
                        alt=""
                      />{" "}
                      <span className="ml-2">Profile</span>
                    </Link>{" "}
                  </button>
                </div>
                <div className="mt-3 mb-1 border-t-2 pt-3">
                  <button className="font-semibold text-[#515B6F] font-16 flex items-center">
                    <img src="/images/logout.png" className="h-5" alt="" />
                    <span className="ml-2">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default index;
