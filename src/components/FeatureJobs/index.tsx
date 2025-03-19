import React from "react";

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

const FeatureJobs: React.FC = () => {
  return (
    <div className="px-[2rem] sm:px-[4rem] md:px-[6rem] mt-[6rem]">
      <h2 className="text-[#25324B] font-bold">
        Featured <span className="text-[#26A4FF]">Jobs</span>
      </h2>
      <div className="mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {featureJobsList.map((value,index) => {
            return (
              <div
                key={index}
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
    </div>
  );
};

export default FeatureJobs;
