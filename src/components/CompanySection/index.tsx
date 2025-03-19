import React from "react";

let companiesWeHelped = [
  {
    id: 1,
    companyImage: "/images/voda.png",
  },
  {
    id: 2,
    companyImage: "/images/intel.png",
  },
  {
    id: 3,
    companyImage: "/images/tesla.png",
  },
  {
    id: 4,
    companyImage: "/images/amd.png",
  },
  {
    id: 5,
    companyImage: "/images/talkit.png",
  },
];

const CompanySection: React.FC = () => {
  return (
    <div className="px-[2rem] sm:px-[4rem] md:px-[6rem] mt-10">
      <div className="text-[#8F9197]"> Companies we help grow</div>
      <div className="flex flex-wrap justify-normal gap-x-6 md:gap-x-0 md:justify-between items-center">
        {companiesWeHelped.map((value) => {
          return (
            <div key={value.id}>
              <img src={value.companyImage} alt="Image" className="object-contain h-24 w-24" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanySection;
