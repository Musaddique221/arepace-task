import React from "react";
import img from "../../assets/superwing_home_hero.jpg";

const Hero1 = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#333238] h-auto lg:h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center text-white py-12 lg:py-0">
        <div className="text-left px-6 md:px-10">
          <p className="font-bold text-lg md:text-xl mb-4">
            Unlocking the future of transport
          </p>
          <p className="font-bold text-4xl sm:text-6xl lg:text-8xl max-w-3xl leading-tight">
            An all-electric air mobility.
          </p>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 h-[300px] lg:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default Hero1;
