import React from "react";
import img1 from "../../assets/superwing_home_block_1.jpg";
import img2 from "../../assets/superwing_home_block_2.jpg";
import img3 from "../../assets/superwing_home_block_3.jpg";

const Layout1 = () => {
  return (
    <div className="text-white px-4 md:px-8 lg:px-12 mt-32">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-10 text-black">
        Meet aerWing. An unmanned, eVTOL transportation fleet.
      </h1>

      <div
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center flex flex-col justify-between p-6 sm:p-10 mb-6 rounded-[30px]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-xl">
          Take your car with you, whether you are flying alone or with company.
        </p>
        <button className="rounded-full text-black bg-white px-6 py-3 font-bold w-fit mt-4 sm:mt-0">
          Discover More
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center flex justify-start rounded-[30px]"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <p className="text-xl sm:text-2xl lg:text-4xl font-medium max-w-4xl px-6 sm:px-10 py-6 sm:py-12 text-black">
            Designed for everyday interstate & intercity travel, for everyone.
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center flex justify-start rounded-[30px]"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <p className="text-xl sm:text-2xl lg:text-4xl font-medium max-w-4xl px-6 sm:px-10 py-6 sm:py-12 text-white">
            Cruise speeds of 200 km/h will reduce travel-times to minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
