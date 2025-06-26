import React from "react";
import img1 from "../../assets/superwing_home_block_1.jpg";
import img2 from "../../assets/superwing_home_block_2.jpg";
import img3 from "../../assets/superwing_home_block_3.jpg";

const Layout2 = () => {
  return (
    <div className="text-white px-4 md:px-6 lg:px-12 mt-32">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-10 text-black">
        Meet aerWing. An unmanned, eVTOL transportation fleet.
      </h1>

      <div
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex flex-col justify-start md:justify-between p-6 md:p-10 mb-6 rounded-[30px]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-xl">
          Uses less space than an airport and are faster to deploy.
        </p>
        <button className="rounded-full text-black bg-white px-6 py-3 font-bold w-fit mt-4 md:mt-0">
          Discover More
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-start md:items-end rounded-[30px] p-6 md:p-10"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <p className="text-xl md:text-2xl lg:text-4xl font-medium max-w-4xl text-white">
            An aerDock can serve hundreds of travelers a day without waiting.
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-start md:items-end rounded-[30px] p-6 md:p-10"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <p className="text-xl md:text-2xl lg:text-4xl font-medium max-w-4xl text-white">
            From medical to cargo, A platform that moves more than just your
            car.
          </p>
        </div>
      </div>

      <div
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex flex-col justify-start md:justify-between p-6 md:p-10 mb-6 rounded-[30px] mt-8"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-xl">
          Designed to accentuate the unique aerWing take off and landing.
        </p>
        <button className="rounded-full text-black bg-white px-6 py-3 font-bold w-fit mt-4 md:mt-0">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Layout2;
