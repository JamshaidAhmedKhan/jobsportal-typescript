import React from "react";

const JoinNow: React.FC = () => {
  return (
    <div className="px-[6rem] bg-[url('/images/frame.png')] h-[460px] bg-contain bg-center bg-no-repeat mt-[4rem] mb-8">
      <div className="grid grid-cols-2 items-center h-full px-[6rem]">
       <div>
       <h2 className="font-40 font-bold text-white">Start posting jobs</h2>
        <h2 className="font-40 font-bold text-white">from today</h2>
        <div className="mb-7 mt-5 text-white">Join <span className="font-semibold">JobHuntly</span> To Find Your Best Candidate! </div>
        <button className="bg-white px-4 py-2 font-semibold rounded-sm text-primary">
          Sign Up For Free
        </button>
       </div>
       <div>
        <img src="/images/posttoday.png" alt="" />
       </div>
      </div>
    </div>
  );
};

export default JoinNow;
