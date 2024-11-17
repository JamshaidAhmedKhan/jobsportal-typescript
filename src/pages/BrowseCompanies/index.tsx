import React from "react";
import { Search, Location } from "../../components/ui-icons/Icons";

const companies = [
  {
    id: 1,
    companyName: "Tech Innovators",
    description: "Leading the way in cutting-edge technology solutions.",
    keywords: ["Software Development", "AI", "Cloud Computing"],
    location: "San Francisco, CA",
    logo: "https://via.placeholder.com/150?text=Tech+Innovators",
  },
  {
    id: 2,
    companyName: "Creative Studios",
    description: "Transforming ideas into visually stunning designs.",
    keywords: ["Graphic Design", "Animation", "Branding"],
    location: "New York, NY",
    logo: "https://via.placeholder.com/150?text=Creative+Studios",
  },
  {
    id: 3,
    companyName: "Health Sync",
    description: "Empowering healthcare through technology.",
    keywords: ["Healthcare", "AI", "Telemedicine"],
    location: "Austin, TX",
    logo: "https://via.placeholder.com/150?text=Health+Sync",
  },
  {
    id: 4,
    companyName: "Green Energy Co.",
    description: "Pioneers in renewable energy solutions.",
    keywords: ["Solar Energy", "Sustainability", "Wind Power"],
    location: "Denver, CO",
    logo: "https://via.placeholder.com/150?text=Green+Energy+Co.",
  },
  {
    id: 5,
    companyName: "EduWorld",
    description: "Innovating education with modern technology.",
    keywords: ["EdTech", "E-Learning", "Online Courses"],
    location: "Boston, MA",
    logo: "https://via.placeholder.com/150?text=EduWorld",
  },
  {
    id: 6,
    companyName: "FinTech Pro",
    description: "Revolutionizing finance through technology.",
    keywords: ["Finance", "Blockchain", "Data Analytics"],
    location: "Chicago, IL",
    logo: "https://via.placeholder.com/150?text=FinTech+Pro",
  },
  {
    id: 7,
    companyName: "NextGen Robotics",
    description: "Building the robots of tomorrow.",
    keywords: ["Robotics", "Automation", "AI"],
    location: "Seattle, WA",
    logo: "https://via.placeholder.com/150?text=NextGen+Robotics",
  },
  {
    id: 8,
    companyName: "Urban Builders",
    description: "Constructing a better future for urban living.",
    keywords: ["Construction", "Architecture", "Urban Planning"],
    location: "Los Angeles, CA",
    logo: "https://via.placeholder.com/150?text=Urban+Builders",
  },
  {
    id: 9,
    companyName: "Travel Connect",
    description: "Connecting travelers with unforgettable experiences.",
    keywords: ["Travel", "Hospitality", "Tourism"],
    location: "Miami, FL",
    logo: "https://via.placeholder.com/150?text=Travel+Connect",
  },
  {
    id: 10,
    companyName: "AgriTech Solutions",
    description: "Empowering farmers with smart solutions.",
    keywords: ["Agriculture", "IoT", "Sustainability"],
    location: "Phoenix, AZ",
    logo: "https://via.placeholder.com/150?text=AgriTech+Solutions",
  },
];

console.log(companies);

const BrowseCompanies: React.FC = () => {
  return (
    <div className="px-[6rem] mt-10">
      <h2 className="font-semibold">Browse Top Companies!</h2>
      <div className="mt-10 z-10 w-full relative">
        <div className="bg-white py-[14px] w-full px-3 grid grid-cols-5 rounded-md shadow-md border-2 shadow-slate-100">
          <div className="flex relative ml-3 mr-3 col-span-2">
            <span className="absolute bottom-2 left-3">
              <Search width="20px" />
            </span>
            <input
              type="text"
              className="border-2 border-[#D6DDEB] w-full py-[2px] rounded-sm pl-10 outline-none focus:border-blue-500 text-sm text-[#25324B]"
              placeholder="Company Name"
            />
          </div>
          <div className="flex relative ml-5 col-span-2">
            <div className="absolute bottom-2 left-3">
              <Location width="20px" />
            </div>
            <select className="border-2 w-full text-sm border-[#D6DDEB] rounded-sm pl-10 pr-5 outline-none focus:border-blue-500 text-[#25324B]">
              <option value="" disabled selected>
                Select location
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
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-7">
            {companies.map((value) => {
              return (
                <div
                  key={value.id}
                  className="px-6 py-8 flex items-center rounded-md shadow-md shadow-slate-100 bg-white border-2"
                >
                  <img src={value.logo} alt="" className="h-[50px]" />
                  <div className="ml-5 flex justify-between w-full items-start">
                    <div>
                      <h6 className="font-semibold">{value.companyName}</h6>
                      <div className="flex">
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
                    <button className="underline text-primary">View</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-[5rem]">
        <button className="bg-primary px-4 py-2 font-semibold rounded-sm text-white">
          Load More Companies
        </button>
      </div>
    </div>
  );
};

export default BrowseCompanies;
