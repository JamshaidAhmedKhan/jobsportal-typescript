import React from "react";
import { CompanyLogo } from "../ui-icons/Icons";
import { Link } from "react-router-dom";

const index: React.FC = () => {
  return (
    <>
      <div className="px-[6rem] flex justify-between items-center fixed w-full py-[15px] top-0 bg-[#f8f8fd8a] z-50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 mr-5 cursor-pointer">
            <CompanyLogo />
            <h6 className="font-semibold">JobHuntly</h6>
          </div>
          <button className="font-14 text-[#515B6F]">Find Jobs</button>
          <button className="font-14 text-[#515B6F] ml-1">
            Browse Companies
          </button>
        </div>
        <div>
          <button className="text-primary font-semibold mr-10">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-primary px-4 py-2 font-semibold rounded-sm text-white">
            <Link to="signup">Sign up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
