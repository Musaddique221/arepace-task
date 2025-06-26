import React from "react";

const TopHeader = () => {
  return (
    <div className="px-4 py-4 bg-[#323237]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-6xl mx-auto gap-2">
        <p className="text-[#59595c] text-md font-medium text-center sm:text-left">
          aerpace is a listed company on BSE Market.
        </p>
        <a className="text-blue-700 font-bold text-center sm:text-right cursor-pointer">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
