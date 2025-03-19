import React from "react";
import {
  Business,
  Design,
  Finance,
  HR,
  HTML,
  Marketing,
  RightArrow,
  Sales,
  Tech,
} from "../ui-icons/Icons";

let categoryList = [
  {
    id: "1",
    categoryImage: <Design />,
    name: "Design",
  },
  {
    id: "2",
    categoryImage: <Sales />,
    name: "Sales",
  },
  {
    id: "3",
    categoryImage: <Marketing />,
    name: "Marketing",
  },
  {
    id: "4",
    categoryImage: <Finance />,
    name: "Finance",
  },
  {
    id: "5",
    categoryImage: <Tech />,
    name: "Technology",
  },
  {
    id: "6",
    categoryImage: <HTML />,
    name: "Engineering",
  },
  {
    id: "7",
    categoryImage: <Business />,
    name: "Business",
  },
  {
    id: "8",
    categoryImage: <HR />,
    name: "Human Resource",
  },
];

const ExploreCategory: React.FC = () => {
  return (
    <div className="px-[2rem] sm:px-[4rem] md:px-[6rem] mt-[5rem]">
      <div className="flex justify-between items-end">
        <h2 className="text-[#25324B] font-bold text-[32px] md:text-[42px]">
          Explore By <span className="text-[#26A4FF]">Category</span>
        </h2>
        <button className="text-primary underline hidden md:flex items-center">
          <span className="mr-3">Show all jobs</span> <RightArrow />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-7">
        {categoryList.map((value) => {
          return <div key={value.id} className="border px-6 h-44 flex justify-center flex-col border-stone-300">
            {value.categoryImage}
            <h6 className="mt-3 mb-1 font-semibold text-[#25324B]">{value.name}</h6>
            <span className="flex items-center text-[#7C8493]"><span className="mr-3">200 jobs available</span> <RightArrow fill='#25324B'/> </span>
          </div>;
        })}
      </div>
      <button className="text-primary underline flex md:hidden items-center">
          <span className="mr-3">Show all jobs</span> <RightArrow />
        </button>
    </div>
  );
};

export default ExploreCategory;
