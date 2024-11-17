import React from 'react'
import { RightArrow } from '../ui-icons/Icons'

let latestJobsList = [
    {
      id: 1,
      image: "/images/latestjobs/1.png",
      title: "Email Marketing",
      company: "Revolt",
      location: "Madraid, USA",
      description: "Revolt is looking for brand designer",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 2,
      image: "/images/latestjobs/2.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 3,
      image: "/images/latestjobs/3.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 4,
      image: "/images/latestjobs/4.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 5,
      image: "/images/latestjobs/5.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 6,
      image: "/images/latestjobs/6.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 7,
      image: "/images/latestjobs/7.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
    {
      id: 8,
      image: "/images/latestjobs/8.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "Madraid, USA",
      description: "Revolt is looking for",
      keywords: ["Design", "Marketing"],
    },
  ];

const LatestOpening: React.FC = () => {
  return (
    <div className="bg-[url('/images/BG.png')] min-h-[900px] w-full bg-no-repeat bg-cover mt-[6rem]">
      <div className="bg-[url('/images/PatternDown.png')] min-h-[900px] w-full bg-no-repeat bg-[100%_0] bg-size-hero">
      <div className='px-[6rem] pt-[4rem]'>
      <div className="flex justify-between items-end">
        <h2 className="text-[#25324B] font-bold">
          Explore By <span className="text-[#26A4FF]">Category</span>
        </h2>
        <button className="text-primary underline flex items-center">
          <span className="mr-3">Show all jobs</span> <RightArrow />
        </button>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-7">
          {latestJobsList.map((value) => {
            return (
              <div
                key={value.id}
                className="px-6 py-8 flex items-center rounded-md shadow-md shadow-slate-100 bg-white"
              >
                <img src={value.image} alt="" className="h-[50px]" />
                <div className="ml-5">
                <h6 className="font-semibold">{value.title}</h6>
                <div className="flex">
                  <span className="inline font-14">{value.company} - </span>
                  <span className="inline font-14">{value.location}</span>
                </div>
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
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LatestOpening