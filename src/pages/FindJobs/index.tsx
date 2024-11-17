import React from "react";
import { Search, Location } from "../../components/ui-icons/Icons";

let featureJobsList = [
  {
    id: 1,
    image: "/images/dummyfeature/1.png",
    title: "Email Marketing",
    company: "Revolt",
    location: "Madraid, USA",
    description: "Revolt is looking for brand designer",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 2,
    image: "/images/dummyfeature/2.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 3,
    image: "/images/dummyfeature/3.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 4,
    image: "/images/dummyfeature/4.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 5,
    image: "/images/dummyfeature/5.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 6,
    image: "/images/dummyfeature/6.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 7,
    image: "/images/dummyfeature/7.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
  {
    id: 8,
    image: "/images/dummyfeature/8.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "Madraid, USA",
    description: "Revolt is looking for",
    keywords: ["Design", "Marketing"],
  },
];

const FindJobs: React.FC = () => {
  return (
    <div className="px-[6rem] mt-10">
      <h2 className="font-semibold">
        Find Your Favorite Job Today! Explore Now
      </h2>
      <div className="mt-10 z-10 w-full relative">
        <div className="bg-white py-[14px] w-full px-3 grid grid-cols-5 rounded-md shadow-md border-2 shadow-slate-100">
          <div className="flex relative ml-3 mr-3 col-span-2">
            <span className="absolute bottom-2 left-3">
              <Search width="20px" />
            </span>
            <input
              type="text"
              className="border-2 border-[#D6DDEB] w-full py-[2px] rounded-sm pl-10 outline-none focus:border-blue-500 text-sm text-[#25324B]"
              placeholder="Job title"
            />
          </div>
          <div className="flex relative ml-5 col-span-2">
            <div className="absolute bottom-2 left-3">
              <Location width="20px" />
            </div>
            <select className="border-2 w-full text-sm border-[#D6DDEB] rounded-sm pl-10 pr-5 outline-none focus:border-blue-500 text-[#25324B]">
              <option value="" disabled>
                Select an option
              </option>
              <option value="dummy">Dummy</option>
              <option value="another">Another Option</option>
            </select>
          </div>
          <button className="bg-primary px-4 col-span-1 py-[10px] ml-8 font-semibold rounded-sm text-white">
            Find Job
          </button>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-4 gap-7">
          {featureJobsList.map((value) => {
            return (
              <div
                key={value.id}
                className="border px-6 py-8 flex justify-center flex-col border-stone-300"
              >
                <div className="flex justify-between items-center">
                  <img src={value.image} alt="" className="h-[50px]" />
                  <button className=" border border-primary text-primary px-3 py-1 rounded-sm">
                    Full time
                  </button>
                </div>
                <h6 className="font-semibold">{value.title}</h6>
                <div className="flex">
                  <span className="inline font-14">{value.company} - </span>
                  <span className="inline font-14">{value.location}</span>
                </div>
                <div className="mt-3">{value.description}</div>
                <div className="mt-2">
                  {value?.keywords &&
                    value?.keywords.map((nestValue) => {
                      return (
                        <span className="rounded-lg font-12 bg-slate-400 px-3 mr-1 py-1 text-black">
                          {nestValue}
                        </span>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center my-[5rem]">
        <button className="bg-primary px-4 py-2 font-semibold rounded-sm text-white">
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default FindJobs;
